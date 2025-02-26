import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

// Получение всех задач
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await prisma.task.findMany();
        res.json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ошибка при получении задач' });
    }
});

// Создание задачи
app.post('/tasks', async (req, res) => {
    try {
        const task = await prisma.task.create({ data: req.body });
        res.json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ошибка при создании задачи' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
