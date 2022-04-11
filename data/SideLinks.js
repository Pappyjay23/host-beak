import Shuttle from '../public/icons/shuttle.png'
import Multi from '../public/icons/multi.png'
import Wallet from '../public/icons/ic_wallet.png'
import Cart from '../public/icons/purchase.png'
import CartWhite from '../public/icons/purchase-white.png'
import Cell from '../public/icons/cell.png'
import Bank from '../public/icons/bank.png'
import Invoice from '../public/icons/ic_invoices.png'
import Reports from '../public/icons/tabler_report.png'
import Users from '../public/icons/users-group.png'
import Settings from '../public/icons/settings.png'

export const SideLinks = [
    {
        icon: Shuttle,
        title: 'Welcome',
        link: ''
    },
    {
        icon: Multi,
        title: 'Dashboard',
        link: '/dashboard'
    },
    {
        icon: Wallet,
        title: 'Sales',
        drop: true,
        link: '',
        links: []
    },
    {
        icon: Cart,
        title: 'Purchases',
        drop: true,
        link: '',
        links:[
            {
                name:"Bills",
                link: '/dashboard'
            },
            {
                name: 'Vendors',
                link: '/'
            },
            {
                name: 'Products & Services',
                link: '/'
            }
        ]
    },
    {
        icon: Cell,
        title: 'Accounting',
        drop: true,
        link: '',
        links: []
    },
    {
        icon: Bank,
        title: 'Banking',
        drop: true,
        link: '',
        links: []
    },
    {
        icon: Invoice,
        title: 'Payroll',
        drop: true,
        link: '',
        links: []
    },
    {
        icon: Reports,
        title: 'Reports',
        link: ''
    },
    {
        icon: Users,
        title: 'Analytics',
        drop: true,
        link: '',
        links:[
            {
                name:"View Report",
                link: '/request'
            },
            {
                name: 'To-Do',
                link: ''
            },
            {
                name: 'Upload Docs',
                link: ''
            },
            {
                name: 'Chat',
                link: ''
            },
            {
                name: 'Schedule',
                link: ''
            },
            {
                name: 'Message Board',
                link: ''
            },
            {
                name: 'Make Payments',
                link: ''
            },
            {
                name: 'Billing',
                link: ''
            },
        ]
    },
    {
        icon: Settings,
        title: 'Settings',
        link: ''
    },
]