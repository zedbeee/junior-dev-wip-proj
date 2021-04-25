<template>
  <div>
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
    <v-main>
      <v-card>
  <div class="d-flex align-center pa-3 ">
    <div class="text-h6 pr-3">{{customerDetails.fName}} {{customerDetails.lName}}</div>
    <div class="text-caption">CID-{{ customerDetails.cid }}</div>

  </div>

  <v-divider></v-divider>
  <div class="d-flex flex-column">
    <div class="d-flex py-1 pl-3">
      <v-icon small>mdi-web</v-icon>
      <div class="pl-3 body-2">English</div>
    </div>
    <div class="d-flex py-1 pl-3">
      <v-icon small>mdi-cellphone</v-icon>
      <div class="pl-3 body-2">{{customerDetails.phone}}</div>
    </div>
    <div class="d-flex py-1 pl-3">
      <v-icon small>mdi-email</v-icon>
      <div class="pl-3 body-2">{{ customerDetails.email }}</div>
    </div>
    <div class="d-flex py-1 pl-3">
      <v-icon small>mdi-map-marker</v-icon>
      <div class="pl-3 body-2">
        {{customerDetails.billingAddress.streetNumber}}
        {{customerDetails.billingAddress.streetName}}
        {{customerDetails.billingAddress.streetType}}
        {{customerDetails.billingAddress.unitType}}
        {{customerDetails.billingAddress.unitNumber}}
        {{customerDetails.billingAddress.city}}
        {{customerDetails.billingAddress.province}}
        {{customerDetails.billingAddress.postalCode}}
      </div>
    </div>
    <div class="d-flex py-1 pl-3">
      <v-icon small>mdi-currency-usd</v-icon>
      <div class="pl-3 body-2">{{ customerDetails.paymentMethod }}</div>
    </div>
    <div class="d-flex pl-4 py-3">
      <v-btn tile color="primary">OPEN INTRANET ACCOUNT</v-btn>
      <v-btn tile disabled color="primary" class="ml-4">call customer</v-btn>
    </div>
  </div>
</v-card>

    <div class="my-3">
      <v-alert type="warning" color="red">Customer will often recite the entire Bee movie script, end the call when it happens</v-alert>
    </div>
    <v-tabs
        v-model="tab"
        grow>
      <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{item.tab}}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tab">
        <v-card>
          <component v-bind:is="item.content" v-bind:customerDetails="customerDetails"></component>
        </v-card>

      </v-tab-item>
    </v-tabs-items>
  </v-main>
  </div>
</template>

<script>
import TabOrderList from "@/components/TabOrderList";
import AgentTile from "@/components/AgentTile";
import LinkMenu from "@/components/LinkMenu";
import DeskNumberMenu from "@/components/DeskNumberMenu";
import RecentDemands from "@/components/RecentDemands";


export default {
  name: "CustomerInfo",
  mounted(){
    this.customerDetails = this.getCustomerDetails();
  },
  watch:{
    $route: function(){
      this.customerDetails = this.getCustomerDetails();
    }
  },
  components: {
    TabOrderList, AgentTile, LinkMenu, DeskNumberMenu, RecentDemands
  },
  methods: {
    getCID(){
          return (this.$router.currentRoute.params.cid);
    },
    getCustomerDetails(){
      let cid = this.getCID();
      for (const a of this.$store.state.customers){
        if (a.cid == cid){
          return (a);
        }
      }
    },
  },
  data () {
    return {
      tab: null,
      search: '',
      drawer: "true",
      customerDetails: '',
      items:[
        {tab: 'Orders', content: 'TabOrderList'},
        {tab: 'Demands', content: 'Demands'},
        {tab: 'Billing', content: 'Billing'},
        {tab: 'History', content: 'History'},
      ],
      headers:[
        {text: "OrderID", value: 'orderID', align:'start' },
        {text: "Package", value: 'package' },
        {text: "Status", value: 'status' },
        {text: "Created Date", value: 'createdDate' },
      ],
    }
  }
}
</script>

<style scoped>

</style>