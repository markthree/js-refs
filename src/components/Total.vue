<script setup lang="ts">
defineProps<{ to: number }>()
</script>

<template>
	<NGradientText size="16" type="success">
		<NNumberAnimation :from="0" show-separator :to="to" />
	</NGradientText>
</template>
