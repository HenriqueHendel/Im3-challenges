package main


import (
    "fmt"
    "log"
    "net/http"
)

func main() {
    fileServer := http.FileServer(http.Dir("./static"))
    http.Handle("/", fileServer)


    fmt.Printf("Starting server at port 3333\n")
    if err := http.ListenAndServe(":3333", nil); err != nil {
        log.Fatal(err)
    }
}