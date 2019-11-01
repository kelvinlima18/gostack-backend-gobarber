/* Arquivo de configuração de autenticação de usuário (token) */

export default {
  secrets: process.env.APP_SECRET,
  expiresIn: '7d',
};
