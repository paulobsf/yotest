/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ActionModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return ActionModel;
});