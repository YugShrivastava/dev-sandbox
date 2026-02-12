package main

import (
	"fmt"
	"log"
	"os"
	"sync"

	"yug/api-tester/api"
)

func main() {
	var p string

	fmt.Print("Enter an API URL: ")
	fmt.Scanln(&p)

	const totalRequests = 100000

	results := make(chan api.Result, totalRequests)
	var wg sync.WaitGroup

	wg.Add(totalRequests)

	for range(totalRequests) {
		go func() {
			defer wg.Done()
			results <- api.TestGet(p)
		}()
	}

	// Close channel once all goroutines finish
	go func() {
		wg.Wait()
		close(results)
	}()

	// Collect results
	var success, failed int

	for res := range results {
		if res.Err != nil {
			failed++
			log.Println("Error:", res.Err)
			continue
		}
		success++
		fmt.Println(res.Data)
	}

	fmt.Println("----")
	fmt.Println("Total:", totalRequests)
	fmt.Println("Success:", success)
	fmt.Println("Failed:", failed)

	if failed > 0 {
		os.Exit(1)
	}
}
