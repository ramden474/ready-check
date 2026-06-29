<script setup lang="ts">
  import { getCurrentWindow } from "@tauri-apps/api/window";
  import { Close } from "@vicons/ionicons5";

  import { useEvents } from "@/composables/useEvents";

  import "./ReadyCheck.css";

  const { data: events } = useEvents();

  const [nextEvent, ...upcomingEvents] = events.value;

  const hideWindow = async () => {
    const win = getCurrentWindow();
    await win.hide();
  };
</script>

<template>
  <n-flex
    justify="center"
    align="center"
    id="container"
  >
    <n-button
      quaternary
      circle
      @click="hideWindow"
      id="close"
    >
      <template #icon>
        <n-icon><Close /></n-icon>
      </template>
    </n-button>
    <n-card id="content">
      <n-flex class="layout">
        <div id="upcoming">
          <n-h2>Upcoming Events</n-h2>
          <n-list bordered="true">
            <n-list-item v-for="event in upcomingEvents"
              >{{ event.name }}
              {{ event.datetime.toLocaleString() }}</n-list-item
            >
          </n-list>
        </div>
        <n-divider
          vertical
          style="height: auto"
        />
        <div id="now">
          <n-h2>Starting Soon</n-h2>
          <n-h3>
            {{ nextEvent.name }} {{ nextEvent.datetime.toLocaleString() }}
          </n-h3>
          <n-space
            vertical
            size="large"
          >
            <n-tag v-for="participant in nextEvent.participants">
              {{ participant.email }}
            </n-tag>
            <n-button
              primary
              type="primary"
              >Join</n-button
            >
          </n-space>
        </div>
      </n-flex>
    </n-card>
  </n-flex>
</template>
