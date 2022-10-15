import { ManagementClient } from "auth0";
import { UpdateUserDto } from "./dtos";

export class UsersService {
  private readonly client = new ManagementClient({
    domain: process.env.AUTH0_DOMAIN!,
    audience: process.env.AUTH0_AUDIENCE!,
    clientId: process.env.AUTH0_CLIENT_ID!,
    clientSecret: process.env.AUTH0_CLIENT_SECRET!,
  });

  async updateUser(userId: string, data: UpdateUserDto) {
    try {
      const params = { id: userId };

      await this.client.updateUser(params, data);
    } catch (error) {
      console.log(error);
    }
  }
}
