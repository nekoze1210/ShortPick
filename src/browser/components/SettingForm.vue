<template>
  <div class="setting-form">
    <label class="label">Shortcut:</label>
    <input class="input" type="text" v-model="shortcut" @change="saveUserDefaults()" disabled>
    <label class="label">Slack Webhook URL:</label>
    <input
      class="input"
      type="text"
      placeholder="https://hooks.slack.com/services/..."
      v-model="webhookUrl"
      @change="saveUserDefaults()"
    >
    <label class="label">Channel Name:</label>
    <input
      class="input"
      type="text"
      placeholder="random"
      v-model="channelName"
      @change="saveUserDefaults()"
    >
    <label class="label">TargetBrowser:</label>
    <div class="select">
      <select v-model="targetBrowser" @change="saveUserDefaults()">
        <option>Chrome</option>
        <option>Safari</option>
      </select>
    </div>
    {{ check }}
  </div>
</template>

<script>
const storage = require("electron-json-storage");

export default {
  name: "SettingForm",
  data() {
    return {
      shortcut: "⌘+Shift+L",
      webhookUrl: "",
      channelName: "",
      targetBrowser: "Chrome"
    };
  },
  methods: {
    saveUserDefaults() {
      var json = {
        webhookUrl: this.webhookUrl,
        channelName: this.channelName,
        targetBrowser: this.targetBrowser,
        shortcut: this.shortcut
      };
      storage.set("ShortPickConfig", json, function(error) {
        if (error) throw error;
      });
    }
  },
  mounted() {
    let self = this;
    storage.get("ShortPickConfig", function(error, data) {
      if (error) throw error;
      if (Object.keys(data).length === 0) {
      } else {
        self.webhookUrl = data["webhookUrl"] || "";
        self.channelName = data["channelName"] || "";
        self.targetBrowser = data["targetBrowser"] || "Chrome";
      }
    });
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
