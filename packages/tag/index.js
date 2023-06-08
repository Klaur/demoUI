import Tag from './src/main.vue'
Tag.install = app => {
  app.component(Tag.name, Tag)
}
export default Tag
