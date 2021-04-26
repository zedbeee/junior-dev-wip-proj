<template>
<v-card>
  <v-data-iterator
      hide-default-footer
      :items="customerDetails.orders"
      :search="search"

  >
    <v-text-field
      v-model="search"
      clearable
      label="Filter Orders">
    </v-text-field>

        <v-list three-line>
          <template
              v-for="o in customerDetails.orders"
              >
            <v-list-item
              :key="o.orderID">
              <v-list-item-content>
                <v-list-item-subtitle>OID-{{o.oid}} / {{o.S2S || (o.streetNumber + " " + o.streetName + " " + o.city)}} </v-list-item-subtitle>
                <v-list-item-title>{{o.package}}</v-list-item-title>
                <v-list-item-title>{{o.status}}</v-list-item-title>

              </v-list-item-content>
              <v-btn min-width="100px" tile color="primary">WIP</v-btn>
              <v-btn min-width="100px" tile color="primary">Intranet</v-btn>

            </v-list-item>
            <v-divider :key="o.createdDate"></v-divider>
          </template>
        </v-list>



  </v-data-iterator>
</v-card>
</template>

<script>
export default {
  name: "TabOrderList",
  mounted() {
    this.customerDetails = this.getCustomerDetails();
  },

  methods: {
    orderNickname2 : function(inOid){
      for (const a of this.customerDetails){
        for (const b of a.orders){
          if (b.oid == inOid){
            if (b.S2S == null){
              return (b.streetNumber + " " + b.streetName + " " + b.unitType + " " + b.unitNumber + " "  +b.city);
            } else
              return b.S2S
          }
        }
      }
    },
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
      customerDetails: [],
      dialog: false,
      search: '',
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