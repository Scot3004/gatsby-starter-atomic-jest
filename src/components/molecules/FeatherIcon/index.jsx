import React from 'react';
import feather from 'feather-icons';
import PropTypes from 'prop-types';
import NavIcon from '../../atoms/NavIcon';

const FeatherIcon = ({ name, size }) => {
  /* eslint-disable react/no-danger */
  return (
    <NavIcon
      dangerouslySetInnerHTML={{
        __html: feather.icons[name].toSvg({ width: size, height: size })
      }}
    />
  );
};

FeatherIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number
};

FeatherIcon.defaultProps = {
  size: 24
};

export default FeatherIcon;
