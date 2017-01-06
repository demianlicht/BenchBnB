import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {

  const formType = ownProps.location.pathname;

  const processForm = () => {
    if (formType === '/login') {
      return user => dispatch(login(user));
    } else if (formType === '/signup') {
      return user => dispatch(signup(user));
    }
  };

  return ({
    formType: formType,
    processForm: processForm()
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
