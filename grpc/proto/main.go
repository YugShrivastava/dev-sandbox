package main

import (
	"fmt"
	"log"

	personpb "example.com/proto/personpb"
	"google.golang.org/protobuf/proto"
)

func main() {

	person := &personpb.Person{
		Name: "Elliot",
		Age:  24,
		SocialFollowers: &personpb.SocialFollowers{
			Youtube: 2500,
			Twitter: 1400,
		},
	}

	// Serialize (Marshal)
	data, err := proto.Marshal(person)
	if err != nil {
		log.Fatal("Marshal error:", err)
	}

	fmt.Println("Encoded bytes:", data)

	// Deserialize (Unmarshal)
	newPerson := &personpb.Person{}

	err = proto.Unmarshal(data, newPerson)
	if err != nil {
		log.Fatal("Unmarshal error:", err)
	}

	fmt.Println("Name:", newPerson.GetName())
	fmt.Println("Age:", newPerson.GetAge())
	fmt.Println("Twitter:", newPerson.GetSocialFollowers().GetTwitter())
	fmt.Println("YouTube:", newPerson.GetSocialFollowers().GetYoutube())
}