const path = require('path')
const join = path.join
const fs = require('fs')
// const files = fs.readdirSync(path.resolve(__dirname, '../packages/'))
// let entry = {}
// for (const item of files) {
//   const name = item.toLowerCase()
//   entry[name === 'index.js' ? 'index' : name] = path.resolve(__dirname, `../packages/${name}`)
// }
// module.exports = entry
function getEntries(path) {
  let files = fs.readdirSync(resolve(path))
  const entries = files.reduce((ret, item) => {
    const itemPath = join(path, item)
    const isDir = fs.statSync(itemPath).isDirectory()
    if (isDir) {
      ret[item] = resolve(join(itemPath, 'index.js'))
    } else {
      const [name] = item.split('.')
      ret[name] = resolve(`${itemPath}`)
    }
    return ret
  }, {})
  return entries
}
function resolve(dir) {
  console.log(dir)
  return path.resolve(__dirname, '../' + dir)
}
module.exports = getEntries
