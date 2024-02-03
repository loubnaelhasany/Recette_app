package com.example.listfilm.Commentaire;

import com.example.listfilm.Film.Film;
import com.example.listfilm.Profile.Profile;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.Date;
@Entity
@Table
public class Commantaire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String contenu;
    Long idmov;
    @ManyToOne
    Profile profile;


    public Commantaire() {
    }

    public Commantaire(String contenu, Long idmov, Profile profile) {
        this.contenu = contenu;
        this.idmov = idmov;
        this.profile = profile;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }

    public Long getIdmov() {
        return idmov;
    }

    public void setIdmov(Long idmov) {
        this.idmov = idmov;
    }

    public Profile getProfile() {
        return profile;
    }

    public void setProfile(Profile profile) {
        this.profile = profile;
    }
}
