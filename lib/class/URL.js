class URL {
    constructor(url){
        this.url = url
        this.reg = new RegExp(/https:\/\/twitter.com\/i\/api\/2\/search\/adaptive.json.*/)
    }
    isAdaptiveJson(){
        return this.reg.test(this.url)
    }
}

module.exports = URL 