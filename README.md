# jwt-spring-boot-security-react
How to use jwt tokens with react and spring boot security.

# Running locally
step 1: prepare database
configure application.properties file for your db

step 2: run spring boot app
open a terminal
```
git clone https://github.com/guventuncay/jwt-spring-boot-security-react
cd jwt-spring-boot-security-react-master/
./mvnw package
java -jar target/*.jar
```
You can access spring boot backend here: http://localhost:8080/

step 3: run angular app
open a new terminal
```
cd cd ../react-frontend
npm install
npm start
```
You can access angular frontend app here: http://localhost:3000/
