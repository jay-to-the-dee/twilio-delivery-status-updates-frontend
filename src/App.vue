<template>
  <b-container id="app">
    <b-row class="text-center">
      <b-col cols="3"  class="sms-list">
        <SMSList />
      </b-col>
      <b-col cols="1" />
      <b-col cols="7">
        <SMSComposerAndStatus />
      </b-col>
      <b-col cols="1" />
    </b-row>
  </b-container>
</template>

<script>
// import SMSList from './components/SMSList.vue'
import SMSComposerAndStatus from "./components/SMSComposerAndStatus.vue";
import SMSList from "./components/SMSList.vue";

export default {
  name: "App",
  components: {
    SMSList,
    SMSComposerAndStatus,
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
  min-width: 90%;
  height: 100%;
  margin: 10px;
}
.sms-list {
  background-color: #eee;
  padding: 5px;
  border-radius:10px;
}
</style>
