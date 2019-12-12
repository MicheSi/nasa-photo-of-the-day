import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default function NavBar (props) {
    const { className } = props;
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);

    return (
    <div>
      <Button color="secondary" onClick={toggle}>Change Date</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Select a Date</ModalHeader>
        <ModalBody>
            <Form inline>
                <FormGroup>
                    <Label for="changeDate" hidden>Date</Label>
                    <Input type="date" name="date" id="changeDate" placeholder="Date" />
                </FormGroup>
                {' '}
                <Button>Submit</Button>
            </Form>
        </ModalBody>
        </Modal>
    </div>
    );
}