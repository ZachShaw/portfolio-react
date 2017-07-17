import requireHacker from 'require-hacker'

const extensions = ['scss', 'gif', 'jpg', 'svg', 'css', 'png']

extensions.forEach(type => {
  requireHacker.hook(type, () => 'module.exports = ""')
})