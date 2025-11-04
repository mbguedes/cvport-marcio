import { ref, onMounted, watchEffect } from 'vue'

export function useTheme() {
    // Tenta ler o tema salvo no localStorage ou usa o padrão do sistema
    const getInitialTheme = (): boolean => {
        if (typeof localStorage !== 'undefined') {
            const storedTheme = localStorage.getItem('theme')
            if (storedTheme) {
                return storedTheme === 'dark'
            }
        }
        // Padrão: checa preferência do sistema
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    const isDark = ref(getInitialTheme())

    const toggleTheme = () => {
        isDark.value = !isDark.value
    }

    // Observa mudanças no isDark e atualiza o <html> e o localStorage
    watchEffect(() => {
        if (isDark.value) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    })

    // Garante que a classe seja aplicada assim que o app carregar
    onMounted(() => {
        if (isDark.value) {
            document.documentElement.classList.add('dark')
        }
    })

    return {
        isDark,
        toggleTheme
    }
}