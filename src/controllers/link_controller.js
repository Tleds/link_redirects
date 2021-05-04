const Link = require('../models/mongo/database/schemas/Link');

class LinkController {
    async hitLink(req,res) {

        const { id } = req.params;

        if(!id){
            return res.redirect(`${process.env.API_URL}/error`);
        }

        const linkResponse = await Link.findById(req.params.id);

        return res.redirect(linkResponse.destinationLink);
    }
    async createLink(req,res) {
        try{
        const { destinationLink } = req.body;

        if(!destinationLink){
            return res.status(400).json({
                message: 'O link de destino não pode ser nulo'
            })
        }

        const response = await Link.create({
            destinationLink
        });

        return res.status(200).json({
            message: 'Link criado com sucesso!',
            link: `${process.env.API_URL}/${response.id}`
        })

        } catch(e){
            console.log(e);
            return res.status(500).json({
                message: 'Erro interno no servidor'
            })
        }

    }
}

module.exports = new LinkController();