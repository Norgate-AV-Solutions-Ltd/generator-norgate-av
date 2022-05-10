/* eslint-disable func-names */
const nameRegex = /^[a-z0-9][a-z0-9-]*$/i;

module.exports.validatePublisher = function (publisher) {
    if (!publisher) {
        return "Missing publisher name";
    }

    if (!nameRegex.test(publisher)) {
        return "Invalid publisher name";
    }

    return true;
};

module.exports.validateProjectId = function (id) {
    if (!id) {
        return "Missing project identifier";
    }

    if (!nameRegex.test(id)) {
        return "Invalid project identifier";
    }

    return true;
};

module.exports.validateNonEmpty = function (name) {
    return name && name.length > 0;
};
