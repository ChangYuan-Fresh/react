import { useState, useEffect } from "react";


function PaginationCompo({ pageInfo, btnChangePage }) {
    const [currentPage, setCurrentPage] = useState(pageInfo.current_page);

    // 只在 pageInfo 初始化時設置頁面
    useEffect(() => {
        setCurrentPage(pageInfo.current_page);
    }, [pageInfo.current_page]); // 監控 pageInfo.current_page 變動

    const handlePageChange = (page) => {
        setCurrentPage(page); // 更新本地頁數狀態
        btnChangePage(page);  // 呼叫父層的函式來改變頁數
    };

    return (
        <div className="d-flex justify-content-center">
            <nav>
                <ul className={`pagination ${pageInfo.total_pages <= 1 && 'd-none'} justify-content-center mb-5 mt-lg-4 mt-0 border-0 allProduct-pagination`}>
                    <li className={`page-item ${!pageInfo.has_pre && 'disabled'} allProduct-pagination-back`}>
                        <button className="page-link border-0 bg-transparent d-flex justify-content-center align-items-center allProduct-pagination-linkSize" type="button" onClick={(e) => {
                            e.preventDefault();
                            if (currentPage > 1) {
                                handlePageChange(currentPage - 1);
                            }
                        }}><span className="material-symbols-outlined text-primary">
                                chevron_left
                            </span></button>
                    </li>
                    {Array.from({ length: pageInfo.total_pages }).map((item, index) => (
                        <li className={`page-item ${pageInfo.current_page === index + 1 && 'active'} allProduct-pagination-number`} key={index}>
                            <button className="page-link border-0 fs-5 fw-bold rounded-3 d-flex justify-content-center align-items-center allProduct-pagination-linkSize" type="button" onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(index + 1)
                            }}>{index + 1}</button>
                        </li>))}

                    <li className={`page-item ${!pageInfo.has_next && 'disabled'} allProduct-pagination-forward`}>
                        <button className="page-link border-0 bg-transparent d-flex justify-content-center align-items-center allProduct-pagination-linkSize" type="button" onClick={(e) => {
                            e.preventDefault();
                            if (currentPage < pageInfo.total_pages) {
                                handlePageChange(currentPage + 1);
                            }
                        }}><span className="material-symbols-outlined text-primary">
                                chevron_right
                            </span></button>
                    </li>
                </ul>
            </nav>
        </div>)
}

export default PaginationCompo