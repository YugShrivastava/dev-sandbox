package api

import (
	"io"
	"net/http"
)

type Result struct {
	Data string
	Err  error
}

func TestGet(url string) Result {
	resp, err := http.Get(url)
	if err != nil {
		return Result{Err: err}
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return Result{Err: err}
	}

	return Result{
		Data: string(body),
	}
}
