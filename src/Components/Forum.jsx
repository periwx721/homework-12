import React, { useRef } from "react";
import { styled } from "styled-components";
import Header from "./Header";
import Headers from "./Headers";


function Forum(props) {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const clickHandler = () => {
    const obj = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    let find = 0;
    for (let i = 0; i < props.store.length; i++) {
      const people = props.store[i];
      if (
        people["email"] === obj["email"] &&
        people["password"] === obj["password"]
      ) {
        find = i + 1;
        break;
      }
    }
    if (find) {
      window.location.href = "https://www.instagram.com/";
    } else {
      alert("no");
    }
  };
  return (
    <div>
      <DivContainer>
        <Header/>
        <FormBlock>
          <DivStile>
            <InputStyle
              type="email"
              placeholder="электроонный адрес или номер телефона"
              ref={emailRef}
            />
            <InputStyle type="password" placeholder="парол" ref={passRef} />
            <ButonStyle onClick={clickHandler}>ВХОД</ButonStyle>
            <AltStyle href="">ЗАБЫЛИ ПАРОЛЬ?</AltStyle>
            <hr style={{ width: "90%" }} />
            <ButonsStylle>СОЗДАТЬ НОВЫЙ АККАУНТ</ButonsStylle>
          </DivStile>
          <Headers />
        </FormBlock>
      </DivContainer>
    </div>
  );
}

export default Forum;

const DivContainer = styled.div`
  /* border: 1px solid red; */
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow-y: auto;
`;
const FormBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 35%;
`;
const DivStile = styled.div`
  /* border: 1px solid red; */
  border-radius: 10px;
  width: 500px;
  height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background: #fff;
  padding: 10px;
`;
const InputStyle = styled.input`
  width: 430px;
  height: 50px;
  border-radius: 7px;
  font-size: 21px;
`;
const ButonStyle = styled.button`
  width: 350px;
  height: 50px;
  background-color: blue;
  color: azure;
  font-size: 25px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
      &:active{
        transform:scale(0.9);
      }
`;
const ButonsStylle = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 5px;
  color: azure;
  background-color: #06da06;
  font-size: 15px;
  cursor: pointer;
  border: none;
      &:active{
        transform:scale(0.9);
      }
`;
const AltStyle = styled.a`
  /* border: 1px solid; */
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
  border: none;
  color: blue;
  text-decoration: none;
  cursor: pointer;
  &:active{
        transform:scale(0.9);
      }
`;
