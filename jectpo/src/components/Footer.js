import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-6">
            <div className="container mx-auto text-center text-white">
                <p className="text-sm">Jabalpur Engineering College &copy; {new Date().getFullYear()}</p>
                <p className="mt-2 text-xs">Gokalpur, Jabalpur, Madhya Pradesh, India - 482005</p>
                <p className="mt-2 text-xs">Email: contact@jecjabalpur.ac.in</p>
            </div>
        </footer>
    );
};

export default Footer;
