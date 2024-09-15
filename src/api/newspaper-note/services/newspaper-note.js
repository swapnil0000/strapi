'use strict';

/**
 * newspaper-note service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newspaper-note.newspaper-note');
