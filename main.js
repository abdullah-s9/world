


var Phone = ['iphone', 'samsung', 'nokia'];

let found = false;

Phone.forEach(phone => {
  if (phone === 'samsung') {
    found = true;
  }
});

if (found) {
  console.log('yes');
} else {
  console.log('no');
}