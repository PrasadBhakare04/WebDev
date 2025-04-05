const Joi = require('joi');
randomSchema = Joi.object({
    random: Joi.object({
        text: Joi.string()
    }).required()
}).required();
module.exports.randomSchema = randomSchema;