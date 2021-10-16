const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    //4
    navigator.geolocation.getCurrentPosition(
      //5
      (success) => {
        resolve(success); // 17 - 21 success = GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1634384950948}
      }, // 18 -
      (error) => {
        reject(error);
      },
      opts
    );
  }); //6 promise = Promise {<pending>}
  return promise; //7
};

const setTimer = (duration) => {
  // duration = 1000-duration = 2000
  const promise = new Promise((resolve, reject) => {
    // 10 - 21
    setTimeout(() => {
      // 11 - 22
      resolve("Done!"); // 26 - 30
    }, duration); // 27 - 31
  }); // 12 - 23
  return promise; // 13 - 24 promise = Promise {<pending>} -
};

function trackUserHandler() {
  let positionData; //2

  getPosition() //3
    .then((posData) => {
      //8
      positionData = posData; // 19 posData = GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1634384950948}
      return setTimer(2000); // 20 - 25
    })
    .catch((err) => {
      console.log(err);
      return "on we go...";
    })
    .then((data) => {
      //data = "Done!"
      console.log(data, positionData); // 32 Done! GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1634385289491}
    });
  setTimer(1000).then(() => {
    //9 - 14
    console.log("Timer done!"); // 28 Timer done!
  }); // 29
  console.log("Getting position..."); // 15 Getting position...
} // 16

button.addEventListener("click", trackUserHandler); //1

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
