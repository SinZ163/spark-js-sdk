

const denodeify = require(`denodeify`);

exports.rimraf = denodeify(require(`rimraf`));
exports.glob = denodeify(require(`glob`));
exports.mkdirp = denodeify(require(`mkdirp`));
exports.transformFile = denodeify(require(`babel-core`).transformFile);
exports.exec = denodeify(require(`child_process`).exec);
