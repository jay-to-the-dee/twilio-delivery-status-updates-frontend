<template>
  <div>
    <b-button-group vertical="true" v-for='SMS in this.$store.getters.getAllSMSes' :key='SMS.sid' class="fill-width">
      <b-button class="button">{{SMS.sid}}
      <i>{{SMS.to}}</i><br />
      <b>{{SMS.status}}</b><br />
      </b-button>
    </b-button-group>
  </div>
</template>

<script>
</script>

<style>
.fill-width {
  width: 100%;
}
.button {
  margin:2px;
  width: 100%;
}
</style>
