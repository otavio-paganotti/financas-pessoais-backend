import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.createMany([
      {
        name: 'Neymar Jr'
      },
      {
        name: 'José Yan Lipu'
      },
      {
        name: 'Otávio Augusto 7k'
      },
      {
        name: 'Anderson Kardek Noivo'
      },
      {
        name: 'Adriano Tech Lead'
      },
      {
        name: 'Rafa Kalimann'
      },
    ])
  }
}
