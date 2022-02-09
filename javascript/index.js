// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

/*
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error)); */



// Iteration 1 - using callbacks


/* function getInstructions(step, callback, errorCallback) {
  // setTimeout(() => {
    console.log( instruction[step] );
    
    if (!directions[step]) errorCallback("Instructions not found.");
    else callback();
  // }, 2000); 
}
 
// Single callback
getDirections(0, ()=> {
  getDirections(1, () => {
    getInstructions(2,()=>{
      getInstructions(()=)
    })
  });
}); */

getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
          getInstruction("mashedPotatoes", 0, (step) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed Potatoes are ready!</li>`
          })})
      })
    })
  })
})
  
// Iteration 2 - using promises


obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`})

    /*
    .then( (step1)) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`})
      /*
    .then( (step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`})
    .then( (step3) => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`})
    .then( (step4) => {
      document.querySelector("#steak").innerHTML += `<li>${step4}</li>`})
    .then( (step5) => {
      document.querySelector("#steak").innerHTML += `<li>${step5}</li>`})*/
    .then( (step) => {
      document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`})
    
    //  ... Your code here
  
    

// Iteration 3 using async/await

async function makeBroccoli(){
  try{
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",0)}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",1)}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",2)}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",3)}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",4)}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",5)}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>The Broccoli is ready!</li>`

    
    

  }catch(error){
    console.log("Something went wrong: ", error)
  }
}

makeBroccoli();
// Bonus 2 - Promise all{


// ...