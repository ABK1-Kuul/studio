
# HDM Xperts - Next.js Application

This is a Next.js application for HDM Xperts, a platform to connect clients with expert consultants.

## Developed By

This project was developed by **Abdselam Kedir**, an Xpert at HDM.

## Getting Started Locally

Follow these steps to get the project running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (v18.x or later recommended)
*   npm or yarn

### Installation & Running

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <your-repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will start the Next.js development server, typically on `http://localhost:3000` (or `http://localhost:9002` as specified in your `package.json`). Open this URL in your web browser to see the application.

4.  **(Optional) Running Genkit Dev Server:**
    If you are working with Genkit AI flows, you might need to run the Genkit development server in a separate terminal:
    ```bash
    npm run genkit:dev
    # or for watching changes
    npm run genkit:watch
    ```

## Building for Production

To create an optimized production build:
```bash
npm run build
# or
yarn build
```
This command generates a `.next` folder containing the production-ready application.

## Deploying to cPanel

Deploying a Next.js application to a cPanel hosting environment typically involves setting up a Node.js application server.

### Prerequisites for cPanel Deployment

*   Your cPanel hosting must support Node.js applications (often via "Setup Node.js App" or a similar interface).
*   SSH access might be helpful for troubleshooting but is not always strictly necessary if cPanel's tools are comprehensive.

### Deployment Steps

1.  **Build the Project:**
    Ensure you have a production build of your application. Run the following command locally or on your build server:
    ```bash
    npm run build
    ```

2.  **Prepare `server.js`:**
    This project includes a `server.js` file in the root directory. This file is a custom Node.js server script to run your Next.js application. Ensure this file is present in your project root.

3.  **Upload Project Files to cPanel:**
    *   Compress your project directory into a `.zip` file. Make sure to include:
        *   The `.next` folder (from the production build)
        *   The `public` folder
        *   `package.json`
        *   `package-lock.json` (or `yarn.lock`)
        *   `next.config.js`
        *   `server.js`
        *   Any other necessary configuration files (e.g., `.env.production` if used, though environment variables are better managed via cPanel's interface).
    *   **Do NOT include the `node_modules` folder in your zip.**
    *   Upload the `.zip` file to your desired application directory on the server (e.g., `/home/your_cpanel_user/your_next_app`) using cPanel's File Manager.
    *   Extract the `.zip` file in the File Manager.

4.  **Set Up Node.js Application in cPanel:**
    *   Log in to your cPanel.
    *   Find and open the "Setup Node.js App" (or similar named) tool.
    *   Click "Create Application":
        *   **Node.js version:** Select a recent LTS version (e.g., 18.x, 20.x).
        *   **Application mode:** Set to "Production".
        *   **Application root:** Enter the path to the directory where you uploaded your project files (e.g., `/home/your_cpanel_user/your_next_app`).
        *   **Application URL:** Select the domain or subdomain you want your application to be accessible from.
        *   **Application startup file:** Enter `server.js`.
    *   Click "Create".

5.  **Install Dependencies on the Server:**
    *   Once the application is created in the cPanel interface, scroll down to the section for your app.
    *   There should be an option to "Run NPM Install". Click this to install the production dependencies defined in your `package.json`. This will create the `node_modules` folder on the server.

6.  **Set Environment Variables (if needed):**
    *   If your application requires environment variables (e.g., for API keys, database connections), add them using the "Environment Variables" section in the cPanel Node.js app interface.
    *   For example, `PORT` is often automatically provided by cPanel, but you might need `NODE_ENV=production`.

7.  **Start/Restart the Application:**
    *   In the cPanel Node.js app interface, click "Restart" (or "Start" if it wasn't started automatically).
    *   Check the logs provided in the cPanel interface for any startup errors.

8.  **`.htaccess` Configuration (if needed for routing):**
    *   cPanel often uses Apache with Phusion Passenger. Passenger might automatically configure routing.
    *   However, if your application is not at the root of the domain or if you face routing issues, you might need to add an `.htaccess` file in the public-facing directory that your "Application URL" points to (e.g., `public_html` or `public_html/your_app_subdirectory`).
    *   A common `.htaccess` configuration for proxying to a Node.js app (where `YOUR_APP_PORT` is the port your Node.js app is internally running on, often managed by Passenger and not explicitly set by you in this cPanel setup):
        ```apache
        # This .htaccess might not be strictly necessary if Passenger handles routing correctly.
        # PassengerEnabled on
        # PassengerAppRoot /home/your_cpanel_user/your_next_app
        # PassengerAppType node
        # PassengerStartupFile server.js
        ```
        Often, the "Setup Node.js App" tool in cPanel handles the necessary Passenger configuration, and you might only need to ensure your Application URL is correctly mapped to the public directory.

9.  **Verify:**
    *   Open your application URL in a browser to ensure it's working correctly.

### Troubleshooting cPanel Deployment

*   **Check Logs:** The cPanel Node.js app interface usually provides access to `stderr` and `stdout` logs. These are crucial for diagnosing issues.
*   **Node.js Version:** Ensure the Node.js version selected in cPanel is compatible with your project and its dependencies.
*   **File Paths:** Double-check all paths in your cPanel configuration (Application Root, Startup File).
*   **`package.json`:** Ensure your `start` script in `package.json` is suitable (e.g., `next start`) or that your `server.js` correctly starts the Next.js production server. For this project, `server.js` handles it.
*   **Hosting Provider Documentation:** Consult your hosting provider's specific documentation for deploying Node.js applications, as they may have unique configurations or recommendations.

This guide provides a general approach. Specific steps might vary slightly based on your cPanel version and your hosting provider's setup.
