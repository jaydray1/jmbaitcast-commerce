module.exports = {
    postTask:(req, res, next) => {
        const dbInstance = req.app.get('db');
        let user = req.body;
        
        dbInstance.insert_task([
            user.task,
            user.description,
            user.userName
        ])
            .then( tasks => res.status(200).send('task added'))
            .catch( () => res.status(500).send());
    }
}