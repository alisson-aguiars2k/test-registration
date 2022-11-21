import { useNavigate } from 'react-router-dom';
import './styles.css';

export const Logo = () => {
    const navigate = useNavigate();

    return (
        <div className="logo" onClick={() => navigate('/')}>
            
        </div>
    );
}