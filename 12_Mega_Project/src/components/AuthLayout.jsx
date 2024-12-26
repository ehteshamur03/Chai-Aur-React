import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import PropTypes from 'prop-types';

function AuthLayout({ authentication, children }) {
    const userData = useSelector((state) => state.auth.userData);

    // If authentication is required and user is not logged in, redirect to login
    if (authentication && !userData) {
        return <Navigate to="/login" />;
    }

    return <div>{children}</div>;

}
AuthLayout.propTypes = {
    authentication: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};
export default AuthLayout;

