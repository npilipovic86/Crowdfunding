package vp.tim4.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vp.tim4.app.model.ChatItem;

@Repository
public interface ChatItemRepository extends JpaRepository<ChatItem, Long> {

}
