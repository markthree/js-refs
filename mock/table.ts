import { MockMethod } from 'vite-plugin-mock'
import Table from './table.json'

export default [
	{
		url: '/api/mock/table',
		method: 'get',
		response() {
			return Table
		},
	},
] as MockMethod[]
