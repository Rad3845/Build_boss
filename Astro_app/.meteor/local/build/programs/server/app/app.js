var require = meteorInstall({"lib":{"routes.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// lib/routes.js                                                            //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
if (Meteor.isClient) {                                                      // 1
    Accounts.onLogin(function () {                                          // 2
        FlowRouter.go('recipe-book');                                       // 3
    });                                                                     // 4
                                                                            //
    Accounts.onLogout(function () {                                         // 6
        FlowRouter.go('home');                                              // 7
    });                                                                     // 8
}                                                                           // 9
                                                                            //
FlowRouter.triggers.enter([function (context, redirect) {                   // 12
    if (!Meteor.userId()) {                                                 // 13
        FlowRouter.go('home');                                              // 14
    }                                                                       // 15
}]);                                                                        // 16
                                                                            //
FlowRouter.route('/', {                                                     // 19
    name: 'home',                                                           // 20
    action: function action() {                                             // 21
        if (Meteor.userId()) {                                              // 22
            FlowRouter.go('recipe-book');                                   // 23
        }                                                                   // 24
        GAnalytics.pageview();                                              // 25
        BlazeLayout.render('HomeLayout');                                   // 26
    }                                                                       // 27
});                                                                         // 19
                                                                            //
FlowRouter.route('/recipe-book', {                                          // 30
    name: 'recipe-book',                                                    // 31
    action: function action() {                                             // 32
        GAnalytics.pageview();                                              // 33
        BlazeLayout.render('MainLayout', { main: 'Recipes' });              // 34
    }                                                                       // 35
});                                                                         // 30
                                                                            //
FlowRouter.route('/recipe/:id', {                                           // 38
    name: 'recipe',                                                         // 39
    action: function action() {                                             // 40
        GAnalytics.pageview();                                              // 41
        BlazeLayout.render('MainLayout', { main: 'RecipeSingle' });         // 42
    }                                                                       // 43
});                                                                         // 38
                                                                            //
FlowRouter.route('/menu', {                                                 // 46
    name: 'menu',                                                           // 47
    action: function action() {                                             // 48
        BlazeLayout.render('MainLayout', { main: 'Menu' });                 // 49
    }                                                                       // 50
});                                                                         // 46
                                                                            //
FlowRouter.route('/shopping-list', {                                        // 55
    name: 'shopping-list',                                                  // 56
    action: function action() {                                             // 57
        BlazeLayout.render('MainLayout', { main: 'ShoppingList' });         // 58
    }                                                                       // 59
});                                                                         // 55
//////////////////////////////////////////////////////////////////////////////

}},"collections":{"Recipes.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// collections/Recipes.js                                                   //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
Recipes = new Mongo.Collection('recipes');                                  // 1
                                                                            //
Recipes.allow({                                                             // 3
  insert: function insert(userId, doc) {                                    // 4
    return !!userId;                                                        // 5
  },                                                                        // 6
  update: function update(userId, doc) {                                    // 7
    return !!userId;                                                        // 8
  }                                                                         // 9
                                                                            //
});                                                                         // 3
                                                                            //
Ingredient = new SimpleSchema({                                             // 13
  name: {                                                                   // 14
    type: String                                                            // 15
  },                                                                        // 14
  amount: {                                                                 // 17
    type: String                                                            // 18
  }                                                                         // 17
                                                                            //
});                                                                         // 13
                                                                            //
RecipeSchema = new SimpleSchema({                                           // 23
  name: {                                                                   // 24
    type: String,                                                           // 25
    label: "Name"                                                           // 26
  },                                                                        // 24
  desc: {                                                                   // 28
    type: String,                                                           // 29
    label: "Description"                                                    // 30
  },                                                                        // 28
  Ingredients: {                                                            // 32
    type: [Ingredient]                                                      // 33
  },                                                                        // 32
  inMenu: {                                                                 // 35
    type: Boolean,                                                          // 36
    defaultValue: false,                                                    // 37
    optional: true,                                                         // 38
    autoform: {                                                             // 39
      type: "hidden"                                                        // 40
    }                                                                       // 39
  },                                                                        // 35
  author: {                                                                 // 43
    type: String,                                                           // 44
    label: "Author",                                                        // 45
    autoValue: function autoValue() {                                       // 46
      return this.userId;                                                   // 47
    },                                                                      // 48
    autoform: {                                                             // 49
      type: "hidden"                                                        // 50
    }                                                                       // 49
  },                                                                        // 43
  createdAt: {                                                              // 53
    type: Date,                                                             // 54
    label: "Created At",                                                    // 55
    autoValue: function autoValue() {                                       // 56
      return new Date();                                                    // 57
    },                                                                      // 58
    autoform: {                                                             // 59
      type: "hidden"                                                        // 60
    }                                                                       // 59
  }                                                                         // 53
});                                                                         // 23
                                                                            //
Meteor.methods({                                                            // 65
  toggleMenuItem: function toggleMenuItem(id, currentState) {               // 66
    Recipes.update(id, {                                                    // 67
      $set: {                                                               // 68
        inMenu: !currentState                                               // 69
      }                                                                     // 68
    });                                                                     // 67
  },                                                                        // 72
  deleteRecipe: function deleteRecipe(id) {                                 // 73
    Recipes.remove(id);                                                     // 74
  }                                                                         // 75
                                                                            //
});                                                                         // 65
                                                                            //
Recipes.attachSchema(RecipeSchema);                                         // 79
//////////////////////////////////////////////////////////////////////////////

}},"server":{"init.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/init.js                                                           //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
Meteor.startup(function () {});                                             // 1
//////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/publish.js                                                        //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
Meteor.publish('recipes', function () {                                     // 1
    return Recipes.find({ author: this.userId });                           // 2
});                                                                         // 3
                                                                            //
Meteor.publish('singleRecipe', function (id) {                              // 5
    check(id, String);                                                      // 6
    return Recipes.find({ _id: id });                                       // 7
});                                                                         // 8
//////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/meteor",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/main.js                                                           //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});
                                                                            //
Meteor.startup(function () {                                                // 3
  // code to run on server at startup                                       //
});                                                                         // 5
//////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./lib/routes.js");
require("./collections/Recipes.js");
require("./server/init.js");
require("./server/publish.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
