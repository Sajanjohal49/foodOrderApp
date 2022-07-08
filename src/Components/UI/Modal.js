import styles from "./Modal.module.css";
import {Fragment} from "react";
import ReactDom from "react-dom";
const Backdrop = (props) => {
  return <div className={styles.backdrop}  onClick={props.onClose}/>;
};
const ModalContentOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
const overlayElement = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>, overlayElement)}

      {ReactDom.createPortal(
        <ModalContentOverlay>{props.children}</ModalContentOverlay>,overlayElement
      )}
    </Fragment>
  );
};
export default Modal;
