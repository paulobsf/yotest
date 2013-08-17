/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ActionView = Backbone.View.extend({
        template: JST['app/scripts/templates/action.ejs']
    });

    return ActionView;
});