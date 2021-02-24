<template>
  <div>
    <b-button-group
      vertical="true"
      v-for="SMS in this.$store.getters.getAllSMSes"
      :key="SMS.sid"
      class="fill-width"
    >
      <b-button
        class="button"
        :variant="calculateVariant(SMS.status)"
        v-on:click="
          $bvModal.msgBoxOk(`${SMS.body}`, {
            titleHtml: `${SMS.sid}<br />
            <i>To: ${SMS.to}</i>
            `,
          })
        "
        >{{ SMS.sid }}<br />
        <i>To: {{ SMS.to }}</i>
        <br />
        <b>{{ SMS.status }}</b
        ><br />
      </b-button>
    </b-button-group>
  </div>
</template>

<script>
export default {
  methods: {
    calculateVariant(status) {
      switch (status) {
        case "sent":
          return "info";

        case "sending":
          return "primary";

        case "delivered":
          return "success";

        case "undelivered":
        case "failed":
          return "danger";

        default:
          return "secondary";
      }
    },
  },
};
</script>

<style>
.fill-width {
  width: 100%;
}
.button {
  margin: 2px;
  width: 100%;
}
</style>
