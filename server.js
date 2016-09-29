var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
 'article-one' : {
 title:'articleone i am renju',
 heading: 'article one',
 date: '28 sept 2016',
 content:
       `<p>
             This is the content for the first article.This is the content for the first article.This is the content for the first article.This is the content for the first article.This is the content for the first article.This is the content for the first article.This is the content for the first article.This is the content for the first article.
        </p>   
        <p>
            This is the content for the first article.This is the content for the first article.This is the content for the second article.This is the content for the first article.This is the content for the first article.This is the content for the first article.This is the content for the first article.This is the content for the first article.   
        </p>   
        <p>
            This is the content for the first article.This is the content for the first article.This is the content for the first article.This is the content for the first article.This is the content for the first article.This is the content for the first article.This is the content for the first article.This is the content for the first article.
        </p>    
        <p>
           This is the content for the second article.This is the content for the first article.This is the content for the second article.This is the content for the first article.This is the content for the first article.This is the content for the first article.This is the content for the first article.This is the content for the first article. 
        </p>`
  },
 'article-two' : { title:'articletwo',
 heading: 'article two i am renju',
 date: '28 sept 2016',
 content:
       `<p>
             This is the content for the second article.This is the content for the second article.This is the content for the second article.This is the content for the second article.This is the content for the second article.This is the content for the second article.This is the content for the secondt article.This is the content for the second article.
        </p>   
        <p>
           This is the content for the second article.This is the content for the second article.This is the content for the second article.This is the content for the second article.This is the content for the second article.This is the content for the second article.This is the content for the secondt article.This is the content for the second article.  
        </p>   
        <p>
            This is the content for the second article.This is the content for the second article.This is the content for the second article.This is the content for the second article.This is the content for the second article.This is the content for the second article.This is the content for the secondt article.This is the content for the second article.
        </p>    
        <p>
           This is the content for the second article.This is the content for the second article.This is the content for the second article.This is the content for the second article.This is the content for the second article.This is the content for the second article.This is the content for the secondt article.This is the content for the second article. 
        </p>`},
'article-three' : { title:'articlethree i am renju',
 heading: 'article three',
 date: '4 sept 2016',
 content:
       `<p>
             This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.
        </p>   
        <p>
             This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.
        </p>    
        <p>
            This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.
        </p>   
        <p>
            This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.This is the content for the third article.
        </p>`},
}

 function createtemplate (date)(
var title = data.title:
var date = data.date:
var heading = data.heading:
var content = data.content:

  var htmltemplete = {<html>
   <head>
       <title>
           ${title}
         </title> 
     <link href = "/ui/style.css" rel="stylesheet" />
  </head>
   <body>
    <div class="container">
       <div>
           <a href="/"a>home</a>
       </div>
       <hr/>
       <h3>
          ${heading}
       </h3>
       <div>
           ${date}
       </div>
           ${content}
       </div>
      </body>
   </html>
  };
  return htmltemplate
 )
  app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get("/:articlename", function(req, res){
    //articlename == article-one
    //articles(articlename) == () content object for article one
    var articlename = req.pararms.articlename;
   res.send(createTemplate(article(articlename)));
});

 app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
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
