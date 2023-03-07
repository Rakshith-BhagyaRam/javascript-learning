************************ Short-circuting *************************

// logical operators 

//Use any datatype and return any datatype && they can do short-circuting

//And
console.log('-------OR--------');
console.log(3 || 'rakshith');
console.log(0 || 'rakshith');
console.log(true || '0');
console.log(true || 0);
console.log(0 || true);
console.log(undefined || null);
console.log(null || undefined || '' || false);

//and
console.log('--------AND--------');
console.log(3 && 'rakshith');
console.log(0 && 'rakshith');
console.log(true && '0');
console.log('0' && true);
console.log(true && 0);
console.log(0 && true);
console.log(undefined && null);
console.log(null && undefined);

// Nullish coalescing operator (??)

restaurant.a = 0;
const Guests = restaurant.a || 10;
console.log(Guests);
const Guest = restaurant.a ?? 10;
console.log(Guest);


