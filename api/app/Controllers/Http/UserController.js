'use strict';

const { validate } = use('Validator');

const
  User = use("App/Models/User");
class UserController {

  async register({ request, response }) {

    const rules = {
      username: "required",
      email: "required|email|unique:users,email",
      password: "required"
    };

    const body = request.only(["username", "email", "password"]);

    // Validate input.
    const validation = await validate(body, rules);

    if(validation.fails()) {
      return response.status(400).json({
        message: "errored",
        data: validation.messages()
      });
    }

    const user = new User();

    user.username = body.username;
    user.email = body.email;
    user.password = body.password;

    await user.save();

    return response.status(200).json({
      message: "success"
    });
  }



  async login({ request, auth, response }) {
    const rules = {
      email: "required|email",
      password: "required"
    };

    const body = request.only(["email", "password"]);

    const validation = await validate(body, rules);

    if(validation.fails()) {
      return response.status(400).json({
        message: "errored",
        data: validation.messages()
      });
    }

    const jwt = await auth.attempt(body.email, body.password);

    if(!jwt) {
      return response.status(500).json({
        message: "errored",
        data: {
          description: "Unknown error"
        }
      });
    }

    return response.status(200).json({
      message: "success",
      data: jwt
    });

  }
  async getSelf({ request, auth, response }) {

    return response.status(200).json({
      status: "success",
      data: await auth.getUser()
    });
  }

}
module.exports = UserController;
