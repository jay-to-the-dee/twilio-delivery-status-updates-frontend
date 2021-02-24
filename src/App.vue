<template>
  <b-container id="app">
    <b-row class="text-center">
      <b-col cols="3" class="sms-list">
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
import { io } from "socket.io-client";

export default {
  name: "App",
  components: {
    SMSList,
    SMSComposerAndStatus,
  },
  created: function() {
    const URL = `http://${process.env.VUE_APP_SOCKET_HOST}`;
    const socket = io(URL, { autoConnect: true });

    socket.on("SmsStatusUpdate", ({ MessageSid, MessageStatus }) => {
      console.log(`SID: ${MessageSid}, Status: ${MessageStatus}`);
      this.$store.commit("updateSMSStatus", { MessageSid, MessageStatus });
    });
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
  /** background-color: #eee; **/
  padding: 5px;
  border-radius: 10px;
}
</style>
