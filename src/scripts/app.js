/**
 * App Imports
 * Stylesheets, assets and scripts should be imported in the following section so they are included
 * in the build.
 */


// Stylesheets
import "../stylesheets/app.css";


// Scripts
import Utilities from "./modules/utilities";
import Toastr from "./modules/toastr";
import AppLoader from "./modules/app-loader";
import { FormGroup, FormControl } from "./modules/form";
import Weather, { WeatherData, WeatherView } from "./modules/weather";


// App Initializer
Weather.initialize();