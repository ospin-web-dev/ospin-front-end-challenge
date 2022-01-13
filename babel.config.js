/* this is babel.config.js instead of .babelrc
 * this will provide global settings for a monorepo
 * this means any sub repos (i.e. the Nexus) will use this config
 * see https://babeljs.io/docs/en/config-files#monorepos
*/

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [ 'module-resolver', { root: ['./src'] } ],
  ],
}
