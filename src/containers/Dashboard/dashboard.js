//core imports
import React from 'react';
import { connect } from 'react-redux';
//component imports
import UserList from '../../components/UserList/userList';
import UserForm from '../UserForm/userForm';
import SnackBar from '../../components/snackbar';
//action imports
import { fetchUsers } from '../../actions/userAction';
//css imports
import styles from './dashboard.module.css';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      selectedUser: null,
      open: false,
      message: ''
    }
    this._onUserChange = this._onUserChange.bind(this);
    this._sortList = this._sortList.bind(this);
  }
  componentDidMount() {
    //users are fetched on initial mount.
    this.props.fetch_users();
  }

  componentDidUpdate(prevProps) {
    //once users are fetched component is updated with new values.
    let users = this.props.users;
    if(prevProps.users !== users) {
      const sortedList  = this._sortList(users.users);
      this.setState(
        {
          userList: sortedList,
          selectedUser: sortedList[0],
          open: true,
          message: 'Success!'
        }
      )
      setTimeout(() => this.setState({open: false}), 2000);
    }
  }

  _onUserChange(user) {
    //set current selected user.
    this.setState({selectedUser: user})
  }

  _sortList(list) {
    //sort user list based on user names.
    const cloneList = JSON.parse(JSON.stringify(list));
    return cloneList.sort((a,b) => a.name.localeCompare(b.name));
  }

  render() {
    return(
      <div className={styles.container}>
        <SnackBar
          open={this.state.open}
          message={this.state.message}
        />
        <div className={styles.userList}>
          <UserList
            list={this.state.userList}
            onClick={this._onUserChange}
            selectedUser={this.state.selectedUser}
          />
        </div>
        {
          this.state.selectedUser ?
          <div className={styles.userForm}>
            <UserForm user={this.state.selectedUser} />
          </div> : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({...state})

const mapDispatchToProps = dispatch => ({
  fetch_users: () => {
    dispatch(fetchUsers())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
