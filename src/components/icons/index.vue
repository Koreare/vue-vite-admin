<template>
  <el-icon
    :size="size"
    :color="color"
  >
    <component :is="name"></component>
  </el-icon>
</template>

<script>
import { ref, defineComponent } from 'vue'
import * as Icons from '@element-plus/icons-vue'

export default defineComponent({
  name: 'ElIcons',
  components: Icons,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  }
})
</script>
