import { CallCalling, Clock, Location } from "iconsax-react";
import dataposition from "../../data/dataposition.json";

const Map = () => {
  return (
    <div className="w-full ml-auto mr-auto max-w-none pl-[7.64vw] pr-[7.64vw]">
      <div className="bg-[url('src/assets/store1.png')] min-h-[200px] relative p-8 text-white bg-center bg-no-repeat bg-cover font-normal text-xl flex items-center mt-6 mb-8">
        <div className="flex w-full">
          <div className="font-bold text-7xl mr-8 whitespace-nowrap">110</div>
          <div className="text-2xl text-left">
            <h1 className="font-bold mb-2">Hệ thống cửa hàng trên toàn quốc</h1>
            Canifa hướng đến mục tiêu mang lại niềm vui mặc mới mỗi ngày cho
            hàng triệu người tiêu dùng Việt. Chúng tôi tin rằng người dân Việt
            Nam cũng đang hướng đến một cuộc sống năng động, tích cực hơn.
          </div>
        </div>
      </div>
      <div className="mb-8 flex bg-white rounded-sm overflow-hidden shadow">
        <div className="h-[756px] w-[41.5%] bg-white px-8 py-[39px]">
          <div className="font-bold mb-6 text-2xl text-left">
            Tìm kiếm cửa hàng
          </div>
          {dataposition.map((x) => (
            <div className="overflow-y-auto -mr-8 pr-8 max-h-[554px]">
              <div className="border font-normal text-sm p-2 cursor-pointer relative rounded-sm mb-5 text-start">
                <h3 className="block font-bold mb-3 text-xl">{x.name}</h3>
                <div className="block mb-3 flex justify-items-center">
                  <Location size="20" color="#cbd5e1" className="mr-4" />
                  {x.address}
                </div>
                <div className="flex mb-3 flex justify-items-center">
                  <Clock size="20" color="#cbd5e1" className="mr-4" />
                  <span className="mr-4">{x.timeOpen}</span>
                  {new Date().getHours() > 22 && new Date().getHours() < 9 ? (
                    <>
                      <span className="bg-[rgba(99,177,188,.2)] text-[#63b1bc] px-4 py-0.5">
                        Đang mở
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="bg-red-400/[0.5] text-[#f73e05] px-4 py-0.5">
                        Đã đóng cửa
                      </span>
                    </>
                  )}
                </div>
                <div className="block mb-3 flex justify-items-center">
                  <CallCalling size="20" color="#cbd5e1" className="mr-4" />
                  {x.phoneNumber}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="h-[756px] w-[58.5%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29751.0321820419!2d105.83012066293239!3d21.236645337814608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1695973998792!5m2!1sen!2s"
            className="h-[756px] w-full"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="bg-white rounded-sm shadow px-8 py-[39px] mb-8 text-left">
        <h2 className="font-bold text-2xl mb-10">Hệ thống cửa hàng</h2>
        <div className="flex flex-wrap -mx-4">hiển thị ở đây</div>
      </div>
      <div className="bg-white rounded-sm shadow px-8 py-[39px] mb-8 text-left">
        <h2 className="font-bold text-2xl mb-10">Cửa hàng nổi bật</h2>
        <div className="flex mx-2">
          <div className="w-1/3 px-2 mb-8 font-medium text-base">
            <div className="mb-[30px]">
              <img
                src="src/assets/NVC.png"
                alt=""
                className="block w-full max-w-full"
              />
            </div>
            <div className="font-bold text-lg mb-[10px]">
              DEMO 111 Nguyễn Văn Cừ
            </div>
            <div className="font-normal text-base">111 Đường Nguyễn Văn Cừ</div>
            <div className="font-normal text-base">ĐT: 024 xxx xxxx</div>
            <div className="font-normal text-base">
              Giờ mở cửa: 09:00 - 22:00
            </div>
          </div>

          <div className="w-1/3 px-2 mb-8 font-medium text-base">
            <div className="mb-[30px]">
              <img
                src="src/assets/NVC.png"
                alt=""
                className="block w-full max-w-full"
              />
            </div>
            <div className="font-bold text-lg mb-[10px]">
              DEMO 111-112 Chùa Bộc
            </div>
            <div className="font-normal text-base">111-112 Chùa Bộc</div>
            <div className="font-normal text-base">ĐT: 024 xxx xxxx</div>
            <div className="font-normal text-base">
              Giờ mở cửa: 09:00 - 22:00
            </div>
          </div>
          <div className="w-1/3 px-2 mb-8 font-medium text-base">
            <div className="mb-[30px]">
              <img
                src="src/assets/NVC.png"
                alt=""
                className="block w-full max-w-full"
              />
            </div>
            <div className="font-bold text-lg mb-[10px]">
              DEMO 111-112 Giảng Võ
            </div>
            <div className="font-normal text-base">111-112 Giảng Võ</div>
            <div className="font-normal text-base">ĐT: 024 xxx xxxx</div>
            <div className="font-normal text-base">
              Giờ mở cửa: 09:00 - 22:00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
