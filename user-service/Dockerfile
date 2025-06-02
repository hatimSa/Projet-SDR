# Stage 1: Build the application using Maven
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Copy all files to the container
COPY . .

# Build the JAR (skip tests for speed)
RUN mvn clean package -DskipTests

# Stage 2: Create the runtime image
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copy only the built JAR from the previous stage
COPY --from=build /app/target/user-service-*.jar user-service.jar

# Run the JAR
ENTRYPOINT ["java", "-jar", "user-service.jar"]