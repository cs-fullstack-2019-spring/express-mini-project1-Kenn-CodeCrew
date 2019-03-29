var express = require('express');
var router = express.Router();
var SuperHeroCollection = require('../models/SuperHeroModel');


router.get('/', function(req, res) {
  SuperHeroCollection.find({}, (errors, results)=>{
    if (errors) {
      res.send(errors)
    }
    else res.render('index',{allEntries:results});
  });
});

router.get("/add", (req, res)=>{
  res.render('add');
});

router.post('/add', (req,res)=>
{
  SuperHeroCollection.create(req.body, (errors, results)=>{
      if(errors) res.send(errors);
      else{
        res.render('add',{isSent: true});
      }
  }
  ) ;
});

router.route('/delete')
    .get((req, res)=> {
        res.render("delete");
    })
    .post((req,res)=>{
        SuperHeroCollection.deleteOne({id: req.body.id}, (errors, results)=>{
          if(errors) res.send(errors);
          else res.render('delete', {isSent: true});
        });
        // res.send("Deleted!")
    });

router.route('/find')
    .get((req,res)=>{
        res.render("find");
    })
    .post((req,res)=>{
        SuperHeroCollection.findOne({id: req.body.id}, (errors, results)=>{
          if(errors) res.send(errors);
          else{
            res.render('find',{findResults: results});
          }
        });
        // res.send("Found!!!!")
    });

router.get("/edit", (req, res)=>{
  res.render("edit");
});

module.exports = router;
