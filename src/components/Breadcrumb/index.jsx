import React from 'react';

import {
  Container,
  Path,
  PathItem,
  Actions,
  AddButton,
  RemoveButton,
  SearchButton,
  SaveButton,
  GoBackButton,
} from './styles';

const RouteIcons = {
  Clientes: 'people_alt',
  Usuarios: 'contacts',
};

export default function Breadcrumb({
  match,
  root,
  route,
  add,
  remove,
  search,
  save,
  onSave,
  goBack,
}) {
  const action = decodeURIComponent(match.params.action);
  const id = match.params.id ? decodeURIComponent(match.params.id) : false;

  return (
    <Container>
      <Path>
        <PathItem icon={RouteIcons[route]} title={route} link={root} />

        <PathItem
          icon="arrow_right_alt"
          title={action}
        />
        {id && <PathItem icon="arrow_right_alt" title={`#${id}`} />}
      </Path>
      <Actions>
        {search && <SearchButton route={route.toLowerCase()} />}
        {add && <AddButton route={route.toLowerCase()} />}
        {remove && <RemoveButton route={route.toLowerCase()} id={id} />}
        {save && <SaveButton onClick={onSave} />}
        {goBack && <GoBackButton route={route.toLowerCase()} />}
      </Actions>
    </Container>
  );
}
