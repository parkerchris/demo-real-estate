/*
const propertyOne = {
	_propertyAddress: {
  		street: '1234 Applewood Dr', 
  		city: 'San Diego', 
      state: 'CA', 
      country: 'United States'
      },
                      
	_propertyDetails: {
  		type: 'Single Family',
      Bedrooms: 3,
      Bathrooms: 2,
      SquareFeet: 1488, 
  		},
      
  _propertyMetrics: {
  		cashFlow: '$100',
  		coc: function(downPayment, CashFlow) {
      	return this.downPayment / (this.cashFlow * 12)
      },
      listPrice: '$400,000',
      rent: '$2,400',
      downPayment: '$23,000'
  		},
   
   _propertyExpenses: {
   		mortgage: '$1,800',
      pmi: '$129',
      insurance: '$500',
      taxes: '$400',
      utilites: '$300',
      capex: '$200',
      propertyManagement: '$240',
      totalExpenses:
  		}
    
};

const userOne = {
	userName: 'johnny06'
  email: 'johnny@hotmail.com'
  firstName: 'johnny'
  LastName: 'appleseed'
  
}

*/

const prop = {
    listPrice: 400000,
    rentalIncome: 2200,
    downPaymentAmt: 23000,
    coc: function(rentalIncome, downPaymentAmt) {
        return this.downPaymentAmt / (this.rentalIncome * 12);
    },
    mortgage: 1800,
    pmi: 129,
    insurance: 500,
    taxes: 400,
    utilities: 300,
    capex: 200,
    propertyManagement: 240,
    expenses: function() {
    return (this.mortgage + this.pmi + this.insurance + this.taxes + this.utilities + this.capex + this.propertyManagement)
},
    cashFlow: function() {
    if ((this.rentalIncome - this.expenses()) > 0) {
      return this.rentalIncome - this.expenses()
  } else {
      return 'NEGATIVE MARG'
         }
    // return this.rentalIncome - this.expenses()
}
};

console.log(prop.cashFlow());

//^^^^^^^  IT WORKS!!!  ^^^^^^^

//test an if statement to log a message if cash flow is negative
//watch Mosh's objects video
//Make the cash on cash function a setter that sets a key value pair of coc
//determine how to get the correct output then figure out how to use getters and setters to use this output to set the value of coc