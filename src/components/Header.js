import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
      <nav class="navbar navbar-dark bg-primary" />
    </div>
  );
};

Header.defaultProps = {
  branding: 'My app'
};

export default Header;
