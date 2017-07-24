/**
* Page Generator
*/

const pageExists = require('../utils/pageExists')

module.exports = {
    description: 'Add a page component',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'What should it be called?',
            default: 'Home',
            validate: (value) => {
                if ((/.+/).test(value)) {
                    return pageExists(value) ? 'A page with this name already exists' : true
                }

                return 'The name is required'
            },
        },
        {
            type: 'list',
            name: 'type',
            message: 'Select the type of component',
            default: 'ES6 Class',
            choices: () => ['Stateless Function', 'ES6 Class'],
        },
        {
            type: 'confirm',
            name: 'wantMessages',
            default: false,
            message: 'Do you want i18n messages (i.e. will this component use text)?',
        },
        {
            type: 'list',
            name: 'navigator',
            message: 'Select the navigator',
            default: 'main',
            choices: () => ['main'],
        }
    ],
    actions: (data) => {
        let componentTemplate
        let navigatorPath

        switch (data.type) {
            case 'ES6 Class': {
                componentTemplate = './container/templates/index.tsx.hbs'
                break
            }
            case 'Stateless Function': {
                componentTemplate = './container/templates/stateless.tsx.hbs'
                break
            }
            default: {
                componentTemplate = './container/templates/es6.tsx.hbs'
            }
        }

        switch (data.navigator) {
            case 'main':
            default:
                navigatorPath = '../src/pages/index.ts'
        }

        const actions = [{
            type: 'add',
            path: '../src/pages/{{ pascal name}}/index.tsx',
            templateFile: componentTemplate,
            abortOnFail: true,
        }, {
            type: 'add',
            path: '../src/pages/{{ pascal name}}/__tests__/index.test.tsx',
            templateFile: './container/templates/test.tsx.hbs',
            abortOnFail: true,
        }, {
            type: 'add',
            path: '../src/pages/{{ pascal name}}/types.ts',
            templateFile: './container/templates/types.ts.hbs',
            abortOnFail: true,
        },
        {
            type: 'modify',
            path: navigatorPath,
            pattern: /\/\/ Insert pages here\n/g,
            templateFile: './page/templates/mainNavigator.hbs',
        },
        {
            type: 'modify',
            path: navigatorPath,
            pattern: /\/\/ Import pages here\n/g,
            templateFile: './page/templates/importPage.hbs',
        }]

        // If component wants messages
        if (data.wantMessages) {
            actions.push({
                type: 'add',
                path: '../src/pages/{{ pascal name}}/messages.ts',
                templateFile: './container/templates/messages.ts.hbs',
                abortOnFail: true,
            })
        }

        return actions
    },
}
