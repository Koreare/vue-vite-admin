<template>
  <header>
    <div class="left-box">
      <!-- 收缩按钮 -->
      <div
        class="menu-icon"
        @click="opendStateChange"
      >
        <el-icons :name="isCollapse ? 'expand' : 'fold'" />
      </div>
      <menu-list />
    </div>
    <div class="right-box">
      <div class="function-list">
        <div class="function-list-item hidden-sm-and-down">
          <chang-color />
        </div>
      </div>
      <div class="user-info">
        <el-dropdown>
          <span class="el-dropdown-link">
            管理员
            <el-icons name="ArrowDown" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="loginOut">
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import menuList from './components/menuList.vue'
import changColor from './components/colorChange.vue'

export default defineComponent({
  components: {
    menuList,
    changColor
  },
  setup () {
    const store = useStore()
    const isCollapse = computed(() => store.state.app.isCollapse)
    const opendStateChange = () => {
      store.commit('app/isCollapseChange', !isCollapse.value)
    }
    const loginOut = () => {
      store.dispatch('user/loginOut')
    }
    return {
      isCollapse,
      loginOut,
      opendStateChange
    }
  }
})
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: var(--system-header-background);
  padding-right: 22px;
}
.left-box {
  height: 100%;
  display: flex;
  align-items: center;
  .menu-icon {
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 100;
    cursor: pointer;
    margin-right: 10px;
    &:hover {
      background-color: var(--system-header-item-hover-color);
    }
    i {
      color: var(--system-header-text-color);
    }
  }
}
.right-box {
  display: flex;
  justify-content: center;
  align-items: center;
  .function-list{
    display: flex;
    align-items: center;
    margin-top: 6px;
    .function-list-item {
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      :deep(i) {
        color: var(--system-header-text-color);
      }
    }
  }
  .user-info {
    cursor: pointer;
    margin-left: 20px;
    .el-dropdown-link {
      color: var(--system-header-breadcrumb-text-color);
    }
  }
}
</style>
