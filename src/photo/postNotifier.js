class PostNotifierClass {
  handlers = [];
  socket = null;

  addHandler(handler) {
    this.handlers.push(handler);
    this.ensureConnected();
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter(h => h !== handler);
  }

  broadcastEvent(userName, eventType, data) {
    const event = { userName, eventType, ...data };
    this.handlers.forEach(handler =>
      handler(event)
    );

    this.ensureConnected();
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(event));
    }
  }

  /** Avoid opening /ws on every page (e.g. login); only connect when the photo feed is in use. */
  ensureConnected() {
    if (typeof window === 'undefined') return;
    if (this.socket && (this.socket.readyState === WebSocket.OPEN || this.socket.readyState === WebSocket.CONNECTING)) {
      return;
    }
    this.connect();
  }

  connect() {
    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
    const host = window.location.host;
    this.socket = new WebSocket(`${protocol}://${host}/ws`);

    this.socket.onmessage = (msg) => {
      try {
        const event = JSON.parse(msg.data);
        this.handlers.forEach(handler => handler(event));
      } catch {
      }
    };

    this.socket.onclose = () => {
      this.socket = null;
      if (this.handlers.length > 0) {
        setTimeout(() => this.ensureConnected(), 1000);
      }
    };

    this.socket.onerror = () => {
      this.socket?.close();
    };
  }
}

export const PostNotifier = new PostNotifierClass();

export const PostEvent = {
  Upload: 'upload'
};