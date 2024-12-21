import AdminJs from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'
import { sequelize } from '../database'
import { adminJsResources } from "./resources";
import { locale } from './locale';
import { dashboardOptions } from './dashboard';
import { brandingOptions } from './branding';
import { authentitionOptions } from './authentication';

AdminJs.registerAdapter(AdminJsSequelize)

export const adminJs = new AdminJs({
  databases: [sequelize],
  resources: adminJsResources,
  rootPath: "/admin",
  locale: locale,
  dashboard: dashboardOptions,
  branding: brandingOptions
})

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
  adminJs, 
  authentitionOptions, 
  null, 
  {
    resave: false,
    saveUninitialized: false
  }
)