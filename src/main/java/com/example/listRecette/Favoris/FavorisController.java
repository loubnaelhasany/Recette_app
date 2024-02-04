package com.example.listRecette.Favoris;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Favoris")
@CrossOrigin(origins = "*")
public class FavorisController {
    private final FavorisService filmService;

 @Autowired
    public FavorisController(FavorisService filmService) {
        this.filmService = filmService;
    }


    @PostMapping()
    public void addToFavorites(@RequestBody Favoris film) {
        System.out.println("Film reçu depuis Angular : " +"id"+"idfdav" +film.getIfFav());

        try {
            this.filmService.resNewFilm(film);

        } catch (Exception e) {
            System.out.println("echoue");
        }
    }
    @GetMapping("/{user_id}")
    public List<Favoris> getFavoris(@PathVariable Long user_id){
      return this.filmService.getFavoris(user_id);
    }
    @DeleteMapping("/{id}/{userId}")
    public void  deleteRecette(@PathVariable long id, @PathVariable long userId){
        this.filmService.deleteRecette(id, userId);
    }
}
