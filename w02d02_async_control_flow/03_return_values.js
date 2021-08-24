const higherOrderFunction = (callback) => {
  const data = {
    userName: 'Mulder'
  };

  setTimeout(() => {
    data.userName = 'Scully';
    callback(data)
  }, 1000)

}

higherOrderFunction((userObj) => {
  console.log(`the username is ${userObj.userName}`)
})


