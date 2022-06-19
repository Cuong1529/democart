import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
      <div className={classes.backdrop} onClick={props.onClick}></div>
  );
};

const ModalOverlay = (props) => {
  return (
      <div className={classes.modal}>
        <div className="content">{props.children}</div>
      </div>
  );
};

const portalElement = document.getElementById("overlays");
function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.hideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
