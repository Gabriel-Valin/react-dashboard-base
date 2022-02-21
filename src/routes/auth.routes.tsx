import { Navigate, Outlet } from 'react-router-dom';
import Layout from '../components/Layout';
import { useAuth } from '../hooks/auth';

export const PrivateRoute = () => {
    const { isLogged } = useAuth(); // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isLogged ? <Layout><Outlet /></Layout> : <Navigate to="/login" />;
}