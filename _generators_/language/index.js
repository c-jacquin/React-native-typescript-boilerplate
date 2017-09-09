/**
 * Language Generator
 */
const fs = require('fs');
const exec = require('child_process').exec;

function languageIsSupported(language) {
  try {
    fs.accessSync(`app/translations/${language}.json`, fs.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = {
  description: 'Add a language',
  prompts: [{
    type: 'input',
    name: 'language',
    message: 'What is the language you want to add i18n support for (e.g. "fr", "de")?',
    default: 'fr',
    validate: (value) => {
      if ((/.+/).test(value) && value.length === 2) {
        return languageIsSupported(value) ? `The language "${value}" is already supported.` : true;
      }

      return '2 character language specifier is required';
    },
  }],

  actions: () => {
    const actions = [];
    actions.push({
      type: 'modify',
      path: '../src/i18n.ts',
      pattern: /('react-intl\/locale-data\/[a-z]+'\n)(?!.*'react-intl\/locale-data\/[a-z]+')/g,
      templateFile: './language/templates/intl-locale-data.hbs',
    });
    actions.push({
      type: 'modify',
      path: '../src/i18n.ts',
      pattern: /(\s+'[a-z]+',\n)(?!.*\s+'[a-z]+',)/g,
      templateFile: './language/templates/app-locale.hbs',
    });
    actions.push({
      type: 'modify',
      path: '../src/i18n.ts',
      pattern: /(from '.\/translations\/[a-z]+'\n)(?!.*from '.\/translations\/[a-z]+')/g,
      templateFile: './language/templates/translation-messages.hbs',
    });
    actions.push({
      type: 'modify',
      path: '../src/i18n.ts',
      pattern: /(addLocaleData\([a-z]+LocaleData\)\n)(?!.*addLocaleData\([a-z]+LocaleData\))/g,
      templateFile: './language/templates/add-locale-data.hbs',
    });
    actions.push({
      type: 'modify',
      path: '../src/i18n.ts',
      pattern: /([a-z]+:\sformatTranslationMessages\('[a-z]+',\s[a-z]+TranslationMessages\),\n)(?!.*[a-z]+:\sformatTranslationMessages\('[a-z]+',\s[a-z]+TranslationMessages\),)/g,
      templateFile: './language/templates/format-translation-messages.hbs',
    });
    actions.push({
      type: 'add',
      path: '../src/translations/{{language}}.ts',
      templateFile: './language/templates/translations.ts.hbs',
      abortOnFail: true,
    });

    return actions;
  },
};
