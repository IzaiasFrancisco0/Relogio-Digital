export function getCurrentTime(){
  const today = new Date();
  
  const hours = today.getHours().toString().padStart(2, "0");
  const minutes = today.getMinutes().toString().padStart(2, "0");
  const seconds = today.getSeconds().toString().padStart(2, "0");

 return(
  `${hours}:${minutes}:${seconds}`
 )
}