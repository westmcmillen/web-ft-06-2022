array = [12, 3, 1, 2, -6, 5, -8, 6]
target = 0;

const getTwoSum = ( array, target ) => {
  return array.filter( value => array.includes( (target - value) ) );
};

const getThreeSum = ( array, target ) => {
  const threeSum = []
  array.sort((a, b) => a - b)
  array.forEach( ( value, index ) => {
    let [ a, z ] = [ index + 1, array.length - 1]
    while ( a < z ) {
      switch ( array[ a ] + value + array[ z ] ) {
        case target: threeSum.push( [ array[ a ], value, array[ z ] ] );
        default: array[ a ] + value + array[ z ] < target ? a = a + 1 : z = z - 1; 
      }
    }
  } )
  return threeSum;
};

console.log( getThreeSum( array, target ) );