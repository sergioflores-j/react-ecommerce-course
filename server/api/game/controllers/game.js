'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async populate(ctx) {
    console.log('Starting to populate...');

    await strapi.services.game.populate({
      sort: 'popularity',
      page: 1,
      ...ctx.query,
    });

    ctx.send('Finished populating!');
  },
};
