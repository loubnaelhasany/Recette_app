package com.example.listRecette.Commentaire;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("Commentaire")
public class  ControlerCommentaire {
    private ServiceCommantaire service;
    @Autowired
    public ControlerCommentaire(ServiceCommantaire serviceCommantaire) {
        this.service= serviceCommantaire;
    }

    @PostMapping
    public void addComment(@RequestBody Commantaire comment){
        try {
            this.service.addComment(comment);

        } catch (Exception e) {
            System.out.println("echoue");
        }
       }
       @GetMapping("/{id_film}")
    public List<Commantaire> getCommentByIdFilm(@PathVariable Long id_film){
        return this.service.getCommentByIdFilm(id_film);
       }



}
