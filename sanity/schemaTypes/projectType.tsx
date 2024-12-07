import {CheckmarkIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'project',
  type: 'document',
  icon: CheckmarkIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),

    defineField({
      name: 'themes',
      type: 'string',
      // TODO: make i18n
    }),
    defineField({
      name: 'status',
      type: 'string',
      options: {
        list: [
          { title: 'Accepting', value: 'accepting' },
          { title: 'About to Release', value: 'about-to-release' },
          { title: 'Completed', value: 'completed' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
    }),
    defineField({
      name: 'percentage',
      type: 'number',
      validation: Rule => Rule.min(0).max(100),
    }),
    defineField({
      name: 'duration',
      type: 'string',
    }),
    defineField({
      name: 'finished_tracks',
      type: 'number',
    }),
    defineField({
      name: 'deadline',
      type: 'date',
    }),
    defineField({
      name: 'mastering',
      type: 'object',
      fields: [
        defineField({
          name: 'status',
          type: 'string',
          options: {
            list: [
              { title: 'Pending', value: 'pending' },
              { title: 'In Progress', value: 'in-progress' },
              { title: 'Finished', value: 'finished' },
            ],
          },
        }),
        defineField({
          name: 'engineer',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'artwork_comission',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Sketching', value: 'sketching' },
          { title: 'Finished', value: 'finished' },
        ],
      },
    }),
    defineField({
      name: 'color',
      type: 'string',
      // make it #RRGGBB format
      validation: Rule => Rule.regex(/^#[0-9A-Fa-f]{6}$/).warning('Color should be in #RRGGBB format'),
    }),

    defineField({
      name: 'body',
      type: 'blockContent',
      // type: 'internationalizedArrayBlockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title', // Use the title field as the main title
      status: 'status', // Fetch the status field for the subtitle
      color: 'color', // Fetch the color field
    },
    prepare({ title, status, color }) {
      return {
        title, // Main title
        subtitle: status.charAt(0).toUpperCase() + status.slice(1), // Capitalize the status
        media: color
          ? () => (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: color,
                }}
              />
            )
          : undefined, // Display a square with the color if provided
      };
    },
  },
});  