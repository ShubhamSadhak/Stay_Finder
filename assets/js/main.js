// // StayFinder Main JavaScript

// // Utility functions
// const StayFinder = {
//     // Initialize the application
//     init() {
//         this.setupNavigation();
//         this.setupForms();
//         this.setupAnimations();
//     },

//     // Setup navigation functionality
//     setupNavigation() {
//         // Mobile menu toggle
//         const mobileMenuButton = document.querySelector('[aria-label="Open main menu"]');
//         const mobileMenu = document.querySelector('.mobile-menu');
        
//         if (mobileMenuButton && mobileMenu) {
//             mobileMenuButton.addEventListener('click', () => {
//                 mobileMenu.classList.toggle('hidden');
//             });
//         }

//         // Active navigation highlighting
//         const currentPage = window.location.pathname;
//         const navLinks = document.querySelectorAll('.nav-link');
        
//         navLinks.forEach(link => {
//             if (link.getAttribute('href') === currentPage) {
//                 link.classList.add('nav-link-active');
//             }
//         });
//     },

//     // Setup form handling
//     setupForms() {
//         const forms = document.querySelectorAll('form');
        
//         forms.forEach(form => {
//             form.addEventListener('submit', (e) => {
//                 e.preventDefault();
//                 this.handleFormSubmit(form);
//             });
//         });
//     },

//     // Handle form submissions
//     handleFormSubmit(form) {
//         const formData = new FormData(form);
//         const data = Object.fromEntries(formData);
        
//         // Show loading state
//         const submitButton = form.querySelector('button[type="submit"]');
//         if (submitButton) {
//             submitButton.disabled = true;
//             submitButton.textContent = 'Processing...';
//         }

//         // Simulate API call
//         setTimeout(() => {
//             console.log('Form data:', data);
            
//             // Reset form
//             form.reset();
            
//             // Reset button
//             if (submitButton) {
//                 submitButton.disabled = false;
//                 submitButton.textContent = 'Submit';
//             }
            
//             // Show success message
//             this.showNotification('Form submitted successfully!', 'success');
//         }, 1000);
//     },

//     // Setup animations
//     setupAnimations() {
//         // Intersection Observer for fade-in animations
//         const observerOptions = {
//             threshold: 0.1,
//             rootMargin: '0px 0px -50px 0px'
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('fade-in');
//                 }
//             });
//         }, observerOptions);

//         // Observe elements with animation classes
//         const animatedElements = document.querySelectorAll('.animate-on-scroll');
//         animatedElements.forEach(el => observer.observe(el));
//     },

//     // Show notifications
//     showNotification(message, type = 'info') {
//         const notification = document.createElement('div');
//         notification.className = `fixed top-4 right-4 p-4 rounded-md shadow-lg z-50 ${
//             type === 'success' ? 'bg-green-500 text-white' :
//             type === 'error' ? 'bg-red-500 text-white' :
//             'bg-blue-500 text-white'
//         }`;
//         notification.textContent = message;

//         document.body.appendChild(notification);

//         // Remove notification after 3 seconds
//         setTimeout(() => {
//             notification.remove();
//         }, 3000);
//     },

//     // Search functionality
//     searchPGs(filters) {
//         console.log('Searching PGs with filters:', filters);
//         // This would typically make an API call
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve([
//                     {
//                         id: 1,
//                         name: 'Comfort Stay PG',
//                         location: 'Koramangala, Bangalore',
//                         price: '₹12,000/mo',
//                         rating: 4.8,
//                         amenities: ['WiFi', 'AC', 'Food', 'Laundry']
//                     }
//                 ]);
//             }, 500);
//         });
//     },

//     // Utility function to format currency
//     formatCurrency(amount) {
//         return new Intl.NumberFormat('en-IN', {
//             style: 'currency',
//             currency: 'INR',
//             minimumFractionDigits: 0
//         }).format(amount);
//     },

//     // Utility function to validate email
//     validateEmail(email) {
//         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return re.test(email);
//     }
// };

// // Initialize when DOM is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     StayFinder.init();
// });

// // Export for use in other modules
// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = StayFinder;
// } 