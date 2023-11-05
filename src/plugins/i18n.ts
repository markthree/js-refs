import { createI18n } from 'vue-i18n'

const messages = Object.fromEntries(
	Object.entries(
		import.meta.glob('../../locales/*.y(a)?ml', {
			eager: true,
		}),
	).map(([key, value]) => {
		const yaml = key.endsWith('.yaml')
		// @ts-ignore
		return [key.slice(14, yaml ? -5 : -4), value.default]
	}),
)

// 缓存到本地 localStorage 中，第二个参数为空时的默认语言
const storageLocale = useStorage('locale', '简体中文')

export const i18n = createI18n({
	legacy: false,
	locale: storageLocale.value,
	messages,
})

// 同步 i18n
syncRef(storageLocale, i18n.global.locale)

export default i18n
