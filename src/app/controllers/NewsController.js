class NewsController {
    index (req, res) {
        res.render('home')
    }
    //get/new/:slug
    show(req,res){
        res.send("newdetail")
    }
}

module.exports = new NewsController