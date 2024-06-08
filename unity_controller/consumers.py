import json
from channels.generic.websocket import AsyncWebsocketConsumer

class RadioControlConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add("group1",self.channel_name)
        print("connect")
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard("group1",self.channel_name)
        print('WebSocket disconnected:', close_code)

    async def receive(self, text_data):
        print('Received message:', text_data)  # デバッグ用のログ

        if not text_data.strip():
            return

        try:
            data = json.loads(text_data)
        except json.JSONDecodeError as e:
            print(e)
            return

        # Unityに対するコマンド処理
        commands ={
            "command": data.get("command",""),
        }


        # print(response)


        #ここまでOK
        await self.send(text_data = json.dumps(commands))
        print('Sent message:', commands)

        await self.channel_layer.group_send(
            "group1",
            {
                "type": "chat_message",
                "message": commands
            }
        )
    # async def chat_message(self, event):
    #     message = event["message"]
    #     await self.send(text_data = json.dumps(message))