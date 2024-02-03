package com.example.listfilm.Film;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FilmRepository extends JpaRepository<Film,Long> {
    public List<Film> findByUserId(Long userId);
    public void deleteById(long id);
}
