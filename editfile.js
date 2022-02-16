var replace = require("replace");

// use:

let r = (Math.random() + 1).toString(36).substring(7);
replace({
    regex: "<!--aa-->",
    replacement: `${r}__${new Date().now()}<!--aa-->`,
    paths: ['README.md'],
    recursive: true,
    silent: true,
});
