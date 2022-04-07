package rr.communitim.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rr.communitim.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
