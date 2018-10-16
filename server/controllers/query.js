module.exports = async (ctx, next) => {
  let repo = await ctx.get('nlu/', {query: "小小"}, {
    'User-Agent': 'koa-http-request'
  });

  console.log("get ", repo)

  ctx.state.data = {
    msg: repo
  }
}
