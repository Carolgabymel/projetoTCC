const jwt = require("jsonwebtoken");

module.exports = class AuthAdminMiddleware {
  static async adminAuthorization(req, res, next) {
    const { tokenAdmin } = req.cookies;

    if (!tokenAdmin) {
      res.redirect(
        "/?msError= Voce precisa se autenticar para acessar o sistema!"
      );
    }

    next();
  }
};
