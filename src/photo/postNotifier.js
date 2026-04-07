class PostNotifierClass {
  handlers = [];
  socket = null;

  constructor() {
    this.connect();
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter(h => h !== handler);
  }

  broadcastEvent(userName, eventType, data) {
    const event = { userName, eventType, ...data };

    this.handlers.forEach(handler =>
      handler(event)
    );

    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(event));
    }
  }

  connect() {
    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
    const host = window.location.host;
    this.socket = new WebSocket(`${protocol}://${host}/ws`);

    this.socket.onmessage = (msg) => {
      try {
        const event = JSON.parse(msg.data);
        this.handlers.forEach(handler => handler(event));
      } catch {}
    };

    this.socket.onclose = () => {
      setTimeout(() => this.connect(), 1000);
    };

    this.socket.onerror = () => {
      this.socket.close();
    };
  }
}

export const PostNotifier = new PostNotifierClass();

export const PostEvent = {
  Upload: 'upload'
};