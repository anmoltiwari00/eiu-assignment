//core imports
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//css imports
import styles from './userForm.module.css';
//material ui imports
import { Select, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
//component imports
import Input from '../../components/input';
import SnackBar from '../../components/snackbar';
//import actions
import { updateUser } from '../../actions/userAction';

export class UserForm extends React.Component {
  //each time you visit a user which hasnt been updated
  //you are presented with the default values.
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      formErorr: false,
      open: false,
      message: ''
    }
    this._handleRoleChange = this._handleRoleChange.bind(this);
  }

  //set user value when component is mounted
  componentDidMount() {
    this.setState({user: this.props.user})
  }

  //set user value when component is updated
  //the same can be done through redux if the state is shared across
  //multiple components
  componentDidUpdate(prevProps) {
    if(prevProps.user !== this.props.user) {
      this.setState({user: this.props.user})
    }
  }

  //function to get input attributes to loop over
  _getInputAttributes() {
    return [
      {
        placeholder: 'Name',
        disabled: true,
        identifier: 'name'
      },
      {
        placeholder: 'Email',
        disabled: true,
        identifier: 'emailId'
      },
      {
        placeholder: 'EmployeeId',
        disabled: true,
        identifier: 'employeeId'
      },
      {
        placeholder: 'Role',
        disabled: false,
        identifier: 'role'
      },
    ]
  }

  //function to get domain string values to loop over in select element
  _getEmployeeDomainList() {
    return ['Site Reliability Engineering', 'Software Development']
  }

  //on change function for select when value is changed by user
  _handleDomainChange(e) {
    const u = this.state.user;
    u.domain = e.target.value;
    this.setState({user: u})
  }

  //change user role here
  _handleRoleChange(e) {
    const u = this.state.user;
    u.role = e.target.value;
    if(!e.target.value) {
      this.setState({user: u, formErorr: true});
    } else {
      this.setState({user: u, formErorr: false});
    }
  }

  //handler to dispatch update user action
  _updateUser() {
    if(!this.state.formErorr) { //check if all fields are filled
      let list = JSON.parse(JSON.stringify(this.props.users.users)); //make a deep copy of users list in redux store
      list = list.map(user => {
        if(user.employeeId === this.state.user.employeeId) {
          user = this.state.user //change the user to be updated from local state
        }
        return user;
      })
      this.props.update_user(list); //dispatch action for update
    } else {
      this.setState({open: true, message: 'Role cant be empty!'}, () => {
        setTimeout(() => this.setState({open: false, message: ''}), 2000)
      });
    }

  }

  render() {
    const userState = this.state.user;
    const inputAttributes = this._getInputAttributes();
    const domainList = this._getEmployeeDomainList();
    const buttonStyles = {
      width: '90%',
      marginTop: '15px'
    }
    return(
      <div>
        <SnackBar
          open={this.state.open}
          message={this.state.message}
        />
        {
          inputAttributes.map((i, index) =>
            <Input
              key={index}
              placeholder={i.placeholder}
              disabled={i.disabled}
              value={(userState && userState[i.identifier]) || ''}
              onChange={i.identifier === 'role' ? this._handleRoleChange : null}
            />)
        }
        <Select
          className={styles.dropDown}
          value={(userState && userState.domain) || ''}
          onChange={e => this._handleDomainChange(e)}
        >
          {
            domainList.map((domain, index) => <MenuItem key={index} value={domain}>{domain}</MenuItem>)
          }
        </Select>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this._updateUser()}
          style={buttonStyles}
        >
          Submit
        </Button>
      </div>

    )
  }
}
//validate prop types
UserForm.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    employeeId: PropTypes.number,
    emailId: PropTypes.string,
    role: PropTypes.string,
    domain: PropTypes.string
  })
};

const mapStateToProps = state => ({...state});

const mapDispatchToProps = dispatch => ({
  update_user: (data) => {
    dispatch(updateUser(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
