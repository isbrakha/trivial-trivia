import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation

const Footer = () => {
    const { logout } = useAuth0();
    const navigate = useNavigate();
    const location = useLocation(); // Use the useLocation hook

    const goHome = () => {
        navigate('/start');
    };

    return (
        <div className="footer-container">
            <div className="footer-inner">
                {location.pathname !== '/start' && (
                    <div className="text-wrapper" onClick={goHome}>
                        <h1 className="footer-text">Home</h1>
                    </div>
                )}
                <div className="text-wrapper" onClick={() => logout({ returnTo: window.location.origin })}>
                    <h1 className="footer-text">Log out</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;