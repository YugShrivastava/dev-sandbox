package chat

import (
	"log"
	
	"context"
)

type Server struct {
	UnimplementedChatServiceServer
}

func (s *Server) SayHello(ctx context.Context, m *Message) (*Message, error) {
	log.Printf("Received message body from client %s\n", m.Body)
	return &Message{
		Body: "Hello from the server",
	}, nil
}