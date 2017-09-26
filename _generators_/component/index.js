/**
* Component Generator
*/

const componentExists = require('../utils/componentExists')

module.exports = {
    description: 'Add an unconnected component',
    prompts: [{
        type: 'list',
        name: 'type',
        message: 'Select the type of component',
        default: 'Stateless Function',
        choices: () => ['Stateless Function', 'ES6 Class'],
    }, {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Button',
        validate: (value) => {
            if ((/.+/).test(value)) {
                return componentExists(value) ? 'A component or container with this name already exists' : true
            }

            return 'The name is required'
        },
    }, {
        type: 'confirm',
        name: 'wantMessages',
        default: false,
        message: 'Do you want i18n messages (i.e. will this component use text)?',
    }],
    actions: (data) => {
        // Generate index.js and index.test.js
        let componentTemplate

        switch (data.type) {
            case 'ES6 Class': {
                data.isClass = true                
                componentTemplate = './component/templates/index.tsx.hbs'
                break
            }
            case 'Stateless Function': {
                data.isClass = false                
                componentTemplate = './component/templates/stateless.tsx.hbs'
                break
            }
            default: {
                data.isClass = false                
                componentTemplate = './component/templates/index.tsx.hbs'
            }
        }

        const actions = [{
            type: 'add',
            path: '../src/components/{{properCase name}}/index.tsx',
            templateFile: componentTemplate,
            abortOnFail: true,
        }, {
            type: 'add',
            path: '../src/components/{{properCase name}}/__tests__/index.test.tsx',
            templateFile: './component/templates/test.tsx.hbs',
            abortOnFail: true,
        }, {
            type: 'add',
            path: '../src/components/{{properCase name}}/types.ts',
            templateFile: './component/templates/types.ts.hbs',
            abortOnFail: true,
        }]

        // If they want a i18n messages file
        if (data.wantMessages) {
            actions.push({
                type: 'add',
                path: '../src/components/{{properCase name}}/messages.ts',
                templateFile: './component/templates/messages.ts.hbs',
                abortOnFail: true,
            })
        }

        return actions
    },
}
