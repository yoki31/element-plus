import { provide, inject, getCurrentInstance, computed, shallowRef } from 'vue'
import merge from 'lodash/merge'
import buttonThemeConfig from '@element-plus/components/button/src/styles'
import type { InjectionKey, Ref } from 'vue'

type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T

type ButtonThemeConfiguration = DeepPartial<typeof buttonThemeConfig>

interface ThemeConfiguration {
  button: ButtonThemeConfiguration
}

const defaultThemeConfig: ThemeConfiguration = {
  button: buttonThemeConfig,
}

const themeConfigurationContextKey: InjectionKey<Ref<ThemeConfiguration>> =
  Symbol()

export const useThemeProvider = () => {
  const vm = getCurrentInstance()!
  const props = vm.props as {
    theme: any
  }
  const theme = computed(() => {
    return merge({}, defaultThemeConfig, props.theme)
  })
  provide(themeConfigurationContextKey, theme)
}

export const useTheme = () => {
  return inject(themeConfigurationContextKey, shallowRef(defaultThemeConfig))
}
