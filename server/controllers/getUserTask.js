module.exports = {
    getUserTask:(req, res, next) => {
        const dbInstance = req.app.get('db');
        console.log(req.params.userid)
        dbInstance.get_user_tasks([req.params.userid])
            .then( data => res.status(200).send(data))
            .catch( (error) => res.status(500).send(error));
    }
}