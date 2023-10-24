

/**
 * Weather View Module
 * ...
 */
const WeatherView = (() => {
  /***************
   * CONSTRUCTOR *
   ***************/



  // Init the location element
  const _location_el = document.getElementById("location");

  // Init the date element
  const _date_el = document.getElementById("date");

  // Init the temperature elements
  const _temperature_el = document.getElementById("temperature");
  const _temperature_description_el = document.getElementById("temperature_description");

  // Init the meta data elements
  const _feels_like_el = document.getElementById("feels_like");
  const _humidity_el = document.getElementById("humidity");
  const _chance_of_rain_el = document.getElementById("chance_of_rain");
  const _wind_speed_el = document.getElementById("wind_speed");







  /**
   * Builds the location string.
   * @param {*} country 
   * @param {*} city 
   * @returns string
   */
  const _build_location_string = (country, city) => {
    return `${city}, ${country}`
  }



  /**
   * Builds the date string.
   * @param {*} local_time 
   * @returns string
   */
  const _build_data_string = (local_time) => {
    return new Date(local_time).toLocaleString();
  }




  /**
   * Renders the entire view based on the current weather object.
   * @param {*} weather 
   */
  const render = (weather) => {
    // Set the location string
    _location_el.innerText = _build_location_string(weather.location.country, weather.location.name);

    // Set the date string
    _date_el.innerText = _build_data_string(weather.location.localtime);

    // Set the temperature and the description
    _temperature_el.innerHTML = `${weather.current.temp_c}&#8451;`;
    _temperature_description_el.innerText = weather.current.condition.text.toUpperCase();

    // Set the metadata
    _feels_like_el.innerHTML = `${weather.current.feelslike_c}&#8451;`;
    _humidity_el.innerHTML = `${weather.current.humidity}%`;
    _chance_of_rain_el.innerHTML = `${weather.current.cloud}%`;
    _wind_speed_el.innerHTML = `${weather.current.wind_kph} km/h`;
  }








  /********************
   * POST CONSTRUCTOR *
   ********************/









  /***********
   * EXPORTS *
   ***********/
  return {
    render
  }
})();


/******************
 * MODULE EXPORTS *
 ******************/
export { WeatherView };