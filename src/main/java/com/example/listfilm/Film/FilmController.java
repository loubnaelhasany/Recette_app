package com.example.listfilm.Film;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Film")
@CrossOrigin(origins = "*")
public class FilmController {
    private final  FilmService filmService;

 @Autowired
    public FilmController(FilmService filmService) {
        this.filmService = filmService;
    }


    @PostMapping()
    public void addToFavorites(@RequestBody Film film) {
        System.out.println("Film reçu depuis Angular : " +"id"+"idfdav" +film.getIfFav());

        try {
            this.filmService.resNewFilm(film);

        } catch (Exception e) {
            System.out.println("echoue");
        }
    }
    @GetMapping("/{user_id}")
    public List<Film> getFavoris(@PathVariable Long user_id){
      return this.filmService.getFavoris(user_id);
    }
    @DeleteMapping("{id}")
    public void  deleteRecette(@PathVariable long id){
        this.filmService.deleteRecette(id);
    }
}
