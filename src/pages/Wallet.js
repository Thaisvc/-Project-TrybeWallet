import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    const { getEmail } = this.props;
    return (
      <>
        <div>TrybeWallet</div>
        <Header />
        {' '}

        <p data-testid="email-field">{ getEmail }</p>
        <p data-testid="total-field">Gastos: 0</p>
        <p data-testid="header-currency-field">Câmbio: BRL</p>
        <WalletForm />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
