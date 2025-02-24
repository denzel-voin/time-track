import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

app.post('/tasks', async (req, res) => {
    const task = await prisma.task.create({ data: req.body });
    res.json(task);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;