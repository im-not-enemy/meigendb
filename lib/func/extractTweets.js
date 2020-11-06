// herファイルを読み込んでツイートだけを抽出
// input type: json (her形式)
// output type: Array

const URL = require('../class/URL.js')

const extractTweets = (her) => {
    const entries = her['log'].entries //array
    const tweetsList = new Array()

    entries.forEach(entry => {
        const url = new URL(entry.request.url)

        if (url.isAdaptiveJson()){
            let tweets = JSON.parse(entry.response.content.text).globalObjects.tweets
            let tweetIds = Object.keys(tweets)
            tweetIds.forEach(id => {
                let meigen = tweets[id].full_text
                tweetsList.push(meigen)
            })
        }
    })

    console.log(tweetsList.length + ' tweets was extract.')
    return tweetsList
}

module.exports = extractTweets