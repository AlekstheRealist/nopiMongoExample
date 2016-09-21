// Route Dependencies
var express = require('express');
var router = express.Router();

// Import Model
var Week = require('../models/Week.js');
// Routes ----------------------------

// Example:
// router.get('/:id', function(req, res) {
  // Logic Goes Here
//});

// ------------------------------------
// 
router.route('')

    .get(function(req, res) {
        Week.find(function(err, weeks) {
            if (err)
                res.send(err);
            res.json(weeks);
        });
    })

    .post(function(req, res){
        var week = new Week();
        week.name = req.body.name;

        week.save(function(err) {
            if (err)
                res.send(err);

            res.json({message: 'Week was created!'});
        });
    });


// router.use('/weeks/:week_id')

//     .get('/weeks/:week_id', function(req, res) {
//         Week.findById(req.params.week_id, function(err, week) {
//             if (err)
//                 res.send(err);

//             res.json(week);
//         });
//     })

//     .put('/weeks/:week_id', function(req, res) {
//         Week.findById(req.params.week_id, function(err, week) {
//             if (err)
//                 res.send(err);

//             week.name = req.body.name;

//             week.save(function(err) {
//                 if (err)
//                     res.send(err);

//                 res.json({message: 'Week updated!'});
//             });
//         });
//     })

//     .delete('/weeks/:week_id', function(req, res) {
//         Week.remove({
//             _id: req.params.week_id
//         }, function(err, week) {
//             if (err)
//                 res.send(week);

//             res.json({ message: 'Successfully deleted' });
//         });
//     });

module.exports = router;