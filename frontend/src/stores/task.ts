import { defineStore } from 'pinia';
import api from '../api';

export interface Task {
    id: number;
    title: string;
    userId: number;
    createdAt: string;
}

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [] as Task[],
    }),
    actions: {
        async fetchTasks() {
            const response = await api.get('/tasks');
            this.tasks = response.data;
        },
        async addTask(task: { title: string; userId: number }) {
            const response = await api.post('/tasks', task);
            this.tasks.push(response.data);
        },
    },
});
