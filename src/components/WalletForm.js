import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencieThunk, saveExpenseThunk } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      despesa: '',
      descrição: '',
      moeda: '',
      pagamento: '',
      categoria: '',
    };
  }

  componentDidMount() {
    const { selectCurrencie } = this.props;
    selectCurrencie();
  }

  handlerChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { id, despesa, descrição, moeda, pagamento, categoria } = this.state;
    const { saveExpenses } = this.props;
    // salvando meu state
    const objEstado = { id, despesa, descrição, moeda, pagamento, categoria };
    // envia o state
    saveExpenses(objEstado);
    // atualizo a id
    this.setState({ id: id + 1 });
    // reseta meus campos de input
    this.setState({
      despesa: '',
      descrição: '',
      moeda: '',
      pagamento: '',
      categoria: '',
    });
  }

  render() {
    const { coin } = this.props;
    //  console.log('resutado', coin);
    const { despesa, descrição, moeda, pagamento, categoria } = this.state;
    // console.log(despesa, descrição, moeda, pagamento, categoria);
    return (
      <div>
        WalletForm

        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="value-input">
            Valor Da Despesa:
            <input
              data-testid="value-input"
              type="text"
              id="value-input "
              name="despesa"
              value={ despesa }
              onChange={ this.handlerChange }
            />
          </label>

          <label htmlFor="description-input">
            Despesa:
            <input
              data-testid="description-input"
              type="text"
              id="description-input "
              name="descrição"
              value={ descrição }
              onChange={ this.handlerChange }
            />
          </label>

          <label htmlFor="currency-input">
            Escolha a moeda:
            <select
              data-testid="currency-input"
              name="moeda"
              value={ moeda }
              onChange={ this.handlerChange }
            >
              {coin.map((elem) => (<option key={ elem }>{elem}</option>))}
            </select>
          </label>

          <label htmlFor="method-input">
            Escolha O método de pagamento :
            <select
              data-testid="method-input"
              name="pagamento"
              value={ pagamento }
              onChange={ this.handlerChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag-input">
            Escolha a categoria (tag) para a despesa. :
            <select
              data-testid="tag-input"
              name="categoria"
              value={ categoria }
              onChange={ this.handlerChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="submit">Adicionar despesa</button>
        </form>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  coin: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  selectCurrencie: () => dispatch(fetchCurrencieThunk()),
  saveExpenses: (data) => dispatch(saveExpenseThunk(data)),
});

WalletForm.propTypes = {
  selectCurrencie: PropTypes.func.isRequired,
  coin: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveExpenses: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
