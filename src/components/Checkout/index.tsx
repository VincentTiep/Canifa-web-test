const Checkout = () => {
  return (
    <div className="w-full ml-auto mr-auto max-w-none pl-[7.64vw] pr-[7.64vw]">
      <div className="flex flex-wrap mb-[70px] -mx-4">
        <div className="w-2/3 px-4">
          <div className="mb-4 bg-white shadow border p-5 rounded text-left">
            <h1 className="relative block mb-4 font-medium text-xl">
              Thông tin giao hàng
            </h1>
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
                placeholder="Masson Greenwood"
              />
            </div>
            <div className="mb-4 relative">
              <label className="font-semibold text-base block mb-[6px]">
                Tỉnh / Thành phố
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
                Quận / Huyện
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
                Phường / Xã
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
                Nhập địa chỉ
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
                Ghi chú
              </label>
              <input
                type="text"
                name="name"
                className="block w-full bg-white border border-slate-300 rounded h-12 font-normal text-base px-3 py-[13px] text-[#333f48] outline-0"
                placeholder="Nhập ghi chú..."
              />
            </div>
          </div>
          <div className="mb-4 bg-white shadow border p-5 rounded text-left">
            <h1 className="relative block mb-4 font-medium text-xl">
              Phương thức thanh toán
            </h1>
            <div>
              <div className="font-normal text-sm mb-4">
                <input
                  type="radio"
                  className="w-[1px] p-0 absolute -m-[1px] h-[1px] border-0 overflow-hidden whitespace-nowrap"
                />
                <span className="border-[#63b1bc] outline outline-2 outline-slate-300 py-[5px] pr-[10px] pl-[43px]">
                  Thanh toán khi nhận hàng (COD)
                </span>
              </div>
              <div className="font-normal text-sm mb-4">
                <input
                  type="radio"
                  className="w-[1px] p-0 absolute -m-[1px] h-[1px] border-0 overflow-hidden whitespace-nowrap"
                />
                <span className="border-[#63b1bc] outline outline-2 outline-slate-300 py-[5px] pr-[10px] pl-[43px]">
                  Thanh toán bằng VNPay
                </span>
              </div>
              <div className="font-normal text-sm mb-4">
                <input
                  type="radio"
                  className="w-[1px] p-0 absolute -m-[1px] h-[1px] border-0 overflow-hidden whitespace-nowrap"
                />
                <span className="border-[#63b1bc] outline outline-2 outline-slate-300 py-[5px] pr-[10px] pl-[43px]">
                  Thanh toán bằng ShopeePay
                </span>
              </div>
            </div>
          </div>
          <div className="mb-4 bg-white shadow border p-5 rounded text-left">
            <h1 className="relative block mb-4 font-medium text-xl">
              Sản phẩm
            </h1>
            <div className="flex flex-wrap whitespace-nowrap">
              <div className="mr-4">
                <img src="https://picsum.photos/100/140" alt="" />
              </div>
              <div className="mr-4">tên</div>
              <div className="mr-4">giá</div>
              <div className="mr-4">số lượng</div>
            </div>
          </div>
        </div>
        <div className="w-1/3 px-4">
          <div className="mb-4 bg-white shadow border p-5 rounded text-left">
            <h1 className="relative block mb-4 font-medium text-xl">
              Mã ưu đãi
            </h1>
          </div>
          <div className="mb-4 bg-white shadow border p-5 rounded text-left">
            <div>
              <h1 className="relative block mb-4 font-medium text-xl">
                Chi tiết đơn hàng
              </h1>
              <div>
                <span>Giá trị đơn hàng:</span>
                <span>tổng tiền</span>
              </div>
              <div>
                <span>Chiết khẩu:</span>
                <span>tổng tiền</span>
              </div>
            </div>
            <div>
              <span className="relative block mb-4 font-medium text-xl">
                Điểm KHTT
              </span>
              <span>+68</span>
            </div>
            <div>
              <div>
                <span className="relative block mb-4 font-medium text-xl">
                  Tổng tiền thanh toán:
                </span>
                <span>(Đã bao gồm thuế VAT)</span>
              </div>
              <span>+683333đ</span>
            </div>
            <button className="bg-[#da291c] border-[#da291c] w-full p-[10px] rounded text-white font-bold cursor-pointer">
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
