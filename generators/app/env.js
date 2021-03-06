const fs = require("fs");
const path = require("path");
const which = require("which");

module.exports.getDependencies = async () => {
    const versions = JSON.parse(
        (
            await fs.promises.readFile(
                path.join(__dirname, "dependencies", "package.json"),
            )
        ).toString(),
    ).dependencies;

    return versions;
};

module.exports.getGitPath = async () => {
    const gitPath = await which("git").catch(() => undefined);
    return gitPath;
};

module.exports.getCodePath = async () => {
    const codePath = await which("code").catch(() => undefined);
    return codePath;
};
