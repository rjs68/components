import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import { MyButton } from '../components/Button';

export const Button = ({ color, disabled, small, loading }) => {
  return (
      <MyButton color={color} disabled={disabled} small={small} loading={loading}>
        Test button
      </MyButton>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  loading: PropTypes.bool
};
