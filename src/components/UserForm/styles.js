import styled from "styled-components";

export const Form = styled.form`
  width: 80%;
  padding: 16px 0;
  margin: 2rem auto;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 50px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  background-image: linear-gradient(to right, #e900c8, #00e8ff, #00ffc5);
  border-radius: 50px;
  color: #fff;
  width: 100%;
  height: 32px;
  display: block;
  text-align: center;
`;

export const ButtonLoading = styled.button`
  background-image: linear-gradient(to right, #e900c8, #00e8ff, #00ffc5);
  border-radius: 50px;
  color: #fff;
  width: 100%;
  height: 32px;
  display: block;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  &[disabled] {
    opacity: 0.5;
  }
`;

export const Title = styled.h2`
  /* width: 80%; */
  /* margin: 0 auto; */
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 0;
`;

export const Message = styled.p`
  width: 100%;
  margin: 0 auto;
  padding: 8px 0;
  text-align: center;
  font-size: 14px;
  color: #fff;
  border-radius: 50px;
  font-weight: bold;
  background-color: ${(props) =>
    props.type === "error" ? "#e900c8" : "#59FFB9"};
`;

// export const Success = styled.p`
//   width: 100%;
//   margin: 0 auto;
//   padding: 8px 0;
//   text-align: center;
//   font-size: 14px;
//   color: #fff;
//   background-color: #59ffb9;
//   border-radius: 50px;
// `;
