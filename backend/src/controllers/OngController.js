const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },


    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        //to create id, check documentation at node
        const id = crypto.randomBytes(4).toString('HEX');

        //connect with db to create a new Ong table
        await connection('ongs').insert({
            //here I must insert all the columns I want in the table
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
        
        return response.json({ id });
    }
};