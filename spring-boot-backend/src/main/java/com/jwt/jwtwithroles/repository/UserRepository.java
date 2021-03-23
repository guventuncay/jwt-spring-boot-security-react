package com.jwt.jwtwithroles.repository;

import com.jwt.jwtwithroles.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findUserByUsername(String username);

    List<User> findUsersByRole(String role);
}
