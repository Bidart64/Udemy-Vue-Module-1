const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');


const data = {
  message: `Hello Vue!`,
  longMessage: `Hello World!`
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + `World`;
    }
    console.log(target);
    console.log(key);
    console.log(value);
  }
}

const proxy = new Proxy(data, handler);

proxy.message = `Hello World!!!`;

console.log(proxy.longMessage);