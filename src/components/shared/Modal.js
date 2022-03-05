import React from "react";
import {
  Modal,
} from "reactstrap";
const ModalComponent = ({show ,handleClose,modalUI, title}) => {
  console.log("show",show)
  return (
    <>
    <Modal
          className="modal-dialog-centered"
          isOpen={show}
          toggle={() => handleClose()}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
                {title}
            </h5>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() =>  handleClose()}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body pt-0">{modalUI}</div>
        </Modal>
    </>
  );
};

export default ModalComponent;
