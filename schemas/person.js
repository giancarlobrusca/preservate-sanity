export default {
    title: 'Persona',
    name: 'person',
    type: 'document',
    fields: [
        {
            title: 'Nombre',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Foto',
            name: 'photo',
            type: 'image',
            validation: (Rule) => Rule.required()
        }
    ],
    preview: {
        select: {
            title: 'title',
            photo: 'photo'
        }
    }
}