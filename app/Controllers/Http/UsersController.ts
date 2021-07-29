import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from 'App/Models/User'

export default class UsersController {
    public async index ({ request, response}: HttpContextContract) {
        try {
            const query = request.qs()
            if(!query.page){
                throw new Error('Paramentro page é obrigatório')
            }//pode-se criar controles de erros ou situações
            const users = await User.query().where('name','Otávio Augusto').firstOrFail()
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