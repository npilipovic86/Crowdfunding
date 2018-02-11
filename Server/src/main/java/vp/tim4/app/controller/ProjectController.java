package vp.tim4.app.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import vp.tim4.app.dto.ChatItemDTO;
import vp.tim4.app.dto.ProjectDTO;
import vp.tim4.app.dto.ResponseDTO;
import vp.tim4.app.model.ChatItem;
import vp.tim4.app.model.Project;
import vp.tim4.app.service.ChatService;
import vp.tim4.app.service.ProjectService;

@RestController
public class ProjectController {

	@Autowired
	ProjectService projectService;
	@Autowired
	ChatService chatItemService;

	@GetMapping(value = "api/projects")
	public ResponseEntity<List<ProjectDTO>> getProjects() {
		List<ProjectDTO> projects = projectService.findAll().stream().map(ProjectDTO::new).collect(Collectors.toList());
		return new ResponseEntity<>(projects, HttpStatus.OK);
	}

	@GetMapping(value = "api/projects/{id}")
	public ResponseEntity<ProjectDTO> getProject(@PathVariable Long id) {
		Project project = projectService.findOne(id);
		ProjectDTO returnProject = new ProjectDTO(project);
		return new ResponseEntity<>(returnProject, HttpStatus.OK);
	}

	@PutMapping(value = "api/projects/{id}")
	public ResponseEntity<ProjectDTO> updateProject(@PathVariable Long id, @RequestBody Project proj) {
		final Project foundProj = projectService.findOne(id);

		if (foundProj == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		foundProj.setRaised(proj.getRaised());

		final Project savedProj = projectService.save(foundProj);
		ProjectDTO returnProject = new ProjectDTO(savedProj);
		return new ResponseEntity<>(returnProject, HttpStatus.OK);
	}
	
	@PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
	@PostMapping(value = "api/projects")
	public ResponseEntity<Project> create(@RequestBody Project project) {
		final Project createdProject = projectService.save(project);
		return new ResponseEntity<>(createdProject, HttpStatus.CREATED);
	}

	@PostMapping(value = "/upload")
	public ResponseEntity<String> UploadFile(MultipartHttpServletRequest request) throws IOException {
		Iterator<String> itr = request.getFileNames();
		MultipartFile file = request.getFile(itr.next());
		String fileName = file.getOriginalFilename();
		File currDir = new File("");
		String path = currDir.getAbsolutePath();
		String serverPath = "\\src\\main\\resources\\static\\images\\";
		String imagePath = "\\images\\" + fileName;

		if (!fileName.isEmpty()) {
			BufferedOutputStream stream = new BufferedOutputStream(
			new FileOutputStream(new File(path + serverPath, file.getOriginalFilename())));
			stream.write(file.getBytes());
			stream.flush();
			stream.close();
		}
		return new ResponseEntity<>(imagePath, HttpStatus.OK);
	}
	@PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
	@DeleteMapping(value = "api/projects/{id}")
	public ResponseEntity<ResponseDTO> delete(@PathVariable Long id) {
		Project project = projectService.findOne(id);
		if (project == null) {
			return new ResponseEntity<>(new ResponseDTO("NOT_FOUND"), HttpStatus.NOT_FOUND);
		} else
			projectService.remove(id);
		return new ResponseEntity<>(new ResponseDTO("OK"), HttpStatus.OK);
	}

	public ResponseEntity<List<Project>> findByCategory(@PathVariable String category) {
		List<Project> projects = projectService.findByCategory(category);
		return new ResponseEntity<>(projects, HttpStatus.OK);

	}

	@GetMapping(value = "api/projects/{id}/chat")
	public ResponseEntity<List<ChatItemDTO>> getChat(@PathVariable Long id) {
		final Project project = projectService.findOne(id);
		if (project == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		final List<ChatItemDTO> chats = project.getChatItems().stream().map(ChatItemDTO::new)
				.collect(Collectors.toList());
		return new ResponseEntity<>(chats, HttpStatus.OK);
	}

	@PostMapping(value = "api/projects/{id}/chat")
	public ResponseEntity<ChatItemDTO> create(@PathVariable Long id, @RequestBody ChatItem chatItem) {
		final Project project = projectService.findOne(id);
		if (project == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		final ChatItem createdChatItem = new ChatItem();
		createdChatItem.setMessage(chatItem.getMessage());
		createdChatItem.setProject(project);
		List<ChatItem> lista = project.getChatItems();
		lista.add(createdChatItem);
		projectService.save(project);
		ChatItemDTO returnItem = new ChatItemDTO(createdChatItem);
		return new ResponseEntity<>(returnItem, HttpStatus.CREATED);
	}
}
