import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: true,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: () => {
    const formType = ownProps.location.pathname;
    if (formType === 'login') {
      return user => dispatch(login(user));
    } else if (formType === 'signup') {
      return user => dispatch(signup(user));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
