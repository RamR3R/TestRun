let a = "Luffy";
let b = "zoro";
let c = "zoro";

if (a == b) {
  if (a == c)
    console.log("a,b,c are Equal");
  else
    console.log("a,b are Equal");
}
else {
  if (a == c)
    console.log("a,c are Equal");
  else if(b == c)
    console.log("b,c are Equal);
  else
    console.log("All are Different");
}
