const arrayOfProducts = ( array ) => {
    const results = []
    for ( i in array ) {
        let runningProduct = 1
        for ( j in array ) {
            if ( array[ i ] !== array[ j ] ) {
                runningProduct = runningProduct * array[j]
            }
        }
        results.push(runningProduct)
    }
    return results
};

console.log( arrayOfProducts( [ 5, 1, 4, 2 ] ) );