# Job Listing Frontend Application

This project is a Job Listing Frontend Application built using React, following the tutorial by Traversy Media. The application allows users to view, delete and edit job listings from an API.

## Features

- **Job Listings Display**: Fetches and displays a list of job openings with details such as position, company, location, and requirements.
- **Filtering Options**: Users can add, update and delete the job listings.
- **Responsive Design**: Optimized for various screen sizes, ensuring a seamless experience on both desktop and mobile devices.
- **Toast Notifications**: Uses `react-toastify` to display real-time notifications.
- **Loading Spinners**: Implements `react-spinners` for better user experience during data loading.
- **Routing**: Utilizes `react-router-dom` for navigation between pages.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/puyafazlali/react-job.git
   cd job-listing-frontend
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm run dev
   ```

   The application will be accessible at `http://localhost:3000`.

4. **Start the JSON Server** (for mock job listings API):

   ```bash
   npm run server
   ```

   The mock API will be available at `http://localhost:8000`.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend tooling for faster builds.
- **Tailwind CSS**: Utility-first CSS framework for styling components.
- **React Icons**: Library for using icons in React applications.
- **React Router DOM**: Enables routing in the application.
- **React Spinners**: Provides loading animations.
- **React Toastify**: Displays toast notifications.
- **ESLint**: Helps maintain code quality.
- **JSON Server**: Mocks backend API for job listings.

## Project Structure

The project follows a standard React application structure:

- `src/`: Contains all source code.
  - `components/`: Reusable UI components.
  - `pages/`: Individual pages for the application.
  - `layouts/`: Layout components for structuring pages.
  - `assets/`: Static data for job listings.
  - `jobs.json`: Mock job data for JSON Server.
  - `App.js`: Main application component.
  - `index.js`: Entry point of the application.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
