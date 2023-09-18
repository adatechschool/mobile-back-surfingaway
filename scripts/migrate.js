const axios = require('axios');
const mongoose = require('mongoose');
const Thing = require('../models/SpotSurf');

mongoose.connect("mongodb+srv://SurfTeam:123456azerty@surfingaway.lg3w7hp.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));


const getAllSpots = async () => {
    const cle = process.env.API_KEY; 
    try {
      const response = await axios.get(
        "mongodb+srv://<SurfTeam>:<123456azerty>@surfingaway.lg3w7hp.mongodb.net/?retryWrites=true&w=majority",
        {
          headers: {
            Authorization: `Bearer ${cle}`,
          },
        }
      );
      console.log("all surf spots datas fetch successfully");
      return response.data.records;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  
  const fetchDataSurfSpots = async () => {
    const records = await getAllSpots();
    records.forEach(record => {
      const thing = new Thing({
        'Destination': req.body.Destination,
        'Destination State/Country': req.body['Destination State/Country'],
        'Photos': req.body.Photos,
        'Surfline Link': req.body['Surfline Link'],
        'Difficulty Level': req.body['Difficulty Level'],
        'Surf Break': req.body['Surf Break'],
        'Adress': req.body.Adress,
        'Geocode': req.body.Geocode,
        'Influencers': req.body.Influencers,
        'Peak Surf Season Begins': req.body['Peak Surf Season Begins'],
        'Peak Surf Season Ends': req.body['Peak Surf Season Ends'],
        'Travellers': req.body.Travellers,
        'City': req.body.City,
        'Latitude': req.body.Latitude,
        'Longitude': req.body.Longitude,
      });
      thing.save().then(
        () => {
          console.log('Record saved successfully!');
        }
      ).catch(
        (error) => {
          console.error(error);
        }
      );
    });
  };

  
  fetchDataSurfSpots();
