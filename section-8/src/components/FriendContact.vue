<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "Favorite" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }}
    </button>
    <button @click="toggleFavorite">
      {{ isFavorite ? "UnFavorite" : "Favorite" }}
    </button>
    <button @click="$emit(`delete`, id)">Delete</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  // props: [`name`, `phoneNumber`, `emailAddress`, `isFavorite`],
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    isFavorite: { type: Boolean, required: false, default: false },
  },
  emits: [`toggle-favorite`, `delete`],
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.friendIsFavorite = !this.friendIsFavorite;
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
