# Technical Documentation — Assignment 2

## 1. Project Overview

This project is a personal portfolio website developed using HTML, CSS, and JavaScript. It introduces me as a junior Computer Science student and presents my projects, skills, and interests.

For Assignment 2, I improved my previous portfolio by adding interactive navigation, expandable project details, form validation, and animations to make the website more interactive and user-friendly.

## 2. Technologies Used

- **HTML5:** Used to create the website structure, sections, project descriptions, images, and contact form.
- **CSS3:** Used for colors, layout, responsive design, dark mode, hover effects, and animations.
- **JavaScript:** Used to handle button clicks, switch between sections, show and hide project details, validate form inputs, and prepare email messages.
- **GitHub:** Used for version control and storing the project files.
- **GitHub Pages:** Used to publish the website online.

## 3. Project Structure

- `index.html` — Contains the main website structure and content.
- `css/styles.css` — Contains the website styling, animations, dark mode, and responsive layout.
- `js/script.js` — Contains the JavaScript code for the interactive features.
- `assets/images/` — Contains project images and prototype screenshots.
- `README.md` — Provides an overview of the project and setup instructions.
- `docs/ai-usage-report.md` — Explains how AI tools were used during development.
- `docs/technical-documentation.md` — Explains the technical implementation of the website.

## 4. Website Sections

### About Me

Introduces me as a junior Computer Science student and describes my interests in technology, cybersecurity, software development, and fashion.

### Projects

Displays two projects:

1. Smart Solar Cleaning System (SCC)
2. Plant Care App — Prototype

Each project includes an image, a description, and a View Details button.

The Plant Care project also includes a gallery of prototype screenshots.

### My Skills

Displays my technical skills, professional skills, and personal interests.

### Contact

Includes a contact form with Name, Email, and Message fields. Visitors can also contact me using the displayed email address.

## 5. Interactive Features

### 5.1 Section Navigation

JavaScript uses `addEventListener()` to detect when a navigation button is clicked.

The selected section becomes visible while the other sections are hidden using the `hidden` property.

The active button is also highlighted using a CSS class.

### 5.2 Expandable Project Details

Each project has a View Details button.

When clicked, JavaScript shows additional information about the project and changes the button text to Hide Details.

Clicking again hides the information.

### 5.3 Dark and Light Mode

The theme button uses JavaScript to add or remove the `dark-mode` CSS class from the page.

CSS changes the background, text, and section colors based on the selected mode.

### 5.4 Contact Form Validation

The contact form uses JavaScript to check the user's input.

- If a field is empty, an error message appears.
- If the email format is invalid, an error message appears.
- If all fields are valid, a confirmation message appears.

After successful validation, JavaScript uses `mailto:` to prepare an email addressed to the portfolio owner.

The user must send the email from their email application. The website does not send messages automatically.

## 6. Data Handling

The website handles data entered by users through the contact form.

JavaScript reads the values of the Name, Email, and Message fields using `getElementById()` and `.value`.

The `.trim()` method removes extra spaces before validation.

The form data is used to prepare an email message. The website does not store the submitted information in a database.

## 7. Error Handling and User Feedback

The contact form displays clear messages when the user leaves fields empty or enters an invalid email address.

If the input is valid, the website displays a confirmation message before attempting to open the user's email application.

## 8. Animations and Responsive Design

CSS transitions are used to create smooth hover effects on buttons and project cards.

A fade-in animation is used when displaying website sections.

Media queries adjust the layout for smaller screens, including mobile devices.

The prototype gallery displays images in two columns on larger screens and one column on smaller screens.

## 9. Running the Website Locally

1. Download or clone the GitHub repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Use the navigation buttons to explore the website.

No additional libraries or installations are required.

## 10. Deployment

The website is deployed using GitHub Pages from the `main` branch.

Live website:

https://joudaziz612.github.io/202338270-joudaziz-assignment2/