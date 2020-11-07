// herファイルをnedbに読み込む

//const her = require('../../her/1up_motivation.json')
//const her = require('../../her/yarukimeigenbot.json')

const Nedb = require('nedb') 

const extractTweets = require('../func/extractTweets.js')
const unique = require('../func/unique.js')
const createMeigenList = require('../func/createMeigenList.js')

const main = () => {
    const tweetsList = extractTweets(her)
    const uniqTweetsList = unique(tweetsList)
    const meigenList = createMeigenList(uniqTweetsList)

    const db = new Nedb({filename: './database/meigen.db',autoload: true})
    db.insert(meigenList,(err,newdocs)=>{
        console.log(err)
        //console.log(newdocs)
    })
}

main()