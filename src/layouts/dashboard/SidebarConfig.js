// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22}/>;

const sidebarConfig = [
    {
        title: 'dashboard',
        path: '/dashboard/app',
        icon: getIcon('eva:pie-chart-2-fill')
    },
    {
        title: 'Master Data',
        path: '/dashboard/user',
        icon: getIcon('eva:people-fill'),
        children: [
            {title: 'Tipe Asset', path: '/dashboard/user'},
            {title: 'Sistem', path: '/dashboard/user'},
            {title: 'Sub Sistem', path: '/dashboard/user'},
            {title: 'Kategori', path: '/dashboard/user'},
        ]
    },
    {
        title: 'user',
        path: '/dashboard/user',
        icon: getIcon('eva:people-fill')
    },
    {
        title: 'product',
        path: '/dashboard/products',
        icon: getIcon('eva:shopping-bag-fill'),
        children: [{title: 'productss', path: '/dashboard/products'}]
    },
    {
        title: 'blog',
        path: '/dashboard/blog',
        icon: getIcon('eva:file-text-fill'),
    },
    {
        title: 'login',
        path: '/login',
        icon: getIcon('eva:lock-fill')
    },
    {
        title: 'register',
        path: '/register',
        icon: getIcon('eva:person-add-fill')
    },
    {
        title: 'Not found',
        path: '/404',
        icon: getIcon('eva:alert-triangle-fill')
    }
];

export default sidebarConfig;
