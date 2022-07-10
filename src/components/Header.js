import React from 'react';

const Title = {
    color: 'red',
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    paddingTop: '10px'
}

const Header = () => {
    return (
        <div>
            <h1 style={Title}>Курс валют</h1>
        </div>
    );
};

export default Header;