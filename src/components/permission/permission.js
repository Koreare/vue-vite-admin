import store from "../../store";

export default {
  mounted(el, binding) {
    const { value } = binding
    const roles = store.state.user.info.admin_role.config.checkButton // 这边根据具体需求做改变
    if (value && value instanceof Array && value.length > 0) {
      const permissionRoles = value

      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role)
      })

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  }
}
