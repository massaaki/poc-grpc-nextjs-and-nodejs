all:
	yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=src/account-contract/ src/account-contract/*.proto
	yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=src/chat-contract/ src/chat-contract/*.proto

account: 
	yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=src/account-contract/ src/account-contract/*.proto

chat: 
	yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=src/chat-contract/ src/chat-contract/*.proto

hello:
	yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=src/hello-contract/ src/hello-contract/*.proto