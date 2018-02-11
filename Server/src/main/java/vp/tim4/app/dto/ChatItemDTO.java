package vp.tim4.app.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

import vp.tim4.app.model.ChatItem;
import vp.tim4.app.model.Project;

public class ChatItemDTO {
	private Long id;
	private String message;
	@JsonIgnore
	private Project project;

	public ChatItemDTO() {

	}

	public ChatItemDTO(ChatItem chatItem) {
		this.id = chatItem.getId();
		this.message = chatItem.getMessage();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

}
