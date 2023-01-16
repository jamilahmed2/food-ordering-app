const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const mongoURI = "mongodb://127.0.0.1:27017/foodappmern"

const connectToMongo = async()=>{
   await mongoose.connect(mongoURI, async (err,result)=>{
        if (err) 
        {
            console.log("...", err)
        }
        else {
            console.log("connected to mongoDB successfully")
            const fetched_data =  mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                // if (err) {
                //     console.log(err)
                // }
                // else {
                //     global.food_items = data;
                // }
                        const foodCategory = await mongoose.connection.db.collection('foodCategory')
                        foodCategory.find({}).toArray( function (err, catData){
                            if (err) {
                                console.log(err)
                            }
                            else {
                                global.food_items = data;
                                global.foodCategory = catData;
                                }
                        })
            })
        }
    })
}
module.exports = connectToMongo;