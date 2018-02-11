package vp.tim4.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import vp.tim4.app.model.ChatItem;
import vp.tim4.app.repository.ChatItemRepository;

@Component
public class ChatService {

	@Autowired 
	ChatItemRepository chatItemRepository;

	/*public ChatItem find(Long id) {
		return chatItemRepository.findOne(id);
	}

	public ChatItem save(ChatItem sc) {
		return chatItemRepository.save(sc);
	}

	public Chat addItem(Long id, String message) {
		String username = SecurityContextHolder.getContext().getAuthentication().getName();
		final SecurityUser user = userRepo.findByUsername(username).orElseThrow(
				() -> new UsernameNotFoundException(String.format("No user found with username '%s'.", username)));
		;
		Chat sc = find(id);
		sc.getChatItems().add(new ChatItem(message, user));
		return chatRepository.save(sc);
	}*/

}
