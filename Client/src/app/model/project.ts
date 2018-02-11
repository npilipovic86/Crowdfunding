import { User } from "./user";
import { ChatItem } from "./chat-item";
export interface Project {
        id?: number;
        name: string;
        category: string;
        image: string;

        goal: number;
        raised: number;
        percentage?: number;
        about: string;
        owner?: User;
        chatItem?: ChatItem;
        createDateTime: Date;
}