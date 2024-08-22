import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return <p>Belum login</p>;
    }

    return (
        <div>
            <h2>Profil Pengguna</h2>
            <p>Username: {user.username}</p>
        </div>
    );
}

export default UserProfile;
