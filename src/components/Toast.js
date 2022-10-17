import { useState, useMemo, useEffect } from "react";

export const Toast = ({
  text = "default message",
  isVisible,
  setIsVisible,
  delay = 3000,
  position,
}) => {
  // 수정방향:
  // const { isVisible, setToastList } = useToast(false);
  // useToast를 활용해 isVisible과 setVisible을 toast 내부에 처리하고
  // useToast App.js의 toastList state를 변경해주려 하였습니다...

  const [toastList, setToastList] = useState([1]);
  //ToastList들로 여러 토스트들을 관리하려 하였습니다.

  useEffect(() => {
    if (isVisible && delay) {
      setTimeout(() => setIsVisible(false), delay);
    }
  }, [isVisible]);
  // delay & 컴포넌트 사라짐 요구사항 처리 내용입니다.

  const TOP_BOTTOM_MARGIN = 50;
  const LEFT_RIGHT_MARGIN = 50;

  const location = useMemo(() => {
    if (position === "top-left") {
      return { top: TOP_BOTTOM_MARGIN, left: LEFT_RIGHT_MARGIN };
    } else if (position === "top-center") {
      return { top: TOP_BOTTOM_MARGIN };
    } else if (position === "top-right") {
      return { top: TOP_BOTTOM_MARGIN, right: LEFT_RIGHT_MARGIN };
    } else if (position === "bottom-left") {
      return { bottom: TOP_BOTTOM_MARGIN, left: LEFT_RIGHT_MARGIN };
    } else if (position === "bottom-right") {
      return { bottom: TOP_BOTTOM_MARGIN, right: LEFT_RIGHT_MARGIN };
    } else if (position === "bottom-center") {
      return { bottom: TOP_BOTTOM_MARGIN };
    } else {
      return { bottom: TOP_BOTTOM_MARGIN };
    }
  }, [position]);
  // useMemo를 통해, 다른 상태가 변경되어 리렌더되어도 영향을 받지 않게함

  return (
    isVisible && (
      <div
        style={{
          width: " 300px",
          height: "80px",
          display: "flex",
          backgroundColor: "teal",
          position: "absolute",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: "10px",
          opacity: 1,
          ...location,
        }}
      >
        <div>{text}</div>
        <div
          style={{
            display: "flex",
            height: "40px",
            width: "40px",
            borderRadius: "40px",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setIsVisible(false)}
        >
          X
        </div>
      </div>
    )
  );
};
