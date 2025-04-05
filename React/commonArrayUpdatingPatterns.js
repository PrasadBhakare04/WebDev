const arr = [
    {name : "Prasad", age : 20},
    {name : "Pooja", age : 26},
    {name : "Rohit", age : 25},
    {name : "Sumit", age : 27},
    {name : "Harshal", age : 26},
    {name : "Mahesh", age : 53}
]

//adding an item
const addedArray = [...arr, {name : "Savita", age : 49}]

//removing an element
const removedArr = arr.filter(item => item.age < 23);

//updating all the elements 
const updatedArray = arr.map(item => {
    return {
        ...item,
        age : 100
    }
})

//updating particular element
const updatedElement = arr.map(item => {
    if(item.name === "Prasad"){
        return {
            ...item,
            name : "Prasad Bhakare"
        }
    }
    else{
        return item
    }
})