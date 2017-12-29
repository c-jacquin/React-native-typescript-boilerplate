/**
* Page Generator
*/

const path = require('path')
const pageExists = require('../utils/pageExists')
const listNavigators = require('../utils/listNavigators')
const capitalizeFirstLetter = require('../utils/string')

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
            default: 'Main',
            choices: () => listNavigators().map(({ name }) => name),
        },
        {
            type: 'list',
            name: 'includedNavigator',
            message: 'Wich navigator include in the component ?',
            default: 'none',
            choices: () => ['none', 'stack', 'tabs', 'drawer'],
        },
    ],
    actions: (data) => {
        let componentTemplate

        const navigator = listNavigators().find(({ name }) => data.navigator === name)
        const pageDir = `${path.dirname(navigator.path)}/{{ pascal name }}`

        if (navigator.name === 'Main') {
            data.pagePath = `pages/${capitalizeFirstLetter(data.name)}`
        } else {
            data.pagePath = `./${capitalizeFirstLetter(data.name)}`
        }

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
                componentTemplate = './container/templates/index.tsx.hbs'
            }
        }

        data.includedNavigator = data.includedNavigator !== 'none'

        const actions = [{
            type: 'add',
            path: `${pageDir}/index.tsx`,
            templateFile: componentTemplate,
            abortOnFail: true,
        }, {
            type: 'add',
            path: `${pageDir}/__tests__/index.test.tsx`,
            templateFile: './container/templates/test.tsx.hbs',
            abortOnFail: true,
        }, {
            type: 'add',
            path: `${pageDir}/types.ts`,
            templateFile: './container/templates/types.ts.hbs',
            abortOnFail: true,
        },
        {
            type: 'modify',
            path: navigator.path,
            pattern: /\/\/ Insert pages here\n/g,
            templateFile: './page/templates/mainNavigator.hbs',
        },
        {
            type: 'modify',
            path: navigator.path,
            pattern: /\/\/ Import pages here\n/g,
            templateFile: './page/templates/importPage.hbs',
        }]

        // If component wants messages
        if (data.wantMessages) {
            actions.push({
                type: 'add',
                path: `${pageDir}/messages.ts`,
                templateFile: './container/templates/messages.ts.hbs',
                abortOnFail: true,
            })
        }

        if (data.includedNavigator) {
            actions.push({
                type: 'add',
                path: `${pageDir}/{{ name }}.nav.ts`,
                templateFile: `./navigator/templates/${data.includedNavigator}.hbs`,
                abortOnFail: true
            })
        }

        return actions
    },
}
