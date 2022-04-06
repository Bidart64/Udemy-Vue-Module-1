const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish*the*course*and*learn*Vue!',
      courseGoalA: 'Master Vue!',
      courseGoalB: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/',
      space: true,
      jumble: true
    };
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
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) return this.courseGoalA;
      else return this.courseGoalB;
    },
  }
}
);

app.mount('#user-goal');