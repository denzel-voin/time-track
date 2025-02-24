import request from 'supertest';
import app from '../src/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

beforeAll(async () => {
    // Очистим данные и создадим тестового пользователя
    await prisma.task.deleteMany();
    await prisma.user.deleteMany();

    await prisma.user.create({
        data: {
            email: 'test@example.com',
            password: '123456'
        }
    });
});

afterAll(async () => {
    await prisma.task.deleteMany();
    await prisma.user.deleteMany();
    await prisma.$disconnect();
});

test('POST /tasks создаёт задачу', async () => {
    // Найдем тестового пользователя
    const user = await prisma.user.findUnique({
        where: { email: 'test@example.com' }
    });

    const res = await request(app)
        .post('/tasks')
        .send({ title: 'Новая задача', userId: user?.id });

    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Новая задача');
});
