import styled from "styled-components";

export const FormContainer = styled.div`
  /* width: 100%; */
  /* height: 8vh; */
  background-color: #2d3875;
  display: flex;
  justify-content: center;
  padding-top: 35px;
  padding-bottom: 15px;
  `;

export const Form = styled.form`
  width: 90%;
  /* background-color: wheat; */
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column: 2px;
  justify-content: space-between;
  align-items: center;
`;

export const BottomContainer = styled.div`
width: 100%;
height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: end;
  `;

export const ErrorField = styled.div`
color: red;
  `;
