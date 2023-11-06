
getInstruction('mashedPotatoes', 0, step => {
  document.querySelector('#mashedPotatoes').innerHTML += <li>${step}</li>;
  getInstruction('mashedPotatoes', 1, step => {
    document.querySelector('#mashedPotatoes').innerHTML += <li>${step}</li>;
    getInstruction('mashedPotatoes', 2, step => {
      document.querySelector('#mashedPotatoes').innerHTML += <li>${step}</li>;
      getInstruction('mashedPotatoes', 3, step => {
        document.querySelector('#mashedPotatoes').innerHTML += <li>${step}</li>;
        getInstruction('mashedPotatoes', 4, step => {
          document.querySelector('#mashedPotatoes').innerHTML += <li>${step}</li>;
          document.querySelector('#mashedPotatoes').innerHTML += <li>Mashed potatoes are ready!</li>;
          document.querySelector('#mashedPotatoesImg').removeAttribute('hidden');
        }, error => console.log(error));
      }, error => console.log(error));
    }, error => console.log(error));
  }, error => console.log(error));
}, error => console.log(error));

obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += <li>${step0}</li>;
  })
  .then(() => {
    return obtainInstruction("steak", 1).then((step) => {
      document.querySelector("#steak").innerHTML += <li>${step}</li>;
    });
  })
  .then(() => {
    return obtainInstruction("steak", 2).then((step) => {
      document.querySelector("#steak").innerHTML += <li>${step}</li>;
    });
  })
  .then(() => {
    return obtainInstruction("steak", 3).then((step) => {
      document.querySelector("#steak").innerHTML += <li>${step}</li>;
    });
  })
  .then(() => {
    return obtainInstruction("steak", 4).then((step) => {
      document.querySelector("#steak").innerHTML += <li>${step}</li>;
    });
  })
  .then(() => {
    return obtainInstruction("steak", 5).then((step) => {
      document.querySelector("#steak").innerHTML += <li>${step}</li>;
    });
  })
  .then(() => {
    return obtainInstruction("steak", 6).then((step) => {
      document.querySelector("#steak").innerHTML += <li>${step}</li>;
    });
  })
  .then(() => {
    return obtainInstruction("steak", 7).then((step) => {
      document.querySelector("#steak").innerHTML += <li>${step}</li>;
    });
  })
  .then(() => {
    document.querySelector("#steak").innerHTML += <li>Stake is ready!</li>;
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

makeBroccoli();
async function makeBroccoli() {
  for (let i = 0; i < 7; i++) {
    await obtainInstruction("broccoli", i).then((step0) => {
      document.querySelector("#broccoli").innerHTML += <li>${step0}</li>;
    });
  }
  document.querySelector("#broccoli").innerHTML += <li>Broccoli is ready!</li>;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

makeBrusselsSprouts();
async function makeBrusselsSprouts() {
  let steps = [...Array(8).keys()].map((i) =>
    obtainInstruction("brusselsSprouts", i).then((step) => step)
  );
  Promise.all(steps)
    .then((results) => {
      results.forEach((step) => {
        document.querySelector("#brusselsSprouts").innerHTML += <li>${step}</li>;
      });
    })
    .then(() => {
      document.querySelector("#brusselsSprouts").innerHTML += <li>Brussels sprouts are ready!</li>;
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    });
}