import React from "react";

const HightlightText = ({ color, children }) => {
    return React.Children.map(children, child => {
        return React.cloneElement(child, { style : {color} });
    })
}

export default HightlightText;