import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class CategorySeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Category.createMany([
      {
        title: 'Lazer',
        active: true,
        icon: 'mdi-party-popper',
        color: 'orange darken-1'
      },
      {
        title: 'Comida e Bebida',
        active: true,
        icon: 'mdi-food',
        color: 'yellow accent-3'
      },
      {
        title: 'Cuidados Pessoais',
        active: true,
        icon: 'mdi-bottle-tonic-plus',
        color: 'light-blue accent-2'
      },
      {
        title: 'Saúde e Beleza',
        active: true,
        icon: 'mdi-medical-bag',
        color: 'green accent-3'
      },
      {
        title: 'Transporte',
        active: true,
        icon: 'mdi-car',
        color: 'light-green darken-1'
      },
      {
        title: 'Supermercado',
        active: true,
        icon: 'mdi-shopping',
        color: 'blue-grey lighten-1'
      },
      {
        title: 'Moradia',
        active: true,
        icon: 'mdi-home',
        color: 'deep-orange lighten-2'
      },
      {
        title: 'TV/Internet/Telefone',
        active: true,
        icon: 'mdi-cellphone-nfc',
        color: 'cyan accent-3'
      },
      {
        title: 'Educação',
        active: true,
        icon: 'mdi-school',
        color: 'cyan darken-2'
      },
      {
        title: 'Dívidas',
        active: true,
        icon: 'mdi-currency-usd-off',
        color: 'red lighten-1'
      },
      {
        title: 'Reservas',
        active: true,
        icon: 'mdi-treasure-chest',
        color: 'green lighten-3'
      },
      {
        title: 'Reservas',
        active: true,
        icon: 'mdi-treasure-chest',
        color: 'purple lighten-2'
      },
      {
        title: 'Bares e Restaurantes',
        active: true,
        icon: 'mdi-beer-outline',
        color: 'blue lighten-3'
      },
      {
        title: 'Viagens',
        active: true,
        icon: 'mdi-airplane',
        color: 'teal lighten-2'
      },
      {
        title: 'Viagens',
        active: true,
        icon: 'mdi-airplane',
        color: 'teal lighten-2'
      },
    ])
  }
}
