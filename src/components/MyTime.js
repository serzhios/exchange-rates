import React from 'react';

const date = new Date()
const det = date.toLocaleDateString()
const dates = {
    fontSize: '1rem',
    paddingBottom: '1.5rem'
}

const MyTime = () => {
    return (
        <div style={dates}>
            <b>{det}</b>
        </div>
    );
};

export default MyTime;