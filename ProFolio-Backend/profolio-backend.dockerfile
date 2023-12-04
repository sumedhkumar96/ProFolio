# Use Amazon Corretto 17 as the base image
FROM amazoncorretto:17

# Install gzip
RUN yum install -y gzip

# Define Maven version
ENV MAVEN_VERSION=3.9.6
ENV MAVEN_HOME=/usr/share/maven

# Download and install Maven
RUN yum install -y wget tar \
    && wget https://dlcdn.apache.org/maven/maven-3/$MAVEN_VERSION/binaries/apache-maven-$MAVEN_VERSION-bin.tar.gz -P /tmp \
    && tar -xf /tmp/apache-maven-$MAVEN_VERSION-bin.tar.gz -C /usr/share \
    && ln -s /usr/share/apache-maven-$MAVEN_VERSION /usr/share/maven \
    && ln -s /usr/share/maven/bin/mvn /usr/bin/mvn \
    && rm -f /tmp/apache-maven-$MAVEN_VERSION-bin.tar.gz

# Set Maven environment variables
ENV MAVEN_HOME=/usr/share/maven
ENV MAVEN_CONFIG="$USER_HOME_DIR/.m2"

# Set the working directory in the container
WORKDIR /profolio-backend

# Copy the pom.xml and project files to the container
COPY pom.xml .
COPY src ./src

# Build the application using Maven
RUN mvn clean install -DskipTests

# Expose the port the application runs on
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "target/portfoliobuilder-1.0.jar"]
