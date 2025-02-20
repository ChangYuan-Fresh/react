function Banner({ bannerImg, title, enTitle, slogan1, slogan2 }) {
    return (<section className="mt-6 position-relative">
        <div className="allProduct-banner-mx">
            <img src={bannerImg} alt="" className="d-block w-100 allProduct-banner-img" />
            <div className="position-absolute top-50 start-50 translate-middle allProduct-banner-375size">
                <h4 className="d-inline-block bg-white py-lg-2 px-lg-4 p-2 mb-lg-4 mb-2 fs-lg-4 fs-6">
                    {title}
                    <span className="ms-lg-2 fs-lg-5 fs-6">{enTitle}</span>
                </h4>
                <br />
                <h4 className="d-block bg-primary text-white py-lg-3 px-lg-4 p-2 allProduct-banner-fs">
                    {slogan1}
                    <br className="d-lg-none d-block" />
                    <span className="pt-lg-2 text-nowrap">{slogan2}</span>
                </h4>
            </div>
            <img src="/images/Illustration/Top-Curve(2).png" alt="" className="d-block position-absolute bottom-0 start-0 allProduct-banner-mask" />
        </div>
    </section>)
}

export default Banner