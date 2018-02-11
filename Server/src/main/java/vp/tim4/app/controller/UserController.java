package vp.tim4.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import vp.tim4.app.dto.LoginDTO;
import vp.tim4.app.dto.TokenDTO;
import vp.tim4.app.dto.UserProfileDTO;
import vp.tim4.app.model.SecurityUser;
import vp.tim4.app.security.TokenUtils;
import vp.tim4.app.service.UserDetailsServiceImpl;

@RestController
public class UserController {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private UserDetailsServiceImpl userService;

	@Autowired
	TokenUtils tokenUtils;

	@PostMapping(value = "/api/login")
	public ResponseEntity<TokenDTO> login(@RequestBody LoginDTO loginDTO) {
		try {
			final UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
					loginDTO.getUsername(), loginDTO.getPassword());
			final Authentication authentication = authenticationManager.authenticate(token);
			SecurityContextHolder.getContext().setAuthentication(authentication);
			final UserDetails details = userDetailsService.loadUserByUsername(loginDTO.getUsername());
			final String genToken = tokenUtils.generateToken(details);

			return new ResponseEntity<>(new TokenDTO(genToken), HttpStatus.OK);
		} catch (Exception ex) {
			return new ResponseEntity<>(new TokenDTO(""), HttpStatus.BAD_REQUEST);
		}
	}

	@PostMapping(value = "/api/user")
	public ResponseEntity<UserProfileDTO> registerUser(@RequestBody SecurityUser user) {
		userService.addUser(user);
		UserProfileDTO createdUser = new UserProfileDTO(user);
		return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
	}
}
