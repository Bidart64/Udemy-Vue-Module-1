const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish*the*course*and*learn*Vue!',
      courseGoalA: 'Master Vue!',
      courseGoalB: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/',
      space: true,
      jumble: true,
      counter: 0,
      name: '',
      lastName: ''
    };
  },
  watch: {
    counter(value) {
      const that = this;
      if (value > 10) {
        setTimeout(() => {
          that.counter = 0;
        }, 2000
        )
      }
    }
  },
  computed: {
    fullName() {
      if (this.name === `` || this.lastName === ``) return ``;
      return this.name + ` ` + this.lastName
    },
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) return this.courseGoalA;
      else return this.courseGoalB;
    },
  },
  methods: {
    reverseText() {
      this.courseGoal = [...this.courseGoal].reverse().join('');
    },
    spaceOutText() {
      this.courseGoal = this.space ? this.courseGoal.split(``).join(` `) : this.courseGoal.split(` `).join(``);
      this.space = !this.space;
    },
    jumbleText() {
      this.courseGoal = this.jumble ? [...this.courseGoal]
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
        .join(``)
        : 'Finish*the*course*and*learn*Vue!';
      this.jumble = !this.jumble;
    },
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    submitForm() {
      alert(`Submitted!`);
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    },
    outputFullName() {
      if (this.name === ``) return ``;
      return this.name + ` ` + `Veytia`
    },
  },
}
);
app.mount('#user-goal')


