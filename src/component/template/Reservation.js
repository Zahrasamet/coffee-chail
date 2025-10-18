import { FaCheck } from "react-icons/fa";

function Reservation() {
  return (
    <div className="container-fluid my-5">
      <div className="container">
        <div className="reservation position-relative overlay-top overlay-bottom">
          <div className="row align-items-center">
            
            {/* بخش متن و ویژگی‌ها */}
            <div className="col-lg-6 my-5 my-lg-0">
              <div className="p-5 text-start">
                <div className="mb-4">
                  <h1 className="display-3 text-primary font-weight-bold ">OFF 30%</h1>
                  <h1 className="text-white">برای ثبت رزرو آنلاین</h1>
                </div>
                <p className="text-white font-weight-normal">
                  به‌راحتی میز خود را در کافه‌ چیل رزرو کنید و از فضای دل‌انگیز و منوی خاص ما لذت ببرید.
                  رزرو آنلاین تنها با چند کلیک، بدون نیاز به تماس تلفنی.
                </p>

                <ul className="list-inline text-white m-0">
                  <li className="py-2"><FaCheck className="text-primary mr-3"/> فقط چند کلیک تا رزرو میزت ☕</li>
                  <li className="py-2"><FaCheck className="text-primary mr-3"/> انتخاب زمان و جای دلخواهت</li>
                  <li className="py-2"><FaCheck className="text-primary mr-3"/> بدون معطلی و دردسر تماس</li>
                </ul>
              </div>
            </div>

            {/* بخش فرم رزرو */}
            <div className="col-lg-6">
              <div className="text-center p-5" style={{ background: 'rgba(51, 33, 29, 0.8)' }}>
                <h1 className="text-white mb-4 mt-5">رزرو آنلاین میز</h1>

                <form className="mb-5">
                  <div className="form-group">
                    <input type="text" className="form-control bg-transparent border-primary p-4" placeholder="نام" required />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control bg-transparent border-primary p-4" placeholder="ایمیل" required />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control bg-transparent border-primary p-4" placeholder="تاریخ" required />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control bg-transparent border-primary p-4" placeholder="زمان" required />
                  </div>
                  <div className="form-group">
                    <select className="custom-select bg-transparent border-primary px-4" style={{ height: '49px' }}>
                      <option selected>تعداد نفر</option>
                      <option value="1">1 نفر</option>
                      <option value="2">2 نفر</option>
                      <option value="3">3 نفر</option>
                      <option value="4">4 نفر</option>
                    </select>
                  </div>

                  <div>
                    <button className="btn btn-primary btn-block font-weight-bold py-3" type="submit">رزرو کن</button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
