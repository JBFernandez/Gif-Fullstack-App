From gradle:jdk17 AS build
COPY . .
RUN gradle clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
COPY --from=build /target/loginApp-0.0.1-SNAPSHOT.jar demo.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","demo.jar"]
