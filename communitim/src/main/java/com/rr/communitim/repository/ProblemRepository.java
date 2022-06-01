package com.rr.communitim.repository;

import com.rr.communitim.model.Problem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProblemRepository extends JpaRepository<Problem,Long> {

}
