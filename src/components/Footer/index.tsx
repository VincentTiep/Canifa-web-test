import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div>
      <div className="bg-zinc-50 rounded pt-[28px] pb-[33px] text-slate-700">
        <div className="w-full ml-[auto] mr-[auto] max-w-none pl-[7.64vw] pr-[7.64vw]">
          <p className="font-bold text-3xl mb-4 text-center">
            Đăng ký nhận bản tin
          </p>
          <div className="text-center text-2xl font-normal text-slate-800/[0.5]">
            Cùng Canifa Blog cập nhật những thông tin mới nhất về thời trang và
            phong cách sống.
          </div>
          <div className="relative max-w-[592px] mt-10 mb-7 ml-[auto] mr-[auto]">
            <input
              type="email"
              placeholder="Nhập email đăng ký của bạn"
              className="block w-full bg-white border border-[#e6e7e8] h-12 font-normal pt-[11px] pr-[180px] pb-[11px] pl-[21px] text-base text-[#333f48]"
            />
            <button className="bg-[#da291c] w-[173px] h-12 text-white absolute right-0 bottom-0 font-bold rounded-r-sm border-0 outline-0 text-sm text-white">
              Đăng ký
            </button>
          </div>
          <div className="flex items-center justify-center">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="p-1.5 bg-white rounded block h-8 w-8 mr-4 ml-4 bg-center bg-no-repeat shadow-[0_0.5px_2px_rgba(96,97,112,.16)]"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="p-1.5 bg-white rounded block h-8 w-8 mr-4 ml-4 bg-center bg-no-repeat shadow-[0_0.5px_2px_rgba(96,97,112,.16)]"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="p-1.5 bg-white rounded block h-8 w-8 mr-4 ml-4 bg-center bg-no-repeat shadow-[0_0.5px_2px_rgba(96,97,112,.16)]"
            />
            <FontAwesomeIcon
              icon={faTiktok}
              className="p-1.5 bg-white rounded block h-8 w-8 mr-4 ml-4 bg-center bg-no-repeat shadow-[0_0.5px_2px_rgba(96,97,112,.16)]"
            />
          </div>
        </div>
      </div>
      <div className="bg-white font-medium text-base border-t border-[#e6e7e8]">
        <div className="w-full ml-[auto] mr-[auto] max-w-none pl-[7.64vw] pr-[7.64vw] pt-[30px] pb-[34px]">
          <div className="flex flex-wrap mr-[-16px] ml-[-16px] mb-8">
            <div className="font-normal text-left pl-4 pr-4">
              <h3 className="block mb-[23px] font-bold text-sm uppercase">
                CÔNG TY CỔ PHẦN CANIFA
              </h3>
              <p className="m-0 max-w-xs ">
                Số ĐKKD: 0107574310, ngày cấp: 23/09/2016, Nơi cấp: Sở Kế hoạch
                và đầu tư Hà Nội
              </p>
              <p className="m-0 max-w-xs">
                Địa chỉ trụ sở tại số 688 Đường Quang Trung, Phường La Khê, Quận
                Hà Đông, Thành phố Hà Nội.
              </p>
              <p className="m-0 max-w-xs">
                Địa chỉ liên hệ: P301, tầng 3, tòa nhà GP Invest, số 170 La
                Thành, Phường Ô Chợ Dừa, Quận Đống Đa, Thành Phố Hà Nội.
              </p>
              <p className="m-0 max-w-xs">Điện thoại: +8424 - 7303.0222</p>
              <p className="m-0 max-w-xs">Fax: +8424 - 6277.6419</p>
              <p className="m-0 max-w-xs">Email: hello@canifa.com</p>
              <div className="flex flex-wrap mt-5 item-center">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="p-1 bg-white rounded block h-6 w-6 mr-2 ml-2 bg-center bg-no-repeat shadow-[0_0.5px_2px_rgba(96,97,112,.16)]"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="p-1 bg-white rounded block h-6 w-6 mr-2 ml-2 bg-center bg-no-repeat shadow-[0_0.5px_2px_rgba(96,97,112,.16)]"
                />
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="p-1 bg-white rounded block h-6 w-6 mr-2 ml-2 bg-center bg-no-repeat shadow-[0_0.5px_2px_rgba(96,97,112,.16)]"
                />
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="p-1 bg-white rounded block h-6 w-6 mr-2 ml-2 bg-center bg-no-repeat shadow-[0_0.5px_2px_rgba(96,97,112,.16)]"
                />
              </div>
            </div>
            <div className="font-normal text-left pl-4 pr-4">
              <h3 className="block mb-[23px] font-bold text-sm uppercase">
                THƯƠNG HIỆU
              </h3>
              <ul className="p-0 m-0 list-none">
                <li className="mb-3 cursor-pointer hover:text-red-500">
                  Giới thiệu
                </li>
                <li className="mb-3 cursor-pointer hover:text-red-500">
                  Tin tức
                </li>
                <li className="mb-3 cursor-pointer hover:text-red-500">
                  Tuyển dụng
                </li>
                <li className="mb-3 cursor-pointer hover:text-red-500">
                  Với cộng đồng
                </li>
                <li className="mb-3 cursor-pointer hover:text-red-500">
                  Hệ thống cửa hàng
                </li>
                <li className="mb-3 cursor-pointer hover:text-red-500">
                  Liên hệ
                </li>
              </ul>
            </div>

            <div className="font-normal text-left pl-4 pr-4">
              <h3 className="block mb-[23px] font-bold text-sm uppercase">
                HỖ TRỢ
              </h3>
              <ul className="p-0 m-0 list-none">
                <li className="mb-3 cursor-pointer hover:text-red-500">
                  Hỏi đáp
                </li>
                <li className="mb-3 cursor-pointer hover:text-red-500">
                  Chính sách KHTT
                </li>
                <li className="mb-3 cursor-pointer hover:text-red-500">
                  Điều kiện - Điều khoản Chính sách KHTT
                </li>
                <li className="mb-3 cursor-pointer hover:text-red-500">
                  Chính sách vận chuyển
                </li>
                <li className="mb-3 cursor-pointer hover:text-red-500">
                  Gợi ý tìm size
                </li>
                <li className="mb-3 cursor-pointer hover:text-red-500">
                  Kiểm tra đơn hàng
                </li>
                <li className="mb-3 cursor-pointer hover:text-red-500">
                  Tra cứu điểm thẻ
                </li>
                <li className="mb-3 cursor-pointer hover:text-red-500">
                  Chính sách bảo mật thông tin KH
                </li>
              </ul>
            </div>
            <div>
              <div className="font-normal text-left pl-4 pr-4">
                <h3 className="block mb-[23px] font-bold text-sm uppercase">
                  TẢI ỨNG DỤNG
                </h3>
                <div className="flex mb-4">
                  <div className="w-20 h-20 ">
                    <img
                      src="./src/assets/Footer/R.jpg"
                      alt="photo1"
                      className="max-w-full block object-cover"
                    />
                  </div>
                  <div className="h-20 w-36">
                    <img
                      src="./src/assets/Footer/Google_Play_IN.jpg"
                      alt="photo2"
                      className="h-10 w-36 rounded-lg"
                    />
                    <img
                      src="./src/assets/Footer/appstoreDownload.05c2b3f0.png"
                      alt="photo3"
                      className="h-10 w-36"
                    />
                  </div>
                </div>
              </div>
              <h3 className="block mb-[23px] font-bold text-sm uppercase text-left pl-4 pr-4">
                PHƯƠNG THỨC THANH TOÁN
              </h3>
              <div className="w-56 pl-4 pr-4">
                <img
                  src="./src/assets/Footer/accepted-payment-gateways.png"
                  alt="photo4"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-[#e6e7e8] pt-[15px] font-bold text-lg flex item-center justify-between">
            <div>© 2023 CANIFA</div>
            <div className="w-28 ">
              <img
                src="src/assets/Footer/logo-da-thong-bao-bo-cong-thuong.png"
                alt="photo5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
