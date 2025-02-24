import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN as string, { polling: false });

export const sendTelegramMessage = async (chatId: string, message: string) => {
    await bot.sendMessage(chatId, message);
};
