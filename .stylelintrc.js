module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'content', 'each', 'error', 'extend', 'for', 'function', 'if', 'include', 'mixin', 'return', 'while',
        ],
      },
    ],
    'number-leading-zero': 'never', // 要求或禁止小于 1 的小数的前导 0
    'block-no-empty': null, // 禁止出现空块 null为关闭规则
    'no-empty-source':null,
    'selector-pseudo-element-no-unknown': [ // 禁止使用未知的伪元素
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'selector-pseudo-class-no-unknown': [ // 禁止使用未知的伪类选择器
      true,
        { ignorePseudoClasses: ['global']
      }
    ],
    // 'rule-nested-empty-line-before': [ 'never', { // 在嵌套的规则中要求或禁止有空行。
    //   'except': ['first-nested'],
    //   'ignore': ['after-comment']
    // }],
    'comment-empty-line-before': [ 'always', { // 要求或禁止在注释之前有空行
      'ignore': ['stylelint-commands']
    }],

    // 'no-descending-specificity': null, // 禁止低优先级的选择器出现在高优先级的选择器之后。不用关闭
    // 'selector-type-no-unknown': null, // 禁用未知的类型选择器。
    // 'no-duplicate-selectors': null, // 在一个样式表中禁止出现重复的选择器。

  },
}
