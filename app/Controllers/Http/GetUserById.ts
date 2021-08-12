import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from 'App/Models/User'

export default class GetUserById {
    public async index ({ request, response}: HttpContextContract) {
        try {
            const query = request.param('id')
            const users = await User.find(query)
            response.status(200).send({
                query,
                success: true,
                data: users,
            })
        }catch(err){
            response.status(err.status||500).send({
                success: false,
                message: err.message
            })
        }
    }
}