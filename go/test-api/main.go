package main

import (
	"fmt"
	"net/http"
	"sync"
)

type To struct {
	t int
	mu sync.Mutex
}

var T = To{}

func handleTestFunc(w http.ResponseWriter, r *http.Request) {
	T.mu.Lock()
	fmt.Println(T.t)
	T.t += 1
	T.mu.Unlock()
	w.WriteHeader(http.StatusOK)
	var s = "Successfull request"
	_, err := w.Write([]byte(s))
	if err != nil {
		fmt.Println()
	}
}

func main() {
	http.HandleFunc("/api/testing", handleTestFunc)
	http.ListenAndServe("localhost:3000", nil)
}