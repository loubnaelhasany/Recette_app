package com.example.listfilm.Commentaire;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceCommantaire {
    private CommentaireRepository commentRepository;
@Autowired
    public ServiceCommantaire(CommentaireRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public void addComment(Commantaire comment) {
        this.commentRepository.save(comment);
    }
    public List<Commantaire> getCommentByIdFilm(Long id_film) {
     return this.commentRepository.findByIdmov(id_film);
    }
}
