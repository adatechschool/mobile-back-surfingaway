const axios = require('axios');
const mongoose = require('mongoose');
const Airtable = require('../models/surfDestination');

const result = require('dotenv').config();
if (result.error) {
  throw result.error;
}
console.log(result.parsed);



mongoose.connect("mongodb+srv://SurfTeam:123456azerty@surfingaway.lg3w7hp.mongodb.net/surfspots", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

const getAllSpots = async () => {
  const cle = process.env.API_KEY; 
  console.log(cle);
  try {
    const response = await axios.get(
      "https://api.airtable.com/v0/appqndsWaTAmFBUIM/Surf%20Destinations?maxRecords=10&view=By%20Surf%20Break",
      {
        headers: {
          Authorization: `Bearer ${cle}`,
        },
      }
    );
    console.log("all surf spots datas fetch successfully");
    console.log(response.data)
    return response.data.records;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchDataSurfSpots = async () => {
  const records = await getAllSpots();
  records.forEach(record => {
    const airtable = new Airtable({
      'Destination': record.fields.Destination,
      'Destination State/Country': record.fields['Destination State/Country'],
      'Photos': record.fields.Photos,
      'Surfline Link': record.fields['Surfline Link'],
      'Difficulty Level': record.fields['Difficulty Level'],
      'Surf Break': record.fields['Surf Break'],
      'Adress': record.fields.Adress,
      'Geocode': record.fields.Geocode,
      'Influencers': record.fields.Influencers,
      'Peak Surf Season Begins': record.fields['Peak Surf Season Begins'],
      'Peak Surf Season Ends': record.fields['Peak Surf Season Ends'],
      'Travellers': record.fields.Travellers,
      'City': record.fields.City,
      'Latitude': record.fields.Latitude,
      'Longitude': record.fields.Longitude,
    });
    airtable.save().then(
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
