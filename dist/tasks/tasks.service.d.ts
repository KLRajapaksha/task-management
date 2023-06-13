import { Task, TaskStatus } from './task.model';
import { CreateTaskDTO } from './dto/create-task.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    createTask(createTaskDTO: CreateTaskDTO): Task;
    getTaskByID(id: string): Task;
    deleteTaskByID(id: string): Task[];
    updateTaskByID(id: string): Task;
    updateTaskStatus(id: string, status: TaskStatus): Task;
}
