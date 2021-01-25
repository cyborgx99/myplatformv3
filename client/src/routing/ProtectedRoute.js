import { useSelector } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) =>
        rest.roles.includes(auth.user.role) ||
        props.match.params.studentId === auth.user._id ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location, red: 'red' },
            }}
          />
        )
      }
    />
  );
};

ProtectedRoute.defaultProps = {
  roles: '',
};

ProtectedRoute.propTypes = {
  roles: PropTypes.array.isRequired,
};

export default ProtectedRoute;
