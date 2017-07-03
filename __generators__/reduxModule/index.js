module.exports = {
    description: 'Add an redux module',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Button',
    }],
    actions: (data) => {
        const actions = [{
            type: 'add',
            path: '../src/store/{{name}}/reducer.ts',
            templateFile: './reduxModule/reducer.ts.hbs',
            abortOnFail: true,
        }, {
            type: 'add',
            path: '../src/store/{{name}}/types.ts',
            templateFile: './reduxModule/types.ts.hbs',
            abortOnFail: true,
        }]

        return actions
    },
}
