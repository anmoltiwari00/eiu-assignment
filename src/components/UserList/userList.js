//core imports
import React from 'react';
import PropTypes from 'prop-types';
//material ui imports
import { Select, MenuItem } from '@material-ui/core';
//css imports
import styles from './userList.module.css';

export default class UserList extends React.Component {
  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      this._setActiveDiv("0"); //set first user in sorted list visually active on every update
    }
  }

  _onUserClick(user, index) {
    setTimeout(() => this._setActiveDiv(index)); //function to change background color of active div.
    this.props.onClick(user);
  }

  _setActiveDiv(i) {
    let divArray = document.querySelectorAll('[data-user]');
    for(let i = 0; i < divArray.length; i++) {
      divArray[i].classList.remove(styles.active); //remove active class from all
    }
    let activeDiv = document.getElementById(i);
    activeDiv && activeDiv.classList.add(styles.active); //insert active class on clicked div
  }

  render(){
    const { list, onClick, selectedUser }  = this.props;
    return(
      <div>
        <div className={styles.mobile}>
          <Select
            value={selectedUser || ''}
            onChange={(event) => onClick(event.target.value)}
            className={styles.dropDown}
          >
            {
              list.map((user, index) => <MenuItem key={index} value={user}>{user.name}</MenuItem>)
            }
          </Select>
        </div>
        <div className={styles.desktop}>
          {
            list.map((user,index) =>
            <div
              data-user='0'
              id={index}
              key={index}
              className={styles.user}
              onClick={() => this._onUserClick(user, index)}
            >{user.name}</div>)
          }
        </div>
      </div>
    )
  }
}
//validate prop types
UserList.propTypes = {
  onClick: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    employeeId: PropTypes.number,
    emailId: PropTypes.string,
    role: PropTypes.string,
    domain: PropTypes.string
  })),
  selectedUser: PropTypes.shape({
    name: PropTypes.string,
    employeeId: PropTypes.number,
    emailId: PropTypes.string,
    role: PropTypes.string,
    domain: PropTypes.string
  })
}
