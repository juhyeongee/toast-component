import { useState } from "react";

export const useToast = (setToastList) => {
  const [isVisible, setIsVisible] = useState(false);

  const deleteToast = () => {
    setToastList{}
  }

  return { isVisible, setIsVisible}
};
