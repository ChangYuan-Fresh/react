function Pagination({pageInfo, btnChangePage}) {
    
    return (
        <div className="d-flex justify-content-center">
            <nav>
                <ul className={`pagination ${pageInfo.total_pages <= 1 && 'd-none'} justify-content-center mb-5 mt-lg-4 mt-0 border-0 allProduct-pagination`}>
                    <li className={`page-item ${!pageInfo.has_pre && 'disabled'} allProduct-pagination-back`}>
                        <a className="page-link border-0 bg-transparent d-flex justify-content-center align-items-center allProduct-pagination-linkSize" href="#" onClick={(e) => {
                            e.preventDefault();
                            btnChangePage(pageInfo.current_page - 1)}}><span className="material-symbols-outlined text-primary">
                            chevron_left
                            </span></a>
                    </li>
                    {Array.from({ length: pageInfo.total_pages }).map((item, index) => (
                        <li className={`page-item ${pageInfo.current_page === index + 1 && 'active'} allProduct-pagination-number`} key={index}>
                            <a className="page-link border-0 fs-5 fw-bold rounded-3 d-flex justify-content-center align-items-center allProduct-pagination-linkSize" href="#" onClick={(e) => {
                                e.preventDefault();
                                btnChangePage(index + 1)}}>{index + 1}</a>
                        </li>))}

                    <li className={`page-item ${!pageInfo.has_next && 'disabled'} allProduct-pagination-forward`}>
                        <a className="page-link border-0 bg-transparent d-flex justify-content-center align-items-center allProduct-pagination-linkSize" href="#" onClick={(e) => {
                            e.preventDefault();
                            btnChangePage(pageInfo.current_page + 1)}}><span className="material-symbols-outlined text-primary">
                            chevron_right
                            </span></a>
                    </li>
                </ul>
            </nav>
        </div>)
}

export default Pagination