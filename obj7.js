// output/a={1:"indu",2:"pavani",3:"rajitha"}
a={1:["indu"],2:["pavani"],3:["rajitha"]}
d={}
for(i in a){
   d[i]=String(a[i])
}
console.log(d)