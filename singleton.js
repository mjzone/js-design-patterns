/* One of the main disadvantages of singletons is that they make unit testing very hard. 
  They introduce global state to the application. The problem is that you cannot completely isolate classes dependent on singletons. 
  When you are trying to test such a class, you inevitably test the Singleton as well */

(function(win, $) {
  var circleGenerator = (() => {
    var instance;
    init = () => {
      return {
        name: "Manoj",
        company: "99XTechnology"
      };
    };

    return {
      getInstance: function() {
        if (!instance) {
          instance = init();
        }
        return instance;
      }
    };
  })();

  // create an instance
  console.log(circleGenerator.getInstance());

  // return the instance
  console.log(circleGenerator.getInstance());
})(window, jQuery);
