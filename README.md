# Job Board Application

## Overview

This web application is a job board that allows users to view, filter, add, edit, and delete job listings. It's built using React and demonstrates a modular, component-based architecture.  This project showcases my ability to create a dynamic and interactive web application using modern front-end technologies.

## Features

* **Job Listings:** Displays a list of jobs with key details: name, status, and task description.
* **Conditional Rendering:** Job items are styled dynamically based on their status (e.g., "Running," "Completed," "Stopped") to provide a clear visual representation of their state.
* **Filtering:**
  * **Name Search:** Users can filter jobs by name using a search input for quick and easy location of specific listings.
  * **Status Filter:** Users can filter jobs by their status.
* **Job Management:**
  * **Adding Jobs:** Users can add new job listings with a unique ID, name, status, and task description.  Input validation ensures data integrity.
  * **Editing Jobs:** Users can modify existing job listings to update their details.
  * **Deleting Jobs:** Users can remove job listings.
* **Show/Hide Functionality:** Users can toggle the visibility of the job list.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **CSS:** For styling the application, including custom styles and conditional status styling.

## Project Structure

    job-board-application/
    ├── public/
    │   ├── index.html
    │   └── ...
    ├── src/
    │   ├── App.js
    │   ├── index.js
    │   ├── index.css
    │   ├── App.css
    │   ├── images/
    │   │   └── job-board-app-pic.png
    │   ├── component/
    │   │   ├── Footer.js
    │   │   ├── Header.js
    │   │   ├── JobForm.js
    │   │   ├── JobItem.js
    │   │   ├── JobItem.css
    │   │   ├── JobList.js
    │   │   └── JobList.css
    │   └── ...
    ├── package.json
    └── README.md

## Component Overview

* **App:** The main application component.  It orchestrates the overall layout, rendering the header, job list, and footer, and manages the central job data.
* **Header:** Displays the application title and logo, providing consistent branding.
* **Footer:** Displays copyright and developer information.
* **JobList:** Manages the presentation and interaction of job listings.  It handles filtering, adding, editing, and deleting jobs, and renders individual `JobItem` components.
* **JobItem:** Displays the details of a single job listing.  It includes interactive elements for editing and deleting jobs and uses conditional styling to reflect job status.
* **JobForm:** Provides a user-friendly form for adding new job listings, with input validation.

## Styling

* **CSS Modules:** Employed for modular and maintainable styling.  Each component has its own CSS file (e.g., `JobItem.css`, `JobList.css`) to scope styles and prevent conflicts.
* **Conditional Status Styling:** Job items are styled dynamically based on their status ("Running," "Completed," "Stopped") to provide a clear visual representation of their state.

## Setup Instructions

1. **Clone the repository:**

        bash
        git clone <repository_url>
  
2. **Navigate to the project directory:**

        bash
        cd job-board-application

3. **Install dependencies:**

        bash
        npm install

4. **Run the application:**

        bash
        npm start

    The application will be accessible at `http://localhost:3000`.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Credits

* Christina Browne

## Author Notes

This project was created by Christina Browne as a demonstration of React skills.
