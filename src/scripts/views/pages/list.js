import TheRestaurantDbSource from "../../data/therestaurantdb-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const List = {
  async render() {
    return `
    <div class="hero-header">
    <picture>
    <source media="(max-width: 600px)" srcset="./heros/hero-image_1-small.jpg">
    <img src="./heros/hero-image_1-large.jpg" alt="hero header"/>
    </picture>
    </div>
    <div class="content">
    <h2 class="content__heading">List Restaurant</h2>
    <div id="restaurantone" class="restaurantone">
    </div>
  </div>
      `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.RestaurantList();
    // Fungsi ini akan dipanggil setelah render()
    const restaurantsContainer = document.querySelector("#restaurantone");
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default List;
