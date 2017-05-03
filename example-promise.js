// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback("City not found");
// }

// getTempCallback("Krefeld", function(err, temp){
//     if(err){
//         console.log("error", err)
//     } else {
//         console.log("success", temp)
//     }
// });

// function getTempPromise(location){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve(79);
//             reject("City not found");
//         }, 1000);
//     });
// }

// getTempPromise("Krefeld").then(function(temp){
//     console.log("promise success", temp);
// }, function(err){
//     console.log("promise error", err)
// });


// Challenge Area

function addPromise(a,b){
    return new Promise(function(resolve, reject){
        if(typeof a === "number" && typeof b === "number"){
            resolve(a+b);
        } else {
            reject("At least one argument is not a number!");
        }
    });
};

addPromise(5,22).then(function(result){
    console.log("The result is: " + result);
}, function(err){
    console.log(err);
})