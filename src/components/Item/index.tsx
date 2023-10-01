import { useSelector } from "react-redux";
import "../../App.css";
import { IRootState, TColors } from "../../types";

const Item = () => {
  //Redux
  const itemRedux = useSelector((store: IRootState) => store.selectItem);

  return (
    <div className="w-full ml-auto mr-auto max-w-none pl-[7.64vw] pr-[7.64vw]">
      <div className="flex mt-[35px] mb-[60px]">
        <div className="w-[58.5%] px-2">
          <img src="https://picsum.photos/650/600" loading="lazy" />
        </div>
        <div className="w-[33.3%] px-2 -ml-10 text-left text-lg">
          <div className="relative block mb-4 font-medium text-xl">
            {itemRedux.name}
          </div>
          <div className="relative pr-[60px] mb-4">
            <span className="font-bold mr-2">Mã sp:</span>
            <span>{itemRedux.code}</span>
          </div>
          <div className="mb-[10px] text-[#333f48] font-bold text-xl">
            {itemRedux.price.toLocaleString()} đ
          </div>
          <div className="mb-7">
            <span className="mr-2 relative font-bold">Màu sắc: </span>
            {/* <span className="font-medium">
              {itemRedux.colors.find((x: TColors) => x.isCheck === true).code}
            </span> */}
            <div className="flex flex-wrap mb-5 div-p mt-4">
              {itemRedux.colors.map((x: TColors, index: number) => (
                <p
                  key={index}
                  style={{ background: `${x.code}` }}
                  className={
                    x.isCheck === true
                      ? "active1"
                      : "h-4 w-4 mr-[10px] cursor-pointer"
                  }
                ></p>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <span className="text-left font-bold">Mô tả:</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              odit libero nemo omnis, quaerat doloribus distinctio impedit!
              Quasi sequi id est reprehenderit nesciunt ad dicta natus omnis rem
              voluptates, ipsum provident, explicabo placeat modi. Illum ratione
              cumque eveniet obcaecati assumenda?
            </p>
          </div>
          <button className="bg-[#da291c] border-[#da291c] w-2/3 p-[10px] rounded text-white font-bold cursor-pointer">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
