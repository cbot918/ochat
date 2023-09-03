package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("lg")
		w.Write([]byte("hihi"))
	})
	http.ListenAndServe(":8888", nil)
}
