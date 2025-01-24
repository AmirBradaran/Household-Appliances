'use strict';

/**
 * product-detail service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-detail.product-detail');
