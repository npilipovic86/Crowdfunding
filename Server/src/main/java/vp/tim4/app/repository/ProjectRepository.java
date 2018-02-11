package vp.tim4.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vp.tim4.app.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long>{
	
	List<Project> findByCategory(String category);

}
