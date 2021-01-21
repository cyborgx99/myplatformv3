import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        rest.roles.includes(auth.user.role) ||
        rest.studentId === auth.user._id ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location, red: 'red' },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
