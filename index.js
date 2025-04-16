const headquarterBlock = 42;
const feetPerBlock = 264;

// Returns the number of blocks from Scuber's headquarters to the pickup location
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - headquarterBlock);
}

// Converts blocks to feet
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * feetPerBlock;
}

// Calculates the number of feet between start and destination blocks
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * feetPerBlock;
}

// Returns the fare for the customer based on the distance travelled
function calculatesFarePrice(start, destination) {
  const tripDistance = distanceTravelledInFeet(start, destination);

  if (tripDistance <= 400) {
    return 0; // First 400 feet are free
  } else if (tripDistance > 400 && tripDistance <= 2000) {
    return (tripDistance - 400) * 0.02; // 2 cents per foot between 400 and 2000 feet
  } else if (tripDistance > 2000 && tripDistance <= 2500) {
    return 25; // Flat fee for distances over 2000 feet but under 2500 feet
  }

  return 'cannot travel that far'; // For distances over 2500 feet
}
