import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class CreateUsersController{
    public async index ({ request, response }: HttpContextContract) {
        try {
            const query = request.qs()
            const users = await User.create({name: 'teste 1'})
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