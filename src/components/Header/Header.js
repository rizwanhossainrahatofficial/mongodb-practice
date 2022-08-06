import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/users">user</Link>
            <Link to="/users/add"> add</Link>
        </div>
    );
};

export default Header;