import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Projection from './Projection'
import Transaction from './Transaction'

export default class Control extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public month: string

  @column()
  public year: string

  @column()
  public type: string

  @column()
  public userId: number  
  
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
  
  @column()
  public totalValue: number

  @column()
  public totalReal: number
  
  @column()
  public isProjected: boolean

  @column()
  public projectionId: number
  
  @belongsTo(() => Projection)
  public projection: BelongsTo<typeof Projection>

  @hasMany(() => Transaction)
  public transactions: HasMany<typeof Transaction>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
