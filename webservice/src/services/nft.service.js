const Boom = require('@hapi/boom');
const { BAD_REQUEST } = require('http-status-codes');

const { ipfsUtil, dgoodsUtil } = require('../utils');
const fs = require('fs');
// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObejctId = require("mongodb.service").ObjectId;

const saveTemplate = async payload => {
  let db_connect = dbo.getDb("eosio");
  db_connect.collection("logtable").insertOne(payload, function (err, res) {
    console.log("MONGO EROOR ", err);
    console.log("MONGO RES", res);
    if (err) throw err;
    return res
  });
}

const createTemplate = async (payload) => {
  try {
    console.log("PAYLOAD", payload)
    // const password = await vaultService.getSecret(user.account)
    const transaction = await dgoodsUtil.create(payload.account, payload.password, payload);
    await saveTemplate({
      ...payload,
      account: payload.account
    })

    return {
      trxid: transaction.transaction_id
    }
  } catch (error) {
    throw new Boom.Boom(error.message, {
      statusCode: BAD_REQUEST
    })
  }
}

const putOnSale = async (user, payload) => {
  try {
    const password = "";
    const template = await getTemplate(payload.template);
    const ggoods = [];

    for (let index = 0; index < payload.quantity; index++) {

      const relativeUri = "";

      const transaction = await dgoodsUtil.issue(user.account, password, {
        category: template.category,
        name: template.name,
        memo: payload.memo,
        relativeUri
      });

      const actionTraces = transaction.processed.action_traces.find(
        item => item.act.name === 'issue'
      );
      const inlineTraces = actionTraces.inline_traces.find(
        item => item.act.name === 'logcall'
      )
      const id = inlineTraces.act.data.dgood_id;

      const listsalenftTransaction = await dgoodsUtil.listsalenft(
        user.account,
        password,
        {
          assets: [id],
          amount: payload.amount,
          donable: payload.donable
        }
      );
      ggoods.push({
        id,
        trxid: listsalenftTransaction.transaction_id
      });
    }

    return {
      ggoods
    };
  } catch (error) {
    throw new Boom.Boom(error.message, {
      statusCode: BAD_REQUEST
    });
  }
};

module.exports = {
  createTemplate,
  putOnSale
};