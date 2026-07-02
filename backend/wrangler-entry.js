# Cloudflare Workers 入口
const app = require('./app');
const db = require('./config/db');

export default {
  fetch: async (request, env, ctx) => {
    // 初始化数据库连接
    await db.connect(env);
    return app.handle(request, env, ctx);
  }
};
