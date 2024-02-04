package com.example.listRecette.Favoris;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Favoris")
@CrossOrigin(origins = "*")
public class FavorisController {
    private final FavorisService favorisService;

 @Autowired
    public FavorisController(FavorisService favorisService) {
        this.favorisService = favorisService;
    }


    @PostMapping()
    public void addToFavorites(@RequestBody Favoris film) {
        System.out.println("Film reçu depuis Angular : " +"id"+"idfdav" +film.getIfFav());

        try {
            this.favorisService.resNewFilm(film);

        } catch (Exception e) {
            System.out.println("echoue");
        }
    }
    @GetMapping("/{user_id}")
    public List<Favoris> getFavoris(@PathVariable Long user_id){
      return this.favorisService.getFavoris(user_id);
    }
    @DeleteMapping("/{id}/{userId}")
    public void  deleteRecette(@PathVariable long id, @PathVariable long userId){
        this.favorisService.deleteRecette(id, userId);
    }
}
