const obj = {
    name: 'Bruce',
    age: 25,
    "key-three": true,
    sayMyName: function(){
        console.log(`My name is ${this.name}`)
    }
}

obj.hobby = 'football'
delete obj.hobby

console.log(obj.name)
console.log(obj['age'])
console.log(obj['key-three'])
console.log(obj)
obj.sayMyName()
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Object - Big-O time complexity
// Insert, Remove, Access - O(1)
// Search - O(n)
// Object.keys() .values() .entries() - O(n)