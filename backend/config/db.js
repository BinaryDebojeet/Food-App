import mongoose from "mongoose"
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://debojeetdutta43:FoodAppMakautProject@cluster0.iaio74x.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}