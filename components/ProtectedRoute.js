import React from 'react';
import { Route, Redirect } from 'react-router-native';
import { connect } from 'react-redux';

const ProtectedRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated
      ? 
      (<Component {...props} />)
      : 
      (
        <Redirect
          to={{
            pathname: '/login',
            state: {from: props.location}
          }}
        />
      )
    )}
  />
)

const mapStatetoProps = state => {
  return { isAuthenticated: state.user.id }
}

export default connect(mapStatetoProps)(ProtectedRoute)