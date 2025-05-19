# Job Board Application

## Overview

This web application is a job board that allows users to view, filter, add, edit, and delete job listings. It's built using React and demonstrates a modular component-based architecture.

## Features

* **Job Listings:** Displays a list of jobs with details such as name, status, and task.
* **Conditional Rendering:** Job items are styled differently based on their status (e.g., "Running," "Completed," "Stopped").
* **Filtering:** Users can filter jobs by name using a search input.
* **Adding Jobs:** Users can add new job listings with an ID, name, status, and task. Input validation is included.
* **Editing Jobs:** Users can edit existing job listings.
* **Deleting Jobs:** Users can delete job listings.
* **Status Toggle:** Users can show/hide the job list.
* **Status Filtering**: Users can filter jobs by their status.

## Technologies Used

* React
* CSS

## Screenshots

[Image of the Job Board Application]

## Setup Instructions

1. **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```
  
2. **Navigate to the project directory:**

    ```bash
    cd job-board-application
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Run the application:**

    ```bash
    npm start
    ```

    The application will be accessible at `http://localhost:3000`.

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

* **App:** The main application component that renders the header, job list, and footer. It also manages the main job data.
* **Header:** Displays the application title and logo.
* **Footer:** Displays the application's footer information.
* **JobList:** Manages the list of jobs, filtering, adding, editing, and deleting jobs. It renders `JobItem` components.
* **JobItem:** Displays individual job details and provides interactive buttons for editing and deleting jobs.
* **JobForm:** Provides the form for adding new jobs.

## Styling

* CSS Modules are used for styling.  Each component that requires styling has its own associated CSS file (e.g., `JobItem.css`, `JobList.css`).
* The styling includes conditional rendering for job statuses, where jobs are styled differently depending on whether they are "Running", "Completed", or "Stopped".

## Future Enhancements

* Add more comprehensive unit tests.
* Implement user authentication.
* Connect to a backend API to persist job data.
* Add pagination for large job lists.
* Implement more advanced filtering and sorting options.
* Improve the user interface and user experience.

## Credits

* Christina Browne

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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
