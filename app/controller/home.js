'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(ctx) {
    await ctx.render('index.html',{ userName: '109km' });
  }
}

module.exports = HomeController;
