import { useContext } from 'react';
import { DataContext } from '../dataContext';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
	const { isLoggedIn } = useContext(DataContext);

	// If the user is not logged in,
	if (!isLoggedIn) {
		// return the user to AccessPage by replacing the current route with '/'.
		return <Navigate to='/' replace />;
	}
	// Otherwise, render the child route elements.
	return <Outlet />;
}

export default ProtectedRoute;
