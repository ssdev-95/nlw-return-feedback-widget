import { ref, Ref } from 'vue'

export const key = '@feedbacker:theme'

export const darkModeEnabled: Ref<boolean> = ref(false)

export function persistTheme() {
	const isDarkMode = darkModeEnabled.value ? 1 : 0
	localStorage.setItem(key, isDarkMode)
}
