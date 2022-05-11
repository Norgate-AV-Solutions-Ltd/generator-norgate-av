const fs = require("fs");
const path = require("path");

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
