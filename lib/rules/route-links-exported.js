module.exports = {
  meta: {
    fixable: "code",
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        if (
          node.id.name === "links" &&
          node.parent.parent.type !== "ExportNamedDeclaration"
        ) {
          context.report({
            node,
            message: `links function must be exported`,
            fix: function (fixer) {
              return fixer.insertTextBeforeRange(node.parent.range, "export ");
            },
          });
        }
      },
      FunctionDeclaration(node) {
        if (
          node.id.name === "links" &&
          node.parent.type !== "ExportNamedDeclaration"
        ) {
          context.report({
            node,
            message: `links function must be exported`,
            fix: function (fixer) {
              return fixer.insertTextBefore(node, "export ");
            },
          });
        }
      },
    };
  },
};
