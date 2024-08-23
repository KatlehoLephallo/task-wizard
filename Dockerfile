# Use an official Eclipse Temurin runtime as a parent image
FROM eclipse-temurin:21.0.2_13-jdk-jammy

# Set the working directory in the container to /task-wizard
WORKDIR /task-wizard

# Copy the .mvn directory and the Maven Wrapper (mvnw) and pom.xml files into the Docker image
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Run the Maven Wrapper command to download the project's dependencies
RUN ./mvnw dependency:go-offline

# Copy the src directory (which contains your application's source code) into the Docker image
# COPY backend/src ./src
# COPY backend ./
COPY backend ./backend

# Run the Maven Wrapper command to start the Spring Boot application when the Docker container starts up
CMD ["./mvnw", "spring-boot:run"]
