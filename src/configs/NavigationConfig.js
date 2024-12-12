import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  InboxOutlined,
  FileTextOutlined,
  PhoneOutlined,
  SettingOutlined,
  TeamOutlined,
  MailOutlined,
} from '@ant-design/icons';

import { HOME_PREFIX_PATH } from 'configs/AppConfig';

const mainNavTree = [
  {
    key: 'main',
    path: `${HOME_PREFIX_PATH}/main`,
    title: 'sidenav.mainSettings',
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: 'dashboard',
        path: `${HOME_PREFIX_PATH}/main/dashboard`,
        title: 'sidenav.dashboard',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'Catalog',
        path: `${HOME_PREFIX_PATH}/main/catalog`,
        title: 'sidenav.catalog',
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'Products',
            path: `${HOME_PREFIX_PATH}/main/catalog/products`,
            title: 'sidenav.catalog.products',
            icon: null,
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'Categories',
            path: `${HOME_PREFIX_PATH}/main/catalog/categories`,
            title: 'sidenav.catalog.categories',
            icon: null,
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'Collections',
            path: `${HOME_PREFIX_PATH}/main/catalog/collections`,
            title: 'sidenav.catalog.collections',
            icon: null,
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'Combo',
            path: `${HOME_PREFIX_PATH}/main/catalog/combo`,
            title: 'sidenav.catalog.combo',
            icon: null,
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: 'Заказы',
        path: `${HOME_PREFIX_PATH}/main/orders`,
        title: 'sidenav.orders',
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'Клиенты',
        path: `${HOME_PREFIX_PATH}/main/clients`,
        title: 'sidenav.clients',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'list',
            path: `${HOME_PREFIX_PATH}/main/clients/list`,
            title: 'sidenav.clients.list',
            icon: null,
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'groups',
            path: `${HOME_PREFIX_PATH}/main/clients/groups`,
            title: 'sidenav.clients.groups',
            icon: null,
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: 'Баннеры',
        path: `${HOME_PREFIX_PATH}/main/banners`,
        title: 'sidenav.banners',
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'Промокоды',
        path: `${HOME_PREFIX_PATH}/main/promo-codes`,
        title: 'sidenav.promoCodes',
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'Оффлайн точки',
        path: `${HOME_PREFIX_PATH}/main/offline-stores`,
        title: 'sidenav.offlineStores',
        icon: InboxOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'addresses',
            path: `${HOME_PREFIX_PATH}/main/offline-stores/addresses`,
            title: 'sidenav.offlineStores.addresses',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'geozones',
            path: `${HOME_PREFIX_PATH}/main/offline-stores/geozones`,
            title: 'sidenav.offlineStores.geozones',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: 'Сотрудники',
        path: `${HOME_PREFIX_PATH}/main/employees`,
        title: 'sidenav.employees',
        icon: TeamOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'Рассылки',
        path: `${HOME_PREFIX_PATH}/main/mailings`,
        title: 'sidenav.mailings',
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
  {
    key: 'system',
    path: `${HOME_PREFIX_PATH}/system`,
    title: 'sidenav.systemSettings',
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: 'Настройки',
        path: `${HOME_PREFIX_PATH}/system/settings`,
        title: 'sidenav.settings',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'Мобильное приложение',
        path: `${HOME_PREFIX_PATH}/system/mobile-app`,
        title: 'sidenav.mobileApp',
        icon: PhoneOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'Логи',
        path: `${HOME_PREFIX_PATH}/system/logs`,
        title: 'sidenav.logs',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...mainNavTree];

export default navigationConfig;