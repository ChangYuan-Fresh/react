import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <>
      <div className="container px-5  py-5 d-flex flex-column rounded-4 justify-content-center align-items-center">
        <img src="images/18470.png" alt="?" style={{ width: '100px' }} />
        <h1 className="text-center p-3">找不到網頁</h1>
        <Link className="card-link link-primary" to="/">
          回首頁
        </Link>
      </div>
    </>
  );
}

export default Notfound;
