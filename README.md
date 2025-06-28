# StayFinder - PG Accommodation Aggregator

A modern web application for finding and comparing PG (Paying Guest) accommodations across Indian cities.

## Project Structure

```
StayFinder/
├── index.html              # Main homepage
├── pages/                  # All HTML pages
│   ├── about-us.html       # About Us page
│   ├── cookiepolicy.html   # Cookie Policy
│   ├── explore.html        # PG exploration page
│   ├── FAQs.html          # Frequently Asked Questions
│   ├── forget.html        # Forgot password page
│   ├── howitswork.html    # How it works page
│   ├── listurproperty.html # List your property page
│   ├── ownerdashboard.html # Owner dashboard
│   ├── pricingplans.html  # Pricing plans
│   ├── privacypolicy.html # Privacy policy
│   ├── refundpolicy.html  # Refund policy
│   ├── signin.html        # Sign in page
│   ├── signup.html        # Sign up page
│   └── termsofservice.html # Terms of service
├── assets/                 # Static assets
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript files
│   └── images/            # Images and icons
└── README.md              # This file
```

## Features

- **Homepage**: Search functionality with location, budget, and occupancy filters
- **Explore**: Browse and compare PG accommodations
- **User Authentication**: Sign up, sign in, and password recovery
- **Property Management**: List and manage properties for owners
- **Information Pages**: About us, how it works, FAQs, and policies

## Technology Stack

- **Frontend**: HTML5, CSS3, Tailwind CSS
- **Styling**: Tailwind CSS for responsive design
- **Fonts**: Google Fonts (Poppins)
- **Icons**: SVG icons and Heroicons

## Getting Started

1. Clone the repository
2. Open `index.html` in your web browser
3. Navigate through the different pages using the navigation menu

## Navigation Structure

- **Home** (`index.html`): Main landing page with search functionality
- **Explore** (`pages/explore.html`): Browse PG listings
- **How it Works** (`pages/howitswork.html`): Process explanation
- **About Us** (`pages/about-us.html`): Company information
- **Sign In** (`pages/signin.html`): User authentication
- **Sign Up** (`pages/signup.html`): User registration

## File Naming Convention

- All HTML files use kebab-case (e.g., `about-us.html`)
- No spaces in filenames for better compatibility
- Consistent naming across all pages

## Path Resolution

- Main `index.html` uses `pages/` prefix for internal links
- Pages in `pages/` directory use `../` to reference the main index
- Internal page links use relative paths within the same directory

## Development Notes

- All pages are responsive and mobile-friendly
- Consistent navigation structure across all pages
- Tailwind CSS classes for styling
- SVG icons for better performance and scalability