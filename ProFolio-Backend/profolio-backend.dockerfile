# Use Amazon Corretto 17 as the base image
FROM amazoncorretto:17

# Set the working directory in the container
WORKDIR /profolio-backend

# Install Maven
RUN yum install -y maven

# Copy the pom.xml and project files to the container
COPY pom.xml .
COPY src ./src

# Build the application using Maven
RUN mvn clean install -DskipTests

# Expose the port the application runs on
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "target/portfoliobuilder-1.0.jar"]
