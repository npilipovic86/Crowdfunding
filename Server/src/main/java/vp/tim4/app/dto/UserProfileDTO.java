package vp.tim4.app.dto;

import java.util.HashSet;
import java.util.Set;

import vp.tim4.app.model.Project;
import vp.tim4.app.model.SecurityUser;

public class UserProfileDTO {

	private String firstName;

	private String lastName;

	public UserProfileDTO(SecurityUser user) {
		super();
		this.firstName = user.getFirstName();
		this.lastName = user.getLastName();
	}

	public UserProfileDTO() {
		// TODO Auto-generated constructor stub
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
}
