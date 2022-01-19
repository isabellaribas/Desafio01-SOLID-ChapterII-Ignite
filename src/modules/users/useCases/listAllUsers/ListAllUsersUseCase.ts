import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {

    const user = this.usersRepository.findById(user_id);

    if (user) {

      if (user.admin) {

        const listUsers = this.usersRepository.list();
  
        return listUsers
      }
  
      throw new Error("User is not an admin")

    }

    throw new Error("User does not exist")

  }
  
}

export { ListAllUsersUseCase };
