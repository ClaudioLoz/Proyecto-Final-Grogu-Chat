import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Grogu from "../assets/grogu.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <img src={Grogu} alt="" />
      <h1>
        Bienvenido al GroguChat, <span>{userName}!</span>
      </h1>
      <h3>Elige a alguien para empezar a chatear.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
