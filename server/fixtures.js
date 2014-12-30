/*
Ranobe Gaku by https://github.com/baerrach/ranobe-gaku is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (http://creativecommons.org/licenses/by-nc-sa/4.0/).
*/

"use strict";

Meteor.startup(function() {
   if (Meteor.users.find().count() == 0) {
       var users = [
           {name:"Normal User",email:"normal@example.com",roles:[], password: "normal42"},
           {name:"Admin User",email:"admin@example.com",roles:['admin'], password: "admin42"}
       ];
 
       _.each(users, function (user) {
           var id = Accounts.createUser({
               email: user.email,
               password: user.password,
               profile: { name: user.name }
           });
 
           if (user.roles.length > 0) {
               Roles.addUsersToRoles(id, user.roles);
           }
       });
   };
});
