import { Navigate } from 'react-router-dom';

export const ProtectedRouteEmployee = ({ children }) => {
    let localStorageData = localStorage.getItem('bibliotheek-itvitae-auth');

    let persistedState = {
        id: 0,
        username: '',
        displayName: '',
        password: '',
        role: '',
        isLoggedIn: false
    };

    if (localStorageData) {
        try {
            persistedState = JSON.parse(localStorageData);
        } catch (error) {

        }
    }

    if (!persistedState.role.includes("OWNER") && !persistedState.role.includes("EMPLOYEE")) {
        return <Navigate to="/homepage" replace />;
    }

    return children;
};