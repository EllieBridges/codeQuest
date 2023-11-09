import { useNavigate } from 'react-router-dom';


const ProtectedRoute = ({ children }) => {

    const navigate = useNavigate();
    const userToken = sessionStorage.getItem('userToken');
    if (!userToken || userToken === 'undefined') {
        return navigate('/login');
    }
    return children;
};

export default ProtectedRoute;