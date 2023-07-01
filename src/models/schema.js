export const schema = {
    models: {
        Nota: {
            name: 'Nota',
            fields: {
                id: {
                    name: 'id',
                    isArray: false,
                    type: 'ID',
                    isRequired: true,
                    attributes: []
                },
                note: {
                    name: 'note',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: []
                },
                createdAt: {
                    name: 'createdAt',
                    isArray: false,
                    type: 'AWSDateTime',
                    isRequired: false,
                    attributes: [],
                    isReadOnly: true
                },
                updatedAt: {
                    name: 'updatedAt',
                    isArray: false,
                    type: 'AWSDateTime',
                    isRequired: false,
                    attributes: [],
                    isReadOnly: true
                }
            },
            syncable: true,
            pluralName: 'Notas',
            attributes: [
                {
                    type: 'model',
                    properties: {}
                },
                {
                    type: 'auth',
                    properties: {
                        rules: [
                            {
                                allow: 'public',
                                operations: [
                                    'create',
                                    'update',
                                    'delete',
                                    'read'
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    enums: {},
    nonModels: {},
    codegenVersion: '3.4.4',
    version: 'a016bd239cba33e5dd2b4f4580d8d08f'
}
