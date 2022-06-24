const Joi = require('joi')

const { nftService } = require('../services')

module.exports = {
  method: 'GET',
  path: '/put-on-sale',
  handler: () =>
    nftService.putOnSale()
}
