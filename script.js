function calculate()
{
    //set the fees into variables so they are easily changed
    let bookFee = .25
    let dvdFee = .50

    // ask for the number of books being returned converting text string to a number
    let booksNum = parseFloat( $("#numberOfBooks").val() );

    //ask for the number of DVDs being returned converting text string to a number
    let dvdsNum = parseFloat( $("#numberOfDvds").val() );

    // ask for the number of days the items are overdue converting text string to an integer
    let daysLate = parseInt( $("#daysLate").val() );

    //calculate book fees per day
    let bookFeesPerDay = bookFee * booksNum;

    // calculate DVD fees per day
    let dvdFeesPerDay = dvdFee * dvdsNum;

    // calculate total fees per day and total fees
    let totalFeesPerDay = bookFeesPerDay + dvdFeesPerDay;
    let totalFees = totalFeesPerDay * daysLate;

    //Output
    alert(`The total late fees due are $${totalFees.toFixed(2)}.`);

}