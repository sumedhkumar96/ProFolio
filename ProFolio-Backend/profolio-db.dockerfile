# Use MySQL as the base image
FROM mysql:latest

# Environment variable to set root password
ENV MYSQL_ROOT_PASSWORD=password

# Environment variable to create a database on container startup
ENV MYSQL_DATABASE=profolio

# Expose MySQL default port
EXPOSE 3306