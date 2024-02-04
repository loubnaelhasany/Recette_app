package com.example.listRecette.Favoris;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavorisService {
    private final FavorisRepository favorisRepository;
@Autowired
    public FavorisService(FavorisRepository filmRepository) {
        this.favorisRepository = filmRepository;
    }
    public void resNewFilm(Favoris film) {
          this.favorisRepository.save(film);
    }


    public List<Favoris> getFavoris(Long userId) {
        return  this.favorisRepository.findByUserId(userId);
    }
    @Transactional
    public void deleteRecette(long id ,long userId) {
       this.favorisRepository.deleteByIdAndUserId(id,userId);
    }
}
