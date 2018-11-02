const {Translate} = require('@google-cloud/translate');

const projectId = 'keren-news-1541071321290';

const translate = new Translate({
    projectId: projectId
});

class TranslateController {
    static translate(req, res) {
        const text = req.body.text;
        const target = req.body.target;
        translate.translate(text, target)
            .then(function(result) {
                console.log('result', result);
                console.log('result data', result[1].data.translations);
                const translation = result[0];
        
                console.log(`Text: ${text}`);
                console.log(`Translation: ${translation}`);
                res.status(200).json({
                    text: text,
                    translation: translation
                });
            })
            .catch(function(err) {
                console.log(err);
                res.status(500).json(err);
            }); 
    }
}

module.exports = TranslateController;