import React from 'react';
import PropTypes from 'prop-types';

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <footer className="py-5 bg-dark">
            <div className="container">
            <p className="m-0 text-center text-white">Copyright &copy; Your Website 2020</p>
            </div>
        </footer>
    );
}

export default Footer;