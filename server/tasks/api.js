// const url = 'http://api.douban.com/v2/movie/subject/1764796'


const rp = require('request-promise-native')

async function fetchMovie(item) {
    const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`
    const res = await rp(url)
    return res
}


console.log(111)
;
(async () => {
    
    let movies = [
        {
            doubanId: 3168101,
            title: '毒液：致命守护者',
            rate: 0,
            poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2537158013.jpg'
        },
        {
            doubanId: 1291561,
            title: '千与千寻',
            rate: 0,
            poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p1606727862.jpg'
        }
    ]

    movies.map(async movie =>{
        let movieData = await fetchMovie(movie)
        try{
            movieData = JSON.parse(movieData)
            console.log(movieData.tags)
            console.log(movieData.summary)
        } catch(err) {
        console.log(err)
        }
    })

})()