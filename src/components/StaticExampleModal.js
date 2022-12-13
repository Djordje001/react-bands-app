/*import React from "react";

//otiso je na bootstrap modal i kopirao ovaj live demo ali bez buttona

const Modal = () => {
    return (

        <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;*/
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example({ugasimodal,band,show}) {

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={()=>{ugasimodal()}}>
        <Modal.Header closeButton>
          <Modal.Title>{band.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{band.info}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{ugasimodal()}}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{ugasimodal()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Example />);

export default Example;