<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
	<NSpace justify="center">
		<NInputGroup class="min-w-500px">
			<NInput round :placeholder="t('placeholder')">
				<template #prefix>
					<NIcon>
						<div class="i-ion-flash-outline"></div>
					</NIcon>
				</template>
			</NInput>
			<NButton round>
				<NIcon>
					<div class="i-ion:ios-search-strong"></div>
				</NIcon>
			</NButton>
		</NInputGroup>
	</NSpace>
</template>
