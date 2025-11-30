export interface Item {
    id: number;
    priority: string;
    task: string;
    dueDate: Date;
    completed: boolean;
    dateCompleted? : Date;
}