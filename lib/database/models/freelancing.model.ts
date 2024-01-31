import { Schema, model, models } from "mongoose";

const FreelancingSchema = new Schema({

})

const Freelancing = models.Freelancing || model('Freelancing', FreelancingSchema)

export default Freelancing;