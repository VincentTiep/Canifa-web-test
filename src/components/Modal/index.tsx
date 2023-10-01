import "../../App.css";

import {
  ModalDiv,
  DetailCart,
  CardDiv,
  TotalDiv,
  TotalQtyPrice,
  CloseModal,
  ListItemsDiv,
  CheckoutModal,
  ItemsDiv,
  ItemCartImg,
  InfoCartDiv,
  ColorItemDiv,
  ColorIteamp,
  InfoCartName,
  InforCartID,
  PriceQtyDiv,
  PriceDiv,
  QtyDiv,
  ChangeQty,
  DeleteItem,
} from "./style";
import { ArrowRight2 } from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addQtyAction,
  cancelDeleteAction,
  clickDeleteAction,
  deleteItemAction,
  subQtyAction,
} from "../../Redux/action/listTask";
import { useNavigate } from "react-router-dom";
import { IRootState, TItemProp } from "../../types";
import { useState } from "react";

interface IhideModal {
  // hideModal(agr0: boolean): boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hideModal: any;
}
const Modal = ({ hideModal }: IhideModal) => {
  //Library
  const listItemRedux = useSelector((store: IRootState) => store.listTask);
  const dispatch = useDispatch();

  //React-dom
  const navigate = useNavigate();

  //useState
  const [showModal, setShowModal] = useState(true);

  //Function
  //Add item in cart
  const handleAddQty = (item: TItemProp) => {
    dispatch(addQtyAction(item));
  };

  // 👇️ navigate to /Home
  const navigateToCheckout = () => {
    setShowModal(false);
    navigate("/Canifa-web-test/checkout");
  };

  //Sub item in cart
  const handleSubQty = (item: TItemProp) => {
    dispatch(subQtyAction(item));
  };

  //Select delete item in cart
  const handleDeleteItem = (item: TItemProp) => {
    dispatch(deleteItemAction(item));
  };

  //OK delete item in cart
  const handleClickDelete = (item: TItemProp) => {
    dispatch(clickDeleteAction(item));
  };

  //Cancel delete item in cart
  const handleCancelDelete = (item: TItemProp) => {
    dispatch(cancelDeleteAction(item));
  };

  //hide cart modal
  const handleHideModal = () => {
    setShowModal(false);
  };
  hideModal(showModal);

  return (
    <ModalDiv>
      <DetailCart>
        <div>
          <CardDiv>Giỏ hàng</CardDiv>
          <CloseModal onClick={handleHideModal}>
            <ArrowRight2 size="32" color="#FF8A65" />
          </CloseModal>
        </div>

        <ListItemsDiv>
          {listItemRedux.map((item: TItemProp, index: number) => (
            <ItemsDiv key={index}>
              <ItemCartImg src="https://picsum.photos/200/300" loading="lazy" />
              <InfoCartDiv>
                <ColorItemDiv>
                  {item.colors.map((x, index: number) => (
                    <ColorIteamp
                      key={index}
                      style={{ background: `${x.code}` }}
                      className={x.isCheck === true ? "active" : ""}
                    ></ColorIteamp>
                  ))}
                </ColorItemDiv>
                <InfoCartName>{item.name}</InfoCartName>
                <InforCartID>{item.code}</InforCartID>
                <PriceQtyDiv key={index}>
                  <PriceDiv>{item.price.toLocaleString()} đ</PriceDiv>
                  <QtyDiv key={index}>
                    <span>Số lượng:</span>
                    <ChangeQty
                      onClick={() =>
                        item.isQuantity > 1
                          ? handleSubQty(item)
                          : handleDeleteItem(item)
                      }
                    >
                      -
                    </ChangeQty>
                    <span>{item.isQuantity}</span>
                    <ChangeQty onClick={() => handleAddQty(item)}>+</ChangeQty>
                  </QtyDiv>
                </PriceQtyDiv>
                <DeleteItem onClick={() => handleClickDelete(item)}>
                  Xóa
                </DeleteItem>
                {item.isShowDelete && (
                  <div
                    key={index}
                    className="z-50 fixed bg-black/[0.6] h-screen w-screen top-0 left-0 bottom-0"
                  >
                    <div className="bg-white  mx-auto my-72 h-40 w-96 rounded">
                      <p className="m-3">Bạn có muốn xóa sản phẩm không ?</p>
                      <p className="font-bold mt-4 mb-8">{item.name}</p>
                      <div className="flex-auto mx-10">
                        <button
                          className="rounded btn w-36 h-10 border mr-4 bg-red-600 font-bold text-white"
                          onClick={() => {
                            handleDeleteItem(item);
                          }}
                        >
                          OK
                        </button>
                        <button
                          className="rounded btn w-36 h-10 border font-bold "
                          onClick={() => handleCancelDelete(item)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </InfoCartDiv>
            </ItemsDiv>
          ))}
        </ListItemsDiv>
        <TotalDiv>
          <TotalQtyPrice>
            <p>Số lượng sản phẩm:</p>
            <p style={{ fontWeight: "700" }}>
              {listItemRedux.reduce((acc: number, ele: TItemProp) => {
                return acc + ele.isQuantity;
              }, 0)}
            </p>
          </TotalQtyPrice>
          <TotalQtyPrice>
            <p>Tổng giá trị:</p>
            <p style={{ fontWeight: "700" }}>
              {listItemRedux
                .reduce((acc: number, ele: TItemProp) => {
                  return acc + ele.price * ele.isQuantity;
                }, 0)
                .toLocaleString()}{" "}
              đ
            </p>
          </TotalQtyPrice>
          <CheckoutModal onClick={navigateToCheckout}>Thanh Toán</CheckoutModal>
        </TotalDiv>
      </DetailCart>
    </ModalDiv>
  );
};

export default Modal;
