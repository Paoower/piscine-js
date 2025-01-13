function sunnySunday(date){
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const daysdiff = Math.floor((date - new Date(1,0,1))/(24 * 60 * 60 * 1000));
    const currentDay = (daysdiff % days.length + days .length) % days.length;
    return days[currentDay];
}