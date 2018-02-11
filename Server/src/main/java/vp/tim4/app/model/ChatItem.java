package vp.tim4.app.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class ChatItem {
	@Id
	@GeneratedValue
	private Long id;
	private String message;
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Project project;

	public ChatItem() {
		super();
	}

	public ChatItem(Long id, String message, Project project) {
		super();
		this.id = id;
		this.message = message;
		this.project = project;
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
