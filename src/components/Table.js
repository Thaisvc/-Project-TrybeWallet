import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteExpenses } from '../redux/actions';

class Table extends Component {
  render() {
    const { stateInfo, delExpense } = this.props;
    // console.log(stateInfo);
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Tag</th>
            <th scope="col">Método de pagamento</th>
            <th scope="col">Valor</th>
            <th scope="col">Moeda</th>
            <th scope="col">Câmbio utilizado</th>
            <th scope="col">Valor convertido</th>
            <th scope="col">Moeda de conversão</th>
            <th scope="col">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {stateInfo.map(({ id, description, tag, method,
            value, currency, exchangeRates }) => {
            const nunber = Number(value);
            const exchangeRate = exchangeRates[currency];
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{nunber.toFixed(2)}</td>
                <td>{exchangeRate.name}</td>
                <td>{Number(exchangeRate.ask).toFixed(2)}</td>
                <td>{(exchangeRate.ask * value).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    className="btn btn-danger btnDel"
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => { delExpense(id); } }
                  >
                    Deletar
                  </button>

                  <Link to={ `/Editar/${id}` }>
                    <button
                      className="btn btn-warning btnEdit"
                      data-testid="edit-btn"
                      type="button"
                    >
                      Editar despesa
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  // coin: state.wallet.currencies,
  stateInfo: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  delExpense: (del) => dispatch(deleteExpenses(del)),
});

Table.propTypes = {
  stateInfo: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  delExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
