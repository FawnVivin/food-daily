import { Injectable } from '@nestjs/common';

import type {User} from "@food-dairy/shared/types";

@Injectable()
export class AppService {
  private users:User[] = []
  getUsers(): User[] {
    return this.users;
  }
  createUser(user:User):void {
  this.users.push({...user, id:user.name})
  }
  updateUser(user:User):void{
    this.users.map((currentUser)=>{
      if (currentUser.id===user.id){
        return {...user}
      }

      return {...currentUser}
    })
  }
}
