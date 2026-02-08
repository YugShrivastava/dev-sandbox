package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/jackc/pgx/v5"
)

var conn *pgx.Conn

type Album struct {
	ID int
	Title string
	Artist string
	Price string
}

func getAlbum(rows pgx.Rows) ([]Album, error) {
	defer rows.Close()
	var err error
	
	var albums []Album
	
	for rows.Next() {
		var id int
		var title string
		var artist string
		var price string
		
		err = rows.Scan(&id, &title, &artist, &price)
		if(err != nil) {
			return []Album{}, err
		}
		album := Album{id, title, artist, price}
		albums = append(albums, album)
	}
	
	return albums, nil
}

// albumByID queries for the album with the specified ID.
func albumByID(id int64) (Album, error) {
    // An album to hold data from the returned row.
    var alb Album

    // row := conn.QueryRow(context.Background(), "SELECT * FROM album WHERE id = $1", id)
    // fmt.Println("1")
    // if err := row.Scan(&alb.ID, &alb.Title, &alb.Artist, &alb.Price); err != nil {
    // 	fmt.Println("2")
        
    // 	if err == pgx.ErrNoRows {
    //         return alb, fmt.Errorf("albumsById %d: no such album", id)
    //     }
    //     return alb, fmt.Errorf("albumsById %d: %v", id, err)
    // }
    // return alb, nil
    row := conn.QueryRow(context.Background(), "select * from album where id = $1", id)
    if err := row.Scan(&alb.ID, &alb.Title, &alb.Artist, &alb.Price); err != nil {
    	fmt.Printf("Error: %v", err)
     	return Album{}, err
    }
    
    return alb, nil
}

func addAlbum(alb Album) (string, error) {
	result, err := conn.Exec(context.Background(), "INSERT INTO album (title, artist, price) VALUES ($1, $2, $3)", alb.Title, alb.Artist, alb.Price)
	if err != nil {
        return "", fmt.Errorf("addAlbum: %v", err)
    }
    id := result.String()
    
    return id, nil
}

func main() {
	ctx := context.Background()
	var err error
		
	conn, err = pgx.Connect(ctx, os.Getenv("DATABASE_URL"))
	
	if err != nil {
		fmt.Fprintf(os.Stdout, "Unable to connect to database: %v\nDATABASE_URL: %v\n", err, os.Getenv("DATABASE_URL"))
		os.Exit(1)
	}
	defer conn.Close(ctx)
	
	var artistName string = "John Coltrane"
	
	rows, err := conn.Query(ctx, "select * from album where artist = $1", artistName)
	if err != nil {
		fmt.Fprintf(os.Stderr, "QueryRow failed: %v\n", err)
		os.Exit(1)
	}
	
	albums, err := getAlbum(rows)
	
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error: %v\n", err)
	}
	
	if(len(albums) == 0) {
		log.Fatalf("No albums found for artist: %v", artistName)
	}
	
	for _, val := range albums {
		fmt.Printf("%+v\n", val)
	}
	
	alb, err := albumByID(2)
	if err != nil {
	    log.Fatal(err)
	}
	fmt.Printf("Album found: %v\n", alb)
	
	albID, err := addAlbum(Album{
	    Title:  "The Modern Sound of Betty Carter",
	    Artist: "Betty Carter",
	    Price:  "49.99",
	})
	if err != nil {
	    log.Fatal(err)
	}
	fmt.Printf("ID of added album: %v\n", albID)
}