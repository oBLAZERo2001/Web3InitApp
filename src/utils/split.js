export function split(t) {
  let vals = t.split("\n")
  let addresses = []
  let values = []
  vals.forEach(v=>{
     if(v.includes(", ")) {
         const s = v.split(", ");
         add(s)
     } else if(v.includes(",")) {
         const s = v.split(",");
         add(s)
     } else if(v.includes("= ")) {
         const s = v.split("= ");
         add(s)
     } else if(v.includes("=")) {
         const s = v.split("=");
         add(s)
     }  else if(v.includes(" ")) {
         const s = v.split(" ");
         add(s)
     }
  })
  
  function add(s) {
      addresses.push(s[0]);
      values.push(s[1]);
  }
  
  return {addresses, values};
}
