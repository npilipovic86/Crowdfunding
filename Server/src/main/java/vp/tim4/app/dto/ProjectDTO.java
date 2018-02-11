package vp.tim4.app.dto;

import java.util.Date;
import java.util.List;


import vp.tim4.app.model.Category;
import vp.tim4.app.model.ChatItem;
import vp.tim4.app.model.Project;

import vp.tim4.app.model.SecurityUser;

public class ProjectDTO {

	private Long id;
	private String name;
	private Category category;
	private String image;
	private double goal;
	private double raised;
	private String about;
	private SecurityUser owner;
	private List<ChatItem> chatItems;
	
	
	private Date createDateTime;

	public ProjectDTO() {

	}

	public ProjectDTO(Project project) {
		this.id = project.getId();
		this.name = project.getName();
		this.category = project.getCategory();
		this.image = project.getImage();
		this.goal = project.getGoal();
		this.raised = project.getRaised();
		this.about = project.getAbout();
		this.owner = project.getOwner();
		this.createDateTime = project.getCreateDateTime();
	}

	

	public Date getCreateDateTime() {
		return createDateTime;
	}

	public void setCreateDateTime(Date createDateTime) {
		this.createDateTime = createDateTime;
	}

	public ProjectDTO(Long id, String name, Category category, String image, double goal, double raised,
			String about, SecurityUser owner, List<ChatItem> chatItems, Date createDateTime ) {
		super();
		this.id = id;
		this.name = name;
		this.category = category;
		this.image = image;
		this.goal = goal;
		this.raised = raised;
		this.about = about;
		this.owner = owner;
		this.chatItems = chatItems;
		this.createDateTime = createDateTime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public double getGoal() {
		return goal;
	}

	public void setGoal(double goal) {
		this.goal = goal;
	}

	public double getRaised() {
		return raised;
	}

	public void setRaised(double raised) {
		this.raised = raised;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public SecurityUser getOwner() {
		return owner;
	}

	public void setOwner(SecurityUser owner) {
		this.owner = owner;
	}

	public List<ChatItem> getChatItems() {
		return chatItems;
	}

	public void setChatItems(List<ChatItem> chatItems) {
		this.chatItems = chatItems;
	}

	
}
