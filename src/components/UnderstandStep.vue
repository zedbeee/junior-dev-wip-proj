<template>
  <v-container
      class="py-0 px-6"
      fluid
  >
    <v-timeline
        dense
    >
      <!--Demand Management-->
      <v-timeline-item
          dot
          large
      >
        <v-card>
          <v-card-text>
            <section>
              <div class="subheading mb-1">This demand is being managed by</div>
              <div class="title mt-1 mb-3">Zachary Bridge</div>
            </section>
            <section class="mb-3">
              <div class="subheading mb-1">It was last modified by</div>
              <div class="title mt-1 mb-3">Zachary Bridge on 2021-04-10 at 3:04pm</div>
            </section>
            <v-btn
                tile
                color="primary"
                class="ma-0 mt-0"
            >
              Take over demand
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <!--Demand Source-->
      <v-timeline-item
          dot
          large
      >
        <v-card>
          <v-card-text>
            <section>
              <div class="subheading mb-1">This demand came in through</div>
              <div class="title mt-1">Phone</div>
            </section>
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <!--Demand Reason-->
      <v-timeline-item
          dot
          large
      >
        <v-card>
          <v-card-text>
            <section>
              <div class="subheading mb-1">This customer is reaching out to us because</div>
              <div class="title mt-1 mb-3">{{ demandDetails.name }}</div>
            </section>
            <v-btn
                tile
                color="primary"
                class="ma-0 mt-0"
            >
              Change the customer's demand
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <!--Demand Value-->
      <v-timeline-item
          dot
          large
      >
        <v-card>
          <v-card-text>
            <section>
              <div class="title mt-1 mb-3">This is a {{demandDetails.type}} demand</div>
            </section>
            <v-btn
                tile
                color="primary"
                class="ma-0 mt-0"
            >
              Change value or failure demand
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <!--Demand Customer Info-->
      <v-timeline-item
          dot
          large
      >
        <v-card>
          <v-card-text>
            <section>
              <div class="title mt-1 mb-3">Customer Information</div>
            </section>
            <v-text-field
                filled
                light
                placeholder="CID"
                color="black"
                background-color="white"
                v-model="customerDetails.cid"
            >
            </v-text-field>
            <v-text-field
                filled
                light
                placeholder="Name"
                color="black"
                background-color="white"
                v-model="fullName"
            >
            </v-text-field>
            <v-text-field
                filled
                light
                placeholder="Phone number"
                color="black"
                background-color="white"
                v-model="customerDetails.phone"
            >
            </v-text-field>
            <v-text-field
                filled
                light
                placeholder="Email"
                color="black"
                background-color="white"
                v-model="customerDetails.email"
            >
            </v-text-field>
            <v-btn
                block
                tile
                color="primary darken-2"
                class="ma-0 mt-0"
            >
              Attach to an existing customer
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <!--Demand Order-->
      <v-timeline-item
          dot
          large
      >
        <v-card>
          <v-card-text>
            <div class="title">The following orders are associated with this demand</div>
            <v-divider class="mb-2 mt-2"></v-divider>
            <div class="caption ">OID-{{ orderDetails.oid }} / {{ orderDetails.S2S || orderDetails.streetNumber + " " + orderDetails.streetName + " " + orderDetails.city }}</div>
            <div class="title">{{ orderDetails.package }}</div>
            <div class="caption">Order created on {{ orderDetails.createDate }} at 12:00am</div>
            <v-divider class="mb-2 mt-2"></v-divider>
            <v-dialog
                v-model="dialog"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
              >
              <template v-slot:activator="{on, attrs}">
                <v-btn
                    tile
                    color="primary"
                    class="ma-0 mt-0"
                    v-bind="attrs"
                    v-on="on"
                >
                  Select the orders attached to this demand
                </v-btn>
              </template>
              <v-card>
                <v-toolbar
                color="primary"
                >
                  <v-toolbar-title>Select the orders associated with this demand</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn
                      icon
                      @click="dialog = false"
                  >
                    <v-icon
                        color="green"
                        large
                    >
                      mdi-checkbox-marked-circle
                    </v-icon>
                  </v-btn>
                  <v-btn
                      icon
                      @click="dialog = false"
                  >
                    <v-icon
                        color="red"
                        large
                    >
                      mdi-close-circle
                    </v-icon>
                  </v-btn>
                </v-toolbar>
                <div class="d-flex justify-start">
                  <div class="d-flex px-10 ">
                    <p class="d-text-xs-center pt-3">Filter Orders</p>
                  </div>
                  <div class="d-flex px-10">
                    <v-text-field class="pr-2 pt-0 pb-0"
                    label="OID"
                    single-line
                    hide-details
                    v-model="search"></v-text-field>
                  </div>
                </div>
                <v-data-table
                :headers="headers"
                :items ="customerDetails.orders"
                :items-per-page="25"
                :search="search"
                show-select


                >
                  <template v-slot:item="props">
                    <tr>
                      <td>
                        <v-checkbox
                        hide-details>

                        </v-checkbox>
                      </td>
                      <td class="text-start">{{props.item.oid}}</td>
                      <td class="text-start">{{ props.item.S2S ||  orderDetails.streetNumber + " " + orderDetails.streetName + " " + orderDetails.city  }}</td>
                      <td class="text-start">{{props.item.package}}</td>
                      <td class="text-start">{{props.item.status}}</td>
                      <td class="text-start">{{props.item.createDate}}</td>
                    </tr>
                  </template>

                </v-data-table>
              </v-card>

            </v-dialog>

          </v-card-text>
        </v-card>
      </v-timeline-item>
      <!--Demand Related-->
      <v-timeline-item
          dot
          large
      >
        <v-card>
          <v-card-text class="pb-1">
            <v-alert color="blue-grey darken-3">
              <div class="title text-uppercase">IS THIS DEMAND RELATED TO A PREVIOUS DEMAND</div>
              <v-divider class="my-2"></v-divider>
              <div>
                <b>For example:</b>
                <br>
                If a customer is contacting us to find out their installation date, then the demand would be related to
                their existing "I'd like Internet Demand".
              </div>
            </v-alert>
          </v-card-text>
          <v-card-actions class="pl-3 pb-2">
            <v-container
                fluid
                class="pa-0"
            >
              <v-row no-gutters>
                <v-col>
                  <v-btn block tile color="primary">Select a related demand</v-btn>
                </v-col>
                <v-col>
                  <v-btn block tile>Remove related demand</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
      <!--Demand Closure-->
      <v-timeline-item
          dot
          large
      >
        <v-card>
          <v-card-text class="pb-1">
            This step was completed on 2021-04-08 at 5:17pm
          </v-card-text>
          <v-card-actions class="pl-3 pb-2">
            <v-container
                fluid
                class="pa-0"
            >
              <v-row>
                <v-col>
                  <v-btn tile color="green">
                    Next step
                    <v-icon>
                      mdi-chevron-right
                    </v-icon>
                  </v-btn>
                  <v-btn
                      tile
                      color="primary"
                      class="ml-4"
                  >Update the date this step was marked as done
                  </v-btn>
                </v-col>


              </v-row>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-timeline-item>


    </v-timeline>
  </v-container>
</template>
<script>
export default {
  name: 'UnderstandStep',
  mounted(){
    this.orderDetails = this.getOrderDetails();
    this.customerDetails = this.getCustomerDetails();
    this.demandDetails = this.getDemandDetails();
    this.fullName = this.getFullName();

  },
  watch:{
    $route: function(){
      this.orderDetails = this.getOrderDetails();
      this.customerDetails = this.getCustomerDetails();
      this.demandDetails = this.getDemandDetails();
      this.fullName = this.getFullName();
    }
  },
  methods: {
    getFullName(){
      return (this.customerDetails.fName + " " + this.customerDetails.lName);
    },
    getDemandDetails(){
      for (const a of this.$store.state.demands){
        if (a.demandID == this.$router.currentRoute.params.id){
          return (a);
        }
      }
    },
    getCID(){
      for (const a of this.$store.state.demands){
        if (a.demandID == this.$router.currentRoute.params.id){
          return (a.cid);
        }
      }
    },
    getCustomerDetails(){
      let cid = this.getCID();
      for (const a of this.$store.state.customers){
        if (a.cid == cid){
          return (a);
        }
      }
    },
    getOID() {
      for (const a of this.$store.state.demands) {
        if (a.demandID == this.$router.currentRoute.params.id) {
          return (a.oid);
        }
      }
    },
    getOrderDetails() {
      let oid = this.getOID();
      for (const a of this.$store.state.customers) {
        for (const b of a.orders){
          if (b.oid == oid){
            return (b);
          }
        }
      }
    }
  },
  data () {
    return {
      dialog: false,
      search: '',
      orderDetails : [],
      allOrders : [],
      customerDetails : [],
      demandDetails: [],
      fullName: '',
      //orderNickname: '',
      headers:[
        {text: "OrderID", value: 'oid', align:'start' },
        {text: "Title", value: 'nickname'},
        {text: "Package", value: 'package' },
        {text: "Status", value: 'status' },
        {text: "Created Date", value: 'createDate' },
      ]
    }
  }
}
</script>
<style scoped>

.v-input--selection-controls{
  margin-top: 0px !important;
}
</style>