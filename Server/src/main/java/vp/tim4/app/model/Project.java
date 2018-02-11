package vp.tim4.app.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Project {
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	@Enumerated(EnumType.STRING)
	private Category category;
	private String image;
	private double goal;
	private double raised;
	private String about;
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private SecurityUser owner;
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<ChatItem> chatItems;
	@Column
	@CreationTimestamp
	private Date createDateTime;
	

	public Project() {

	}

	public Project(Long id, String name, Category category, String image, double goal, double raised, String about,
			SecurityUser owner, List<ChatItem> chatItems, Date createDateTime) {
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

	public Date getCreateDateTime() {
		return createDateTime;
	}

	public void setCreateDateTime(Date createDateTime) {
		this.createDateTime = createDateTime;
	}

	

}
