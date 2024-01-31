import { Schema, model, models } from "mongoose";


const ConsultingSchema = new Schema({

})

const Consulting = models.Consulting || model('Consulting', ConsultingSchema)

export default Consulting;