<template>
  <v-list

      class=" flexwrap tilepad"
  >

    <v-icon class="mdi mdi-account-circle"
       x-large
    >

    </v-icon>

    <v-list
      three-line
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Zachary Bridge</v-list-item-title>
          <v-list-item-subtitle>TNC</v-list-item-subtitle>
          <v-list-item-title>Logged in</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-icon class="mdi mdi-exit-to-app"></v-icon>

  </v-list>

</template>
<script>
export default {
  name: 'AgentTile'
}
</script>
<style>
.flexwrap {
  display:flex !important;
  justify-content:space-between ;


}
.tilepad{
  padding: 0px 16px 0px 16px !important;

}
</style>
