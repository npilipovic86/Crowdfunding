package vp.tim4.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import vp.tim4.app.model.Project;
import vp.tim4.app.repository.ProjectRepository;

@Component
public class ProjectService {

	@Autowired
	ProjectRepository projectRepository;

	public List<Project> findAll() {
		return projectRepository.findAll();
	}

	public Project findOne(Long id) {
		return projectRepository.findOne(id);
	}

	public Project save(Project project) {
		return projectRepository.save(project);
	}

	public void remove(Long id) {
		projectRepository.delete(id);
	}

	public List<Project> findByCategory(String category) {
		return projectRepository.findByCategory(category);
	}

}
