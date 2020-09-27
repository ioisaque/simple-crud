import React, { useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';
import api from '~/services/api';
import IconButton from '~/components/IconButton';
import { GlobalVars } from '~/styles/global';

export default function ModalDel({item, lista, setLista}) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  async function deleteItem(data) {
    await api.delete(`cars/${item._id}`);

    setLista(lista.filter((e) => e._id !== item._id));
    toggle();
  }

  return (
    <>
      <IconButton icon="delete" color="danger" onClick={toggle}/>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader
          style={{
            background: GlobalVars.color.danger,
            color: GlobalVars.color.white,
          }}
          toggle={toggle}
        >
          Delete "{item.title}"
        </ModalHeader>
        <ModalBody>
          Are you sure you want to delete {item.title}?
          <br />
          This action cannot be undone.
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            No
          </Button>{' '}
          <Button color="warning" onClick={deleteItem}>
            Yes, delete it.
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
