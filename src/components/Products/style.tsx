import { styled } from "styled-components";

export const ProductSection = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const ItemsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ItemDiv = styled.div`
  cursor: pointer;
  width: 250px;
  margin: 20px;
  overflow: hidden;
`;

export const ImageItemDiv = styled.img`
  width: 250px;
  height: 300px;
  margin-bottom: 10px;
`;

export const ColorItemDiv = styled.div`
  display: flex;
`;
export const ColorIteamp = styled.p`
  height: 15px;
  width: 15px;
  margin-right: 10px;
  cursor: pointer;
`;
export const NameItemDiv = styled.div`
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  padding: 10px 0;
  text-transform: uppercase;
`;

export const IdItemDiv = styled.div`
  font-size: 10px;
  text-align: left;
  text-transform: uppercase;
`;

export const PriceItemDiv = styled.div`
  text-align: left;
  padding: 10px 0;
  font-weight: 700;
`;

export const AddItemDiv = styled.div`
  border: 1px solid red;
  text-transform: uppercase;
  margin: 20px 0;
  padding: 5px;
  font-size: 13px;
  cursor: pointer;
  transform: translateY(100px);
  transition: transform 0.3s;
  ${ItemDiv}:hover & {
    transform: translateY(-10px);
  }
  &:active {
    background-color: red;
    color: white;
  }
`;
