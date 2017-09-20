module.exports = {
    description: 'Add an redux module',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
    }, {
        type: 'confirm',
        name: 'epic',
        message: 'Do you need an epic middleware (redux-observable) ?'
    }, {
        type: 'comfirm',
        name: 'api',
        message: 'Do you need an api service (dao) ?'
    }],
    actions: (data) => {
        let actions = [{
            type: 'add',
            path: '../src/store/{{name}}/index.ts',
            templateFile: './reduxModule/templates/index.hbs',
            abortOnFail: true,
        }, {
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
            path: '../src/store/{{name}}/actions.ts',
            templateFile: './reduxModule/templates/actions.ts.hbs',
            abortOnFail: true,
        }, {
            type: 'add',
            path: '../src/store/{{name}}/selectors.ts',
            templateFile: './reduxModule/templates/selectors.ts.hbs',
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
            path: '../src/store/{{name}}/__tests__/selectors.test.ts',
            templateFile: './reduxModule/templates/selectors.test.ts.hbs',
            abortOnFail: true,
        }, {
            type: 'modify',
            path: '../src/store/types.ts',
            pattern: /\/\/ Import types here\n/g,
            templateFile: './reduxModule/templates/importType.hbs',
        }, {
            type: 'modify',
            path: '../src/store/types.ts',
            pattern: /\/\/ Insert types here\n/g,
            templateFile: './reduxModule/templates/appState.hbs',
        }, {
            type: 'modify',
            path: '../src/store/_helpers_/initialState.ts',
            pattern: /\/\/ Import state here\n/g,
            templateFile: './reduxModule/templates/importState.hbs',
        }, {
            type: 'modify',
            path: '../src/store/_helpers_/initialState.ts',
            pattern: /\/\/ Insert state here\n/g,
            templateFile: './reduxModule/templates/initialState.hbs',
        }, {
            type: 'modify',
            path: '../src/store/rootReducer.ts',
            pattern: /\/\/ Import reducer here\n/g,
            templateFile: './reduxModule/templates/importReducer.hbs',
        }, {
            type: 'modify',
            path: '../src/store/rootReducer.ts',
            pattern: /\/\/ Insert reducer here\n/g,
            templateFile: './reduxModule/templates/rootReducer.hbs',
        }]

        if (data.epic) {
            actions = [
                ...actions,
                {
                    type: 'modify',
                    path: '../src/store/epicMiddleware.ts',
                    pattern: /\/\/ Import epic here\n/g,
                    templateFile: './reduxModule/templates/importEpic.hbs',
                }, {
                    type: 'modify',
                    path: '../src/store/epicMiddleware.ts',
                    pattern: /\/\/ Insert epic here\n/g,
                    templateFile: './reduxModule/templates/rootEpic.hbs',
                }, {
                    type: 'add',
                    path: '../src/store/{{name}}/__tests__/epic.test.ts',
                    templateFile: './reduxModule/templates/epic.test.ts.hbs',
                    abortOnFail: true,
                }, {
                    type: 'add',
                    path: '../src/store/{{name}}/epic.ts',
                    templateFile: './reduxModule/templates/epic.ts.hbs',
                    abortOnFail: true,
                }
            ]
        }

        if (data.api) {
            actions = [
                ...actions,
                {
                    type: 'add',
                    path: '../src/store/{{name}}/api.ts',
                    templateFile: './reduxModule/templates/api.ts.hbs',
                    abortOnFail: true,
                },
                {
                    type: 'add',
                    path: '../src/store/{{name}}/__tests__/api.test.ts',
                    templateFile: './reduxModule/templates/api.test.ts.hbs',
                    abortOnFail: true,
                },
                {
                    type: 'add',
                    path: '../src/store/{{name}}/__mocks__/api.mock.ts',
                    templateFile: './reduxModule/templates/apiMock.ts.hbs',
                    abortOnFail: true
                },
                {
                    type: 'modify',
                    path: '../src/store/epicDependencies.ts',
                    templateFile: './reduxModule/templates/epicDependencies.hbs',
                    pattern: /\/\/ Insert api here\n/g,
                },
                {
                    type: 'modify',
                    path: '../src/store/epicDependencies.ts',
                    templateFile: './reduxModule/templates/importApi.hbs',
                    pattern: /\/\/ Import api here\n/g,
                },
                {
                    type: 'modify',
                    path: '../src/store/types.ts',
                    templateFile: './reduxModule/templates/apiType.hbs',
                    pattern: /\/\/ Insert api here\n/g,
                },
                {
                    type: 'modify',
                    path: '../src/store/__tests__/epicMiddleware.test.ts',
                    templateFile: './reduxModule/templates/epicMiddlewareTest.hbs',
                    pattern: /\/\/ Insert api here\n/g,
                }
            ]
        }

        return actions
    },
}
