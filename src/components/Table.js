import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    return (
      <div>
        <table width="1000" align="center" border="1">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>

            <tr>
              <td>otro</td>
              <td>outo</td>
              <td>outro</td>
              <td>outro</td>
              <td>outro</td>
              <td>outro</td>
              <td>outro</td>
              <td>outro</td>
              <td>outro</td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
