<template>
  <div class="sidebar">
    <h1 class="sidebar__title">ShortPick</h1>
    <p class="siderbar__text">version:</p>
    <p class="siderbar__text--secondary">v1.0.0 beta</p>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style lang="scss" scoped>
.sidebar {
  padding-left: 20px;
  width: 252px;
  min-height: 100%;
  background: #140606;
  color: #fff;
  float: left;

  &__title {
    padding-top: 80px;
  }

  &__text {
    padding-top: 40px;
  }

  &__text--secondary {
    font-style: italic;
  }
}
</style>
