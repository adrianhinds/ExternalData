import { eventListeners } from "@popperjs/core/index.js";
import * as Carousel from "./Carousel.js";
import axios from "axios";

// The breed selection input element.
const breedSelect = document.getElementById("breedSelect");
// The information section div element.
const infoDump = document.getElementById("infoDump");
// The progress bar div element.
const progressBar = document.getElementById("progressBar");
// The get favourites button element.
const getFavouritesBtn = document.getElementById("getFavouritesBtn");

// Step 0: Store your API key here for reference and easy access.
const API_KEY = "live_pHMF2O6L5H7dovvCHBqm4k1igANgF0oB7qcfnwmTWoWaQNGTATZRD7mYSDlmTsAy";

/**
 * 1. Create an async function "initialLoad" that does the following:
 * - Retrieve a list of breeds from the cat API using fetch().
 * - Create new <options> for each of these breeds, and append them to breedSelect.
 *  - Each option should have a value attribute equal to the id of the breed.
 *  - Each option should display text equal to the name of the breed.
 * This function should execute immediately.
 */
 async function initialLoad(){
  const response = await fetch("https://api.thecatapi.com/v1/breeds") 
  const data = await response.json();

  data.forEach((data) => {
    console.log(data);
    const option = document.createElement("option");
    option.value = breed.id;
    console.log(breed.id, "id");
    option.textContent = breed.name;
  })
 }
 initialLoad();
/**
 * 2. Create an event handler for breedSelect that does the following:
 * - Retrieve information on the selected breed from the cat API using fetch().
 *  - Make sure your request is receiving multiple array items!
 *  - Check the API documentation if you're only getting a single object.
 * - For each object in the response array, create a new element for the carousel.
 *  - Append each of these new elements to the carousel.
 * - Use the other data you have been given to create an informational section within the infoDump element.
 *  - Be creative with how you create DOM elements and HTML.
 *  - Feel free to edit index.html and styles.css to suit your needs, but be careful!
 *  - Remember that functionality comes first, but user experience and design are important.
 * - Each new selection should clear, re-populate, and restart the Carousel.
 * - Add a call to this function to the end of your initialLoad function above to create the initial carousel.
 */
function EventHandler() {  
};
EventHandler();

async function getRandomImage() {
  url = "https://api.thecatapi.com/v1/images/search?breed"
  let response = await fetch(url)
  response = await response.json()
  images.array.forEach(Image => {
    const carouselItem = document.cre
  });
}
/**
 * 3. Fork your own sandbox, creating a new one named "JavaScript Axios Lab."
 */
/**
 * 4. Change all of your fetch() functions to axios!
 * - axios has already been imported for you within index.js.
 * - If you've done everything correctly up to this point, this should be simple.
 * - If it is not simple, take a moment to re-evaluate your original code.
 * - Hint: Axios has the ability to set default headers. Use this to your advantage
 *   by setting a default header with your API key so that you do not have to
 *   send it manually with all of your requests! You can also set a default base URL!
 */

async function initialLoad() {
  axios({
      method: 'get',
      onDownloadProgress: (progressEvent) => updateProgress(progressEvent),
      url: `https://api.thecatapi.com/v1/breeds`,
  })
  .then(response => {
      response.data.forEach(element => {
          let newOption = document.createElement("option")
          newOption.value = element.id;
          newOption.innerText = element.name
          breedSelect.appendChild(newOption)
      });
   })
  displayInfo(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=abys&api_key=${API_KEY}`);
}

breedSelect.addEventListener('change', function() {
  displayInfo(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedSelect.value}&api_key=${API_KEY}`)
})
async function displayInfo(url) {  
  try {
      Carousel.clear();
      infoDump.innerHTML=''

await axios.get(url, {
  headers: {
      'x-api-key': API_KEY,
      
  },
  onDownloadProgress: (progressEvent) => updateProgress(progressEvent),
}).then(response => {
  if (response.data.length > 0) {
      makeCar(response.data)
  } else {
      infoDump.innerHTML = "<h1>No images found.</h1>";
  }
})
Carousel.start()
} catch (error) {
console.error(error)
}
}

function makeCar(array) {
array.forEach(element => {
let newImage = Carousel.createCarouselItem(element.url, "cat", element.id)
Carousel.appendCarousel(newImage)
}); 
}

/**
 * 5. Add axios interceptors to log the time between request and response to the console.
 * - Hint: you already have access to code that does this!
 * - Add a console.log statement to indicate when requests begin.
 * - As an added challenge, try to do this on your own without referencing the lesson material.
 */
axios.interceptors.request.use(request => {
  request.metadata = request.metadata || {};
  request.metadata.startTime = new Date().getTime();
  console.log("Request has begun.")
  progressBar.style.width = "0%";
  document.querySelector('body').style.cursor = "progress"
  return request;
});

axios.interceptors.response.use(
  (response) => {
      response.config.metadata.endTime = new Date().getTime();
      response.config.metadata.durationInMS = response.config.metadata.endTime - response.config.metadata.startTime;
      console.log(`Request took ${response.config.metadata.durationInMS} milliseconds.`)
      document.querySelector('body').style.cursor = "default"
      return response;
  },
  (error) => {
      error.config.metadata.endTime = new Date().getTime();
      error.config.metadata.durationInMS = error.config.metadata.endTime - error.config.metadata.startTime;

      console.log(`Request took ${error.config.metadata.durationInMS} milliseconds.`)
      throw error;
});

/**
 * 6. Next, we'll create a progress bar to indicate the request is in progress.
 * - The progressBar element has already been created for you.
 *  - You need only to modify its "width" style property to align with the request progress.
 * - In your request interceptor, set the width of the progressBar element to 0%.
 *  - This is to reset the progress with each request.
 * - Research the axios onDownloadProgress config option.
 * - Create a function "updateProgress" that receives a ProgressEvent object.
 *  - Pass this function to the axios onDownloadProgress config option in your event handler.
 * - console.log your ProgressEvent object within updateProgess, and familiarize yourself with its structure.
 *  - Update the progress of the request using the properties you are given.
 * - Note that we are not downloading a lot of data, so onDownloadProgress will likely only fire
 *   once or twice per request to this API. This is still a concept worth familiarizing yourself
 *   with for future projects.
 */
function updateProgress(ProgressEvent) {

};
/**
 * 7. As a final element of progress indication, add the following to your axios interceptors:
 * - In your request interceptor, set the body element's cursor style to "progress."
 * - In your response interceptor, remove the progress cursor style from the body element.
 */
/**
 * 8. To practice posting data, we'll create a system to "favourite" certain images.
 * - The skeleton of this function has already been created for you.
 * - This function is used within Carousel.js to add the event listener as items are created.
 *  - This is why we use the export keyword for this function.
 * - Post to the cat API's favourites endpoint with the given ID.
 * - The API documentation gives examples of this functionality using fetch(); use Axios!
 * - Add additional logic to this function such that if the image is already favourited,
 *   you delete that favourite using the API, giving this function "toggle" functionality.
 * - You can call this function by clicking on the heart at the top right of any image.
 */
export async function favourite(imgId) {
  // your code here

try {
  const favouritesResponse = await axios.get('https://api.thecatapi.com/v1/favourites', {
    headers: {
      'x-api-key': API_KEY,
    },
  });

  const favourites = favouritesResponse.data
  const existingFavourite = favourites.find(fav => fav.image_id === imgId);
  // if liked 
  if (existingFavourite) {
    await axios.delete(`https://api.thecatapi.com/v1/favourites/${existingFavourite.id}`, {
        headers: {
          'x-api-key': API_KEY,
        },
      });
  } else {
    const response = await axios.post(
        `https://api.thecatapi.com/v1/favourites`, 
            {
                image_id: imgId
            }, 
            {
                headers: {
                    'x-api-key': API_KEY,
                },
            }
)
console.log(response.data);
}
} catch (error) {
console.error(error)
}
};

/**
* 9. Test your favourite() function by creating a getFavourites() function.
* - Use Axios to get all of your favourites from the cat API.
* - Clear the carousel and display your favourites when the button is clicked.
*  - You will have to bind this event listener to getFavouritesBtn yourself.
*  - Hint: you already have all of the logic built for building a carousel.
*    If that isn't in its own function, maybe it should be so you don't have to
*    repeat yourself in this section.
*/
export async function getFavourites() {

try {
Carousel.clear();
infoDump.innerHTML=''
const favouritesResponse = await axios.get('https://api.thecatapi.com/v1/favourites', {
  headers: {
    'x-api-key': API_KEY,
  },
})
makeCar(favouriteImgs)
Carousel.start()
} catch (error) {
console.error(error)
}
}

getFavouritesBtn.addEventListener('click', getFavourites)
/**
* 10. Test your site, thoroughly!
* - What happens when you try to load the Malayan breed?
*  - If this is working, good job! If not, look for the reason why and fix it!
* - Test other breeds as well. Not every breed has the same data available, so
*   your code should account for this.
*/

initialLoad();