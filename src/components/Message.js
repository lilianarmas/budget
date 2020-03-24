import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => (

    <p className="alert alert-danger error">{message}</p>
);

Message.propTypes = {
    message: PropTypes.string.isRequired
}

export default Message;
