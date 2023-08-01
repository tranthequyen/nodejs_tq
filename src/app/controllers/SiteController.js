class SiteController {
    index (req, res) {
        res.render('home');
    }
    //get/new/:slug
    search(req,res){
        res.render('search');

    }
}

module.exports = new SiteController