<template>
  <section>
    <h2>Fuck {{ topicTitle }}</h2>
    <p>{{ text }}</p>
  </section>
</template>

<script>
export default {
  props: ["topicTitle", "text"],
};
</script>
