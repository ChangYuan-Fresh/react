import { Link } from 'react-router';
import logoWhite from '../images/200px.png';
import emailM from '../images/icon/Mail.png';
import emailS from '../images/icon/Mail-sm.png';
import fbM from '../images/icon/FB.png';
import fbS from '../images/icon/FB-sm.png';
import lineM from '../images/icon/Line.png';
import lineS from '../images/icon/Line-sm.png';

function Footer() {
  return (
    <div className="bg-secondary pt-lg-11 pt-0 pb-0 ">
      <footer className="footer py-7 py-lg-9">
        <div className="container">
          <div className="row align-items-center align-items-lg-start">
            <div className="col-lg-6 text-center text-lg-start mb-5">
              <img src={logoWhite} alt="logo" />
              <p className="fs-7 fw-normal">
                © 2024 彰源鮮味 本站僅供學習使用，不提供商業用途
              </p>
            </div>
            <div className="col-lg-3 text-center text-lg-start">
              <div className="card mb-7">
                <div className="card-header fs-5 pb-2 pb-lg-7 pt-0 fs-lg-4">
                  關於本站
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item fw-normal pb-2 pt-0 pb-lg-3 fs-lg-5">
                    <Link to="about">認識品牌</Link>
                  </li>
                  <li className="list-group-item fw-normal pb-2 pt-0 pb-lg-3 fs-lg-5">
                    <Link to="faq">常見問題</Link>
                  </li>
                  <li className="list-group-item fw-normal pb-2 pt-0 pb-lg-3 fs-lg-5">
                    <Link to="">隱私權政策</Link>
                  </li>
                  <li className="list-group-item fw-normal pb-2 pt-0 pb-lg-3 fs-lg-5">
                    <Link to="">使用者條款</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 text-center text-lg-start">
              <div className="card mb-5">
                <div className="card-header fs-5 pb-2 pb-lg-7 pt-0 fs-lg-4">
                  聯絡我們
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-center justify-content-lg-start pt-0 pb-4 pb-lg-7">
                    <Link className="me-5" to="">
                      <picture className="btn btn-white p-2">
                        <source media="(min-width: 992px)" srcSet={emailM} />
                        <img src={emailS} alt="logo" />
                      </picture>
                    </Link>
                    <Link className="me-5" to="https://www.facebook.com/">
                      <picture className="btn btn-white p-2">
                        <source media="(min-width: 992px)" srcSet={fbM} />
                        <img src={fbS} alt="logo" />
                      </picture>
                    </Link>
                    <Link to="">
                      <picture className="btn btn-white p-2">
                        <source media="(min-width: 992px)" srcSet={lineM} />
                        <img src={lineS} alt="logo" />
                      </picture>
                    </Link>
                  </li>
                  <li className="list-group-item pb-1 pb-lg-3 pt-0">
                    <span className="material-symbols-outlined align-middle me-3 fs-4 fs-lg-2">
                      call
                    </span>
                    <Link
                      className="fs-7 en-font fw-normal fs-lg-5"
                      to="tel:+886-4-8656565"
                    >
                      (04)8656565
                    </Link>
                  </li>
                  <li className="list-group-item d-flex justify-content-center py-0">
                    <span className="material-symbols-outlined align-middle me-3 fs-4 fs-lg-2">
                      location_on
                    </span>
                    <p className="fs-7 fw-normal fs-lg-5">
                      彰化縣埔鹽鄉新興村員鹿路五段123號
                    </p>
                  </li>
                </ul>
              </div>
              <div className="d-lg-none">
                <p className="fs-7 fw-normal pb-1">© 2024 彰源鮮味</p>
                <p className="fs-7 fw-normal">
                  本站僅供學習使用，不提供商業用途
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
