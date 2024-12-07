import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css'; // Import the CSS file for styles

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button 
                className="mt-1 ml-1 p-2 rounded login-btn" 
                onClick={toggleDropdown}
            >
                Login ↓
            </button>
            <div 
                className={`absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg z-10 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100">My Profile</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Flipkart Plus Zone</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Orders</li>
                    <li className="px-4 py-2 hover:bg-gray-100">WishList</li>
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;