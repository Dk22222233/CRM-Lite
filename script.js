// ================================================================
// Fast CRM Website - Minimal JavaScript
// ================================================================
// This file contains only essential functionality.
// Most functionality is pure HTML and CSS.

document.addEventListener('DOMContentLoaded', function () {
    // Highlight active navigation link based on current page
    highlightActiveNavLink();
});

/**
 * Highlight the active navigation link based on the current page
 */
function highlightActiveNavLink() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.classList.remove('active');

        // Get the href from the link
        const href = link.getAttribute('href');

        // Check if the current page matches the link
        if (currentPage.includes(href) || 
            (href === 'index.html' && currentPage.endsWith('/')) ||
            (href.endsWith('.html') && currentPage.endsWith(href))) {
            link.classList.add('active');
        }
    });
}

/**
 * Optional: Smooth scroll behavior for anchor links
 * This is already handled by: html { scroll-behavior: smooth; }
 * But you can add additional functionality here if needed.
 */

/**
 * Optional: Track page views or events
 * Uncomment and customize based on your analytics service
 */

// Example: Send page view event to analytics
// if (typeof gtag !== 'undefined') {
//     gtag('config', '[YOUR_TRACKING_ID]', {
//         'page_title': document.title,
//         'page_path': window.location.pathname
//     });
// }

/**
 * Optional: Add any custom interactivity below
 * Keep it minimal to maintain fast performance
 */

// Example: Handle email links with subject prefilling
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function (e) {
        // You can add custom behavior here if needed
        // For now, default browser behavior is sufficient
    });
});
