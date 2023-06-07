import Tag from './src/main'
Tag.install = app => {
  app.component(Tag.name, Tag)
}
export default Tag
