export interface RowData {
	uuid: string
	data: {
		链接: string
		描述: string
		仓库名: string
		框架?: string[]
		端: 'Unified' | 'Browser' | 'Service'
		运行时?: Array<'node' | 'deno' | 'bun'>
		类型: 'Ref' | 'Project' | 'Shared' | 'Demo'
	}
	created_at: string
	updated_at: string
}
