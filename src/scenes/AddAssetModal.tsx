import React, { ReactElement } from 'react';
import { Button, Modal } from 'react-bootstrap';

type AddAssetModalProps = Readonly<{
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}>;

function AddAssetModal({
  isOpen,
  onClose,
  onSubmit,
}: AddAssetModalProps): ReactElement {
  return (
    <Modal
      show={isOpen}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={onSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddAssetModal;
