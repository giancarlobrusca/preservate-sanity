export default {
    title: 'Evento',
    name: 'event',
    type: 'document',
    fields: [
        {
            title: 'Título',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Cover',
            name: 'cover',
            type: 'image',
            field: [
                {
                    title: 'Alt',
                    name: 'alt',
                    type: 'string',
                    options: {
                        isHighlighted: true
                    }
                }
            ]
        },
        {
            title: 'Fecha',
            name: 'date',
            type: 'datetime',
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Descripcion',
            name: 'description',
            type: 'array',
            of: [{type: 'block'}]
        }
    ],
    preview: {
        select: {
            title: 'title',
            date: 'date',
            cover: 'cover'
        }
    }

}