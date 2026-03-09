package main

import (
	"log"
	"net"

	"example.com/grpc/server/chat"
	"google.golang.org/grpc"
)

func main() {
	lis, err := net.Listen("tcp", ":9000")
	if err != nil {
		log.Fatal("Failed to listen on port 9000 :", err)
	}
	
	s := chat.Server{}
	
	grpcServer := grpc.NewServer()
	
	chat.RegisterChatServiceServer(grpcServer, &s)
	
	log.Println("gRPC server running on port 9000")
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatal("Failed to serve gRPC server over port 9000 :", err)
	}
}