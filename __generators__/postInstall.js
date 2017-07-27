const capitalizeFirstLetter = require('./utils/string')

module.exports = (plop) => {
    plop.addHelper('pascal', capitalizeFirstLetter)
    plop.setGenerator('postinstall', {
        description: 'init app',
        prompts: [
            {
                type: 'list',
                name: 'nav',
                message: 'Wich navigator you want to use',
                default: 'stack',
                choices: () => ['stack', 'drawer', 'tabs'],
            }
        ],
        actions: (data) => {
            data.name = 'home'
            data.pagePath = 'pages/Home'
            return [
                {
                    type: 'add',
                    path: '../src/pages/index.ts',
                    templateFile: `./navigator/templates/${ data.nav }.hbs`,
                    abortOnFail: true,
                },
                {
                    type: 'modify',
                    path: '../src/pages/index.ts',
                    pattern: /\/\/ Insert pages here\n/g,
                    templateFile: './page/templates/mainNavigator.hbs',
                },
                {
                    type: 'modify',
                    path: '../src/pages/index.ts',
                    pattern: /\/\/ Import pages here\n/g,
                    templateFile: './page/templates/importPage.hbs',
                }
            ]
        }
    })
}
