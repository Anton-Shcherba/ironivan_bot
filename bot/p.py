import eventlet
import socketio

sio = socketio.Server(cors_allowed_origins="*")
app = socketio.WSGIApp(sio)

USERS = {}


@sio.event
def connect(sid, environ):
    USERS[sid] = {"status": "searching", "game": None}
    print("add user", sid)
    sio.emit("message", f"user {sid} connected")


@sio.event
def disconnect(sid):
    del USERS[sid]
    print("remove user", sid)
    sio.emit("message", f"user {sid} disconnected")


@sio.event
def message(sid, data):
    print(f"mess {sid} {data}", data)
    sio.emit("message", data)


if __name__ == "__main__":
    eventlet.wsgi.server(eventlet.listen(("127.0.0.1", 5678)), app)
