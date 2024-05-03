import React from 'react';

const MessageBox = ({ value, onChange, onBlur ,placeholder="Type your message here"}) => {
  return (
    <label>
      Message:
      <textarea
        name="message"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={{ height: '100px', width: '600px',fontSize: '14px' }}
        className="form-input"
        placeholder={placeholder}
    
      />
    </label>
  );
};

export default MessageBox;
