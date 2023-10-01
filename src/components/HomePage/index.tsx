import { ArrowUp2, Messenger, SearchNormal1 } from "iconsax-react";
import { useEffect, useState } from "react";
import Modal from "../Modal/index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchItemAction } from "../../Redux/action/listTask";
import { IRootState } from "../../types";

const HomePage = () => {
  //Thư viện
  //Redux
  const listRedux = useSelector((store: IRootState) => store.listTask);
  const dispatch = useDispatch();

  //React-dom
  const navigate = useNavigate();

  //useState
  const [isShow, setIsShow] = useState(false);
  const [search, setSearch] = useState("");

  //Function
  const handleScrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // 👇️ navigate to /Home
  const navigateToHome = () => {
    navigate("/Canifa-web-test");
  };
  // 👇️ navigate to /map
  const navigateToMap = () => {
    navigate("/Canifa-web-test/map");
  };

  // 👇️ navigate to /Account
  const navigateToAccount = () => {
    navigate("/Canifa-web-test/account");
  };

  useEffect(() => {
    dispatch(searchItemAction(search));
  }, [dispatch, search]);

  return (
    <div className="border-b sticky top-0 bg-white w-full mb-[50px] shadow-gray-300">
      <div className="top-0 w-[90%] flex flex-row justify-between items-center mt-0 mb-0 ml-10 mr-10 pt-[10px] pb-[10px]">
        <div className="nav">
          <img
            src="https://i1.wp.com/www.writefromscratch.com/wp-content/uploads/2018/12/demo-logo.png?fit=539%2C244&amp;ssl=1&amp;w=640"
            alt="Shopify"
            className="h-[30px] cursor-pointer"
            onClick={navigateToHome}
          />
        </div>
        <div className="mr-14">
          <ul className="flex item-center">
            <li className="m-0">
              <a
                href="#"
                className="block font-bold text-lg uppercase pr-4 pl-4 relative whitespace-nowrap z-100"
              >
                <span>sale</span>
              </a>
            </li>
            <li className="m-0">
              <a
                href="#"
                className="block font-bold text-lg uppercase pr-4 pl-4 relative whitespace-nowrap z-100"
              >
                <span>nữ</span>
              </a>
            </li>
            <li className="m-0">
              <a
                href="#"
                className="block font-bold text-lg uppercase pr-4 pl-4 relative whitespace-nowrap z-100"
              >
                <span>nam</span>
              </a>
            </li>
            <li className="m-0">
              <a
                href="#"
                className="block font-bold text-lg uppercase pr-4 pl-4 relative whitespace-nowrap z-100"
              >
                <span>trẻ em</span>
              </a>
            </li>
            <li className="m-0">
              <a
                href="#"
                className="block font-bold text-lg uppercase pr-4 pl-4 relative whitespace-nowrap z-100"
              >
                <span>giá tốt</span>
              </a>
            </li>
            <li className="m-0">
              <a
                href="#"
                className="block font-bold text-lg uppercase pr-4 pl-4 relative whitespace-nowrap z-100"
              >
                <span>hàng mới</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="search-and-cart">
          <div className="search">
            <span className="searchicon">
              <SearchNormal1
                className="search-img"
                size="24"
                color="#000"
                fontWeight="Bold"
              />
            </span>
            <input
              type="text"
              placeholder="Bạn đang tìm gì?"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex item-center justify-end">
            <div
              className="ml-4 text-center  block whitespace-nowrap cursor-pointer "
              onClick={navigateToMap}
            >
              <div className="bg-[url('src/assets/Header/icons8-store-24.png')] bg-no-repeat h-7 w-7 block min-w-24 mb-1 mr-auto ml-auto bg-center "></div>

              <span className="text-[#333f48]/[0.5] text-sm">Cửa hàng</span>
            </div>
            <div
              className="ml-4 text-center block whitespace-nowrap cursor-pointer"
              onClick={navigateToAccount}
            >
              <div className="bg-[url('src/assets/Header/icons8-user-circle-24.png')] bg-no-repeat h-7 w-7 block min-w-24 mb-1 mr-auto ml-auto bg-center"></div>
              <span className="text-[#333f48]/[0.5] text-sm">Tài khoản</span>
            </div>
            <span className="cart" onClick={() => setIsShow(true)}>
              <div className="ml-4 text-center block whitespace-nowrap">
                {listRedux.length === 0 ? (
                  ""
                ) : (
                  <div className="numberitem">{listRedux.length}</div>
                )}
                <div className=" bg-[url('src/assets/Header/icons8-bag-24.png')] bg-no-repeat h-7 w-7 block min-w-27 mb-1 mr-auto ml-auto bg-center cursor-pointer"></div>
                <span className="text-[#333f48]/[0.5] text-sm">Giỏ hàng</span>
                {isShow && <Modal hideModal={setIsShow} />}
              </div>
            </span>
          </div>
        </div>
      </div>

      <div className="fixed bottom-16 right-4">
        <button className="bg-current p-2 rounded-full mb-4">
          <Messenger
            size="32"
            color="#fff"
            className="rounded-full hover:rotate-[30deg]"
          />
        </button>
      </div>

      <button
        className="fixed bottom-0 right-0 h-fit w-12 bg-gray-300 m-4 font-bold text-sm rounded border-2 border-slate-400 p-0.5 text-center"
        onClick={handleScrollTop}
      >
        <ArrowUp2 size="20" color="#000" className="ml-2" />
        TOP
      </button>
    </div>
  );
};

export default HomePage;
