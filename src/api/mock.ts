import { useRequest } from 'vue-request'

export const tableRequest = () => {
	const { data, loading, error } = useRequest(() => http.get('/mock/table'))
	return { data, loading, error }
}
