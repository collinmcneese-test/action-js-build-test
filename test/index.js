import console from 'console';

async function testFunction () {
  console.log('testFunction');
  return 'testFunction';
}

async function main () {
  console.log('main');
  await testFunction();
}

main();

export default testFunction;
