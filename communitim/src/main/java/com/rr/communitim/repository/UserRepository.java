package com.rr.communitim.repository;

import com.rr.communitim.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findByUsernameAndPassword(String username, String password);
}
