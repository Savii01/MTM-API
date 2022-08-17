const news = require('../data/newsData');

const News = {
    createNews:createNews,
    findAllNews: findAllNews,
    findNewsByID: findNewsByID,
    updateNews: updateNews,
    deleteById: deleteById,
    deleteAll: deleteAll
}

//creating

function createNews(req, res) {
    const newS = req.body;
    news.create(newS).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the News."
              });
        });
}

//Retrieving 
function findAllNews(req, res) {
    news.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while finding all the News."
              });
        });
}

//retrieving by Id

function findNewsByID(req, res) {
    news.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving the News, maybe the News you need doesn't exist"
              });
        });
}

//updating

function updateNews(req, res) {
    news.updateNews(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "News is successfully updated",
                news: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while updating the News."
              });
        });
}

//deleting by ID

function deleteById(req, res) {
    news.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "News successfully deleted ",
                news: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while deleting the News."
              });
        });
}

//delete all

function deleteAll(req,res){
    news.destroy({
        where: {},
        truncate: false
      })
      then((data)=>{
        res.status(200).send({
            message:
                  err.message || "Some error occurred while deleting all News."
        })
      })
}



module.exports = News;