import mapPath2Components from 'RoutesMap';


const routesTree = [
    {
        id: 'home',
        icon: 'ti-home',
        link: '/',
    },
    {
        id: 'components',
    },
    {
        id: 'elements',
        icon: 'ti-palette',
        children: [
            {id: 'accordion', path: 'accordion'},
            {id: 'alerts', path: 'alerts'},
            {id: 'buttons', path: 'buttons'},
        ],
    },
    {
        id: 'chat',
        icon: 'ti-comments',
    },
    {
        id: 'mailbox',
        icon: 'ti-email',
    },
    {
        id: 'calendar',
        icon: 'ti-calendar'
    },

];


export default routesTree;
