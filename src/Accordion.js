import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ children }) => {
  const [openPanelIndex, setOpenPanelIndex] = useState(null);

  const togglePanel = (index) => {
    setOpenPanelIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {React.Children.map(children, (child, index) => {
        const isOpen = openPanelIndex === index;
        return React.cloneElement(child, {
          isOpen,
          onClick: () => togglePanel(index),
        });
      })}
    </div>
  );
};

export default Accordion;
