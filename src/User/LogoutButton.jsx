import React, { useContext } from 'react';
import UserContext from './UserContext';

function LogoutButton() {
    const { logout } = useContext(UserContext);

    return <button onClick={logout}>Logout</button>;
}

export default LogoutButton;
