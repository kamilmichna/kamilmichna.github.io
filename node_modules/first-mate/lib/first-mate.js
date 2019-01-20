(function() {
  module.exports = {
    ScopeSelector: require('./scope-selector'),
    GrammarRegistry: require('./grammar-registry'),
    Grammar: require('./grammar')
  };

  Object.defineProperty(module.exports, 'OnigRegExp', {
    get: function() {
      return require('oniguruma').OnigRegExp;
    }
  });

}).call(this);
