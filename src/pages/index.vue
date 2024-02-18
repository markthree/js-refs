<script setup lang="ts">
import { InputInst } from 'naive-ui'
import type { RowData } from '~/type'
import { defineAsyncComponent } from 'vue'

const { t } = useI18n()

const { data, loading } = tableRequest()

const normalizeData = computed(() => {
	if (loading.value) {
		return []
	}
	return data.value as any as RowData[]
})

const { key, result } = useSearch(normalizeData, ['data.描述', 'data.仓库名'])

const Table = defineAsyncComponent(() => import('@/components/Table.vue'))

const inputInstRef = ref<InputInst | null>(null)

// 监听 ctrl + shift + f 搜索
const { Ctrl, Shift, f } = useMagicKeys()
whenever(
	() => Ctrl.value && f.value && Shift.value,
	() => {
		inputInstRef.value?.focus()
	},
)
</script>

<template>
	<div>
		<NSpace justify="center">
			<NInputGroup class="min-w-500px">
				<NInput
					ref="inputInstRef"
					v-model:value="key"
					round
					:placeholder="t('placeholder')"
				>
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
		<Suspense>
			<Table class="p-8" :data="result" :loading="loading" />
			<template #fallback>
				<NSpace justify="center" class="m-20"> 组件加载中... </NSpace>
			</template>
		</Suspense>
	</div>
</template>
