<template>
  <v-app id="inspire">


    <v-navigation-drawer
        v-model="drawer"
        app
        width="300px"
    >
      <AgentTile/>

      <v-divider></v-divider>

      <DeskNumberMenu/>

      <v-divider></v-divider>

      <LinkMenu :links="links"/>
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
  components: {DemandStepNav, UnderstandStep, RecentDemands, DeskNumberMenu, LinkMenu, AgentTile},
  data: () => ({
    cards: ['Today', 'Yesterday'],
    drawer: null,
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
.block {

}

.v-list-group__header::before {



}
</style>