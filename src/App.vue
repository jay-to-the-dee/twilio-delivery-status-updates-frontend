<template>
  <b-container id="app" class="bv-example-row">
    <b-row class="text-center">
      <b-col cols="1"> 
      <SMSList />
      </b-col>
      <b-col cols="3"><SMSComposerAndStatus /></b-col>
    </b-row>
  </b-container>
</template>

<script>
import SMSList from './components/SMSList.vue'
import SMSComposerAndStatus from './components/SMSComposerAndStatus.vue'


export default {
  name: "App",
  components: {
    SMSList,
    SMSComposerAndStatus
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
</style>
