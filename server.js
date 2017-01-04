var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    articleone : {
        title : 'Article One | Kashish Bansal',
        heading: 'Article one',
        date: '4 jan 2017',
        content:`paragraph of article one
        <p>
        paragrpah of article one`
    },
    articletwo:{
        title : 'Article Two | Kashish Bansal',
        heading: 'Article teo',
        date: '4 jan 2017',
        content:`paragraph of article two
        <p>
        paragrpah of article two`
    },
    
    articlethree:{
        title : 'Article Three | Kashish Bansal',
        heading: 'Article Three',
        date: '4 jan 2017',
        content:`paragraph of article three
        <p>
        paragrpah of article three`
    }
};

function createTemplate(data){
    var title = data.title;
    var date=data.date;
    var heading = data.heading;
    var content  = data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width,initial-scale=1"/> 
        </head>
        <body>
            <div>
                <a href="/">home</a>
            </div>
            <hr>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </body>
    </html>
    `;
    
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:article-name' , function(req,res){
    var articlename= req.params.article-name;
   res.send(createTemplate(articles[articlename]))
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
