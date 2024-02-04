package com.example.listRecette.Commentaire;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentaireRepository extends JpaRepository<Commantaire,Long> {
    public List<Commantaire> findByIdmov(Long id_film);
}
