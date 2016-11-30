package main

import (
	"log"
	"net/http"
)

func main() {
	go h.run()
	http.Handle("/", http.FileServer(http.Dir("./public")))
	http.HandleFunc("/ws", serveWs)
	http.HandleFunc("/control", handleControl)
	log.Fatal(http.ListenAndServe(":80", nil))
}
