module.exports = {
    postUserName:(req, res, next) => {
        const dbInstance = req.app.get('db');
        let name = req.body.userName;

        dbInstance.insert_user_name([
            name
        ])
            .then( userId => res.status(200).send('task added'))
            .catch( (error) => res.status(500).send(error));
    }
}