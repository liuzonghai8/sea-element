export default [
    {
        path: '/',
        component: () => import('@/views/layout/Layout'),
        children: [
            {
                path: '/test',
                component: () => import('@/views/Test2'),
            }
        ]
    }
]