<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        app
        width="300px"
    >
      <AgentTile/>

      <v-divider></v-divider>

      <DeskNumberMenu/>

      <v-divider></v-divider>
      <LinkMenu></LinkMenu>

      <RecentDemands></RecentDemands>
    </v-navigation-drawer>

    <v-main style="padding: 0px 300px;">
      <UnderstandStep/>
    </v-main>
    <DemandStepNav/>
  </v-app>
</template>

<script>
import AgentTile from "@/components/AgentTile";
import LinkMenu from "@/components/LinkMenu";
import DeskNumberMenu from "@/components/DeskNumberMenu";
import RecentDemands from "@/components/RecentDemands";
import UnderstandStep from "@/components/UnderstandStep";
import DemandStepNav from "@/components/DemandStepNav";


export default {
  name:'Home',
  components: {DemandStepNav, UnderstandStep, RecentDemands, LinkMenu, DeskNumberMenu, AgentTile},
  data: () => ({
    drawer: "true",
    links: [
      ['mdi-inbox-arrow-down', 'Inbox'],
      ['mdi-send', 'Send'],
      ['mdi-delete', 'Trash'],
      ['mdi-alert-octagon', 'Spam'],
    ],
  }),
}
</script>

<style scoped>

</style>