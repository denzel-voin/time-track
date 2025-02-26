import { createRouter, createWebHistory } from 'vue-router';
import TaskList from '../views/TaskList.vue';
import AddTask from '../views/AddTask.vue';

const routes = [
    { path: '/', name: 'TaskList', component: TaskList },
    { path: '/add', name: 'AddTask', component: AddTask },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
