import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteMovieIdb from '../../src/scripts/data/favoriterestaurant-idb';


const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteMovieIdb,
      restaurant,
    });
  };
   
  export { createLikeButtonPresenterWithRestaurant };
