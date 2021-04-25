<template>
<div>
  <v-navigation-drawer
      v-model="drawer"
      app
      width="300px"
  >
    <AgentTile @click="getName()"/>

    <v-divider></v-divider>

    <DeskNumberMenu/>

    <v-divider></v-divider>
    <LinkMenu></LinkMenu>

    <RecentDemands></RecentDemands>
  </v-navigation-drawer>
  <v-main fluid >
    <v-card>
    <v-data-table v-model="selected"
      :headers="headers"
      :items="this.$store.state.demands"
      :items-per-page="25"
      >
    >
      <template v-slot:item="props">
        <tr @click="dynaRoute(props.item.demandID)">
          <td class="text-start" >{{getName(props.item.cid)}}</td>
          <td class="text-start">{{props.item.name}}</td>
          <td class="text-start">{{props.item.type}}</td>
          <td class="text-start">{{props.item.createdDate}}</td>
          <td class="text-start">{{props.item.followDate}}</td>
        </tr>
      </template>
    </v-data-table>


    </v-card>
  </v-main>
</div>
</template>

<script>

import RecentDemands from "@/components/RecentDemands";
import LinkMenu from "@/components/LinkMenu";
import DeskNumberMenu from "@/components/DeskNumberMenu";
import AgentTile from "@/components/AgentTile";

export default {
  name: "Overview",
  methods: {
    dynaRoute(a){
      console.log(a);
      this.$router.push({name: 'understand', params: {id: a}});
    },
    getName: function(incomingCid){
      for (const a of this.$store.state.customers) {
        if (a.cid == incomingCid){
          return (a.fName + " " + a.lName );

        }
      }
    }
  },

  components: {RecentDemands, LinkMenu, DeskNumberMenu, AgentTile},
  data () {
    return {
      items: [],
      drawer: "true",
      selected:[],
      dialog: false,
      search: '',
      fullName: '',
      headers:[
        {text: "Customer", value: '', align:'start' },
        {text: "Demand", value: 'name' },
        {text: "V/F", value: 'type' },
        {text: "Created Date", value: 'createdDate' },
        {text: "Follow-up", value: 'followDate' },
      ]
    }
  },

}
</script>

<style scoped>

</style>