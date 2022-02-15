// code your solution here
function superbowlWin(array){
    const found = array.find(object => object.result==='W')
    console.log(found)
    if (found){
        return found.year
    }
}

