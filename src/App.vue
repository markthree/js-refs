<script setup lang="ts">
import { naiveTheme } from 'vue-dark-switch'
</script>

<template>
	<NConfigProvider :theme="naiveTheme">
		<RouterView />
	</NConfigProvider>
</template>
