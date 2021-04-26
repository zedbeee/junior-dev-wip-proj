<template>
  <v-list

  >
    <v-list-item
        v-for="[icon, text] in links"
        :key="icon"
        class="linkMenu"
        v-bind:to = "{name: 'overview'}"
    >
      <v-list-item-action>
        <v-icon
        large
        >{{ icon }}</v-icon>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title class="text-subtitle-1">{{ text }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item>
      <v-list-item-icon>
        <v-icon
        large
        class="mdi mdi-phone-hangup">
        </v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="text-subtitle-1">No Recent Call</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
  </v-list>
</template>
<script>
export default {
  name: 'LinkMenu',

  data: () => ({
    links: [
      ['mdi-view-list', 'Overview'],
      ['mdi-plus-box', 'Create Demand'],
      ['mdi-package-up', 'Next Demand'],
      ['mdi-tooltip-outline', 'Pull Ins'],
      ['mdi-message', 'Messages'],
      ['mdi-link', 'Other Links'],
    ],
  })
}
</script>
<style scoped>
.linkMenu{
  max-height: 48px !important;
  min-height: 48px !important;
}
.v-list-item--link:before {
 opacity: 0;

}


</style>