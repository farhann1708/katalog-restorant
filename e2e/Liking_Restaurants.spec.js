const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.dontSeeElement('.restaurant-item');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.dontSeeElement('.restaurant-item');
  I.amOnPage('/');
  I.waitForElement('.restaurant-item');
  I.seeElement('.restaurant_title a');

  const firstRestaurant = locate('.restaurant_title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant_title a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
