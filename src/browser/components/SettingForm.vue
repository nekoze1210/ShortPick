<template>
  <div class="setting-form">
    <label class="label">Shortcut:</label>
    <input class="input" type="text" v-model="shortcut" @change="saveUserDefaults()" disabled>
    <label class="label">Webhook URL:</label>
    <input
      class="input"
      type="text"
      placeholder="https://hooks.slack.com/services/..."
      v-model="webhookUrl"
      @change="saveUserDefaults()"
    >
    <label class="label">TargetBrowser:</label>
    <div class="select">
      <select v-model="targetBrowser" @change="saveUserDefaults()">
        <option>Chrome</option>
        <option>Firefox</option>
        <option>Safari</option>
      </select>
    </div>
    {{ check }}
  </div>
</template>

<script>
const { systemPreferences } = require("electron");
export default {
  name: "SettingForm",
  data() {
    return {
      shortcut: "⌘+Shift+L",
      webhookUrl: "",
      targetBrowser: "Chrome",
      check: ""
    };
  },
  methods: {
    saveUserDefaults() {
      console.log("userdefaults trigerred");
      systemPreferences.registerDefaults("webhookUrl", this.webhookUrl);
      systemPreferences.registerDefaults("targetBrowser", this.targetBrowser);
      systemPreferences.registerDefaults("shortcut", this.shortcut);
      this.check = systemPreferences.getUserDefault("webhookUrl", "string");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../node_modules/bulma/bulma.sass";
.setting-form {
  width: 100%;
  min-height: 100%;
  color: #333;
}

.label {
  width: 400px;
}

.input {
  width: 400px;
}
</style>
