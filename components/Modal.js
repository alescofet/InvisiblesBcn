import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.css";

export default function Modal(props) {

    const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        props.onClose();
      };

      const modalContent = props.show ? (
        <div className={styles.styledModalOverlay}>
          <div className={styles.styledModal}>
            <div className={styles.styledModalHeader}>
              <a href="#" onClick={handleCloseClick}>
                x
              </a>
            </div>
            {props.title && <div className={styles.styledModalTitle}>{props.title}</div>}
            <div className={styles.styledModalBody}>{props.children}</div>
          </div>
        </div>
      ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent, 
            document.getElementById("modal-root")
        );
      } else {
        return null;
      }    
  
}
