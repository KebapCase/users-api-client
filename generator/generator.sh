java -jar swagger-codegen-cli.jar generate \
-i http://localhost:8080/swagger.json?basePath=http%3A%2F%2Flocalhost%3A8080 \
-l typescript-angular \
-o ../
