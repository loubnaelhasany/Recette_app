package com.example.listRecette.Favoris;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavorisRepository extends JpaRepository<Favoris,Long> {
    public List<Favoris> findByUserId(Long userId);

    @Modifying
    @Query("DELETE FROM Favoris f WHERE f.id = :id AND f.user.id = :userId")
    void deleteByIdAndUserId( long id,  long userId);

}
