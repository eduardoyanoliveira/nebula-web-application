export function secondsElapsed( start: Date, end: Date){

  let elapsedTime: number = (end.getTime() - start.getTime()); //in ms

  // strip the ms
  elapsedTime /= 1000;

  // get seconds 
  return Math.round(elapsedTime);
};