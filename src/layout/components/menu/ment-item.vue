<template>
  <template v-if="!menu.hideMenu">
    <el-sub-menu
      v-if="showMenuType === 2"
      :index="pathResolve"
    >
      <template #title>
        <el-icons
          v-if="menu.meta.icon"
          :name="menu.meta.icon"
        />
        <span>{{ menu.meta.title }}</span>
      </template>
      <menu-item
        v-for="(item, key) in menu.children"
        :key="key"
        :menu="item"
        :base-path="pathResolve"
      />
    </el-sub-menu>
    <app-link
      v-else-if="showMenuType === 1"
      :to="pathResolve"
    >
      <el-menu-item
        v-if="!menu.children[0].children || menu.children[0].children.length === 0"
        :index="pathResolve"
      >
        <el-icons
          v-if="menu.children[0].meta.icon || menu.meta.icon"
          :name="menu.children[0].meta.icon || menu.meta.icon"
        />
        <template #title>
          {{ menu.children[0].meta.title }}
        </template>
      </el-menu-item>
      <el-sub-menu
        v-else
        :index="pathResolve"
      >
        <template #title>
          <el-icons
            v-if="menu.children[0].meta.icon || menu.meta.icon"
            :name="menu.children[0].meta.icon || menu.meta.icon"
          />
          <span>{{ menu.children[0].meta.title }}</span>
        </template>
        <menu-item
          v-for="(item, key) in menu.children[0].children"
          :key="key"
          :menu="item"
          :base-path="pathResolve"
        />
      </el-sub-menu>
    </app-link>
    <app-link
      v-else
      :to="pathResolve"
    >
      <el-menu-item :index="pathResolve">
        <i
          v-if="menu.meta.icon"
          :class="menu.meta.icon"
        />
        <template #title>
          {{ menu.meta.title }}
        </template>
      </el-menu-item>
    </app-link>
  </template>
</template>

<script>
import appLink from './Link.vue'
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'MenuItem',
  components: {
    appLink
  },
  props: {
    menu: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const menu = props.menu

    const showMenuType = computed(() => { // 0: 无子菜单， 1：有1个子菜单， 2：显示上下级子菜单
      if (menu.children && (menu.children.length > 1 || (menu.children.length === 1 && menu.alwaysShow))) {
        return 2
      } else if (menu.children && menu.children.length === 1 && !menu.alwaysShow) {
        return 1
      } else {
        return 0
      }
    })

    const pathResolve = computed(() => {
      let path = ''
      if (showMenuType.value === 1) {
        if (menu.children[0].path.charAt(0) === '/') {
          path = menu.children[0].path
        } else {
          let char = '/'
          if (menu.path.charAt(menu.path.length - 1) === '/') {
            char = ''
          }
          path = menu.path + char + menu.children[0].path
        }
      } else {
        path = menu.path
      }
      path = props.basePath ? props.basePath + '/' + path : path
      return path
    })

    return {
      showMenuType,
      pathResolve
    }
  }
})
</script>

<style scoped>

</style>
