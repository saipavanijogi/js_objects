
// // # // Sample output: {'a': 400, 'b': 400, 'd': 400, 'c': 300}
// d1 = {'a': 100, 'b': 200, 'c':300}
// d2 = {'a': 300, 'b': 200, 'd':400}

// for(a in d2){
//     for(a in d1){
//         d2[a]=d2[a]+d1[a]
//     }
//     break
// }
// console.log(d2)


d1 = {'a': 100, 'b': 200, 'c':300}
d2 = {'a': 300, 'b': 200, 'd':400}

for(p in d2){
    for(p in d1){
        d2[p]=d2[p]+d1[p]
    }
    break
}
console.log(d2)
