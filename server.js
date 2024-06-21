const express = require("express");
const path = require("path");
const app = express();
const fetch = require('node-fetch-commonjs');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2/languages';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'b711e39f90mshf401fdca63ac09bp1ed65bjsnef4e72115952',
    'x-rapidapi-host': 'deep-translate1.p.rapidapi.com'
  }
};

    let languages = [];
    const fetchLanguages = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        languages = data.languages.map(lang => lang.name);
        console.log("languages added");
      } catch (error) {
        console.error(error);
      }

  
  };

    fetchLanguages()

 


    app.get('/', (req, res) => {
        res.render('home.ejs', {
          languages: languages
        });
      });


app.listen(8000,()=>{
    console.log("server is running on port 8000")
});


