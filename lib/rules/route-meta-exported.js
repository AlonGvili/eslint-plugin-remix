module.exports = {
  meta: {
    fixable: "code",
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        if (
          node.id.name === "meta" &&
          node.parent.parent.type !== "ExportNamedDeclaration"
        ) {
          context.report({
            node,
            message: `meta function must be exported`,
            fix: function (fixer) {
              return fixer.insertTextBeforeRange(node.parent.range, "export ");
            },
          });
        }
      },
      FunctionDeclaration(node) {
        if (
          node.id.name === "meta" &&
          node.parent.type !== "ExportNamedDeclaration"
        ) {
          context.report({
            node,
            message: `meta function must be exported`,
            fix: function (fixer) {
              return fixer.insertTextBefore(node, "export ");
            },
          });
        }
      },
    };
  },
};
