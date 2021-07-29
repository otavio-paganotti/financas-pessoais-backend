import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Transaction from './Transaction'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public title: string
  
  @column()
  public description?: string
  
  @column()
  public active: boolean
  
  @column()
  public icon?: string
  
  @column()
  public color?: string

  @hasMany(() => Transaction)
  public transactions: HasMany<typeof Transaction>

  @column()
  public father?: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
