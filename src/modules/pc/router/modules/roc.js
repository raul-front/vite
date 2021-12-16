
export default {
  path: 'roc',
  menuName: 'Roc',
  order: 100,
  icon: 'iconfont icon-home',
  meta: { title: '图床系统' },
  component: () => import('admin/views/roc/index.vue'),
  redirect: 'roc/file',
  children: [
    {
      path: 'file',
      meta: { title: '文件管理', firstPageName: 'Roc_List' },
      component: () => import('admin/views/roc/file/index.vue'),
      children: [
        { path: '', name: 'Roc_File', component: () => import('admin/views/roc/file/list.vue'), meta: { isfirstPage: true, showIntro: true, title: '文件列表', desc: '模板描述' } },
        { path: 'add', name: 'Roc_File_Add', component: () => import('admin/views/roc/file/edit.vue'), meta: { title: '添加' } },
        { path: 'update/:id', name: 'Roc_File_Update', component: () => import('admin/views/roc/file/edit.vue'), meta: { title: '修改' } },
      ],
    },
  ],
}
