import {
  ProductSection,
  ItemsDiv,
  ItemDiv,
  ImageItemDiv,
  ColorItemDiv,
  ColorIteamp,
  NameItemDiv,
  IdItemDiv,
  PriceItemDiv,
  AddItemDiv,
} from "./style.tsx";
import "../../App.css";
import { IRootState, TColors, TItemProp } from "../../types/index.ts";
import { useState } from "react";

import data from "../../data/data.json";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemAction,
  selectItemAction,
} from "../../Redux/action/listTask.ts";
import { useNavigate } from "react-router-dom";

const arrlistItem = data.map((item) => {
  return {
    ...item,
    isShowDelete: false,
    isQuantity: 0,
    colors: item.colors.map((color) => {
      return { ...color, isCheck: false };
    }),
  };
});

const arrColorCode = arrlistItem.map((item) => {
  return {
    ...item,
    colors: item.colors.map((color) =>
      item.colors.indexOf(color) === 0 ? { ...color, isCheck: true } : color
    ),
  };
});

const products = ["Men", "Women", "Boy", "Girl"];

const Products = () => {
  //Thư viện
  const searchRedux = useSelector((store: IRootState) => store.taskTemporal);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //useState
  const [isCheckColor, setisCheckColor] = useState(arrColorCode);

  //Function

  // const handleAddItemAction = (item) => {
  //   if (icart.length !== 0) {
  //     const cart = arrCart.filter((x) => x.code === item.code);
  //     if (cart.length !== 0) {
  //       const itemCode = item.colors.find((a) => a.isCheck === true).code;

  //       const cartCode = cart.find((x) =>
  //         x.colors.find((y) => y.isCheck === true && y.code === itemCode)
  //       );

  //       //không trùng code
  //       if (cartCode === undefined) {
  //         arrCart.push({ ...item, isQuantity: 1 });
  //       }
  //       //có trùng code
  //       else {
  //         arrCart = arrCart.map((cart) =>
  //           cart.code === item.code
  //             ? { ...cart, isQuantity: cart.isQuantity + 1 }
  //             : cart
  //         );
  //       }
  //     } else {
  //       arrCart.push({ ...item, isQuantity: 1 });
  //     }
  //   } else {
  //     setICart(icart.push(item));
  //   }
  //   // console.log("arrCart", arrCart);
  // };
  // addToCart(icart);

  const handleAddItemAction = (item: TItemProp) => {
    dispatch(addItemAction({ ...item, isQuantity: 1 }));
  };

  const navigateToItem = (item: TItemProp) => {
    dispatch(selectItemAction(item));
    navigate(`/Canifa-web-test/${item.category}-${item.code.toLowerCase()}`);
  };

  const handleClickColor = (data: TItemProp, item: TColors) => {
    setisCheckColor(() =>
      isCheckColor.map((a) => {
        return a.code === data.code
          ? {
              ...a,
              colors: a.colors.map((color) =>
                color.code === item.code
                  ? { ...color, isCheck: true }
                  : { ...color, isCheck: false }
              ),
            }
          : a;
      })
    );
  };

  //useEffect
  return (
    <>
      <div className="promo">
        <div className="left">
          <div className="title">
            <p>
              Nhà <br /> là nơi...
            </p>
            <p>ta được thoải mái nhất</p>
          </div>
          <a
            href="#product"
            className="button"
            onClick={() => window.scrollTo(0, 600)}
          >
            Mua ngay
          </a>
        </div>
        <div className="right"></div>
      </div>
      <ProductSection>
        {products.map((product: string, index: number) => (
          <div key={index}>
            <h1 className="font-bold text-4xl">{product}</h1>

            <ItemsDiv>
              {isCheckColor
                .filter((search: TItemProp) => {
                  return (
                    search.name.toLowerCase().match(searchRedux) ||
                    search.code.toLowerCase().match(searchRedux)
                  );
                })
                .filter(
                  (dtf: TItemProp) => dtf.category === product.toLowerCase()
                )
                .map((dt: TItemProp, index: number) => (
                  <ItemDiv key={index}>
                    <ImageItemDiv
                      src="https://picsum.photos/200/300"
                      loading="lazy"
                      onClick={() => navigateToItem(dt)}
                    />
                    <ColorItemDiv>
                      {dt.colors.map((curColor, index: number) => (
                        <ColorIteamp
                          key={index}
                          style={{ background: `${curColor.code}` }}
                          className={curColor.isCheck === true ? "active" : ""}
                          onClick={() => handleClickColor(dt, curColor)}
                        />
                      ))}
                    </ColorItemDiv>

                    <NameItemDiv>{dt.name}</NameItemDiv>

                    <IdItemDiv>{dt.code}</IdItemDiv>

                    <PriceItemDiv>{dt.price.toLocaleString()} đ</PriceItemDiv>

                    <AddItemDiv onClick={() => handleAddItemAction(dt)}>
                      +THÊM VÀO GIỎ HÀNG
                    </AddItemDiv>
                  </ItemDiv>
                ))}
            </ItemsDiv>
          </div>
        ))}
      </ProductSection>
    </>
  );
};

export default Products;
