<template>

  <v-list
    two-line

  >

    <v-list-item
    class="demandList"

    v-for="demands in this.$store.state.demands"
    :key="demands.demandID"
    @click="dynaRoute(demands.demandID)">

      <v-list-item-action>
        <v-icon
            large
        >mdi-chevron-right</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{getName(demands.cid)}}</v-list-item-title>
        <v-list-item-subtitle>{{ demands.name }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

  </v-list>
</template>

<script>
export default {
  name: "RecentDemands",
  methods: {
    getName: function(incomingCid){
      for (const a of this.$store.state.customers) {
        if (a.cid == incomingCid){
          return (a.fName + " " + a.lName );

        }
      }
    },
    dynaRoute(a){
      this.$router.push({name: 'understand', params: {id: a}});
    }
  }

}
</script>

<style scoped>
.demandList {
  max-height: 60px !important;
  min-height: 60px !important;
}

</style>