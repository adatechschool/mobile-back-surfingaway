const axios = require('axios');
const mongoose = require('mongoose');
const Thing = require('../models/SpotSurf');

mongoose.connect("mongodb+srv://Test:test@cluster0.pgsbfxp.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));


const getAllSpots = async () => {
    const cle = process.env.API_KEY; // Assurez-vous que votre clé API est stockée en toute sécurité
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
        title: record.fields.Title,
        description: record.fields.Description,
        imageUrl: record.fields.ImageUrl,
        price: record.fields.Price,
        userId: record.fields.UserId
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
