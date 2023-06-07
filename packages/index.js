import Button from './button'
import Tag from './tag'
const components = [Button, Tag]
// 定义install 方法，接受Vue作为参数，如果使用use注册组件，则所有组件都将被注册
const install = function (app) {
  // 判断是否安装
  if (install.installed) return
  components.forEach(component => {
    // 便利注册全局组件
    app.component(component.name, component)
  })
}
//判断是否直接引入script组件文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export { Button, Tag }
export default {
  // 导出对象必须具有install，才能被Vue.use()方法安装
  install,
  Button,
  Tag
}
