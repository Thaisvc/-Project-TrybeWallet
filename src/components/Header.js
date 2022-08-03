import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user, wallet } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          { user.email }
        </p>
        <p data-testid="total-field">
          { wallet.expenses.length <= 0 ? 0 : wallet.expenses
            .reduce((acc, curr) => acc
            + (curr.value * curr.exchangeRates[curr.currency].ask), 0).toFixed(2)}

          {/* {wallet.expenses.reduce((acc, cur) => {
            const valor = Number(cur.value);
            console.log(wallet.expenses);
            const moeda = cur.currency;
            console.log(moeda);
            // acesso o aks de dentro da moeda
            const atualMoeda = Number(cur.exchangeRates[moeda].ask);
            const mult = valor * atualMoeda;
            // console.log(mult);
            acc += mult;
            return Math.round(acc * 100) / 100;
          }, 0)} */}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

export default connect(mapStateToProps)(Header);
