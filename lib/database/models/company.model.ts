import { Schema, model, models } from "mongoose";

const CompanySchema = new Schema({

})

const Company = models.Company || model('Company', CompanySchema)

export default Company;