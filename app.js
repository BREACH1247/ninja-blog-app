const express = require('express');
const morgan = require('morgan');
const dbURl = 'mongodb+srv://kingsmen47:test1234@nodetuts.uwugd.mongodb.net/node-tuts?retryWrites=true&w=majority'
const mongoose = require('mongoose');
const { render } = require('express/lib/response');
const blogRoutes = require('./routes/blogRoutes');
mongoose.connect(dbURl, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(3000))
.catch((err) => console.log(err));
//express app
const app = express();

// listen for requests



//register view engine
app.set('view engine', 'ejs')


// third party middleware for logging details of the request made.
app.use(morgan('tiny'));
app.use(express.urlencoded({extended: true}))
//middleware & static files callout for making it public
app.use(express.static('public'))

// // mongoose and mongo sandbox routes

// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'this is the body of my new blog'
//     });

//     blog.save().then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     });
// })

// app.get('/all-blogs' , (req, res) => {
//     Blog.find()
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })

// app.get('/single-blog', (req, res) => {
//     Blog.findById('61f14f40d510a884dd61579b')
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })
// routes
app.get('/', (req,res) => {
    res.redirect('/blogs')
   
})


app.get('/about', (req,res) => {
   // res.send('./views/about.html');
   res.render('about', {title: 'About'});
})

// blog routes
app.use('/blogs',blogRoutes);

//middleware functions
app.use((req,res) => {
    res.status(404).render('404' , {title: 'Error'});
})