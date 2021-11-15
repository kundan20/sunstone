import loadable from '@loadable/component'

export const  routes = [
    {
        path: '/',
        component: loadable(() => import('./components/Home'))
    }
]
export  default routes