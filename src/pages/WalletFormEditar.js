/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencieThunk, saveExpenseThunk, editExpenses, editExpensesId } from '../redux/actions';
import { Redirect } from 'react-router-dom';


class WalletFormEdit extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();

  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { stateInfo, match: { params: { id } } } = this.props;

    const findExpense = stateInfo.find((expense) => expense.id === Number(id)); // Number converte meu id q é uma string em numero
    console.log('id editado',findExpense.id);
    const { editor, editorID, history} = this.props;
    // console.log(wallet.expenses);
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    editor(true);
    
    const nweState = [{
        value,
        description,
        currency,
        method,
        tag,
        id: findExpense.id
      }]
      
    editorID(nweState)
      
    
    history.push("/carteira");
  }

  render() {

    const { wallet } = this.props;
    //console.log(stateInfo);
    const { value, description, currency, method, tag } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="value-input">
          Valor Da Despesa:
          {' '}
          <input
            type="text"
            data-testid="value-input"
            id="value-input"
            name="value"
            value={value}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="description-input">
          Despesa:
          {' '}
          <input
            type="text"
            data-testid="description-input"
            id="description-input"
            name="description"
            value={description}
            onChange={this.handleChange}

          />
        </label>
        <label htmlFor="currency-input">
          Escolha a moeda:
          {' '}
          <select
            data-testid="currency-input"
            id="currency-input"
            name="currency"
            value={currency}
            onChange={this.handleChange}
          >
            {wallet.currencies.map((currencyCode) => (
              <option key={currencyCode}>{currencyCode}</option>


            ))}
          </select>

        </label>
        <label htmlFor="method-input">
          Escolha O método de pagamento :
          {' '}
          <select
            data-testid="method-input"
            id="method-input"
            name="method"
            value={method}
            onChange={this.handleChange}
          >

            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Escolha a categoria (tag) para a despesa. :
          {' '}
          <select
            data-testid="tag-input"
            id="tag-input"
            name="tag"
            value={tag}
            onChange={this.handleChange}

          >
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="submit">Editar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  // coin: state.wallet.currencies,
  wallet: state.wallet,
  stateInfo: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencieThunk()),
  saveExpense: (data) => dispatch(saveExpenseThunk(data)),
  editor: (booleano) => dispatch(editExpenses(booleano)),
  editorID: (id) => dispatch(editExpensesId(id)) 
});

WalletFormEdit.propTypes = {
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
    expenses: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  }).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  saveExpense: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(WalletFormEdit);
