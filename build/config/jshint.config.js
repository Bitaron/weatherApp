(function() {
    "use strict";

    var merge = require("object-merge");

    var universalOptions = {
        bitwise: true,
        curly: false,
        eqeqeq: true,
        forin: true,
        immed: true,
        latedef: false,
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        regexp: true,
        undef: true,
        strict: true,
        globalstrict: true,     // "global" stricts are okay when using CommonJS modules
        trailing: true
    };

    exports.nodeOptions = merge(universalOptions, {
        node: true
    });

    exports.clientOptions = merge(universalOptions, {
        browser: true,
        node: true
    });

    var universalGlobals = {

    };

    exports.nodeGlobals = merge(universalGlobals, {
        // Jake
        jake: false,
        desc: false,
        task: false,
        directory: false,
        complete: false,
        fail: false
    });

    exports.clientGlobals = merge(universalGlobals, {

    });

}());