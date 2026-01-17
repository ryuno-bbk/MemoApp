// eslint-disable-next-line
const { getDefaultConfig } = require('@expo/metro-config')

const config = getDefaultConfig(__dirname)
config.resolver.sourceExts.push('cjs')
config.resolver.unstable_enablePackageExports = false // これが最も重要

module.exports = config
