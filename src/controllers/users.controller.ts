import { Body, Controller, Get, Put, Query, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { UsersDataClass } from "../schemas/users.schema";
import { UsersService } from "../services/users.service";
import { AuthGuard } from "../services/auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("User")
@ApiBearerAuth() // Enable Bearer Auth for Swagger UI
@Controller("user")
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  // @Post()
  // async create(@Body() CreateUsersDto: CreateUserDto) {
  //   await this.UsersService.create(CreateUsersDto);
  // }

  // @Get()
  // async findAll(): Promise<UsersDataClass[]> {
  //   return this.UsersService.findAll();
  // }

  @UseGuards(AuthGuard)
  @Get()
  async findOne(@Query("id") id: string): Promise<UsersDataClass> {
    return this.UsersService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Put()
  async update(@Body() UserDto: CreateUserDto) {
    return this.UsersService.update(UserDto);
  }

  // @Delete(":id")
  // async delete(@Param("id") id: string) {
  //   return this.UsersService.delete(id);
  // }
}
