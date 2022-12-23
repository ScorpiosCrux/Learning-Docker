## Starting MongoDB

docker run -d \
 -p 27017:27017 \  
 -e MONGO_INITDB_ROOT_USERNAME=admin \
 -e MONGO_INITDB_ROOT_PASSWORD=password \
 --name mongodb \
 --net mongo-network \
 mongo


## Starting Mongo-Express

docker run -d \
 -p 8081:8081 \
 -e ME_CONFIG_MONGODB_AUTH_USERNAME=admin \
 -e ME_CONFIG_MONGODB_AUTH_PASSWORD=password \
 --net mongo-network \
 --name mongo-express \
 -e ME_CONFIG_MONGODB_SERVER=mongodb \
 mongo-express

## Start Mongo Shell
mongosh -u admin -p password --authenticationDatabase admin