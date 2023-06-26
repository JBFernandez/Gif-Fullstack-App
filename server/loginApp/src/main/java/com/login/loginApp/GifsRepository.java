package com.login.loginApp;

import com.login.loginApp.model.Gifs;
import com.login.loginApp.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GifsRepository extends JpaRepository<Gifs, Long> {

    @Query("SELECT g FROM Gifs g WHERE g.title=?1")
    Optional<Gifs> findByGif(String gif);

    @Query("SELECT g FROM Gifs g WHERE g.userId=?1")
    Optional<List<Gifs>> findUserGifs(Long userId);

}
