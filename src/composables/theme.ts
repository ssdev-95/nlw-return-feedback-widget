import { ref, Ref } from 'vue'

export const key = '@feedbacker:theme'

export const darkModeEnabled: Ref<boolean> = ref(true)

export function persistTheme() {
	localStorage.setItem(key, String(
		darkModeEnabled.value ? 1 : 0
	))
}
