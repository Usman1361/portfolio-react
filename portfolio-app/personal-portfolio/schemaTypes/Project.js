import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'ProjectsData',
  title: 'ProjectsData',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'viewlink',
      type: 'string',
    }),
    defineField({
      name: 'codelink',
      type: 'string',
    }),
    defineField({
      name: 'projectimg',
      type: 'file',
    }),
  ],
})
