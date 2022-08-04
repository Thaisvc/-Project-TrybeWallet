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
          { wallet.expenses.length <= 0 ? '0.00' : wallet.expenses
            .reduce((acc, curr) => acc
            + (curr.value * curr.exchangeRates[curr.currency].ask), 0).toFixed(2)}
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
