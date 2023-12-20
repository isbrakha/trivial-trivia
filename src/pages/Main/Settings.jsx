import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Settings = () => {
    const { user, isAuthenticated, logout, login } = useAuth0();

    if (!isAuthenticated) {
        return <div>
            Please log in to see settings.
            <div>
                <Link to ='/'>Go to Log In Page</Link>
            </div>
        </div>;
    }

    return (
        <div className="user-dropdown">
            <span>{user.name}</span> {/* Display the user's name */}
            <button onClick={() => logout()}>Sign Out</button>
        

        </div>
    );
};

export default Settings;
