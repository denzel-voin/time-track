<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Задачи</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id" class="border p-2 mb-2">
        {{ task.title }} <span class="text-sm text-gray-500">({{ task.createdAt }})</span>
      </li>
    </ul>
    <router-link to="/add" class="text-blue-500 underline">Добавить задачу</router-link>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useTaskStore } from '../stores/task';

const taskStore = useTaskStore();

onMounted(() => {
  taskStore.fetchTasks();
});

const tasks = computed(() => taskStore.tasks);
</script>
