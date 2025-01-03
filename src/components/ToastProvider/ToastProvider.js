import React from "react";
import useEscapeKey from "../../hooks/useEscape";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToast] = React.useState([]);

  const dismissToast = (id) => () => {
    setToast((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  };

  const addToast = (message, variant) => {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };
    setToast((currentToasts) => [...currentToasts, newToast]);
  };

  const handleEscape = React.useCallback(() => {
    setToast([]);
  }, []);

  useEscapeKey(handleEscape);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        dismissToast,
        addToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
