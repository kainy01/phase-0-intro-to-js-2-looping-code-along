function writeCards(gifts, name) {
    let arr=[]
    for (let i = 0; i < gifts.length; i++) {
      arr.push(`Thank you, ${gifts[i]}, for the wonderful ${name} gift!`);
    }
    return arr
  }


  function countDown(countup) {
    while (countup !==-1) {
      console.log(countup--);
    }
  }