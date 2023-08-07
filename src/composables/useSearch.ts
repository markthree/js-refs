import Fuse from 'fuse.js'
import { RowData } from '../type'
import type { MaybeRefOrGetter } from '@vueuse/core'

export function useSearch(data: MaybeRefOrGetter<RowData[]>, keys = ['uuid']) {
	const key = useStorage('Search', '')

	const ing = computedEager(() => toValue(key).length > 0)

	const storeIndex = computed(() => {
		return Fuse.createIndex(keys, toValue(data))
	})

	const store = computed(() => {
		return new Fuse(
			toValue(data),
			{
				keys,
				shouldSort: true,
			},
			storeIndex.value,
		)
	})

	const result = computed(() => {
		const newResult = store.value.search(toValue(key)).map((v) => v.item)
		if (newResult.length === 0) {
			return toValue(data)
		}
		return newResult
	})

	return {
		ing,
		key,
		result,
		store,
		storeIndex,
	}
}
