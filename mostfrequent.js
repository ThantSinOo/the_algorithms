const mostFrequentItem = arr => {
    const obj = arr.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr]++
        } else {
            acc[curr] = 1
        }
        return acc
    }, {})
    const max = Math.max(...Object.values(obj))
    return Object.keys(obj).filter(key => obj[key] === max)
}

console.log(mostFrequentItem(arr))