<template>
  <div id="app">
    <b-form @submit="onSubmit">
      <label for="sms-number-to">Send SMS To:</label>
      <b-form-input
        v-model="msgForm.to"
        id="sms-number-to"
        :state="phoneValidation"
      />
      <b-form-invalid-feedback :state="phoneValidation">
        Phone number must be 5-16 digits long.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="phoneValidation" />

      <label for="sms-message">Message:</label>
      <b-form-textarea id="sms-message" v-model="msgForm.body" />

      <b-button type="submit" variant="primary" class="pad">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msgForm: {
        to: "",
        body: "",
      },
    };
  },
  computed: {
    phoneValidation() {
      return this.msgForm.to.length > 4 && this.msgForm.to.length < 16;
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      fetch(`${process.env.VUE_APP_CALLBACK_BASE||''}/sendSMS`, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.msgForm),
      })
        .then((x) => x.json())
        .then((data) => {
          // window.alert(`SMS submitted to Twilio with SID: ${data.sid}`);
          this.$store.commit( 'addSMS', data );
        })
        .catch((error) => {
          window.alert("SMS submitted to Twilio failed", error);
        });
    },
  },
};
</script>

<style>
#app {
  width: 100%;
  font-weight: bold;
}
.pad {
  margin: 10px;
}
</style>
