<template>
  <header-tab />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import HeaderTab from "@/components/HeaderTab.vue";

export default {
  components: { HeaderTab },
};
</script>
<style scoped></style>
