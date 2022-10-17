import "./App.css";
import { Toast } from "./components/Toast";
import { useState, useEffect, useCallback } from "react";
import { keyframes } from "styled-components";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [check, setCheck] = useState(true);

  useEffect(() => {
    console.log("isVisible", isVisible);
  }, [isVisible]);

  useEffect(() => {
    console.log("check", check);
  }, [check]);

  const positionY = useCallback(() => {
    const upKeyframe = keyframes`
      0% {
          bottom: -80px;
          opacity: 0.5;
      }
      100% {
          bottom: 100px;
          opacity: 1;
      }
    `;
    const downKeyframe = keyframes`
    0% {
      bottom: 100px;
        opacity: 1;
    }
    100% {
      bottom: -80px;
        opacity: 0.5;
    }
  `;
    if (isVisible) {
      return upKeyframe;
    } else {
      return downKeyframe;
    }
  }, [isVisible]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        background: check ? "black" : "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button type="button" onClick={() => setIsVisible(!isVisible)}>
        토스트 올리기
      </button>
      <button type="button" onClick={() => setCheck(!check)}>
        다른 상태변경
      </button>
      <Toast
        positionY={positionY}
        text="toast Text message"
        setIsVisible={setIsVisible}
        isVisible={isVisible}
      />
    </div>
  );
}

export default App;
