import React, { useState, useEffect } from 'react';
import { ActionBox } from '~/components/Styled';
import { Row, Container, Card, CardBody, Table } from 'reactstrap';

import api from '~/services/api';

import ModalAdd from './modals/add';
import ModalEdit from './modals/edit';
import ModalDel from './modals/del';

export default function Dashboard() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    async function UpdateListing() {
      const { data } = await api.get('cars');

      setLista(data);
    }
    UpdateListing();
  }, []);

  return (
    <>
      <Container>
        <Row className="mb-5">
          <h1 className="col-8 text-white">Dashboard</h1>
          <ModalAdd lista={lista} setLista={setLista} className="col-4" />
        </Row>
      </Container>

      <Card>
        <CardBody className="table-responsive">
          <Table striped>
            <thead>
              <tr>
                <th>Title</th>
                <th>Brand</th>
                <th>Age</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {lista.map((item) => (
                <tr key={item._id}>
                  <td>{item.title}</td>
                  <td>{item.brand}</td>
                  <td>{item.age}</td>
                  <td>{item.price}</td>
                  <td>
                    <ActionBox>
                      <ModalEdit
                        lista={lista}
                        item={item}
                        setLista={setLista}
                      />
                      <ModalDel lista={lista} item={item} setLista={setLista} />
                    </ActionBox>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
}
