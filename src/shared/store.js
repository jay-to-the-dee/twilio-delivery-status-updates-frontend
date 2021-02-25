import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function getState() {
  return {
    SMSsids: [],
  };
}

export default new Vuex.Store({
  state: getState(),
  mutations: {
    addSMS(state, sms) {
      console.log(`Added SMS SID ${sms.sid} to Vuex store`);
      state.SMSsids.push(sms);
    },
    updateSMSStatus(state, { MessageSid, MessageStatus }) {
      try {
        state.SMSsids.find((x) => x.sid == MessageSid).status = MessageStatus;
      } catch (e) {
        console.error(e);
      }
    },
  },
  getters: {
    getAllSMSes: (state) => {
      return state.SMSsids;
    },
  },
});
