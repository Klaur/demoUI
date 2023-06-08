import Button from './src/main.vue'
Button.install = app => {
  app.component(Button.name, Button)
}
export default Button
