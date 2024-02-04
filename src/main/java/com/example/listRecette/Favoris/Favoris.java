package com.example.listRecette.Favoris;

import com.example.listRecette.Profile.Profile;
import jakarta.persistence.*;

@Entity
@Table(
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"id","user"})
        }
)
public class Favoris {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ifFav;
    private long id;


   @ManyToOne
   Profile user;

    public Favoris() {
    }

    public Favoris(long id, Profile user) {
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