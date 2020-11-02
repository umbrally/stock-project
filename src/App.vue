<template>
  <v-app>
    <v-app-bar app color="primary" dark> </v-app-bar>
    <v-main>
      <v-container fluid>
        <Content />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Content from "./components/Content";

export default {
  name: "App",

  components: {
    Content,
  },

  data: () => ({
    //
  }),
};
</script>
