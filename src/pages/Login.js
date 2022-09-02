import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Button }from 'react-bootstrap/Button'; outra forma de usar p bootstrap
// https://react-bootstrap.github.io/getting-started/introduction/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt-BR&_x_tr_pto=sc#installation
import { addingUsers } from '../redux/actions/index';
import '../App.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      btnEnviar: true,
    };
  }

  handlerEmail= ({ target }) => {
    /* console.log(target.value); */
    const { value } = target;
    const validationEmail = /\S+@\S+\.\S+/;
    const valid = validationEmail.test(value);
    if (valid === true) {
      this.setState({
        email: value,
      });
    } else {
      this.setState({
        btnEnviar: true,
      });
    }
  }

   handlerPassword= ({ target }) => {
     /* console.log(target.value); */
     const { value } = target;
     const { email } = this.state;
     const numValidPassword = 6;
     if (value.length >= numValidPassword && email.length > numValidPassword) {
       /* console.log(value); */
       this.setState({
         btnEnviar: false,
       });
     } else {
       this.setState({
         btnEnviar: true,
       });
     }
   }

   render() {
     const { email, btnEnviar } = this.state;
     const { loginSubmit } = this.props;

     return (
       <main>
         <h1>Login</h1>
         <div className="form-group">
           <label htmlFor="email-input">
             E-mail:
             <input
               className="form-control"
               type="email"
               data-testid="email-input"
               id="email-input"
               name="email"
               onChange={ (e) => this.handlerEmail(e) }
             />
           </label>

           <label htmlFor="password-input ">
             Senha:
             <input
               className="form-control"
               type="password"
               data-testid="password-input"
               id="password-input "
               name="password"
               onChange={ (e) => this.handlerPassword(e) }
             />
           </label>
         </div>
         <Link to="/carteira">
           <button
             className=" mystyle btn btn-outline-success"
             type="button"
             disabled={ btnEnviar }
             onClick={ () => loginSubmit(email) }
           >
             Entrar

           </button>
         </Link>
       </main>);
   }
}

const mapDispatchToProps = (dispatch) => ({
  loginSubmit: (param) => dispatch(addingUsers(param)) });

Login.propTypes = {
  loginSubmit: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Login);
