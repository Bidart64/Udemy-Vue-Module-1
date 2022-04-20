<template>
<base-dialogue v-if="inputIsInvalid" title="Invalid Input">
  <template #default>
    <p>Unfortunately, at least one of the fields is invalid.</p>
    <p>Make sure youenter at least a few characters in to each input field.</p>
  </template>
  <template #actions>
    <base-button @click="confirmError">Okay</base-button>
  </template>
</base-dialogue> 
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
      <label for="title">Title</label>
      <input id="title" type="text" name="title" ref="titleInput"/>
      </div>
      <div class="form-control">
      <label for="description">Description</label>
      <textarea id="decription" rows="3" name="description" ref="descInput"/>
      </div>
      <div class="form-control">
      <label for="link">Link</label>
      <input id="link" name="text" type="url" ref="linkInput"/>
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDesc = this.$refs.descInput.value;
      const enteredUrl = this.$refs.linkInput.value;

      if (enteredTitle.trim() === `` || enteredDesc.trim() === `` || enteredUrl.trim() === ``) {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(enteredTitle, enteredDesc, enteredUrl);
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>