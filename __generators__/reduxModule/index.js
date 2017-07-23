module.exports = {
    description: 'Add an redux module',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
    }],
    actions: (data) => {
        const actions = [{
            type: 'add',
            path: '../src/store/{{name}}/reducer.ts',
            templateFile: './reduxModule/templates/reducer.ts.hbs',
            abortOnFail: true,
        }, {
            type: 'add',
            path: '../src/store/{{name}}/types.ts',
            templateFile: './reduxModule/templates/types.ts.hbs',
            abortOnFail: true,
        }, {
            type: 'add',
            path: '../src/store/{{name}}/epic.ts',
            templateFile: './reduxModule/templates/epic.ts.hbs',
            abortOnFail: true,
        }, {
            type: 'add',
            path: '../src/store/{{name}}/actions.ts',
            templateFile: './reduxModule/templates/actions.ts.hbs',
            abortOnFail: true,
        }, {
            type: 'add',
            path: '../src/store/{{name}}/__tests__/actions.test.ts',
            templateFile: './reduxModule/templates/actions.test.ts.hbs',
            abortOnFail: true,
        }, {
            type: 'add',
            path: '../src/store/{{name}}/__tests__/reducer.test.ts',
            templateFile: './reduxModule/templates/reducer.test.ts.hbs',
            abortOnFail: true,
        }, {
            type: 'add',
            path: '../src/store/{{name}}/__tests__/epic.test.ts',
            templateFile: './reduxModule/templates/epic.test.ts.hbs',
            abortOnFail: true,
        }]

        return actions
    },
}
