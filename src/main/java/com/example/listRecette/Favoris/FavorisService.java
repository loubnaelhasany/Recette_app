package com.example.listRecette.Favoris;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavorisService {
    private final FavorisRepository filmRepository;
@Autowired
    public FavorisService(FavorisRepository filmRepository) {
        this.filmRepository = filmRepository;
    }
    public void resNewFilm(Favoris film) {
          this.filmRepository.save(film);
    }


    public List<Favoris> getFavoris(Long userId) {
        return  this.filmRepository.findByUserId(userId);
    }
    @Transactional
    public void deleteRecette(long id ,long userId) {
       this.filmRepository.deleteByIdAndUserId(id,userId);
    }
}
