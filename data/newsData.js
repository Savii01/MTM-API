const newsF = require('../models/news');
const News = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateNews: updateNews,
    deleteById: deleteById,
    deleteAll: deleteAll
}



function create(newsf) {
    const newsF = new adminAss(newsf);
    return newsF.save();
}


function findAll() {
    return newsF.findAll();
}

function findById(newsID) {
    return newsF.findByPk(newsID);
}

function updateNews(news, newsF) {
    const updatenews = {
        newsSource: news.acctName,
        content: news.gender,
        artistName: news.artist,
       artistID: news.artistID,

    };
    return newsF.update(updatenews, { where: { newsID: newsID}
});
}

function deleteById(newsID) {
    return newsID.destroy({ where: { newsID: newsID } });
}

function deleteAll(){
    return adminAss.deleteAll();
}

module.exports = News;