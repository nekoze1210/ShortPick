<template>
  <div class="container clearfix">
    <sidebar/>
    <setting-form/>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import SettingForm from "./components/SettingForm.vue";

export default {
  name: "App",
  components: { Sidebar, SettingForm }
};
</script>

<style lang="scss" scoped>
.container {
  height: 378px;
}

.clearfix:after {
  display: block;
  clear: both;
}
</style>
