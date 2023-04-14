package com.login.loginApp;

import com.login.loginApp.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository< Users, Long > {

    @Query("SELECT u FROM Users Where u.email=?1")
    Optional<Users> findByEmail( String email );

}
