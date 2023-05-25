import mongoose from 'mongoose';
const mongoosePaginate = require('mongoose-paginate-v2');
import { MongoSchemaAddOn } from '../utilities/mongoCommonCollection';
import { statusTypesEnum } from '../utilities/constants';
import { statusTypes } from '../utilities/constant_variables';


const projectOutcomeSchema = new mongoose.Schema(
	{
		outcome: {
			type: String,
			required: true,
			unique: true,
		},  
		createdAt: {
			type: Date,
			default: Date.now,
		},
		updatedAt: {
			type: Date,
			default: Date.now,
		},
		
	},
	MongoSchemaAddOn
);
projectOutcomeSchema.plugin(mongoosePaginate);

const projectOutcomes = mongoose.model('projectOutcomes', projectOutcomeSchema);
module.exports = projectOutcomes;
