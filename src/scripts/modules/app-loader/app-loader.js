

/**
 * App Loader Module
 */
const AppLoader = (() => {
  /***************
   * CONSTRUCTOR *
   ***************/

  // The element instances
  const _app_el = document.getElementById("app");
  const _loader_el = document.getElementById("app_loader");




  /**
   * Displays the app's loader
   */
  const show = () => {
    _app_el.style.display = "none";
    _loader_el.style.display = "flex";
  }



  /**
   * Hides the app's loader
   */
  const hide = () => {
    _app_el.style.display = "block";
    _loader_el.style.display = "none";
  }





  /********************
   * POST CONSTRUCTOR *
   ********************/







  /***********
   * EXPORTS *
   ***********/
  return {
    show,
    hide
  }
})();



/******************
 * MODULE EXPORTS *
 ******************/
export default AppLoader;