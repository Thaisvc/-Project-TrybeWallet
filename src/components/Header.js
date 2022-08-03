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
          { getExpenses.length <= 0 ? 0 : getExpenses.reduce((acc, curr) => acc
            + (curr.despesa * curr.exchangeRates[curr.moeda].ask), 0).toFixed(2)}
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
