import React from 'react';

const Icon = ({ icon }) => {
  return React.cloneElement(icon, { style: { fontSize: '24px', color: 'black' } });
};

export default Icon;
