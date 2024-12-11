import { DashboardOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const dashBoardNavTree = [
  {
    key: 'home',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'home',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: 'Catalog',
    path: `${APP_PREFIX_PATH}/catalog`,
    title: 'Catalog',
    icon: ShoppingCartOutlined,
    breadcrumb: false,
    submenu: [
      // {
      //   key: 'Products',
      //   path: `${APP_PREFIX_PATH}/catalog/products`,
      //   title: 'Products',
      //   icon: null,
      //   breadcrumb: true,
      //   submenu: [],
      // },
      // {
      //   key: 'Categories',
      //   path: `${APP_PREFIX_PATH}/catalog/categories`,
      //   title: 'Categories',
      //   icon: null,
      //   breadcrumb: true,
      //   submenu: [],
      // },
      // {
      //   key: 'Collections',
      //   path: `${APP_PREFIX_PATH}/catalog/collections`,
      //   title: 'Collections',
      //   icon: null,
      //   breadcrumb: true,
      //   submenu: [],
      // },
      // {
      //   key: 'Combo',
      //   path: `${APP_PREFIX_PATH}/catalog/combo`,
      //   title: 'Combo',
      //   icon: null,
      //   breadcrumb: true,
      //   submenu: [],
      // },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
