// JavaScript for Bus Ticket App

document.addEventListener('DOMContentLoaded', function() {
    // Copy button functionality
    const copyButton = document.querySelector('.copy-button');
    const tripCode = document.querySelector('.trip-code-number').textContent;
    
    copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(tripCode)
            .then(() => {
                // Visual feedback for copy action
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    });
    
    // Back button functionality
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', function() {
        // In a real app, this would navigate back
        alert('Back button clicked');
    });
    
    // Phone back arrow functionality
    const phoneBackArrow = document.querySelector('.back-arrow');
    phoneBackArrow.addEventListener('click', function() {
        // In a real app, this would navigate back within the phone UI
        alert('Phone back arrow clicked');
    });
    
    // Done button functionality
    const doneButton = document.querySelector('.done-button');
    doneButton.addEventListener('click', function() {
        // In a real app, this would complete the process
        alert('Done button clicked');
    });
    
    // Continue Tracking Bus button functionality
    const trackingButton = document.querySelector('.tracking-button');
    trackingButton.addEventListener('click', function() {
        // In a real app, this would navigate to tracking page
        alert('Continue Tracking Bus clicked');
    });
    
    // Download Ticket button functionality
    const downloadButton = document.querySelector('.download-button');
    downloadButton.addEventListener('click', function() {
        // In a real app, this would download the ticket
        alert('Download Ticket clicked');
    });
    
    // Bottom navigation functionality
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(navItem => navItem.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
            
            // In a real app, this would navigate to the respective section
            const navName = this.querySelector('span').textContent;
            alert(`${navName} navigation clicked`);
        });
    });
});
