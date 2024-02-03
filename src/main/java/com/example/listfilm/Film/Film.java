package com.example.listfilm.Film;

import com.example.listfilm.Commentaire.Commantaire;
import com.example.listfilm.Profile.Profile;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;


import java.util.ArrayList;
import java.util.List;

@Entity
@Table(
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"id","user"})
        }
)
public class Film {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ifFav;
    private long id;


   @ManyToOne
   Profile user;

    public Film() {
    }

    public Film(long id, Profile user) {
        this.id = id;
        this.user = user;
    }

    public Long getIfFav() {
        return ifFav;
    }

    public void setIfFav(Long ifFav) {
        this.ifFav = ifFav;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Profile getUser() {
        return user;
    }

    public void setUser(Profile user) {
        this.user = user;
    }
}