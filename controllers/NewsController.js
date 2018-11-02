
const request = require("request");

class NewsController {
    static getAll(req, res) {
      const keyCountry = req.body.keyCountry
      const options = {
        url: `http://content.guardianapis.com/search?order-by=newest&show-fields=bodyText%2Cthumbnail&page-size=5&api-key=${process.env.API_KEY_GUARDIAN}`,
        headers: {
          "User-Agent": "request"
        }
      }
  
      request.get(options, (error, response, body) => {
        if (error) {
          res.status(response.statusCode).json({
            error
          });
        } else {
            let data = JSON.parse(body)
          res.status(response.statusCode).json(data.response.results);
        }
      })
    }
  
    static getFilter(req, res) {
      const keyCountry = req.query.key
      const options = {
        url: `http://content.guardianapis.com/search?order-by=newest&show-fields=bodyText%2Cthumbnail&q=${keyCountry}&show-elements=image&api-key=${process.env.API_KEY_GUARDIAN}`,
        headers: {
          "User-Agent": "request"
        }
      }
  
      request.get(options, (error, response, body) => {
        if (error) {
          res.status(response.statusCode).json({
            error
          });
        } else {
            let data = JSON.parse(body)
          res.status(response.statusCode).json(data.response.results);
        }
      })
    }
  
  
  }

module.exports = NewsController