package main

import (
	"context"
	"io"
	"log"
	"time"

	"github.com/YugShrivastava/grpc-core/pb"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	conn, err := grpc.NewClient("localhost:50051",
		grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("Failed to connect: %v", err)
	}
	defer conn.Close()

	client := pb.NewTaskManagerClient(conn)
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	tasks := []struct {
		title string
		desc  string
	}{
		{"Learn gRPC", "Watch this amazing video"},
		{"Build a microservice", "Use gRPC for service-to-service communication"},
		{"Deploy to Kubernetes", "Run the gRPC service in a cluster"},
	}

	for _, t := range tasks {
		resp, err := client.CreateTask(ctx, &pb.CreateTaskRequest{
			Title:       t.title,
			Description: t.desc,
		})
		if err != nil {
			log.Fatalf("CreateTask failed: %v", err)
		}
		log.Printf("Created: %s — %s", resp.Id, resp.Title)
	}

	log.Println("\nListing all tasks (server streaming):")

	stream, err := client.ListTasks(ctx, &pb.ListTasksRequest{})
	if err != nil {
		log.Fatalf("ListTasks failed: %v", err)
	}

	for {
		task, err := stream.Recv()
		if err == io.EOF {
			break // Server finished sending all tasks
		}
		if err != nil {
			log.Fatalf("Error receiving task: %v", err)
		}
		log.Printf("  → [%s] %s: %s", task.Id, task.Title, task.Description)
	}

	log.Println("\nDone!")
}