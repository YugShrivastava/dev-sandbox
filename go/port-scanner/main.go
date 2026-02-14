package main

import (
	"fmt"
	"net"
	"os"
	"strconv"
	"sync"
	"time"
)

func worker(host string, ports <-chan int, wg *sync.WaitGroup) {
	defer wg.Done()

	for port := range ports {
		address := fmt.Sprintf("%s:%d", host, port)
		conn, err := net.DialTimeout("tcp", address, 300*time.Millisecond)
		if err == nil {
			fmt.Printf("Port %d is OPEN\n", port)
			conn.Close()
		}
	}
}

func main() {
	if len(os.Args) < 4 {
		fmt.Println("Usage: go run main.go <host> <startPort> <endPort>")
		return
	}

	host := os.Args[1]
	startPort, _ := strconv.Atoi(os.Args[2])
	endPort, _ := strconv.Atoi(os.Args[3])

	const maxWorkers = 100
	ports := make(chan int, maxWorkers)
	var wg sync.WaitGroup

	fmt.Printf("Scanning %s from port %d to %d...\n\n", host, startPort, endPort)

	for range maxWorkers {
		wg.Add(1)
		go worker(host, ports, &wg)
	}

	// Send ports to channel
	for port := startPort; port <= endPort; port++ {
		ports <- port
	}

	close(ports)
	wg.Wait()

	fmt.Println("\nScan complete.")
}
