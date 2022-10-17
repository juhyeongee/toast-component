import { Toast } from "./components/Toast";
import { useState, useEffect, useCallback, useRef } from "react";
import { keyframes } from "styled-components";
//styled-component와 keyframe, useRef 이용하여 애니메이션을 넣으려 했으나, 실패했습니다.

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState();

  const showToastMessage = (message) => {
    setIsVisible(true);
    setText(message);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        scrollbarWidth: "none",
      }}
    >
      <button type="button" onClick={() => showToastMessage("My message")}>
        show Toast Component
      </button>
      <Toast
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        text={text}
        position="bottom-right"
      />
    </div>
  );
}

export default App;
