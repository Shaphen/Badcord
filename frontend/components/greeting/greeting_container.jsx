import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions'

const mSTP = state => ({

});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(Greeting);