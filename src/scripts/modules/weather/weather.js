import Toastr from "../toastr";
import AppLoader from "../app-loader";
import { WeatherData } from "./weather-data";
import { WeatherView } from "./weather-view";

/**
 * Weather Module
 * ...
 */
const Weather = (() => {
  /***************
   * CONSTRUCTOR *
   ***************/




  // Initialize the form elements and subscribe to the submissino
  const _location_form = document.getElementById("location_form");
  const _location_input_el = document.getElementById("location_input");
  _location_form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (_location_input_el.value.length > 3) {
      initialize(_location_input_el.value);
      _location_input_el.value = "";
    } else {
      Toastr.error(`The provided query is invalid: ${_location_input_el.value}`);
    }
  });








  /*********************
   * EXTERNAL REQUESTS *
   *********************/















  /********************
   * POST CONSTRUCTOR *
   ********************/






  /**
   * Initializes the weather app based on a given query. If none is provided, it will make use 
   * of the user's city.
   * @param {*} query 
   * @returns Promise<void>
   */
  const initialize = async (query = undefined) => {
    // Firstly, display the loader
    AppLoader.show();

    // Load the data safely
    try {
      // Retrieve the user's city in case the query hasnt been provided
      if (!query) {
        query = await WeatherData.get_user_city();
      }

      // Retrieve the weather
      const weather = await WeatherData.get_weather(query);

      // Render the view
      WeatherView.render(weather);
    } catch (e) {
      Toastr.error(e);
    }

    // Finally, hide the loader
    AppLoader.hide();
  }











  /***********
   * EXPORTS *
   ***********/
  return {
    initialize,
  }
})();




/******************
 * MODULE EXPORTS *
 ******************/
export default Weather;