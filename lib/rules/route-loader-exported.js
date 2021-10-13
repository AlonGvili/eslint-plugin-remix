module.exports = {
  meta: {
    fixable: "code",
    schema: [], // no options
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        if (
          node.id.name === "loader" &&
          node.parent.parent.type !== "ExportNamedDeclaration"
        ) {
          context.report({
            node,
            message: `loader function must be exported`,
            fix: function (fixer) {
              return fixer.insertTextBeforeRange(node.parent.range, "export ");
            },
          });
        }
      },
      FunctionDeclaration(node) {
        if (
          node.id.name === "loader" &&
          node.parent.type !== "ExportNamedDeclaration"
        ) {
          context.report({
            node,
            message: `loader function must be exported`,
            fix: function (fixer) {
              return fixer.insertTextBefore(node, "export ");
            },
          });
        }
      },
    };
  },
};
