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
        Phone number must be
        <a href="https://www.twilio.com/docs/glossary/what-e164"
          >E164 compliant (like +14155552671)</a
        >
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="phoneValidation">
        Phone number valid
      </b-form-valid-feedback>

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
      const regEx = /^\+[1-9]\d{10,14}$/;
      return regEx.test(this.msgForm.to);
    },
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();

      const fetchRequest = await fetch(
        `/sendSMS`,
        {
          method: "post",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(this.msgForm),
        }
      );

      if (fetchRequest.status == 200)
        this.$store.commit("addSMS", await fetchRequest.json());
      else {
        const errText = await fetchRequest.text();
        console.error(errText);
        window.alert(`SMS submission to Twilio failed :( See ${errText}`);
      }
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
