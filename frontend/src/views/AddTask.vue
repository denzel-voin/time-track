<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Добавить задачу</h1>
    <form @submit.prevent="submit">
      <input
          v-model="title"
          type="text"
          placeholder="Название задачи"
          class="border p-2 mb-2 w-full"
          required
      />
      <button type="submit" class="bg-blue-500 text-white p-2">Добавить</button>
    </form>
    <router-link to="/" class="text-blue-500 underline mt-4 inline-block">Вернуться к списку задач</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from '../stores/task';
import { useRouter } from 'vue-router';

const title = ref('');
const taskStore = useTaskStore();
const router = useRouter();

const submit = async () => {
  await taskStore.addTask({ title: title.value, userId: 1 });
  title.value = '';
  router.push('/');
};
</script>
