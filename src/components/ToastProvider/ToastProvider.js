import React from "react";
import useEscapeKey from "../../hooks/useEscape";

export const ToastContext = React.createContext();

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
function ToastProvider({ children }) {
  const dismissToast = (id) => () => {
    setToast((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  };

  const addToast = (event) => {
    event.preventDefault();
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };
    setToast((currentToasts) => [...currentToasts, newToast]);
    setMessage("");
    setVariant("notice");
  };

  const handleEscape = React.useCallback(() => {
    setToast([]);
  }, []);

  useEscapeKey(handleEscape);

  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const [toasts, setToast] = React.useState([]);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        dismissToast,
        addToast,
        message,
        setMessage,
        variant,
        setVariant,
        VARIANT_OPTIONS,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
