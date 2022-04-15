const runner = require('../models/maze')
module.exports = {
    all(req, res, next){
        const limit = parseInt(req.query.limit) || ''
        runner.find({}).limit(limit)
            .then(runners => res.status(200).send(runners))
            .catch(next)
    }
    ,
    create_runner(req, res, next){
        const runnerProps = req.body;
        runner.create(runnerProps)
            .then(run => res.status(201).send(run))
            .catch(next)
    },
    edit(req, res, next){
        const runnerId = req.params.id;
        const runnerProps = req.body;
        runner.findByIdAndUpdate({_id: runnerId}, runnerProps)
            .then(()=> runner.findById({_id:runnerId}))
            .then(runner => res.status(200).send(runner))
            .catch(next)
    },
    delete(req, res, next){
        const runnerId = req.params.id;
        runner.findByIdAndRemove({_id: runnerId})
            .then(runner => res.status(204).send(runner))
            .catch(next)
    },
    details(req, res, next){
        const runnerId = req.params.id;

        runner.findById({_id:runnerId})
            .then(runner => res.status(200).send(runner))
            .catch(next)
    }
}