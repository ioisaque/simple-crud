import React from 'react';
import ErrorStyles from '~/styles/errors';

export default function E404() {
  return (
    <>
      <ErrorStyles/>
      <div class="main-area center-text">
        <div class="display-table">
          <div class="display-table-cell">
            <h1 class="title">
              <b>404</b>
            </h1>
            <p class="desc font-white">Opps... page not found!</p>

            <img
              alt="404 Error"
              src="https://cdn.ideyou.com.br/_error/img/404.svg"
              style={{ height: '15rem', margin: '5rem 0 0' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
