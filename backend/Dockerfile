FROM node:18
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./
RUN npm install

# Копируем остальной код
COPY . .

# Указываем порт, на котором будет работать бэкенд
EXPOSE 5000

# Запускаем бэкенд
CMD ["npm", "run", "start"]
