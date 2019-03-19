export default [
    {
        path: '/login',
        component: () => import('@/views/login/Login'),
        hidden: true
    },
    {
        path: '/',
        name: "首页",
        component: () => import('@/views/layout/Layout'),
        children: [
            {
                path: '/test',
                component: () => import('@/views/Test2'),
            }
        ]
    }
]