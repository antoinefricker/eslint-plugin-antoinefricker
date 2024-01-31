const ruleSuffix = ["Gros"];

const isNameValid = (name, { allSuffix, exclude }) => {
  const isValid = (suffix) =>
    name.lastIndexOf(suffix) === name.length - suffix.length;
  return exclude.includes(name) || allSuffix.some(isValid);
};

const matchFuncLorrainSuffix = (context) => {
  const { options } = context;
  const { include = [], exclude = [] } = options[0] || {};

  return {
    Identifier: (node) => {
      if (
        node.parent.init &&
        node.parent.init.type === "ArrowFunctionExpression"
      ) {
        const { name } = node;
        const allSuffix = [...include, ...ruleSuffix].sort();
        if (!isNameValid(name, { allSuffix, exclude })) {
          context.report(
            node,
            `${name} should end with ${allSuffix.join(", ")}.`
          );
        }
      }
    },
  };
};

module.exports = { matchFuncLorrainSuffix };
