<template>
  <div>
    <el-config-provider :theme="theme[currentTheme]">
      <el-button type="primary">Primary</el-button>
    </el-config-provider>
    <div>
      <el-radio-group v-model="currentTheme">
        <el-radio-button label="default">Default</el-radio-button>
        <el-radio-button label="red">Red</el-radio-button>
        <el-radio-button label="green">Green</el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup() {
    const currentTheme = ref('default')
    const theme = reactive({
      default: {
        button: {
          primary: {
            bgColor: 'blue',
          },
        },
      },
      red: {
        button: {
          primary: {
            bgColor: 'red',
          },
        },
      },
      green: {
        button: {
          primary: {
            bgColor: 'green',
          },
        },
      },
    })

    return {
      theme,
      currentTheme,
    }
  },
})
</script>
