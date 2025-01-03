import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
function ToastPlayground() {
  const { addToast } = React.useContext(ToastContext);

  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");

  function handleCreateToast(event) {
    event.preventDefault();
    addToast(message, variant);

    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  }
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handleCreateToast}>
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
