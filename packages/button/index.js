import Button from './src/main'
Button.install = app => {
  app.component(Button.name, Button)
}
export default Button
