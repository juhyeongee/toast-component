import { useState, useRef, useCallback, useEffect } from "react";
import styled, { keyframes } from "styled-components";

export const Toast = ({ text, isVisible, setIsVisible, positionY }) => {
  //   const { popUp, deleteToast } = useToast(false);
  const [where, setWhere] = useState();

  useEffect(() => {
    console.log("Toast 내 포지션 변경");
    setWhere(positionY);
  }, [positionY]);

  return (
    <Container positionY={where} isVisible={isVisible}>
      <div>{text}</div>
      <div onClick={() => setIsVisible(false)}>X</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: gray;
  position: absolute;
  justify-content: space-around;
  border: 1px white solid;
  bottom: ${(props) => (props.isVisible ? "100px" : "-80px")};
  width: 400px;
  height: 80px;
  align-items: center;
  border-radius: 10px;
  animation: ${(props) => props.positionY} 0.4s linear 1;
`;
