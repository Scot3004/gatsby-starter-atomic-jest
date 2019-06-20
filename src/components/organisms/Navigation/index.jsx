import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Card from '../../atoms/Card';
import CardContent from '../../atoms/CardContent';
import FeatherIcon from '../../molecules/FeatherIcon';

export const Navigation = ({ menuLinks }) => (
  <Card>
    <CardContent>
      {menuLinks.map(link => (
        <Link to={link.link} key={link.name}>
          <FeatherIcon name={link.icon} />
          {link.name}
        </Link>
      ))}
    </CardContent>
  </Card>
);

Navigation.propTypes = {
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string
    })
  ).isRequired
};

export default Navigation;
