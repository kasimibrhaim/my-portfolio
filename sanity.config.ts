import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemaTypes from './sanity/schemas'
// import {visionTool} from '@sanity/vision'


export default defineConfig({
  name: 'default',
  title: 'My Portfolio Studio',

  projectId: '3u35ycip',
  dataset: 'production',
  apiVersion: '2023-03-20',
  basePath: '/admin',

  plugins: [deskTool()],
//   plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
