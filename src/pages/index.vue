<script setup lang="ts">
import type { RowData } from '~/type'

const { t } = useI18n()

const { data, loading } = tableRequest()

const normalizeData = computed(() => {
	if (loading.value) {
		return []
	}
	return data.value as any as RowData[]
})
</script>

<template>
	<div>
		<NSpace justify="center">
			<NInputGroup class="min-w-500px">
				<NInput round :placeholder="t('placeholder')">
					<template #prefix>
						<NIcon>
							<div class="i-ion:flash-outline"></div>
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
		<Table class="p-8" :data="normalizeData" :loading="loading" />
	</div>
</template>
