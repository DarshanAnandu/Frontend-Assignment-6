// components/Dropdown.js
"use client"
import React, { useState } from 'react';

const Dropdown = ({ title, items }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(true);

    // const showDropdown = () => {
    //     setDropdownVisible(true);
    // };

    const hideDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="dropdown" onMouseLeave={hideDropdown} onClick={() => { console.log("click") }}>
            <div className="dropdown-toggle" onMouseEnter={() => { console.log("entered") }}>
                {title}
                <img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/649e4c3d5f0708ca6cd80bba_logoHorizonalLight.svg"
                    loading="lazy" width="483" alt="logo-horizonal-light" className="navbar_logo" />
            </div>
            {isDropdownVisible && (
                <div className="dropdown-list">
                    {items.map((item, index) => (
                        <div key={index} className="dropdown-item">
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
