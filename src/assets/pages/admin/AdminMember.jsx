function AdminMember() {
  return (
    <>
      <div className="container  rounded-3 py-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between mb-6">
              <h3>會員管理</h3>
            </div>
            <div className="bg-white  rounded-3">
              {/* 電腦版 */}
              <table className="table d-none d-sm-table rounded-3">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="bg-secondary-200 text-gray text-nowrap fs-7"
                    >
                      會員編號
                    </th>
                    <th scope="col" className="bg-secondary-200 text-gray fs-7">
                      姓名
                    </th>
                    <th
                      scope="col"
                      className="bg-secondary-200 text-gray fs-7"
                    ></th>
                    <th scope="col" className="bg-secondary-200 text-gray fs-7">
                      帳號
                    </th>
                    <th
                      scope="col"
                      className="bg-secondary-200 text-gray text-center fs-7"
                    >
                      電話
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row" className="fw-normal text-nowrap">
                      CF2024005
                    </td>
                    <td>
                      <img
                        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="rounded-3"
                        style={{
                          width: '60px',
                          height: '60px',
                          objectFit: 'cover',
                        }}
                      />
                    </td>
                    <td>李小美</td>
                    <td className="text-accent text-nowrap">
                      lily0000@gmail.com
                    </td>
                    <td className="text-center text-gray fw-normal">
                      0987654000
                    </td>
                  </tr>
                  <tr>
                    <td scope="row" className="fw-normal text-nowrap">
                      CF2024004
                    </td>
                    <td>
                      <img
                        src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="rounded-3"
                        style={{
                          width: '60px',
                          height: '60px',
                          objectFit: 'cover',
                        }}
                      />
                    </td>
                    <td>王曉明</td>
                    <td className="text-accent text-nowrap">
                      ming001@gmail.com
                    </td>
                    <td className="text-center text-gray fw-normal">
                      0987358543
                    </td>
                  </tr>
                  <tr>
                    <td scope="row" className="fw-normal text-nowrap">
                      CF2024003
                    </td>
                    <td>
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="rounded-3"
                        style={{
                          width: '60px',
                          height: '60px',
                          objectFit: 'cover',
                        }}
                      />
                    </td>
                    <td>漂亮阿姨</td>
                    <td className="text-accent text-nowrap">
                      auntie38@gmail.com
                    </td>
                    <td className="text-center text-gray fw-normal">
                      0987654338
                    </td>
                  </tr>
                  <tr>
                    <td scope="row" className="fw-normal text-nowrap">
                      CF2024002
                    </td>
                    <td>
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="rounded-3"
                        style={{
                          width: '60px',
                          height: '60px',
                          objectFit: 'cover',
                        }}
                      />
                    </td>
                    <td>周傑倫</td>
                    <td className="text-accent text-nowrap">
                      jay001@gmail.com
                    </td>
                    <td className="text-center text-gray fw-normal">
                      0981234544
                    </td>
                  </tr>
                  <tr>
                    <td scope="row" className="fw-normal text-nowrap">
                      CF2024001
                    </td>
                    <td>
                      <img
                        src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=3115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="rounded-3"
                        style={{
                          width: '60px',
                          height: '60px',
                          objectFit: 'cover',
                        }}
                      />
                    </td>
                    <td>戴小穎</td>
                    <td className="text-accent text-nowrap">
                      asd456@gmail.com
                    </td>
                    <td className="text-center text-gray fw-normal">
                      0987654321
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* 手機版 */}
              <table className="table table-bordered d-sm-none">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="bg-secondary-200 text-gray text-nowrap fs-7"
                    >
                      會員資料
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <div className="d-flex flex-column align-items-start">
                      <td className="fs-5 fw-normal">CF2024005</td>
                      <div className="d-flex mt-3">
                        <td>
                          <img
                            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="rounded-3"
                            style={{
                              width: '60px',
                              height: '60px',
                              objectFit: 'cover',
                            }}
                            alt=""
                          />
                        </td>
                        <div className="d-flex flex-column ms-3">
                          <td>李小美</td>
                          <td className="text-accent">lily0000@gmail.com</td>
                          <td className="text-gray fw-normal">0987654000</td>
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div className="d-flex flex-column align-items-start">
                      <td className="fs-5 fw-normal">CF2024004</td>
                      <div className="d-flex mt-3">
                        <td>
                          <img
                            src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="rounded-3"
                            style={{
                              width: '60px',
                              height: '60px',
                              objectFit: 'cover',
                            }}
                            alt=""
                          />
                        </td>
                        <div className="d-flex flex-column ms-3">
                          <td>王曉明</td>
                          <td className="text-accent">ming001@gmail.com</td>
                          <td className="text-gray fw-normal">0987358543</td>
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div className="d-flex flex-column align-items-start">
                      <td className="fs-5 fw-normal">CF2024003</td>
                      <div className="d-flex mt-3">
                        <td>
                          <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="rounded-3"
                            style={{
                              width: '60px',
                              height: '60px',
                              objectFit: 'cover',
                            }}
                            alt=""
                          />
                        </td>
                        <div className="d-flex flex-column ms-3">
                          <td>漂亮阿姨</td>
                          <td className="text-accent">auntie38@gmail.com</td>
                          <td className="text-gray fw-normal">0987654338</td>
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div className="d-flex flex-column align-items-start">
                      <td className="fs-5 fw-normal">CF2024002</td>
                      <div className="d-flex mt-3">
                        <td>
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="rounded-3"
                            style={{
                              width: '60px',
                              height: '60px',
                              objectFit: 'cover',
                            }}
                            alt=""
                          />
                        </td>
                        <div className="d-flex flex-column ms-3">
                          <td>周傑倫</td>
                          <td className="text-accent">jay001@gmail.com</td>
                          <td className="text-gray fw-normal">0981234544</td>
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div className="d-flex flex-column align-items-start">
                      <td className="fs-5 fw-normal">CF2024001</td>
                      <div className="d-flex mt-3">
                        <td>
                          <img
                            src="http://localhost:5173/images/cat.jpg"
                            className="rounded-3"
                            style={{
                              width: '60px',
                              height: '60px',
                              objectFit: 'cover',
                            }}
                            alt=""
                          />
                        </td>
                        <div className="d-flex flex-column ms-3">
                          <td>戴小穎</td>
                          <td className="text-accent">asd456@gmail.com</td>
                          <td className="text-gray fw-normal">0987654321</td>
                        </div>
                      </div>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminMember;
