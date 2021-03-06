import { ConnectionDB } from '../database'


interface IUserProps {
  _id?: string,
  username: string,
  password: string
}
export class LoginModel {
  async execute({ username, password }: IUserProps) {
    const connection = new ConnectionDB()
    const database = await connection.execute()
    const user = database.collection<IUserProps>('user')
    const doc: IUserProps = {
      username,
      password
    }
    const result = await user.findOne(doc)
    return result
  }
}