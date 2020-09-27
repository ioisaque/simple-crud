import React, { useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormGroup,
  InputGroup,
  Label,
  Row,
  Col,
} from 'reactstrap';
import api from '~/services/api';
import { Form, Input, Select } from '@rocketseat/unform';
import { GlobalVars } from '~/styles/global';

export default function ModalAdd({ lista, setLista }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  async function handleSubmit(data) {
    const response = await api.post('cars', data);

    setLista([...lista, response.data]);
    toggle();
  }

  return (
    <>
      <Button color="success" onClick={toggle} className="col-4 text-center">
        + Add New
      </Button>
      <Modal isOpen={modal} toggle={toggle} style={{ maxWidth: '60%' }}>
        <ModalHeader
          style={{
            background: GlobalVars.color.success,
            color: GlobalVars.color.white,
          }}
          toggle={toggle}
        >
          Add Item
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Col md={12}>
              <Row>
                <FormGroup className="col-md-6">
                  <Label>Title</Label>
                  <Input
                    type="text"
                    name="title"
                    className="form-control"
                    required
                  />
                </FormGroup>
                <FormGroup className="col-md-6">
                  <Label>Price</Label>
                  <InputGroup>
                    <div className="input-group-append">
                      <Button color="success">USD</Button>
                    </div>
                    <Input
                      type="text"
                      name="price"
                      className="form-control"
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="col-md-6">
                  <Label>Age</Label>
                  <Input
                    type="text"
                    name="age"
                    className="form-control"
                    required
                  />
                </FormGroup>
                <FormGroup className="col-md-6">
                  <Label>Brand</Label>
                  <Select
                    name="brand"
                    className="form-control custom-select"
                    options={[
                      { id: 'N/A', title: 'N/A' },
                      { id: 'Ford', title: 'Ford' },
                      { id: 'Toyota', title: 'Toyota' },
                    ]}
                    required
                  />
                </FormGroup>
              </Row>
            </Col>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggle}>
              Cancel
            </Button>
            <Button color="success" type="submit">
              Save
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
}
