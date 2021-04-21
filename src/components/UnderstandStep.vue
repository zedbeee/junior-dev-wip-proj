<template>
  <v-container
      class="py-7 px-6"
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
              <div class="title mt-1 mb-3">I'd like faster speed</div>
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
              <div class="title mt-1 mb-3">This is a Value demand</div>
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
            >
            </v-text-field>
            <v-text-field
                filled
                light
                placeholder="Name"
                color="black"
                background-color="white"
            >
            </v-text-field>
            <v-text-field
                filled
                light
                placeholder="Phone number"
                color="black"
                background-color="white"
            >
            </v-text-field>
            <v-text-field
                filled
                light
                placeholder="Email"
                color="black"
                background-color="white"
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
            <div class="caption ">OID-123456</div>
            <div class="title">Cable 100 Unlimited</div>
            <div class="caption">Order created on 2017-07-18 at 12:00am</div>
            <v-divider class="mb-2 mt-2"></v-divider>
            <v-btn
                tile
                color="primary"
                class="ma-0 mt-0"
            >
              Select the orders attached to this demand
            </v-btn>
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
  name: 'UnderstandStep'
}
</script>