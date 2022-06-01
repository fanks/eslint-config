module.exports = {
  'no-duplicate-imports': 'error',
  'no-multiple-empty-lines': [
    'error',
    {
      max: 1,
      maxEOF: 0,
      maxBOF: 0
    }
  ],
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-duplicates': 'error',
  'import/no-unassigned-import': [
    'error',
    {
      allow: [
        '**/*.css',
        '**/*.scss',
        '**/*.sass',
        '**/*.less',
        '**/*.jpg',
        '**/*.jpeg',
        '**/*.png',
        '**/*.svg',
        '**/module'
      ]
    }
  ],
  'import/order': [
    'error',
    {
      groups: [
        'builtin',
        'unknown',
        'external',
        'internal',
        'parent',
        'sibling',
        'index'
      ],
      pathGroups: [
        {
          pattern: './module',
          group: 'builtin',
          position: 'before'
        },
        {
          pattern: '@/**',
          group: 'internal',
          position: 'before'
        }
      ],
      pathGroupsExcludedImportTypes: ['builtin'],
      alphabetize: {
        order: 'asc'
      },
      'newlines-between': 'always'
    }
  ],
  'sort-imports': [
    'error',
    {
      allowSeparatedGroups: true,
      ignoreDeclarationSort: true
    }
  ]
};
