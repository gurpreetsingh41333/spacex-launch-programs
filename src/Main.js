import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

import ErrorBoundary from './components/ErrorBoundry';

const Main = ({ route }) => <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>;

Main.propTypes = {
  route: PropTypes.objectOf(PropTypes.any),
};

Main.defaultProps = {
  route: null,
};

export default {
  component: Main,
};
