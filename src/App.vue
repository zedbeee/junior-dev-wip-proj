<template>
<v-app>


      <router-view/>

</v-app>
</template>

<script>


export default {

  data: () => ({
  }),
  computed: {
    demands(){
      return this.$store.state.demands
    },
    customers(){
      return this.$store.state.customers
    }
  },
  mounted(){
    this.$store.dispatch("getDemands");
    this.$store.dispatch("getCustomers");
  }
}
</script>

<style>

</style>