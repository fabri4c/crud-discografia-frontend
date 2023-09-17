module.exports = {
  plugins: [
    "stylelint-scss"
  ],
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-css-modules",
    "stylelint-config-property-sort-order-smacss"
  ],
  rules: {
    "at-rule-no-unknown": null,
    "font-family-name-quotes": null,
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "scss/at-rule-no-unknown": true
  }
}
