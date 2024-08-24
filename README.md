# Task Wizard Project

## Overview
Task Wizard is a comprehensive project management application built with a microservices architecture. The project is composed of three main components: the backend, frontend, and a PostgreSQL database. Each component is containerized using Docker, ensuring consistent behavior across different environments.

## Components

### Backend
The backend is a Spring Boot application responsible for handling all server-side operations. It communicates with the PostgreSQL database to perform CRUD (Create, Read, Update, Delete) operations on the tasks.

### Frontend
The frontend is a dynamic web application built with **React**. It provides a user-friendly interface for interacting with the Task Wizard system. The React application communicates with the backend to display, add, update, and delete tasks. React's component-based architecture allows for efficient updates and rendering, making the user interface interactive and responsive.

### Database
The PostgreSQL database stores all the task data. It is set up in its own Docker container and communicates with the backend to process database operations.

## Docker Network
All three components (backend, frontend, and database) are linked to a Docker network. This setup allows them to communicate with each other, enabling the frontend to send requests to the backend, which in turn interacts with the database.

## Getting Started

1. **Clone the repository**
    ```
    git clone https://github.com/katleholephallo/task-wizard.git
    ```

2. **Build the Docker images**
    ```
    docker-compose build
    ```

3. **Run the Docker containers**
    ```
    docker-compose up
    ```

You should now have the Task Wizard application running on your local machine!

## Contributing
We welcome contributions! Please see our Contributing Guidelines for more details.

## License
This project is licensed under the terms of the MIT license. See the LICENSE file for details.
