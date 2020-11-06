// tweetのリストをもとに、meigenリストを作成する
// input type: Array
// output type: Array

const createMeigenList = (tweetsList) => {
    const meigenList = new Array
    tweetsList.forEach(tweet => {
        const meigen = {
            message: tweet
        }
        meigenList.push(meigen)
    });
    console.log('meigenList was created.')
    console.log('    ==> sample00: ' + JSON.stringify(meigenList[0]))
    console.log('    ==> sample01: ' + JSON.stringify(meigenList[1]))
    console.log('    ==> sample02: ' + JSON.stringify(meigenList[2]))
    console.log('    ==> sample03: ' + JSON.stringify(meigenList[3]))
    console.log('    ==> sample04: ' + JSON.stringify(meigenList[4]))
    console.log('    ==> sample05: ' + JSON.stringify(meigenList[5]))

    return meigenList
}

module.exports = createMeigenList