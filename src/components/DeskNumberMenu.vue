<template>
  <v-list-item class="ddm">

    <v-list-item-icon>
      <v-icon>mdi-desktop-mac</v-icon>
    </v-list-item-icon>
    <v-container>GAT-101</v-container>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          dark
          icon
          v-on="on"
        >
          <v-icon class="mdi mdi-menu-down"></v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-list >
          <v-list-item
            v-for="desk in desks"
            v-bind:key="desk.id"


          >
            <v-list-item-title
            >
              {{desk.deskNum}}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-list-item>
</template>
<script>
export default {
  name: 'DeskNumberMenu',
  data: () => ({
    desks: [
      { id: 1, deskNum: 'GAT-101' },
      { id: 2, deskNum: 'GAT-102' },
      { id: 3, deskNum: 'GAT-103' },
      { id: 4, deskNum: 'GAT-104' },
    ],
  }),
}
</script>
<style>
.ddm {
  display:flex !important;



}
</style>