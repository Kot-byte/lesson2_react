import React from 'react';

const Panel = ({ title, isOpen, onClick, children }) => {
  return (
    <div className={`panel ${isOpen ? 'open' : ''}`}>
      <div className="panel-header" onClick={onClick}>
        <h2>{title}</h2>
        <span className="panel-icon">{isOpen ? '-' : '+'}</span>
      </div>
      <div className="panel-content">{isOpen && children}</div>
    </div>
  );
};

export default Panel;
