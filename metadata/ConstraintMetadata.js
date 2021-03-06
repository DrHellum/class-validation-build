"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
/**
 * This metadata interface contains information for custom validators.
 */
var ConstraintMetadata = (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function ConstraintMetadata(target, name, async) {
        if (async === void 0) { async = false; }
        this.target = target;
        this.name = name;
        this.async = async;
    }
    Object.defineProperty(ConstraintMetadata.prototype, "instance", {
        // -------------------------------------------------------------------------
        // Accessors
        // -------------------------------------------------------------------------
        /**
         * Instance of the target custom validation class which performs validation.
         */
        get: function () {
            return index_1.getFromContainer(this.target);
        },
        enumerable: true,
        configurable: true
    });
    return ConstraintMetadata;
}());
exports.ConstraintMetadata = ConstraintMetadata;

//# sourceMappingURL=ConstraintMetadata.js.map
