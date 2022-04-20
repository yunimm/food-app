// import PhotoGrid from './views/Home.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', redirect: { name: 'photo-grid'} },
  {
    path: '/photo',
    name: 'photo-grid',
    component: () => import('./views/PhotoGrid.vue')
  },
  {
    path: '/info',
    name: 'store-info',
    component: () => import('./views/StoreInfo.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('./views/Map.vue')
  },
  {
    path: '/collection',
    name: 'collection',
    component: () => import('./views/Collection.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]
