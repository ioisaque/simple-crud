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
import IconButton from '~/components/IconButton';
import { GlobalVars } from '~/styles/global';

export default function ModalEdit({ item, lista, setLista }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  async function updateItem(values) {
    const response = await api.put(`cars/${item._id}`, values);

    console.log('', response);

    setLista([...lista.map((e) => (e._id === item._id ? values : e))]);

    toggle();
  }

  return (
    <>
      <IconButton icon="edit" color="info" onClick={toggle}/>
      <Modal isOpen={modal} toggle={toggle} style={{ maxWidth: '60%' }}>
        <ModalHeader
          style={{
            background: GlobalVars.color.info,
            color: GlobalVars.color.white,
          }}
          toggle={toggle}
        >
          Edit Item # {item._id}
        </ModalHeader>
        <Form initialData={item} onSubmit={updateItem}>
          <ModalBody>
            <Col md={12}>
              <Row>
                <FormGroup className="col-md-6">
                  <Label>Title</Label>
                  <Input
                    type="text"
                    name="title"
                    defaultValue={item.title}
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
                      placeholder={item.price}
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
                    placeholder={item.age}
                    className="form-control"
                    required
                  />
                </FormGroup>
                <FormGroup className="col-md-6">
                  <Label>Brand</Label>
                  <Select
                    name="brand"
                    defaultChecked={item.brand}
                    className="form-control custom-select"
                    options={[
                      { id: 'N/A', title: 'N/A' },
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
            </Button>{' '}
            <Button color="success" type="submit">
              Update
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
}
