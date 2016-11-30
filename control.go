package main

import (
	"net/http"
)

var current = "slide1"

func handleControl(w http.ResponseWriter, r *http.Request) {
	h.broadcast <- r.URL.Query().Get("slide")
}
