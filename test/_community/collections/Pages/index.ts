import { CollectionConfig } from 'payload'

export const PagesCollection: CollectionConfig = {
  slug: 'pages',
  admin: {
    defaultColumns: ['slug', 'updateAt', 'title'],
    useAsTitle: 'title',
  },
  fields: [
    {
      type: 'text',
      localized: true,
      name: 'title',
      label: 'Title',
      required: true,
    },
    // After run migrate and generate tables the above fields, uncomment this and generate new migration
    // NOTE: Postgresql
    // {
    //   type: 'text',
    //   name: 'subTitle',
    //   label: 'Sub-Title',
    // },
  ],
}
