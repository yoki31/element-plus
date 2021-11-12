import { provide, defineComponent } from 'vue'
import { useLocale, useThemeProvider } from '@element-plus/hooks'
import { configProviderContextKey } from '@element-plus/tokens'
import { configProviderProps } from './config-provider'

export const ConfigProvider = defineComponent({
  name: 'ElConfigProvider',
  props: configProviderProps,
  setup(props, { slots }) {
    useLocale()
    useThemeProvider()
    provide(configProviderContextKey, props)
    return () => slots.default?.()
  },
})
