// // public/js/navbar.js
// document.addEventListener('DOMContentLoaded', function () {
//     console.log('Navbar.js loaded');

//     const body = document.body;
//     const darkModeBtn = document.getElementById('dark-mode-btn');

//     if (darkModeBtn) {
//         console.log('Dark Mode button found');
//         darkModeBtn.addEventListener('click', function () {
//             console.log('Button clicked');
//             body.classList.toggle('dark-mode');
//             const isDarkMode = body.classList.contains('dark-mode');
//             console.log(`Dark Mode: ${isDarkMode}`);
//             const newMode = isDarkMode ? 'enabled' : 'disabled';
//             localStorage.setItem('darkMode', newMode);
//         });
//     } else {
//         console.log('Dark Mode button not found');
//     }
// });

/****** jQUERY ************ */
$(document).ready(function() {
    const body = $('body');
    const toggleBtn = $('#dark-mode-btn');

    // Check localStorage for the user's preferred theme
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        body.addClass('dark-mode');
    }

    // Toggle between dark and light modes on button click
    toggleBtn.click(function() {
        body.toggleClass('dark-mode');

        // Update localStorage to remember the user's preference
        const newMode = body.hasClass('dark-mode') ? 'enabled' : 'disabled';
        localStorage.setItem('darkMode', newMode);
    });
});

// $(document).ready(function() {
//     const body = $('body');
//     $('#toggle-btn').click(function() {
//         body.toggleClass('dark-mode');
//     });
// });

// public/js/navbar.js
// $(document).ready(function() {
//     const body = $('body');
//     const darkModeBtn = $('#toggle-btn');

//     darkModeBtn.click(function() {
//         body.toggleClass('dark-mode');
//         const newMode = body.hasClass('dark-mode') ? 'enabled' : 'disabled';
//         localStorage.setItem('darkMode', newMode);
//     });
// });
