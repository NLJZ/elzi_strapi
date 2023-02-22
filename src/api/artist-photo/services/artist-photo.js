'use strict';

/**
 * artist-photo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::artist-photo.artist-photo');
