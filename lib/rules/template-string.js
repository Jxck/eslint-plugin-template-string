"use strict";

module.exports = function(context) {
    var message = "use template string instead of `+` string";

    function template(node) {
        if (node.operator !== "+") {
            return;
        }

        var left = context.getFirstToken(node.left);
        var right = context.getFirstToken(node.right);

        if (left.type === "String" || right.type === "String") {
            context.report(node, message);
        }
    }

    return {
        "BinaryExpression": template
    };
};
