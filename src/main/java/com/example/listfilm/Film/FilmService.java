package com.example.listfilm.Film;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmService {
    private final FilmRepository filmRepository;
@Autowired
    public FilmService(FilmRepository filmRepository) {
        this.filmRepository = filmRepository;
    }
    public void resNewFilm(Film film) {
          this.filmRepository.save(film);
    }


    public List<Film> getFavoris(Long userId) {
        return  this.filmRepository.findByUserId(userId);
    }

    public void deleteRecette(long id) {
       this.filmRepository.deleteById(id);
    }
}
