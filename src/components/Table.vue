<script setup lang="tsx">
import type { RowData } from '~/type'
import { NSpace, type DataTableColumns, NEllipsis, NTag } from 'naive-ui'

const points = {
	Unified: (
		<NTag round type="info" bordered={false}>
			通用
		</NTag>
	),
	Service: (
		<NTag round type="error" bordered={false}>
			后端
		</NTag>
	),
	Browser: (
		<NTag round type="success" bordered={false}>
			前端
		</NTag>
	),
}

const types = {
	Ref: (
		<NTag bordered={false} type="info">
			库
		</NTag>
	),
	Demo: <NTag bordered={false}>示例</NTag>,
	Shared: (
		<NTag type="info" bordered={false}>
			库
		</NTag>
	),
	Project: (
		<NTag type="success" bordered={false}>
			项目
		</NTag>
	),
}

const runtimes = {
	node: <div>node</div>,
	deno: <div>deno</div>,
	bun: <div>bun</div>,
}

const columns: DataTableColumns<RowData> = [
	{
		title: '仓库名',
		key: '仓库名',
		render(rowData) {
			return <div>{rowData.data['仓库名']}</div>
		},
	},
	{
		title: '描述',
		key: '描述',
		width: '260',
		render(rowData) {
			return (
				<NEllipsis style="max-width: 240px">{rowData.data['描述']}</NEllipsis>
			)
		},
	},
	{
		title: '链接',
		key: '链接',
		width: '260',
		render(rowData) {
			return (
				<a
					class="text-blue-500 dark:text-blue-400"
					href={rowData.data['链接']}
					target="__blank"
				>
					<NEllipsis style="max-width: 240px">{rowData.data['链接']}</NEllipsis>
				</a>
			)
		},
	},
	{
		title: '端',
		key: '端',

		render(rowData) {
			return points[rowData.data['端']]
		},
	},
	{
		title: '类型',
		key: '类型',
		render(rowData) {
			return types[rowData.data['类型']]
		},
	},
	{
		title: '框架',
		key: '框架',
		render(rowData) {
			if (!rowData.data['框架']) {
				return null
			}
			return (
				<NSpace>
					{rowData.data['框架'].map((v) => (
						<div>{v}</div>
					))}
				</NSpace>
			)
		},
	},
	{
		title: '运行时',
		key: '运行时',
		render(rowData) {
			if (!rowData.data['运行时']) {
				return null
			}
			return <NSpace>{rowData.data['运行时'].map((v) => runtimes[v])}</NSpace>
		},
	},
]

defineProps<{
	data: RowData[]
	loading?: boolean
}>()
</script>

<template>
	<NDataTable
		:columns="columns"
		:data="data"
		:max-height="500"
		virtual-scroll
		:loading="loading"
	/>
</template>
