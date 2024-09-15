module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: [env('APP_KEY1',c70b72553ce0e9e5b4c05c9624bbe005a8cdefac79151e75a5586c3f28b4d8bf), env('APP_KEY2',f231b79d14cdd29e5623b0f21ac5e5fa45ca30188dca0c392c4a579d32e2464a),],
  },
});
