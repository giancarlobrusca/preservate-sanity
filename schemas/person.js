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
            title: "Edad",
            name: "age",
            type: "number"
        },
        {
            title: "Ocupación",
            name: "rol",
            type: "string",
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Foto',
            name: 'photo',
            type: 'image',
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Bio',
            name: 'bio',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            title: 'Principal',
            name: 'principal',
            type: 'boolean'
        }
    ],
    preview: {
        select: {
            title: 'title',
            photo: 'photo'
        }
    }
}