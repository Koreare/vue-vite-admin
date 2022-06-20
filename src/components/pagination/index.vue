<template>
  <el-pagination
    v-model:current-page="page.index"
    class="system-page"
    background
    :layout="pageLayout"
    :total="page.total"
    :page-size="page.size"
    :page-sizes="pageSizes"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
  >
  </el-pagination>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  props: {
    pageLayout: { type: String, default: 'total, sizes, prev, pager, next, jumper' }, // 分页需要显示的东西，默认全部
    page: { // 分页参数
      type: Object,
      default: () => {
        return { index: 1, size: 20, total: 0 }
      }
    },
    pageSizes: { type: Array, default: [10, 20, 50, 100] }
  },
  setup (props, context) {
    const handleCurrentChange = (val) => {
      props.page.index = val
      context.emit('getTableData')
    }

    // 分页相关：监听单页显示数量切换事件
    const handleSizeChange = (val) => {
      props.page.size = val
      context.emit('getTableData', true)
    }
    return {
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped>

</style>
