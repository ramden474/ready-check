<script setup lang="ts">
  import { darkTheme } from "naive-ui";

  import ReadyCheck from "@/components/ReadyCheck/ReadyCheck.vue";

  import "./App.css";
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <ReadyCheck />
  </n-config-provider>
</template>
