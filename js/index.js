// let hrs = document.getElementById("hrs");
// let min = document.getElementById("min");

// setInterval(() => {
//   let currentTime = new Date();

//   hrs.innerHTML =
//     (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
//   min.innerHTML =
//     (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
// }, 1000);

// const chargeLevel = document.getElementById("charge-level");
// const charge = document.getElementById("charge");

// window.onload = () => {
//   if (!navigator.getBattary) {
//     alert("Battary status api is not supported in your browser");
//     return false;
//   }
// };

// navigator.getBattary().then((battary) => {
//   function updateAllBattaryInfo() {
//     updateChargingINfo();
//   }
//   updateAllBattaryInfo();
//   battary.addEvenListener("chargingchange", () => {
//     updateAllBattaryInfo();
//   });

//   function updateChargingInfo() {
//     if (battary.charging) {
//       charge.classList(" active");
//       chargingTimeRef.innerText = "";
//     } else {
//       charge.classList.remove("active");
//       if (parseInt(battary.dischargeTime)) {
//         let hr = parseInt(battary.dischargeTime / 3600);
//         let min = parseInt(battary.dischargeTime / 60);
//         chargingTimeRef.innerText = `${hr}hr ${min} mins remaining`;
//       }
//     }
//   }
// });
