package main

import (
	"fmt"
	"log"

	"github.com/dev-sandbox/go/tutorials/greetings"
	"rsc.io/quote/v4"
)

func main() {
	fmt.Println("Hello in go!")
	fmt.Printf("%v\n", quote.Opt())
	
	var name string
	
	_, err := fmt.Scan(&name)
	
	if err != nil {
		fmt.Printf("An error occured: %v", err)
		return
	}
	
 // Set properties of the predefined Logger, including
    // the log entry prefix and a flag to disable printing
    // the time, source file, and line number.
    log.SetPrefix("greetings: ")
    log.SetFlags(0)

    // A slice of names.
    names := []string{"Gladys", "Samantha", "Darrin"}
    
    // Request greeting messages for the names.
    messages, err := greetings.Greets(names)
    
    if err != nil {
        log.Fatal(err)
    }

    // If no error was returned, print the returned map of
    // messages to the console.
    fmt.Println(messages)
}