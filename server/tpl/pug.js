module.exports = `
doctype html
html
    head
    meta(charset='utf-8')
    meta(name='viewport' content='width=device-width, initial-scale=1.0')
    title koa 
    link(href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.min.css")
    script(src='https://cdn.bootcss.com/jquery/3.3.0/jquery.min.js')
    script(src='https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js')
    body
        .container
            .row
                .col-md-8
                    h1 Hi #{you}
                    p this is #{me}
                .col-md-4
                    p 测试pug模板引擎
`