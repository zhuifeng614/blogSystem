import {
   HomeOutlined,ProfileOutlined,LaptopOutlined,TeamOutlined,
} from '@ant-design/icons'
export default [
  {
    title: '首页', // 菜单标题名称
    key: 'visualchart', // 对应的path
    icon: <HomeOutlined />, // 图标名称
    path: '/home/visualchart'//对应路径
  },
  {
    title: '博客管理',
    key: 'blog_regulator',
    icon: <LaptopOutlined />,
    children: [
      {
        title: '项目管理',
        key: 'project',
        icon: <ProfileOutlined />,
        path: '/home/blog_regulator/project'
      },
      // {
      //   title: '文章管理',
      //   key: 'essay',
      //   icon: 'AppstoreOutlined',
      //   path: '/admin/prod_about/product'
      // },
    ]
  },
  {
    title: '用户管理',
    key: 'user_regulator',
    icon: <TeamOutlined />,
    path: '/home/user_regulator'
  },
]
