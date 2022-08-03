import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { getEmail, getExpenses } = this.props;

    return (
      <>
        <div>Header</div>
        <p data-testid="email-field">{ getEmail }</p>
        <p data-testid="total-field">
          {getExpenses.reduce((acc, cur) => {
            const valor = Number(cur.value);
            console.log('valor', cur.value);

            const moedas = cur.moeda;
            console.log('moeda', moedas);
            // acesso o aks de dentro da moeda
            const atualMoeda = Number(cur.exchangeRates[moedas].ask);
            console.log('atual', atualMoeda);

            const mult = valor * atualMoeda;
            console.log('mult', mult);
            acc += mult;
            return Math.round(acc * 100) / 100;
          }, 0)}
        </p>

        <p data-testid="header-currency-field">Câmbio: BRL</p>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getExpenses: state.wallet.expenses,
});

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getExpenses: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default connect(mapStateToProps, null)(Header);
