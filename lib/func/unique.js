// 配列内の重複した要素を削除
// input type: Array
// output type: Array
// const uniqArray = uniq(Array)

const unique = (array) => {
    const src = array
    const dist = new Array()

    src.forEach(el => {
        if (!dist.includes(el)) dist.push(el)
    });
    console.log(dist.length + ' tweets are unique.')

    return dist
}

module.exports = unique