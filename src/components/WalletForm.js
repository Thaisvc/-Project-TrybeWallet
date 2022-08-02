import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencieThunk } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { selectCurrencie } = this.props;
    selectCurrencie();
  }

  /*  getDataApi = async () => {
    const { selectCurrencie } = this.props;
    selectCurrencie();
  } */

  render() {
    const { coin } = this.props;
    /*  console.log('resutado', coin); */
    return (
      <div>
        WalletForm

        <form>
          <label htmlFor="value-input">
            Valor Da Despesa:
            <input
              data-testid="value-input"
              type="text"
              id="value-input "
              name="despesa"
            /* onChange={ (e) => this.handlerPassword(e) } */
            />
          </label>

          <label htmlFor="description-input">
            Despesa:
            <input
              data-testid="description-input"
              type="text"
              id="description-input "
              name="description"
            /* onChange={ (e) => this.handlerPassword(e) } */
            />
          </label>

          <label htmlFor="currency-input">
            Escolha a moeda:
            <select data-testid="currency-input">
              { coin && coin
                .map((elem) => (<option key={ elem }>{elem}</option>))}
            </select>
          </label>

          <label htmlFor="method-input">
            Escolha O método de pagamento :
            <select data-testid="method-input">
              <option value="">Dinheiro</option>
              <option value="">Cartão de crédito</option>
              <option value="">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag-input">
            Escolha a categoria (tag) para a despesa. :
            <select data-testid="tag-input">
              <option value="">Alimentação</option>
              <option value="">Lazer</option>
              <option value="">Trabalho</option>
              <option value="">Transporte</option>
              <option value="">Saúde</option>
            </select>
          </label>

        </form>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  coin: console.log('estado', state.wallet.currencies),
});

const mapDispatchToProps = (dispatch) => ({
  selectCurrencie: () => dispatch(fetchCurrencieThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
