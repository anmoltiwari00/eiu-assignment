//core imports
import React from 'react';
import PropTypes from 'prop-types';
//material ui imports
import TextField from '@material-ui/core/TextField';

export default class Input extends React.Component {
  render() {
    const { placeholder, disabled, onChange, value } = this.props; //component props
    return(
      <div>
        <TextField
          label={placeholder}
          variant="outlined"
          disabled={disabled}
          value={value}
          style={{
            width: '90%',
            marginBottom: '15px'
          }}
          onChange={(e) => onChange(e)}
        />
      </div>
    )
  }
}

//validate prop types
Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}
