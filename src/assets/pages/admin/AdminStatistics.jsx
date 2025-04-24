import { useCallback, useEffect, useState, useRef } from "react";
import axios from "axios";
import IsScreenLoading from "../../component/IsScreenLoading";
import c3 from "c3";
import "c3/c3.css";
import { useNavigate } from 'react-router';
import { useDispatch } from "react-redux";
import Toast from "../../layout/Toast";
import { createAsyncMessage } from "../../redux/slice/toastSlice";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function AdminStatistics() {
    const [allOrders, setAllOrders] = useState([]);
    const [productStocks, setProductStocks] = useState([]);
    const [isScreenLoading, setIsScreenLoading] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const chartRef1 = useRef(null);
    const chartRef2 = useRef(null);
    const chartRef3 = useRef(null);

    const checkLogin = useCallback(async () => {
        try {
            await axios.post(`${baseUrl}/v2/api/user/check`);
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message,
                type: '請登入管理員帳號',
                status: "failed"
            }))
            navigate("/adminlogin");
        }
    }, [navigate, dispatch]);

    useEffect(() => {
        const token = document.cookie.replace(
            /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
            "$1"
        );
        if (token) {
            axios.defaults.headers.common["Authorization"] = token;
            checkLogin();
        }
    }, [checkLogin]);

    const getAllOrder = useCallback(async () => {
        setIsScreenLoading(true);
        try {
            const firstRes = await axios.get(`${baseUrl}/v2/api/${apiPath}/admin/orders?page=1`);
            const totalPages = firstRes.data.pagination.total_pages;

            const requests = Array.from({ length: totalPages }, (_, i) =>
                axios.get(`${baseUrl}/v2/api/${apiPath}/admin/orders?page=${i + 1}`)
            );
            const responses = await Promise.all(requests);
            setAllOrders(responses.flatMap((res) => res.data.orders));
            dispatch(createAsyncMessage({
                text: '取得訂單資料成功',
                type: '成功',
                status: "success"
            }))
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message,
                type: '取得訂單資料失敗',
                status: "failed"
            }))
        } finally {
            setIsScreenLoading(false);
        }
    },[dispatch]);

    const getAllProducts = useCallback(async () => {
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/admin/products/all`);
            const products = Object.values(res.data.products);
            const stocks = products.map((product) => ({
                name: product.title,
                stock: product.product_stock
            }));
            setProductStocks(stocks);
            dispatch(createAsyncMessage({
                text: '取得商品數量成功',
                type: '成功',
                status: "success"
            }))
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message,
                type: '取得所有商品數量失敗',
                status: "failed"
            }))
        }
    },[dispatch]);

    useEffect(() => {
        getAllOrder();
        getAllProducts();
    }, [getAllOrder, getAllProducts]);

    useEffect(() => {
        if (allOrders.length > 0 && chartRef1.current) {
            const categorySalesQty = allOrders.reduce((acc, order) => {
                Object.values(order.products).forEach(({ product, qty }) => {
                    acc[product.category] = (acc[product.category] || 0) + qty;
                });
                return acc;
            }, {});

            const categorySales = allOrders.reduce((acc, order) => {
                Object.values(order.products).forEach(({ product, final_total }) => {
                    const roundedTotal = Math.round(final_total);
                    acc[product.category] = (acc[product.category] || 0) + roundedTotal;
                });
                return acc;
            }, {});

            const categoryQtyArray = Object.entries(categorySalesQty);
            const categoryArray = Object.entries(categorySales);
            const stocksArray = productStocks.map(({ name, stock }) => [name, stock]);

            c3.generate({
                bindto: chartRef1.current,
                data: {
                    columns: categoryQtyArray,
                    type: "pie"
                },
                title: { text: "各類別銷售數量（件）" }
            });

            c3.generate({
                bindto: chartRef2.current,
                data: {
                    columns: categoryArray,
                    type: "pie"
                },
                title: { text: "各類別銷售總額（元）" }
            });

            c3.generate({
                bindto: chartRef3.current,
                data: {
                    columns: stocksArray,
                    type: "bar"
                },
                bar: { width: { ratio: 1 } }
            });
        }
    }, [allOrders, productStocks]);

    return (
        <main className="adminstatistics">
            <h3 className="mb-5">統計商品檢視</h3>
            <ul className="nav nav-tabs d-flex justify-content-between bg-white border-0 border-bottom px-3 pt-3">
                <li className="nav-item text-center">
                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#home">
                       銷售佔比
                    </button>
                </li>
                <li className="nav-item text-center">
                    <button className="nav-link " data-bs-toggle="tab" data-bs-target="#profile">
                        銷售額
                    </button>
                </li>
                <li className="nav-item text-center">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#contact">
                        剩餘庫存
                    </button>
                </li>
            </ul>
            <div className="tab-content pt-8 p-4 bg-white">
                <div className="tab-pane fade show active" id="home">
                    <div className="py-6">
                        <div ref={chartRef1}></div>
                    </div>
                </div>
                <div className="tab-pane fade" id="profile">
                    <div className="py-6">
                        <div ref={chartRef2}></div>
                    </div>
                </div>
                <div className="tab-pane fade" id="contact">
                    <div className="py-6">
                        <div ref={chartRef3}></div>
                    </div>
                </div>
            </div>
            <IsScreenLoading isScreenLoading={isScreenLoading} />
            <Toast />
        </main>
    );
}

export default AdminStatistics;
