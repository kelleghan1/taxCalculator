module.exports = {
  calcTax: function (income){
    if (income <= 10){
      return (income * 0.1)
    }else if(income <= 20){
      return (1 + (0.07*(income-10)))
    }else if(income>20){
      return (1.7 +(0.03*(income-20)))
    }
  }
}
