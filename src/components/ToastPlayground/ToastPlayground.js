import React from "react";

import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";
function ToastPlayground() {
  const {
    toasts,
    dismissToast,
    addToast,
    message,
    setMessage,
    variant,
    setVariant,
    VARIANT_OPTIONS,
  } = React.useContext(ToastContext);
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toasts && (
        <ToastShelf toasts={toasts} dismissToast={dismissToast}></ToastShelf>
      )}

      <form className={styles.controlsWrapper} onSubmit={addToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((toastvariant) => (
              <label htmlFor={`variant-${toastvariant}`} key={toastvariant}>
                <input
                  id={`variant-${toastvariant}`}
                  type="radio"
                  name="variant"
                  value={toastvariant}
                  checked={toastvariant === variant}
                  onChange={(event) => {
                    setVariant(event.target.value);
                  }}
                />
                {toastvariant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
