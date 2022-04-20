<template>
  <base-card>
    <base-button @click="setSelectedTab(`stored-resources`)" :mode="storedResButtonMode">Stored Resources</base-button>
    <base-button @click="setSelectedTab(`add-resource`)" :mode="addResButtonMode">Add Resource</base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return{
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: `official-guide`,
          title: `Official Guide`,
          description: `The Official Vue.js documentation`,
          link: `https://vuejs.org/v2/guide/`,
        },
        {
          id: `google`,
          title: `Google`,
          description: `Learn to google.`,
          link: `https://www.google.com/`,
        },
      ],
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === `stored-resources` ? null : `flat`
    },
    addResButtonMode() {
      return this.selectedTab === `add-resource` ? null : `flat`
    },
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      this.storedResources.unshift({
        id: new Date().getTime(),
        title,
        description,
        url,
      });
      this.selectedTab = `stored-resources`;
    },
  },
}
</script>