package main

import (
	"context"
	"log"

	"example.com/grpc/client/chat"
	"google.golang.org/grpc"
)

func main() {
	var conn *grpc.ClientConn
	var err error
	conn, err = grpc.NewClient(":9000", grpc.WithInsecure())
	if err != nil {
		log.Fatal("Could not connect:", err)
	}
	defer conn.Close()
	
	log.Println("Connected to server...")
	
	c := chat.NewChatServiceClient(conn)	 

	message := chat.Message{
		Body: "Hello from client",
	}
	
	resp, err := c.SayHello(context.Background(), &message)
	if err != nil {
		log.Fatal("Error when calling SayHello:", err)
	}
	
	log.Println("Response from server:", resp.Body)
}