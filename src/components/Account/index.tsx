import {
  Card,
  Edit,
  Eye,
  Logout,
  Lovely,
  Mobile,
  ShoppingBag,
  TicketDiscount,
  UserCirlceAdd,
} from "iconsax-react";

const Account = () => {
  return (
    <div>
      <div className=" w-full mr-auto ml-auto max-w-none pl-[7.64vw] pr-[7.64vw]">
        <div className="flex justify-between mb-[70px] mt-6">
          <div className="w-[31.47%] mr-8 shadow bg-white border pt-[23px] px-5 pb-4 rounded-lg">
            <div className="text-center mb-5">
              <div className="mx-[auto] text-white uppercase text-3xl font-bold mx-[15px] items-center justify-center flex w-[60px] h-[60px] rounded-full bg-[#f48fb1] border-[2.7px] border-white shadow ">
                V
              </div>
              <div className="font-bold text-base items-center justify-center text-xl mt-4">
                <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                  Vincent Tiep
                </span>
                <div className="w-5 h-5 ml-[10px] cursor-pointer inline-block">
                  <Edit size="25" color="#FF8A65" />
                </div>
              </div>
            </div>
            <div className="bg-white mb-6 rounded-lg">
              <div className="text-white font-bold bg-blend-multiply min-h-[105px] rounded-lg px-4 py-[10px] bg-[url('src/assets/card-green.png')]">
                MASON GREENWOOD
              </div>
            </div>
            <div className="font-normal text-sm -mx-5">
              <ul className="p-0 m-0 list-none">
                <li className="flex items-center px-5 py-2 cursor-pointer rounded-sm mb-[1px]">
                  <TicketDiscount
                    size="36"
                    color="#333f48"
                    className="w-9 h-9 min-w-9 bg-[#fafafa] rounded bg-no-repeat bg-center mr-[20px]"
                  />
                  <span className="text-lg">Mã ưu đãi</span>
                </li>
                <li className="flex items-center px-5 py-2 cursor-pointer rounded-sm mb-[1px]">
                  <ShoppingBag
                    size="36"
                    color="#333f48"
                    className="w-9 h-9 min-w-9 bg-[#fafafa] rounded bg-no-repeat bg-center mr-[20px]"
                  />
                  <span className="text-lg">Đơn hàng</span>
                </li>
                <li className="flex items-center px-5 py-2 cursor-pointer rounded-sm mb-[1px]">
                  <UserCirlceAdd
                    size="36"
                    color="#333f48"
                    className="w-9 h-9 min-w-9 bg-[#fafafa] rounded bg-no-repeat bg-center mr-[20px]"
                  />
                  <span className="text-lg">C-points</span>
                </li>
                <li className="flex items-center px-5 py-2 cursor-pointer rounded-sm mb-[1px]">
                  <Card
                    size="36"
                    color="#333f48"
                    className="w-9 h-9 min-w-9 bg-[#fafafa] rounded bg-no-repeat bg-center mr-[20px]"
                  />
                  <span className="text-lg">Thẻ thành viên</span>
                </li>
                <li className="flex items-center px-5 py-2 cursor-pointer rounded-sm mb-[1px]">
                  <Mobile
                    size="36"
                    color="#333f48"
                    className="w-9 h-9 min-w-9 bg-[#fafafa] rounded bg-no-repeat bg-center mr-[20px]"
                  />
                  <span className="text-lg">Số địa chỉ</span>
                </li>
                <li className="flex items-center px-5 py-2 cursor-pointer rounded-sm mb-[1px]">
                  <Lovely
                    size="36"
                    color="#333f48"
                    className="w-9 h-9 min-w-9 bg-[#fafafa] rounded bg-no-repeat bg-center mr-[20px]"
                  />
                  <span className="text-lg">Yêu thích</span>
                </li>
                <li className="flex items-center px-5 py-2 cursor-pointer rounded-sm mb-[1px]">
                  <Eye
                    size="36"
                    color="#333f48"
                    className="w-9 h-9 min-w-9 bg-[#fafafa] rounded bg-no-repeat bg-center mr-[20px]"
                  />
                  <span className="text-lg">Đã xem gần đây</span>
                </li>
                <li className="flex items-center px-5 py-2 cursor-pointer rounded-sm mb-[1px]">
                  <Logout
                    size="36"
                    color="#333f48"
                    className="w-9 h-9 min-w-9 bg-[#fafafa] rounded bg-no-repeat bg-center mr-[20px]"
                  />
                  <span className="text-lg">Đăng xuất</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[calc(68.53%-32px)] p-5 shadow bg-white border rounded-lg">
            <div className="flex flex-wrap items-center mb-6">
              <h1 className="block font-bold m-0 text-2xl">
                Thông tin tài khoản
              </h1>
            </div>
            <div className="relative mb-[17px] text-left ">
              <div>
                <div className="mb-[27px] text-lg">
                  <div className="text-lg block mb-[5px] font-semibold">
                    Giới tính
                  </div>
                  <div className="flex flex-wrap justify-between w-1/4">
                    <div>
                      <input type="radio" name="gender" value="male" checked />
                      Nam
                    </div>
                    <div>
                      <input type="radio" name="gender" value="female" /> Nữ
                    </div>
                    <div>
                      <input type="radio" name="gender" value="Khac" /> Khác
                    </div>
                  </div>
                </div>

                <div className="mb-4 relative">
                  <label className="font-semibold text-base block mb-[6px]">
                    Họ tên
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="block w-full bg-white border border-slate-300 rounded h-12 font-normal text-base px-3 py-[13px] text-[#333f48] outline-0"
                    placeholder="Masson Greenwood"
                  />
                </div>
                <div className="mb-4 relative">
                  <label className="font-semibold text-base block mb-[6px]">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="block w-full bg-white border border-slate-300 rounded h-12 font-normal text-base px-3 py-[13px] text-[#333f48] outline-0"
                    placeholder="0900900900"
                  />
                </div>
                <div className="mb-4 relative">
                  <label className="font-semibold text-base block mb-[6px]">
                    Email
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="block w-full bg-white border border-slate-300 rounded h-12 font-normal text-base px-3 py-[13px] text-[#333f48] outline-0"
                    placeholder="massongreenwood@gmail.com"
                  />
                </div>
                <div className="mb-4 relative">
                  <label className="font-semibold text-base block mb-[6px]">
                    Sinh nhật
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="block w-full bg-white border border-slate-300 rounded h-12 font-normal text-base px-3 py-[13px] text-[#333f48] outline-0"
                    placeholder="01/10/2001"
                  />
                </div>
                <button className="cursor-pointer font-bold text-base px-3 py-[13px] w-full bg-[#da291c] border border-[#da291c] text-white inline-block rounded-sm text-center ">
                  Lưu thay đổi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
