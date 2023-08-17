from aiogram import Bot, Dispatcher, executor, types
from config import TOKEN

bot = Bot(token=TOKEN)
dp = Dispatcher(bot)


@dp.message_handler(commands=["start"])
async def process_start_command(message: types.Message):
    markup = types.ReplyKeyboardMarkup()
    markup.add(
        types.KeyboardButton(
            "web",
            web_app=types.WebAppInfo(url="https://13ec-93-125-107-78.ngrok-free.app/"),
        )
    )
    await message.answer("start cmd", reply_markup=markup)


@dp.message_handler()
async def echo_message(msg: types.Message):
    await bot.send_message(msg.from_user.id, msg.text)


if __name__ == "__main__":
    executor.start_polling(dp)
