//core imports
import React from 'react';
import PropTypes from 'prop-types';
//material ui imports
import Snackbar from '@material-ui/core/Snackbar';

export default class SnackBar extends React.Component {
  render() {
    const {open, message} = this.props;
    return(
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={open}
          autoHideDuration={2000}
          message={message}
        />
    </div>
    )
  }
}

//validate prop types
SnackBar.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string
}
