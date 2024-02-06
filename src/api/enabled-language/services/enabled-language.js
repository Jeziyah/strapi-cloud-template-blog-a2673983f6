'use strict';

/**
 * enabled-language service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::enabled-language.enabled-language');
