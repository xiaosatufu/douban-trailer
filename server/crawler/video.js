const puppeteer = require('puppeteer')
const base = `https://movie.douban.com/subject/`
const doubanId = '26425063'
const videoBase = `http://vt1.doubanio.com/201903211352/04c067166b4ed83e3fd4fba488d4783b/view/movie/M/402370731.mp4`
const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
});
(async () => {
    console.log('start ')
    const browser = await puppeteer.launch({
        args: ['--no-sandbox'],
        dumpio: false
    })
    const page = await browser.newPage();
    await page.goto(base + doubanId, {
        waitUntil: 'networkidle2'
    })
    await sleep(1000)

    const result = await page.evaluate(() => {
        console.log(4)
        var $ = window.$
        var it = $('.related-pic-video')
        if (it && it.length > 0) {

            console.log(5)
            var link = it.attr('href')
            var cover = it.css('background-image').slice(5,-3)
            return {
                link,
                cover
            }
        }
        return {}
    })

    let video
    if (result.link) {
        await page.goto(result.link, {
            waitUntil: 'networkidle2'
        })

        await sleep(2000)
        video = await page.evaluate(() => {
            console.log(1)
            var $ = window.$
            var it = $('source')
            if (it && it.length > 0) {
                return it.attr('src')
            }
            return ''
        })
    }
    

    console.log(video)
    console.log(result)

    const data = {
        video,
        doubanId,
        cover: result.cover
    }


    browser.close()
    process.send({
        data
    })
    process.exit(0)
})()