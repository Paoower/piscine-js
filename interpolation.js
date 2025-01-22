let callcount = 0;
function interpolation(obj = {}){
  const {step,start,end,callback,duration,waittime = 15} = obj;
  const intervalDuration = duration /step;
  const incrementStep = duration > step && end > start ? intervalDuration * 0.1 : intervalDuration;

  for (let i = 0; i < step; i++) {
    const interpolatedX = start + (start > end ? -2 * i + incrementStep * i : incrementStep * i);
    const interpolatedY = intervalDuration * (i + 1);

    if (interpolatedY < waittime && callcount !== 1){
      console.log(interpolatedX, interpolatedY),waittime;
      callback([interpolatedX, interpolatedY]);
    }
  }
  callcount++;
}