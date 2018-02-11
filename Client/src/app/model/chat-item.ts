import { Project } from "./project";

export interface ChatItem{
    id?: number;
    message: string;
    project?: Project;
}