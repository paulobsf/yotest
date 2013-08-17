/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ActionsView = Backbone.View.extend({
        template: JST['app/scripts/templates/actions.ejs']
    });

    return ActionsView;
});