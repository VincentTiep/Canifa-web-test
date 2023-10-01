import { styled } from "styled-components";

export const ModalDiv = styled.div`
  /* background: rgba(0, 0, 0, 0.603); */
  position: absolute;
  width: 99vw;
  height: 110vh;
  transform: translate(-90%, -75px);
  display: flex;
  justify-content: flex-end;
  transition: all 0.4s ease-in;
`;
export const DetailCart = styled.div`
  position: relative;
  background-color: #fff;
  width: 550px;
`;

export const CardDiv = styled.div`
  position: relative;
  background-color: red;
  color: #fff;
  padding: 10px 0;
  font-size: 30px;
  font-weight: bold;
`;
export const ListItemsDiv = styled.div`
  max-height: 60%;
  overflow-y: scroll;
`;
export const ItemsDiv = styled.div`
  display: flex;
  padding: 15px 0;
  margin: 0 20px;
  border-bottom: 1px solid #dadada;
`;
export const ItemCartImg = styled.img`
  height: 140px;
  width: 35%;
`;
export const InfoCartDiv = styled.div`
  width: 100%;
  padding: 0 0 0 20px;
`;
export const InfoCarColor = styled.p`
  height: 15px;
  width: 15px;
  margin-right: 10px;
`;
export const InfoCartName = styled.div`
  height: 50px;
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  padding: 10px 0;
  text-transform: uppercase;
`;
export const InforCartID = styled.div`
  font-size: 10px;
  text-align: left;
  text-transform: uppercase;
`;
export const PriceQtyDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PriceDiv = styled.div`
  text-align: left;
  padding: 10px 0;
  font-weight: 700;
`;
export const TotalDiv = styled.div`
  padding: 30px;
`;
export const TotalQtyPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`;
export const CloseModal = styled.button`
  position: absolute;
  padding: 3px;
  border: 1px solid red;
  border-radius: 50%;
  background-color: #fff;
  width: fit-content;
  color: white;
  top: 15px;
  right: 60px;
  cursor: pointer;
`;
export const CheckoutModal = styled.button`
  position: absolute;
  padding: 10px;
  border-radius: 4px;
  background-color: red;
  color: white;
  bottom: 70px;
  font-weight: bold;
  left: 15px;
  width: 520px;
  cursor: pointer;
`;

export const QtyDiv = styled.div``;
export const ChangeQty = styled.span`
  height: 15px;
  width: 15px;
  padding: 5px 8px;
  margin: 10px;
  background-color: silver;
  border-radius: 5px;
  line-height: 15px;
  text-align: center;
  cursor: pointer;
`;
export const DeleteItem = styled.div`
  color: #fff;
  background-color: red;
  width: fit-content;
  padding: 5px 15px;
  cursor: pointer;
`;
export const ColorItemDiv = styled.div`
  display: flex;
`;
export const ColorIteamp = styled.p`
  height: 15px;
  width: 15px;
  margin-right: 10px;
`;
