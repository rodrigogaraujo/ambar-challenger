import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import DefaultLayout from '~/pages/_layouts/default';

export default function Router({
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
}

Router.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

Router.defaultProps = {
  isPrivate: false,
  component: null,
};
