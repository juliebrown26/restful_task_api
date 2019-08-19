export interface Task{
    title: string;
    description?: string;
    completed: boolean;
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}