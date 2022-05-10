const prompts = require("./prompts");

module.exports = {
    id: "project-js",
    aliases: ["javascript", "js", "node-js"],
    name: "Node.js (JavaScript)",

    /**
     * @param {import('yeoman-generator')} generator
     * @param {Object} projectConfig
     */
    prompting: async (generator, projectConfig) => {
        await prompts.askForProjectDisplayName(generator, projectConfig);
        await prompts.askForProjectId(generator, projectConfig);
        await prompts.askForProjectDescription(generator, projectConfig);

        projectConfig.checkJavaScript = false;
        await generator
            .prompt({
                type: "confirm",
                name: "checkJavaScript",
                message: "Enable JavaScript type checking in 'jsconfig.json'?",
                default: false,
            })
            .then((strictJavaScriptAnswer) => {
                projectConfig.checkJavaScript =
                    strictJavaScriptAnswer.checkJavaScript;
            });

        await prompts.askForGit(generator, projectConfig);
        await prompts.askForPackageManager(generator, projectConfig);
    },

    /**
     * @param {import('yeoman-generator')} generator
     * @param {Object} projectConfig
     */
    writing: (generator, projectConfig) => {
        generator.fs.copy(
            generator.templatePath("github"),
            generator.destinationPath(".github"),
        );

        generator.fs.copy(
            generator.templatePath("husky"),
            generator.destinationPath(".husky"),
        );

        generator.fs.copy(
            generator.templatePath("vscode"),
            generator.destinationPath(".vscode"),
        );

        generator.fs.copy(
            generator.templatePath("src"),
            generator.destinationPath("src"),
        );

        generator.fs.copy(
            generator.templatePath(".commitlintrc.json"),
            generator.destinationPath(".commitlintrc.json"),
        );

        generator.fs.copy(
            generator.templatePath(".eslintrc.json"),
            generator.destinationPath(".eslintrc.json"),
        );

        generator.fs.copy(
            generator.templatePath("eslintignore"),
            generator.destinationPath(".eslintignore"),
        );

        generator.fs.copy(
            generator.templatePath(".lintstagedrc.json"),
            generator.destinationPath(".lintstagedrc.json"),
        );

        generator.fs.copy(
            generator.templatePath(".prettierrc.json"),
            generator.destinationPath(".prettierrc.json"),
        );

        generator.fs.copy(
            generator.templatePath("prettierignore"),
            generator.destinationPath(".prettierignore"),
        );

        generator.fs.copyTpl(
            generator.templatePath("CHANGELOG.md"),
            generator.destinationPath("CHANGELOG.md"),
            projectConfig,
        );

        generator.fs.copy(
            generator.templatePath("czrc"),
            generator.destinationPath(".czrc"),
        );

        generator.fs.copy(
            generator.templatePath("editorconfig"),
            generator.destinationPath(".editorconfig"),
        );

        if (projectConfig.git) {
            generator.fs.copy(
                generator.templatePath("gitignore"),
                generator.destinationPath(".gitignore"),
            );

            generator.fs.copy(
                generator.templatePath("gitattributes"),
                generator.destinationPath(".gitattributes"),
            );
        }

        generator.fs.copy(
            generator.templatePath("LICENSE"),
            generator.destinationPath("LICENSE"),
        );

        if (projectConfig.checkJavaScript) {
            generator.fs.copy(
                generator.templatePath("jsconfig.json"),
                generator.destinationPath("jsconfig.json"),
            );
        }

        generator.fs.copyTpl(
            generator.templatePath("package.json.ejs"),
            generator.destinationPath("package.json"),
            projectConfig,
        );

        generator.fs.copyTpl(
            generator.templatePath("README.md"),
            generator.destinationPath("README.md"),
            projectConfig,
        );

        projectConfig.installDependencies = true;
    },
};
