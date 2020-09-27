import React from 'react';
import styled from 'styled-components';

import { GlobalVars } from '~/styles/global';

export const Container = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background: ${GlobalVars.color.white};
`;

export const Path = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Actions = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  color: ${GlobalVars.color.lightGrey};
`;

export function PathItem({ icon, title, link }) {
  if (link)
    return (
      <a href={link} className="btn">
        <i className="mIcon">{icon}</i>
        {title}
      </a>
    );
  return (
    <span className="btn disabled">
      <i className="mIcon">{icon}</i>
      {title}
    </span>
  );
}

export function SearchButton({ route }) {
  return (
    <a href={`/${route}/buscar`} className="btn text-info">
      <i className="mIcon">search</i>
      Buscar
    </a>
  );
}

export function AddButton({ route }) {
  return (
    <a
      href={`/${route}/adicionar`}
      className="btn text-success"
    >
      <i className="mIcon">add_circle</i>
      Adicionar
    </a>
  );
}

export function RemoveButton({ route, id }) {
  return (
    <a
      href={`/${route}/remover/${id}`}
      className="btn text-danger"
    >
      <i className="mIcon">remove_circle</i>
      Remover
    </a>
  );
}

export function SaveButton({ onClick }) {
  return (
    <span onClick={onClick} className="btn text-danger">
      <i className="mIcon">save</i>
      Salvar
    </span>
  );
}

export function GoBackButton({ route }) {
  return (
    <a href={`/${route}/listar`} className="btn text-info">
      <i className="mIcon">keyboard_backspace</i>
      Voltar
    </a>
  );
}
