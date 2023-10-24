

/**
 * Weather Data Module
 * ...
 */
const WeatherData = (() => {
  /***************
   * CONSTRUCTOR *
   ***************/


  // weatherapi.com's API Key
  const _api_key = "7f7ed7de912d41d4879151155232310";





  /**
   * Retrieves the user's city name safely. In case of an error, it returns Adelaide as a default.
   * @returns Promise<string>
   */
  const get_user_city = async () => {
    // Attempt to retrieve the user's city safely. If it fails, return 'Adelaide' as a default
    try {
      // Extract the user's info from the geolocation-db's API
      const response = await fetch("https://geolocation-db.com/json/", { mode: "cors" });

      // Make sure the response is valid
      if (!response || response.status !== 200 || !response.ok) {
        console.log(response);
        throw new Error(`The geolocation-db API returned an invalid response.`);
      }

      // Extract the data from the response
      const response_data = await response.json();

      // Make sure the city was included in the response
      if (!response_data || typeof response_data.city !== "string" || !response_data.city.length) {
        console.log(response_data);
        throw new Error('The geolocation-db API returned an invalid city.');
      }

      // Finally, return the city
      return response_data.city;
    } catch (e) {
      console.log(e);
      return "Adelaide";
    }
  }






  /**
   * Retrieves the current weather from the weatherapi.com service based on given query.
   * @param {*} query 
   * @returns Promise<object>
   */
  const get_weather = async (query) => {
    // Extract the user's info from the geolocation-db's API
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${_api_key}&q=${query}&aqi=no`, 
      { mode: "cors" }
      );

    // Make sure the response is valid
    if (!response || response.status !== 200 || !response.ok) {
      console.log(response);
      throw new Error(`The Weather API returned an invalid response.`);
    }

    // Extract the data from the response
    const response_data = await response.json();

    // Make sure the city was included in the response
    if (!response_data || !response_data.location || !response_data.current) {
      console.log(response_data);
      throw new Error('The Weather API returned an invalid weather object.');
    }

    // Finally, return the weather state
    return response_data;
  }








  /********************
   * POST CONSTRUCTOR *
   ********************/









  /***********
   * EXPORTS *
   ***********/
  return {
    get_user_city,
    get_weather
  }
})();


/******************
 * MODULE EXPORTS *
 ******************/
export { WeatherData };