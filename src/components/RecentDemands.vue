<template>

  <v-list
    two-line

  >
    <v-list-item
    class="demandList">
      <v-list-item-action>
        <v-icon
            large
        >mdi-chevron-right</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>JAMES HOLDEN</v-list-item-title>
        <v-list-item-subtitle>I'd like faster speed</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item
        class="demandList">
      <v-list-item-icon>
        <v-icon
            large
        >mdi-chevron-right</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>JAMES HOLDEN</v-list-item-title>
        <v-list-item-subtitle>I'd like faster speed</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

  </v-list>
</template>

<script>
export default {
  name: "RecentDemands"
}
</script>

<style scoped>
.demandList {
  max-height: 60px !important;
  min-height: 60px !important;
}

</style>