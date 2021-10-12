document.querySelector('button').addEventListener('click', makeReq)

function makeReq(){

  const userName = 'hi'

  fetch(`/api?student=${userName}`)
    .then(response => response.json())
    .then((data) => {
    //   console.log(data);
      function wutangName() {
        let firstName= Math.round(Math.random()* data.firstNames.length)
        let lastName = Math.round(Math.random()* data.lastName.length)
        // return student.firstNames[firstName] + student.lastName[lastName]
        // console.log(data.firstNames[firstName] + data.lastName[lastName])
        let clanName = data.firstNames[firstName] + data.lastName[lastName]
        // return clanName
        document.querySelector("#finalName").textContent = clanName
    } wutangName()
    
    });

}
