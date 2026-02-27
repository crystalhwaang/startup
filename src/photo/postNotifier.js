class PostNotifierClass {
  handlers = [];

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter(h => h !== handler);
  }

  broadcastEvent(userName, eventType, data) {
    this.handlers.forEach(handler =>
      handler({ userName, eventType, ...data })
    );
  }
}

export const PostNotifier = new PostNotifierClass();

export const PostEvent = {
  Upload: 'upload'
};

setInterval(() => {
  const foods = ['Pizza', 'Ramen', 'Burger', 'Tacos'];
  const randomFood = foods[Math.floor(Math.random() * foods.length)];
  const userName = 'Simon';
  const date = new Date().toLocaleDateString();

  PostNotifier.broadcastEvent(userName, PostEvent.Upload, {food: randomFood, date: date});
}, 5000);