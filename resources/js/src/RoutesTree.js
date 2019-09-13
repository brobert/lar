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
            { id: 'accordion', link: 'accordion', label: 'Accordions', },
            { id: 'alerts', link: 'alerts', label: 'Alerts', },
            { id: 'buttons', link: 'buttons', label: 'Button', },
            { id: 'colors', link: 'colors', label: 'Colorpicker', },
            { id: 'dropdown', link: 'dropdown', label: 'Dropdown', },
            { id: 'lists', link: 'lists', label: 'Lists', },
            { id: 'navs', link: 'navs', label: 'Nav', },
            { id: 'modal', link: 'modal', label: 'Modal', },
            { id: 'nicescroll', link: 'nicescroll', label: 'Nicescroll', },
            { id: 'ratings', link: 'ratings', label: 'Ratings', },
            { id: 'datepicker', link: 'datepicker', label: 'Date picker', },
            { id: 'tabs', link: 'tabs', label: 'Tabs', },
            { id: 'typographys', link: 'typographys', label: 'Typography', },
            { id: 'popover_tooltips', link: 'popover_tooltips', label: 'Popover tooltips', },
            { id: 'progess', link: 'progess', label: 'Progress', },
            { id: 'switchs', link: 'switchs', label: 'Switch', },
        ],
    },
    {
        id: 'chat',
        icon: 'ti-comments',
        link: '/chat',
    },
    {
        id: 'mailbox',
        icon: 'ti-email',
        link: '/mailbox',
    },
    {
        id: 'calendar',
        icon: 'ti-calendar',
        link: '/eventcalendar',
    },


    {
        id: 'nested',
        label: 'Nested Menu',
        icon: 'ti-palette',
        children: [
            {
                id: 'level_1',
                label: 'Level 1',
                children: [
                    {
                        id: 'level_2',
                        label: 'Level 2',
                        children: [
                            {
                                id: 'level_3',
                                label: 'Level 3',

                            },
                        ],
                    },
                ],
            },
        ],
    },

];


export default routesTree;
