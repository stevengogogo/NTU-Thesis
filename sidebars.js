module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'docs-overview',
    },
    {
      type: 'category',
      label: '基本介紹',
      items: [
        'introduction/history',
        'introduction/distribution',
        'introduction/workflow',
      ],
    },
    {
      type: 'category',
      label: '環境設定',
      items: [
        'installation/compilation',
        'installation/edit',
        'installation/configuration',
      ],
    },
    {
      type: 'category',
      label: '排版指南',
      items: [
        'typesetting/chapter-and-section',
        'typesetting/enumerate-and-itemize',
        'typesetting/symbol-and-equation',
        'typesetting/figure-and-table',
        'typesetting/code-block',
        'typesetting/reference-management',
      ],
    },
    {
      type: 'category',
      label: '繪圖指南',
      items: [
        'plotting/tool',
        'plotting/asymptote',
        'plotting/excel',
        'plotting/ggplot2',
        'plotting/latex',
        'plotting/matlab',
        'plotting/origin',
        'plotting/python',
        'plotting/visio',
      ],
    },
    {
      type: 'category',
      label: '格式轉換',
      items: ['conversion/image', 'conversion/document'],
    },
    {
      type: 'doc',
      id: 'faq',
    },
    {
      type: 'doc',
      id: 'reference',
    },
  ],
  development: [
    'development/overview',
    {
      type: 'category',
      label: '功能實作',
      items: [
        'development/cover',
        'development/watermark',
      ],
    },
  ],
};
