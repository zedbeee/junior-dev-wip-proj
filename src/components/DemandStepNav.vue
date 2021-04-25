<template>
  <v-navigation-drawer
      right
      fixed
      width="300px"
      height="100%"

  >
    <v-list
        three-line
        class="pa-0"
    >

      <v-list-group no-action>
        <v-list-item slot="activator" v-model="drawer" class="pr-2">
          <v-list-item-content>
            <v-list-item-title>My Internet is not working</v-list-item-title>
            <v-list-item-subtitle>Parent Demand</v-list-item-subtitle>
            <v-list-item-subtitle>Last Thursday at 2:14 PM</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-container

            class="px-2 ">
          <v-row justify="start" align="center">
            <v-col cols="1" sm="2">
              <v-btn icon large v-bind:to="{name: 'customerInfo', params: {cid: 123456}}">
                <v-icon>mdi-account-details</v-icon>

              </v-btn>
            </v-col>

            <v-col cols="1" sm="3">
              <v-btn icon large>
                <v-icon>mdi-email</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="1" sm="2">
              <v-btn color="primary">Create pull in</v-btn>
            </v-col>
          </v-row>

        </v-container>
        <v-divider></v-divider>

        <v-list-item class="pl-4 d-flex justify-space-between" style="min-height: 40px !important;">

          <v-list-item-action class="align-self-center pr-8 ml-0">
            <v-checkbox>
              <template v-slot:label>
                <span class="pl-6">Understand</span>
              </template>
            </v-checkbox>

          </v-list-item-action>

          <v-btn icon class="ml-auto">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item class="pl-4 d-flex justify-space-between" style="min-height: 40px !important;">

          <v-list-item-action class="align-self-center pr-8 ml-0">
            <v-checkbox>
              <template v-slot:label>
                <span class="pl-6">Informed Choice</span>
              </template>
            </v-checkbox>

          </v-list-item-action>

          <v-btn icon class="ml-auto">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item class="pl-4 d-flex justify-space-between" style="min-height: 40px !important;">

          <v-list-item-action class="align-self-center pr-20 ml-0">
            <v-checkbox>
              <template v-slot:label>
                <span class="pl-6">Legacy Information</span>
              </template>
            </v-checkbox>

          </v-list-item-action>

          <v-btn icon class="ml-auto">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item class="pl-4 d-flex justify-space-between" style="min-height: 40px !important;">

          <v-list-item-action class="align-self-center pr-8 ml-0">
            <v-checkbox>
              <template v-slot:label>
                <span class="pl-6">Review</span>
              </template>
            </v-checkbox>

          </v-list-item-action>

          <v-btn icon class="ml-auto">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-list-item>
      </v-list-group>
      <v-list-group no-action>
        <v-list-item slot="activator" class="pr-2">
          <v-list-item-content>
            <v-list-item-title>My Internet is not working</v-list-item-title>
            <v-list-item-subtitle>Parent Demand</v-list-item-subtitle>
            <v-list-item-subtitle>Last Thursday at 2:14 PM</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-container

            class="px-2 ">
          <v-row justify="start" align="center">
            <v-col cols="1" sm="2">
              <v-btn icon large>
                <v-icon>mdi-account-details</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="1" sm="3">
              <v-btn icon large>
                <v-icon>mdi-email</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="1" sm="2">
              <v-btn color="primary">Create pull in</v-btn>
            </v-col>
          </v-row>

        </v-container>
        <v-divider></v-divider>

        <v-list-item class="pl-4 d-flex justify-space-between" style="min-height: 40px !important;">

          <v-list-item-action class="align-self-center pr-8 ml-0">
            <v-checkbox>
              <template v-slot:label>
                <span class="pl-6">Understand</span>
              </template>
            </v-checkbox>

          </v-list-item-action>

          <v-btn icon class="ml-auto">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item class="pl-4 d-flex justify-space-between" style="min-height: 40px !important;">

          <v-list-item-action class="align-self-center pr-8 ml-0">
            <v-checkbox>
              <template v-slot:label>
                <span class="pl-6">Informed Choice</span>
              </template>
            </v-checkbox>

          </v-list-item-action>

          <v-btn icon class="ml-auto">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item class="pl-4 d-flex justify-space-between" style="min-height: 40px !important;">

          <v-list-item-action class="align-self-center pr-20 ml-0">
            <v-checkbox>
              <template v-slot:label>
                <span class="pl-6">Legacy Information</span>
              </template>
            </v-checkbox>

          </v-list-item-action>

          <v-btn icon class="ml-auto">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item class="pl-4 d-flex justify-space-between" style="min-height: 40px !important;">

          <v-list-item-action class="align-self-center pr-8 ml-0">
            <v-checkbox>
              <template v-slot:label>
                <span class="pl-6">Review</span>
              </template>
            </v-checkbox>

          </v-list-item-action>

          <v-btn icon class="ml-auto">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-list-item>
      </v-list-group>


    </v-list>


  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'DemandStepNav',
  data (){
    return {
      drawer: true
    }
  }
}
</script>
