import { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import IsScreenLoading from '../../component/IsScreenLoading';
import c3 from "c3";
import "c3/c3.css";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function AdminStatistics() {
    const [allOrders, setAllOrders] = useState([])
    const [productStocks, setProductStocks] = useState([]);
    const [isScreenLoading, setIsScreenLoading] = useState(false);

    const checkLogin = async () => {
        try {
            await axios.post(`${baseUrl}/v2/api/user/check`)
        } catch (error) {
            alert("請登入管理員帳號")
            navigate('/adminlogin')
        }
    }
    useEffect(() => {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
            checkLogin()
        }
    }, [])

    const getAllOrder = async () => {
        setIsScreenLoading(true)
        try {
            // 先取得第 1 頁，確定 total_pages
            const firstRes = await axios.get(`${baseUrl}/v2/api/${apiPath}/admin/orders?page=1`);
            const totalPages = firstRes.data.pagination.total_pages;

            // 產生所有頁數的請求
            const requests = [];
            for (let i = 1; i <= totalPages; i++) {
                requests.push(axios.get(`${baseUrl}/v2/api/${apiPath}/admin/orders?page=${i}`));
            }

            // 使用 Promise.all() 來並行請求所有頁數
            const responses = await Promise.all(requests);

            // 設定訂單狀態（假設你有一個狀態來存放）
            setAllOrders(responses.flatMap(res => res.data.orders));
        } catch (error) {
            alert("取得訂單資料失敗" || error.response)
        } finally {
            setIsScreenLoading(false)
        }
    }

    const getAllProducts = async () => {
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/admin/products/all`);
            const products = Object.values(res.data.products)

            const stocks = products.map(product => ({
                name: product.title,
                stock: product.product_stock
            }));

            setProductStocks(stocks);
        } catch (error) {
            alert("取得所有商品數量失敗", error.response);
        }
    };

    useEffect(() => {
        getAllOrder()
        getAllProducts()
    }, [])

    //產品銷售佔比
    const categorySalesQty = allOrders.reduce((acc, order) => {
        Object.values(order.products).forEach(({ product, qty
        }) => {
            acc[product.category] = (acc[product.category] || 0) + qty;
        });
        return acc;
    }, {});

    // 產品銷售額
    const categorySales = allOrders.reduce((acc, order) => {
        Object.values(order.products).forEach(({ product, final_total
        }) => {
            const roundedTotal = Math.round(final_total);
            acc[product.category] = (acc[product.category] || 0) + roundedTotal;
        });
        return acc;
    }, {});



    const categoryQtyArray = Object.entries(categorySalesQty)
    const categoryArray = Object.entries(categorySales)
    const stocksArray = productStocks.map(({ name, stock }) => [name, stock]);

    var chart = c3.generate({
        bindto: '#chart',
        data: {
            columns: categoryQtyArray,
            type: 'pie',
        },
        pie: {
            label: {
                format: function (value, ratio, id) {
                    return value; // 直接顯示數量，不顯示百分比
                }
            }
        },
        title: {
            text: "各類別銷售數量（件）"
        }
    });

    var chart2 = c3.generate({
        bindto: '#chart2',
        data: {
            columns: categoryArray,
            type: 'pie',
        },
        pie: {
            label: {
                format: function (value, ratio, id) {
                    return value; // 直接顯示數量，不顯示百分比
                }
            }
        },
        title: {
            text: "各類別銷售總額（元）"
        }
    });

    var chart3 = c3.generate({
        bindto: '#chart3',
        data: {
            columns: stocksArray,
            type: 'bar'
        },
        bar: {
            width: {
                ratio: 1 // this makes bar width 50% of length between ticks
            }
        }
    });
    return (<>
        <h3 className="mb-5">統計檢視</h3>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">產品銷售佔比</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">產品銷售額</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">產品剩餘庫存</button>
            </li>
        </ul>
        <div className="tab-content mt-8" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div id="chart"></div>
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><div id="chart2"></div></div>
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><div id="chart3"></div></div>
        </div>
        <IsScreenLoading isScreenLoading={isScreenLoading} />
    </>
    )
}

export default AdminStatistics;