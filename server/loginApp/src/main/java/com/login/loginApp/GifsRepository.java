package com.login.loginApp;

import com.login.loginApp.model.Gifs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GifsRepository extends JpaRepository< Gifs, Long > {

}
