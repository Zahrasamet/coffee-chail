import Link from 'next/link'
import { FaCoffee, FaLeaf, FaHome, FaSmile } from 'react-icons/fa'

function About() {
  return (
    <div className="container-fluid py-5 about-section" dir="rtl" lang="fa">
      <div className="container">
        {/* عنوان بخش */}
        <div className="section-title text-center mb-5">
          <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>درباره ما</h4>
          <h1 className="display-4">کافه‌چیل، جایی برای آرامش و لذت از زندگی</h1>
        </div>

        <div className="row">
          {/* ستون اول - داستان ما */}
          <div className="col-lg-4 py-0 py-lg-5 text-start d-flex flex-column justify-content-start">
            <h1 className="mb-3">داستان ما</h1>
            <h5 className="mb-3">
              کافه‌چیل از یک عشق ساده به نوشیدنی‌های گرم و سرد آغاز شد؛  
              جایی برای فرار از شلوغی و تجربه لحظه‌های ناب.
            </h5>
            <p className="mb-4">
              در هر فنجان یا لیوان، ترکیبی از طعم، آرامش و لبخند را پیدا می‌کنید.  
              ما باور داریم نوشیدنی فقط یک طعم نیست — بلکه فرصتی برای لذت بردن از لحظه است.
            </p>
            <Link href="" className="btn btn-secondary font-weight-bold py-2 px-4 mt-auto">
              اطلاعات بیشتر
            </Link>
          </div>

          {/* ستون دوم - تصویر */}
          <div className="col-lg-4 py-0 py-lg-5 text-center">
            <img
              className="w-100 rounded-3 shadow"
              src="/images/about.png"
              alt="about"
              style={{ objectFit: "cover", maxHeight: "500px" }}
            />
          </div>

          {/* ستون سوم - ویژگی‌ها */}
          <div className="col-lg-4 py-0 py-lg-5 text-start d-flex flex-column justify-content-start">
            <h1 className="mb-3">ویژگی‌های ما</h1>
            <p className="mb-4">
              محیطی دنج، آرام و صمیمی همراه با نوشیدنی‌های با کیفیت و خدمات دوستانه.
            </p>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-3">
                <FaCoffee className="text-primary ms-2 mt-1" size={22} />
                <span>نوشیدنی‌های متنوع برای هر سلیقه</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <FaLeaf className="text-success ms-2 mt-1" size={22} />
                <span>استفاده از مواد اولیه باکیفیت و طبیعی</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <FaHome className="text-warning ms-2 mt-1" size={22} />
                <span>محیط آرام و صمیمی برای دورهمی‌ها</span>
              </li>
              <li className="d-flex align-items-start">
                <FaSmile className="text-info ms-2 mt-1" size={22} />
                <span>خدمات دوستانه و صمیمی از دل برای شما</span>
              </li>
            </ul>
            <Link href="" className="btn btn-primary font-weight-bold py-2 px-4 mt-4">
              اطلاعات بیشتر
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
