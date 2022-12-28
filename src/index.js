import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// check if a theme preference has been stored in local storage and apply the body class if so
(function() {
    const theme = localStorage.getItem('theme') || null;

    if (theme) {
        document.querySelector('body').className = theme;
    }

})();

root.render(
    <App />
);

