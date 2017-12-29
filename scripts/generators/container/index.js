/**
* Container Generator
*/

const componentExists = require('../utils/componentExists')

module.exports = {
    description: 'Add a container component',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'What should it be called?',
            default: 'Form',
            validate: (value) => {
                if ((/.+/).test(value)) {
                    return componentExists(value) ? 'A component or container with this name already exists' : true
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
        }
    ],
    actions: (data) => {
        let componentTemplate

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


        const actions = [{
            type: 'add',
            path: '../../src/containers/{{ pascal name }}/index.tsx',
            templateFile: componentTemplate,
            abortOnFail: true,
        }, {
            type: 'add',
            path: '../../src/containers/{{ pascal name }}/__tests__/index.test.tsx',
            templateFile: './container/templates/test.tsx.hbs',
            abortOnFail: true,
        }, {
            type: 'add',
            path: '../../src/containers/{{ pascal name }}/types.ts',
            templateFile: './container/templates/types.ts.hbs',
            abortOnFail: true,
        }]

        // If component wants messages
        if (data.wantMessages) {
            actions.push({
                type: 'add',
                path: '../../src/containers/{{ pascal name }}/messages.ts',
                templateFile: './container/templates/messages.ts.hbs',
                abortOnFail: true,
            })
        }

        return actions
    },
}
