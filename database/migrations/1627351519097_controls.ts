import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Controls extends BaseSchema {
  protected tableName = 'controls'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unique()
      table.string('month').notNullable()
      table.string('year').notNullable()
      table.string('type').notNullable().defaultTo('receita')
      table.boolean('is_projected').notNullable().defaultTo(false)
      table.decimal('total_value', 2).notNullable().defaultTo(0.00)
      table.decimal('total_real', 2).notNullable().defaultTo(0.00)
      table.integer('user_id').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('projection_id').references('id').inTable('projections').onUpdate('CASCADE').onDelete('CASCADE')

      


      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
