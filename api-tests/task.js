const axios = require("axios");
const {expect} =  require("chai");
var chai = require("chai");
var assert = require('chai').assert
chai.use(require('chai-json-schema'));
let idToDel; 
describe("Getting data from each data stream", async () => {
    it("Getting list of Agents", async () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://hassan.freshdesk.com/api/v2/agents',
            headers: { 
              'Authorization': 'Basic dnFBdG5PMWw4dUdMUzlyT21WcDk6WA=='
            }
          };
          const schema = {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "type": "array",
            "items": [
              {
                "type": "object",
                "properties": {
                  "available": {
                    "type": "boolean"
                  },
                  "occasional": {
                    "type": "boolean"
                  },
                  "id": {
                    "type": "integer"
                  },
                  "ticket_scope": {
                    "type": "integer"
                  },
                  "created_at": {
                    "type": "string"
                  },
                  "updated_at": {
                    "type": "string"
                  },
                  "last_active_at": {
                    "type": "string"
                  },
                  "available_since": {
                    "type": "null"
                  },
                  "type": {
                    "type": "string"
                  },
                  "contact": {
                    "type": "object",
                    "properties": {
                      "active": {
                        "type": "boolean"
                      },
                      "email": {
                        "type": "string"
                      },
                      "job_title": {
                        "type": "null"
                      },
                      "language": {
                        "type": "string"
                      },
                      "last_login_at": {
                        "type": "string"
                      },
                      "mobile": {
                        "type": "null"
                      },
                      "name": {
                        "type": "string"
                      },
                      "phone": {
                        "type": "null"
                      },
                      "time_zone": {
                        "type": "string"
                      },
                      "created_at": {
                        "type": "string"
                      },
                      "updated_at": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "active",
                      "email",
                      "job_title",
                      "language",
                      "last_login_at",
                      "mobile",
                      "name",
                      "phone",
                      "time_zone",
                      "created_at",
                      "updated_at"
                    ]
                  },
                  "deactivated": {
                    "type": "boolean"
                  },
                  "signature": {
                    "type": "null"
                  }
                },
                "required": [
                  "available",
                  "occasional",
                  "id",
                  "ticket_scope",
                  "created_at",
                  "updated_at",
                  "last_active_at",
                  "available_since",
                  "type",
                  "contact",
                  "deactivated",
                  "signature"
                ]
              }
            ]
          }
          await axios.request(config)
          .then(async (response) => {
            expect(response.status).to.deep.equal(200);
            expect(response.data.length).to.deep.equal(1);
            assert.jsonSchema(response.data, schema);
          })
          .catch(async(error) => {
            console.log(await error);
          });
  });

  it("Getting list of Companies", async () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://hassan.freshdesk.com/api/v2/companies',
      headers: { 
        'Authorization': 'Basic dnFBdG5PMWw4dUdMUzlyT21WcDk6WA==',
      }
    };
    const schema ={
      "$schema": "http://json-schema.org/draft-04/schema#",
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": "null"
            },
            "note": {
              "type": "null"
            },
            "domains": {
              "type": "array",
              "items": [
                {
                  "type": "string"
                }
              ]
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "custom_fields": {
              "type": "object"
            },
            "health_score": {
              "type": "null"
            },
            "account_tier": {
              "type": "string"
            },
            "renewal_date": {
              "type": "null"
            },
            "industry": {
              "type": "null"
            },
            "org_company_id": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "name",
            "description",
            "note",
            "domains",
            "created_at",
            "updated_at",
            "custom_fields",
            "health_score",
            "account_tier",
            "renewal_date",
            "industry",
            "org_company_id"
          ]
        }
      ]
    }
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(200);
      expect(response.data.length).to.deep.equal(1);
      assert.jsonSchema(response.data, schema);
    })
    .catch((error) => {
      console.log(error);
    });
  });

  it("Getting list of Contacts", async () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://hassan.freshdesk.com/api/v2/contacts',
      headers: { 
        'Authorization': 'Basic dnFBdG5PMWw4dUdMUzlyT21WcDk6WA==',
      }
    };
    const schema = {
      "$schema": "http://json-schema.org/draft-04/schema#",
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "active": {
              "type": "boolean"
            },
            "address": {
              "type": "string"
            },
            "description": {
              "type": "null"
            },
            "email": {
              "type": "string"
            },
            "id": {
              "type": "integer"
            },
            "job_title": {
              "type": "null"
            },
            "language": {
              "type": "string"
            },
            "mobile": {
              "type": "null"
            },
            "name": {
              "type": "string"
            },
            "phone": {
              "type": "string"
            },
            "time_zone": {
              "type": "string"
            },
            "twitter_id": {
              "type": "null"
            },
            "custom_fields": {
              "type": "object"
            },
            "facebook_id": {
              "type": "null"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "csat_rating": {
              "type": "null"
            },
            "preferred_source": {
              "type": "null"
            },
            "company_id": {
              "type": "null"
            },
            "unique_external_id": {
              "type": "null"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "visitor_id": {
              "type": "string"
            },
            "org_contact_id": {
              "type": "integer"
            },
            "other_phone_numbers": {
              "type": "array",
              "items": {}
            }
          },
          "required": [
            "active",
            "address",
            "description",
            "email",
            "id",
            "job_title",
            "language",
            "mobile",
            "name",
            "phone",
            "time_zone",
            "twitter_id",
            "custom_fields",
            "facebook_id",
            "created_at",
            "updated_at",
            "csat_rating",
            "preferred_source",
            "company_id",
            "unique_external_id",
            "first_name",
            "last_name",
            "visitor_id",
            "org_contact_id",
            "other_phone_numbers"
          ]
        },
        {
          "type": "object",
          "properties": {
            "active": {
              "type": "boolean"
            },
            "address": {
              "type": "null"
            },
            "description": {
              "type": "null"
            },
            "email": {
              "type": "string"
            },
            "id": {
              "type": "integer"
            },
            "job_title": {
              "type": "null"
            },
            "language": {
              "type": "string"
            },
            "mobile": {
              "type": "null"
            },
            "name": {
              "type": "string"
            },
            "phone": {
              "type": "null"
            },
            "time_zone": {
              "type": "string"
            },
            "twitter_id": {
              "type": "null"
            },
            "custom_fields": {
              "type": "object"
            },
            "facebook_id": {
              "type": "null"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "csat_rating": {
              "type": "null"
            },
            "preferred_source": {
              "type": "null"
            },
            "company_id": {
              "type": "null"
            },
            "unique_external_id": {
              "type": "null"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "visitor_id": {
              "type": "string"
            },
            "org_contact_id": {
              "type": "integer"
            },
            "other_phone_numbers": {
              "type": "array",
              "items": {}
            }
          },
          "required": [
            "active",
            "address",
            "description",
            "email",
            "id",
            "job_title",
            "language",
            "mobile",
            "name",
            "phone",
            "time_zone",
            "twitter_id",
            "custom_fields",
            "facebook_id",
            "created_at",
            "updated_at",
            "csat_rating",
            "preferred_source",
            "company_id",
            "unique_external_id",
            "first_name",
            "last_name",
            "visitor_id",
            "org_contact_id",
            "other_phone_numbers"
          ]
        },
        {
          "type": "object",
          "properties": {
            "active": {
              "type": "boolean"
            },
            "address": {
              "type": "string"
            },
            "description": {
              "type": "null"
            },
            "email": {
              "type": "string"
            },
            "id": {
              "type": "integer"
            },
            "job_title": {
              "type": "null"
            },
            "language": {
              "type": "string"
            },
            "mobile": {
              "type": "null"
            },
            "name": {
              "type": "string"
            },
            "phone": {
              "type": "string"
            },
            "time_zone": {
              "type": "string"
            },
            "twitter_id": {
              "type": "null"
            },
            "custom_fields": {
              "type": "object"
            },
            "facebook_id": {
              "type": "null"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "csat_rating": {
              "type": "null"
            },
            "preferred_source": {
              "type": "string"
            },
            "company_id": {
              "type": "null"
            },
            "unique_external_id": {
              "type": "null"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "visitor_id": {
              "type": "string"
            },
            "org_contact_id": {
              "type": "integer"
            },
            "other_phone_numbers": {
              "type": "array",
              "items": {}
            }
          },
          "required": [
            "active",
            "address",
            "description",
            "email",
            "id",
            "job_title",
            "language",
            "mobile",
            "name",
            "phone",
            "time_zone",
            "twitter_id",
            "custom_fields",
            "facebook_id",
            "created_at",
            "updated_at",
            "csat_rating",
            "preferred_source",
            "company_id",
            "unique_external_id",
            "first_name",
            "last_name",
            "visitor_id",
            "org_contact_id",
            "other_phone_numbers"
          ]
        },
        {
          "type": "object",
          "properties": {
            "active": {
              "type": "boolean"
            },
            "address": {
              "type": "string"
            },
            "description": {
              "type": "null"
            },
            "email": {
              "type": "string"
            },
            "id": {
              "type": "integer"
            },
            "job_title": {
              "type": "null"
            },
            "language": {
              "type": "string"
            },
            "mobile": {
              "type": "null"
            },
            "name": {
              "type": "string"
            },
            "phone": {
              "type": "string"
            },
            "time_zone": {
              "type": "string"
            },
            "twitter_id": {
              "type": "null"
            },
            "custom_fields": {
              "type": "object"
            },
            "facebook_id": {
              "type": "null"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "csat_rating": {
              "type": "null"
            },
            "preferred_source": {
              "type": "null"
            },
            "company_id": {
              "type": "null"
            },
            "unique_external_id": {
              "type": "null"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "visitor_id": {
              "type": "string"
            },
            "org_contact_id": {
              "type": "integer"
            },
            "other_phone_numbers": {
              "type": "array",
              "items": {}
            }
          },
          "required": [
            "active",
            "address",
            "description",
            "email",
            "id",
            "job_title",
            "language",
            "mobile",
            "name",
            "phone",
            "time_zone",
            "twitter_id",
            "custom_fields",
            "facebook_id",
            "created_at",
            "updated_at",
            "csat_rating",
            "preferred_source",
            "company_id",
            "unique_external_id",
            "first_name",
            "last_name",
            "visitor_id",
            "org_contact_id",
            "other_phone_numbers"
          ]
        },
        {
          "type": "object",
          "properties": {
            "active": {
              "type": "boolean"
            },
            "address": {
              "type": "null"
            },
            "description": {
              "type": "null"
            },
            "email": {
              "type": "string"
            },
            "id": {
              "type": "integer"
            },
            "job_title": {
              "type": "null"
            },
            "language": {
              "type": "string"
            },
            "mobile": {
              "type": "null"
            },
            "name": {
              "type": "string"
            },
            "phone": {
              "type": "null"
            },
            "time_zone": {
              "type": "string"
            },
            "twitter_id": {
              "type": "null"
            },
            "custom_fields": {
              "type": "object"
            },
            "facebook_id": {
              "type": "null"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "csat_rating": {
              "type": "null"
            },
            "preferred_source": {
              "type": "null"
            },
            "company_id": {
              "type": "null"
            },
            "unique_external_id": {
              "type": "null"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "visitor_id": {
              "type": "string"
            },
            "org_contact_id": {
              "type": "integer"
            },
            "other_phone_numbers": {
              "type": "array",
              "items": {}
            }
          },
          "required": [
            "active",
            "address",
            "description",
            "email",
            "id",
            "job_title",
            "language",
            "mobile",
            "name",
            "phone",
            "time_zone",
            "twitter_id",
            "custom_fields",
            "facebook_id",
            "created_at",
            "updated_at",
            "csat_rating",
            "preferred_source",
            "company_id",
            "unique_external_id",
            "first_name",
            "last_name",
            "visitor_id",
            "org_contact_id",
            "other_phone_numbers"
          ]
        },
        {
          "type": "object",
          "properties": {
            "active": {
              "type": "boolean"
            },
            "address": {
              "type": "null"
            },
            "description": {
              "type": "null"
            },
            "email": {
              "type": "string"
            },
            "id": {
              "type": "integer"
            },
            "job_title": {
              "type": "null"
            },
            "language": {
              "type": "string"
            },
            "mobile": {
              "type": "null"
            },
            "name": {
              "type": "string"
            },
            "phone": {
              "type": "null"
            },
            "time_zone": {
              "type": "string"
            },
            "twitter_id": {
              "type": "null"
            },
            "custom_fields": {
              "type": "object"
            },
            "facebook_id": {
              "type": "null"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "csat_rating": {
              "type": "null"
            },
            "preferred_source": {
              "type": "null"
            },
            "company_id": {
              "type": "null"
            },
            "unique_external_id": {
              "type": "null"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "visitor_id": {
              "type": "string"
            },
            "org_contact_id": {
              "type": "integer"
            },
            "other_phone_numbers": {
              "type": "array",
              "items": {}
            }
          },
          "required": [
            "active",
            "address",
            "description",
            "email",
            "id",
            "job_title",
            "language",
            "mobile",
            "name",
            "phone",
            "time_zone",
            "twitter_id",
            "custom_fields",
            "facebook_id",
            "created_at",
            "updated_at",
            "csat_rating",
            "preferred_source",
            "company_id",
            "unique_external_id",
            "first_name",
            "last_name",
            "visitor_id",
            "org_contact_id",
            "other_phone_numbers"
          ]
        },
        {
          "type": "object",
          "properties": {
            "active": {
              "type": "boolean"
            },
            "address": {
              "type": "null"
            },
            "description": {
              "type": "null"
            },
            "email": {
              "type": "string"
            },
            "id": {
              "type": "integer"
            },
            "job_title": {
              "type": "null"
            },
            "language": {
              "type": "string"
            },
            "mobile": {
              "type": "null"
            },
            "name": {
              "type": "string"
            },
            "phone": {
              "type": "null"
            },
            "time_zone": {
              "type": "string"
            },
            "twitter_id": {
              "type": "null"
            },
            "custom_fields": {
              "type": "object"
            },
            "facebook_id": {
              "type": "null"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "csat_rating": {
              "type": "null"
            },
            "preferred_source": {
              "type": "null"
            },
            "company_id": {
              "type": "null"
            },
            "unique_external_id": {
              "type": "null"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "visitor_id": {
              "type": "string"
            },
            "org_contact_id": {
              "type": "integer"
            },
            "other_phone_numbers": {
              "type": "array",
              "items": {}
            }
          },
          "required": [
            "active",
            "address",
            "description",
            "email",
            "id",
            "job_title",
            "language",
            "mobile",
            "name",
            "phone",
            "time_zone",
            "twitter_id",
            "custom_fields",
            "facebook_id",
            "created_at",
            "updated_at",
            "csat_rating",
            "preferred_source",
            "company_id",
            "unique_external_id",
            "first_name",
            "last_name",
            "visitor_id",
            "org_contact_id",
            "other_phone_numbers"
          ]
        },
        {
          "type": "object",
          "properties": {
            "active": {
              "type": "boolean"
            },
            "address": {
              "type": "string"
            },
            "description": {
              "type": "null"
            },
            "email": {
              "type": "string"
            },
            "id": {
              "type": "integer"
            },
            "job_title": {
              "type": "null"
            },
            "language": {
              "type": "string"
            },
            "mobile": {
              "type": "null"
            },
            "name": {
              "type": "string"
            },
            "phone": {
              "type": "string"
            },
            "time_zone": {
              "type": "string"
            },
            "twitter_id": {
              "type": "null"
            },
            "custom_fields": {
              "type": "object"
            },
            "facebook_id": {
              "type": "null"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "csat_rating": {
              "type": "null"
            },
            "preferred_source": {
              "type": "null"
            },
            "company_id": {
              "type": "null"
            },
            "unique_external_id": {
              "type": "null"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "visitor_id": {
              "type": "string"
            },
            "org_contact_id": {
              "type": "integer"
            },
            "other_phone_numbers": {
              "type": "array",
              "items": {}
            }
          },
          "required": [
            "active",
            "address",
            "description",
            "email",
            "id",
            "job_title",
            "language",
            "mobile",
            "name",
            "phone",
            "time_zone",
            "twitter_id",
            "custom_fields",
            "facebook_id",
            "created_at",
            "updated_at",
            "csat_rating",
            "preferred_source",
            "company_id",
            "unique_external_id",
            "first_name",
            "last_name",
            "visitor_id",
            "org_contact_id",
            "other_phone_numbers"
          ]
        },
        {
          "type": "object",
          "properties": {
            "active": {
              "type": "boolean"
            },
            "address": {
              "type": "null"
            },
            "description": {
              "type": "null"
            },
            "email": {
              "type": "string"
            },
            "id": {
              "type": "integer"
            },
            "job_title": {
              "type": "null"
            },
            "language": {
              "type": "string"
            },
            "mobile": {
              "type": "null"
            },
            "name": {
              "type": "string"
            },
            "phone": {
              "type": "null"
            },
            "time_zone": {
              "type": "string"
            },
            "twitter_id": {
              "type": "null"
            },
            "custom_fields": {
              "type": "object"
            },
            "facebook_id": {
              "type": "null"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "csat_rating": {
              "type": "null"
            },
            "preferred_source": {
              "type": "null"
            },
            "company_id": {
              "type": "null"
            },
            "unique_external_id": {
              "type": "null"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "visitor_id": {
              "type": "string"
            },
            "org_contact_id": {
              "type": "integer"
            },
            "other_phone_numbers": {
              "type": "array",
              "items": {}
            }
          },
          "required": [
            "active",
            "address",
            "description",
            "email",
            "id",
            "job_title",
            "language",
            "mobile",
            "name",
            "phone",
            "time_zone",
            "twitter_id",
            "custom_fields",
            "facebook_id",
            "created_at",
            "updated_at",
            "csat_rating",
            "preferred_source",
            "company_id",
            "unique_external_id",
            "first_name",
            "last_name",
            "visitor_id",
            "org_contact_id",
            "other_phone_numbers"
          ]
        },
        {
          "type": "object",
          "properties": {
            "active": {
              "type": "boolean"
            },
            "address": {
              "type": "null"
            },
            "description": {
              "type": "null"
            },
            "email": {
              "type": "string"
            },
            "id": {
              "type": "integer"
            },
            "job_title": {
              "type": "null"
            },
            "language": {
              "type": "string"
            },
            "mobile": {
              "type": "null"
            },
            "name": {
              "type": "string"
            },
            "phone": {
              "type": "null"
            },
            "time_zone": {
              "type": "string"
            },
            "twitter_id": {
              "type": "null"
            },
            "custom_fields": {
              "type": "object"
            },
            "facebook_id": {
              "type": "null"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "csat_rating": {
              "type": "null"
            },
            "preferred_source": {
              "type": "null"
            },
            "company_id": {
              "type": "null"
            },
            "unique_external_id": {
              "type": "null"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "visitor_id": {
              "type": "string"
            },
            "org_contact_id": {
              "type": "integer"
            },
            "other_phone_numbers": {
              "type": "array",
              "items": {}
            }
          },
          "required": [
            "active",
            "address",
            "description",
            "email",
            "id",
            "job_title",
            "language",
            "mobile",
            "name",
            "phone",
            "time_zone",
            "twitter_id",
            "custom_fields",
            "facebook_id",
            "created_at",
            "updated_at",
            "csat_rating",
            "preferred_source",
            "company_id",
            "unique_external_id",
            "first_name",
            "last_name",
            "visitor_id",
            "org_contact_id",
            "other_phone_numbers"
          ]
        },
        {
          "type": "object",
          "properties": {
            "active": {
              "type": "boolean"
            },
            "address": {
              "type": "null"
            },
            "description": {
              "type": "null"
            },
            "email": {
              "type": "string"
            },
            "id": {
              "type": "integer"
            },
            "job_title": {
              "type": "null"
            },
            "language": {
              "type": "string"
            },
            "mobile": {
              "type": "null"
            },
            "name": {
              "type": "string"
            },
            "phone": {
              "type": "null"
            },
            "time_zone": {
              "type": "string"
            },
            "twitter_id": {
              "type": "null"
            },
            "custom_fields": {
              "type": "object"
            },
            "facebook_id": {
              "type": "null"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "csat_rating": {
              "type": "null"
            },
            "preferred_source": {
              "type": "null"
            },
            "company_id": {
              "type": "null"
            },
            "unique_external_id": {
              "type": "null"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "visitor_id": {
              "type": "string"
            },
            "org_contact_id": {
              "type": "integer"
            },
            "other_phone_numbers": {
              "type": "array",
              "items": {}
            }
          },
          "required": [
            "active",
            "address",
            "description",
            "email",
            "id",
            "job_title",
            "language",
            "mobile",
            "name",
            "phone",
            "time_zone",
            "twitter_id",
            "custom_fields",
            "facebook_id",
            "created_at",
            "updated_at",
            "csat_rating",
            "preferred_source",
            "company_id",
            "unique_external_id",
            "first_name",
            "last_name",
            "visitor_id",
            "org_contact_id",
            "other_phone_numbers"
          ]
        },
        {
          "type": "object",
          "properties": {
            "active": {
              "type": "boolean"
            },
            "address": {
              "type": "string"
            },
            "description": {
              "type": "null"
            },
            "email": {
              "type": "string"
            },
            "id": {
              "type": "integer"
            },
            "job_title": {
              "type": "null"
            },
            "language": {
              "type": "string"
            },
            "mobile": {
              "type": "null"
            },
            "name": {
              "type": "string"
            },
            "phone": {
              "type": "string"
            },
            "time_zone": {
              "type": "string"
            },
            "twitter_id": {
              "type": "null"
            },
            "custom_fields": {
              "type": "object"
            },
            "facebook_id": {
              "type": "null"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "csat_rating": {
              "type": "null"
            },
            "preferred_source": {
              "type": "string"
            },
            "company_id": {
              "type": "integer"
            },
            "other_companies": {
              "type": "array",
              "items": {}
            },
            "unique_external_id": {
              "type": "null"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "visitor_id": {
              "type": "string"
            },
            "org_contact_id": {
              "type": "integer"
            },
            "other_phone_numbers": {
              "type": "array",
              "items": {}
            }
          },
          "required": [
            "active",
            "address",
            "description",
            "email",
            "id",
            "job_title",
            "language",
            "mobile",
            "name",
            "phone",
            "time_zone",
            "twitter_id",
            "custom_fields",
            "facebook_id",
            "created_at",
            "updated_at",
            "csat_rating",
            "preferred_source",
            "company_id",
            "other_companies",
            "unique_external_id",
            "first_name",
            "last_name",
            "visitor_id",
            "org_contact_id",
            "other_phone_numbers"
          ]
        },
        {
          "type": "object",
          "properties": {
            "active": {
              "type": "boolean"
            },
            "address": {
              "type": "null"
            },
            "description": {
              "type": "null"
            },
            "email": {
              "type": "string"
            },
            "id": {
              "type": "integer"
            },
            "job_title": {
              "type": "null"
            },
            "language": {
              "type": "string"
            },
            "mobile": {
              "type": "null"
            },
            "name": {
              "type": "string"
            },
            "phone": {
              "type": "null"
            },
            "time_zone": {
              "type": "string"
            },
            "twitter_id": {
              "type": "null"
            },
            "custom_fields": {
              "type": "object"
            },
            "facebook_id": {
              "type": "null"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "csat_rating": {
              "type": "null"
            },
            "preferred_source": {
              "type": "null"
            },
            "company_id": {
              "type": "null"
            },
            "unique_external_id": {
              "type": "null"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "visitor_id": {
              "type": "string"
            },
            "org_contact_id": {
              "type": "integer"
            },
            "other_phone_numbers": {
              "type": "array",
              "items": {}
            }
          },
          "required": [
            "active",
            "address",
            "description",
            "email",
            "id",
            "job_title",
            "language",
            "mobile",
            "name",
            "phone",
            "time_zone",
            "twitter_id",
            "custom_fields",
            "facebook_id",
            "created_at",
            "updated_at",
            "csat_rating",
            "preferred_source",
            "company_id",
            "unique_external_id",
            "first_name",
            "last_name",
            "visitor_id",
            "org_contact_id",
            "other_phone_numbers"
          ]
        },
        {
          "type": "object",
          "properties": {
            "active": {
              "type": "boolean"
            },
            "address": {
              "type": "null"
            },
            "description": {
              "type": "null"
            },
            "email": {
              "type": "string"
            },
            "id": {
              "type": "integer"
            },
            "job_title": {
              "type": "null"
            },
            "language": {
              "type": "string"
            },
            "mobile": {
              "type": "null"
            },
            "name": {
              "type": "string"
            },
            "phone": {
              "type": "null"
            },
            "time_zone": {
              "type": "string"
            },
            "twitter_id": {
              "type": "null"
            },
            "custom_fields": {
              "type": "object"
            },
            "facebook_id": {
              "type": "null"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "csat_rating": {
              "type": "null"
            },
            "preferred_source": {
              "type": "null"
            },
            "company_id": {
              "type": "null"
            },
            "unique_external_id": {
              "type": "null"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "visitor_id": {
              "type": "string"
            },
            "org_contact_id": {
              "type": "integer"
            },
            "other_phone_numbers": {
              "type": "array",
              "items": {}
            }
          },
          "required": [
            "active",
            "address",
            "description",
            "email",
            "id",
            "job_title",
            "language",
            "mobile",
            "name",
            "phone",
            "time_zone",
            "twitter_id",
            "custom_fields",
            "facebook_id",
            "created_at",
            "updated_at",
            "csat_rating",
            "preferred_source",
            "company_id",
            "unique_external_id",
            "first_name",
            "last_name",
            "visitor_id",
            "org_contact_id",
            "other_phone_numbers"
          ]
        },
        {
          "type": "object",
          "properties": {
            "active": {
              "type": "boolean"
            },
            "address": {
              "type": "string"
            },
            "description": {
              "type": "null"
            },
            "email": {
              "type": "string"
            },
            "id": {
              "type": "integer"
            },
            "job_title": {
              "type": "null"
            },
            "language": {
              "type": "string"
            },
            "mobile": {
              "type": "null"
            },
            "name": {
              "type": "string"
            },
            "phone": {
              "type": "string"
            },
            "time_zone": {
              "type": "string"
            },
            "twitter_id": {
              "type": "null"
            },
            "custom_fields": {
              "type": "object"
            },
            "facebook_id": {
              "type": "null"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "csat_rating": {
              "type": "null"
            },
            "preferred_source": {
              "type": "string"
            },
            "company_id": {
              "type": "null"
            },
            "unique_external_id": {
              "type": "null"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "visitor_id": {
              "type": "string"
            },
            "org_contact_id": {
              "type": "integer"
            },
            "other_phone_numbers": {
              "type": "array",
              "items": {}
            }
          },
          "required": [
            "active",
            "address",
            "description",
            "email",
            "id",
            "job_title",
            "language",
            "mobile",
            "name",
            "phone",
            "time_zone",
            "twitter_id",
            "custom_fields",
            "facebook_id",
            "created_at",
            "updated_at",
            "csat_rating",
            "preferred_source",
            "company_id",
            "unique_external_id",
            "first_name",
            "last_name",
            "visitor_id",
            "org_contact_id",
            "other_phone_numbers"
          ]
        }
      ]
    }
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(200);
      expect(response.data.length).to.deep.equal(15);
      assert.jsonSchema(response.data, schema);
    })
    .catch((error) => {
      console.log(error);
    });
  });
  it("Getting list of Groups", async () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://hassan.freshdesk.com/api/v2/groups',
      headers: { 
        'Authorization': 'Basic dnFBdG5PMWw4dUdMUzlyT21WcDk6WA==',
      }
    };
    const schema = {
      "$schema": "http://json-schema.org/draft-04/schema#",
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "escalate_to": {
              "type": "null"
            },
            "unassigned_for": {
              "type": "null"
            },
            "business_hour_id": {
              "type": "null"
            },
            "group_type": {
              "type": "string"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "auto_ticket_assign": {
              "type": "integer"
            },
            "agent_availability_status": {
              "type": "boolean"
            }
          },
          "required": [
            "id",
            "name",
            "description",
            "escalate_to",
            "unassigned_for",
            "business_hour_id",
            "group_type",
            "created_at",
            "updated_at",
            "auto_ticket_assign",
            "agent_availability_status"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "escalate_to": {
              "type": "null"
            },
            "unassigned_for": {
              "type": "null"
            },
            "business_hour_id": {
              "type": "null"
            },
            "group_type": {
              "type": "string"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "auto_ticket_assign": {
              "type": "integer"
            },
            "agent_availability_status": {
              "type": "boolean"
            }
          },
          "required": [
            "id",
            "name",
            "description",
            "escalate_to",
            "unassigned_for",
            "business_hour_id",
            "group_type",
            "created_at",
            "updated_at",
            "auto_ticket_assign",
            "agent_availability_status"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "escalate_to": {
              "type": "null"
            },
            "unassigned_for": {
              "type": "null"
            },
            "business_hour_id": {
              "type": "null"
            },
            "group_type": {
              "type": "string"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "auto_ticket_assign": {
              "type": "integer"
            },
            "agent_availability_status": {
              "type": "boolean"
            }
          },
          "required": [
            "id",
            "name",
            "description",
            "escalate_to",
            "unassigned_for",
            "business_hour_id",
            "group_type",
            "created_at",
            "updated_at",
            "auto_ticket_assign",
            "agent_availability_status"
          ]
        }
      ]
    }
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(200);
      expect(response.data.length).to.deep.equal(3);
      assert.jsonSchema(response.data, schema);
    })
    .catch((error) => {
      console.log(error);
    });
  });

  it("Getting list of Roles", async () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://hassan.freshdesk.com/api/v2/roles',
      headers: { 
        'Authorization': 'Basic dnFBdG5PMWw4dUdMUzlyT21WcDk6WA==',
      }
    };
    const schema = {
      "$schema": "http://json-schema.org/draft-04/schema#",
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "default": {
              "type": "boolean"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "agent_type": {
              "type": "integer"
            }
          },
          "required": [
            "id",
            "name",
            "description",
            "default",
            "created_at",
            "updated_at",
            "agent_type"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "default": {
              "type": "boolean"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "agent_type": {
              "type": "integer"
            }
          },
          "required": [
            "id",
            "name",
            "description",
            "default",
            "created_at",
            "updated_at",
            "agent_type"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "default": {
              "type": "boolean"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "agent_type": {
              "type": "integer"
            }
          },
          "required": [
            "id",
            "name",
            "description",
            "default",
            "created_at",
            "updated_at",
            "agent_type"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "default": {
              "type": "boolean"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "agent_type": {
              "type": "integer"
            }
          },
          "required": [
            "id",
            "name",
            "description",
            "default",
            "created_at",
            "updated_at",
            "agent_type"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "default": {
              "type": "boolean"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "agent_type": {
              "type": "integer"
            }
          },
          "required": [
            "id",
            "name",
            "description",
            "default",
            "created_at",
            "updated_at",
            "agent_type"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "default": {
              "type": "boolean"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "agent_type": {
              "type": "integer"
            }
          },
          "required": [
            "id",
            "name",
            "description",
            "default",
            "created_at",
            "updated_at",
            "agent_type"
          ]
        }
      ]
    }
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(200);
      expect(response.data.length).to.deep.equal(6);
      assert.jsonSchema(response.data, schema);
    })
    .catch((error) => {
      console.log(error);
    });
  });
  
  it("Getting list of Surveys", async () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://hassan.freshdesk.com/api/v2/surveys',
      headers: { 
        'Authorization': 'Basic dnFBdG5PMWw4dUdMUzlyT21WcDk6WA==',
      }
    };
    const schema = {
      "$schema": "http://json-schema.org/draft-04/schema#",
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "title": {
              "type": "string"
            },
            "active": {
              "type": "boolean"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "questions": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "string"
                    },
                    "label": {
                      "type": "string"
                    },
                    "accepted_ratings": {
                      "type": "array",
                      "items": [
                        {
                          "type": "integer"
                        },
                        {
                          "type": "integer"
                        },
                        {
                          "type": "integer"
                        }
                      ]
                    },
                    "default": {
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "id",
                    "label",
                    "accepted_ratings",
                    "default"
                  ]
                }
              ]
            }
          },
          "required": [
            "id",
            "title",
            "active",
            "created_at",
            "updated_at",
            "questions"
          ]
        }
      ]
    }
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(200);
      expect(response.data.length).to.deep.equal(1);
      assert.jsonSchema(response.data, schema);
    })
    .catch((error) => {
      console.log(error);
    });
  });

  it("Getting list of Time Entries", async () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://hassan.freshdesk.com/api/v2/time_entries',
      headers: { 
        'Authorization': 'Basic dnFBdG5PMWw4dUdMUzlyT21WcDk6WA=='
      }
    };
    const schema = {
      "$schema": "http://json-schema.org/draft-04/schema#",
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "billable": {
              "type": "boolean"
            },
            "note": {
              "type": "string"
            },
            "id": {
              "type": "integer"
            },
            "timer_running": {
              "type": "boolean"
            },
            "agent_id": {
              "type": "integer"
            },
            "ticket_id": {
              "type": "integer"
            },
            "company_id": {
              "type": "null"
            },
            "time_spent": {
              "type": "string"
            },
            "executed_at": {
              "type": "string"
            },
            "start_time": {
              "type": "string"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "time_spent_in_seconds": {
              "type": "integer"
            }
          },
          "required": [
            "billable",
            "note",
            "id",
            "timer_running",
            "agent_id",
            "ticket_id",
            "company_id",
            "time_spent",
            "executed_at",
            "start_time",
            "created_at",
            "updated_at",
            "time_spent_in_seconds"
          ]
        }
      ]
    }
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(200);
      expect(response.data.length).to.deep.equal(2);
      assert.jsonSchema(response.data, schema);
    })
    .catch((error) => {
      console.log(error);
    });
    
  });

  it("Getting list of Tickets", async () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://hassan.freshdesk.com/api/v2/tickets',
      headers: { 
        'Authorization': 'Basic dnFBdG5PMWw4dUdMUzlyT21WcDk6WA=='
      }
    };
    const schema = {
      "$schema": "http://json-schema.org/draft-04/schema#",
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "cc_emails": {
              "type": "null"
            },
            "fwd_emails": {
              "type": "null"
            },
            "reply_cc_emails": {
              "type": "null"
            },
            "ticket_cc_emails": {
              "type": "null"
            },
            "fr_escalated": {
              "type": "boolean"
            },
            "spam": {
              "type": "boolean"
            },
            "email_config_id": {
              "type": "null"
            },
            "group_id": {
              "type": "integer"
            },
            "priority": {
              "type": "integer"
            },
            "requester_id": {
              "type": "integer"
            },
            "responder_id": {
              "type": "null"
            },
            "source": {
              "type": "integer"
            },
            "company_id": {
              "type": "null"
            },
            "status": {
              "type": "integer"
            },
            "subject": {
              "type": "string"
            },
            "association_type": {
              "type": "null"
            },
            "support_email": {
              "type": "null"
            },
            "to_emails": {
              "type": "null"
            },
            "product_id": {
              "type": "integer"
            },
            "id": {
              "type": "integer"
            },
            "type": {
              "type": "string"
            },
            "due_by": {
              "type": "string"
            },
            "fr_due_by": {
              "type": "string"
            },
            "is_escalated": {
              "type": "boolean"
            },
            "custom_fields": {
              "type": "object",
              "properties": {
                "cf_reference_number": {
                  "type": "null"
                }
              },
              "required": [
                "cf_reference_number"
              ]
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "associated_tickets_count": {
              "type": "null"
            },
            "tags": {
              "type": "array",
              "items": {}
            },
            "nr_due_by": {
              "type": "null"
            },
            "nr_escalated": {
              "type": "boolean"
            }
          },
          "required": [
            "cc_emails",
            "fwd_emails",
            "reply_cc_emails",
            "ticket_cc_emails",
            "fr_escalated",
            "spam",
            "email_config_id",
            "group_id",
            "priority",
            "requester_id",
            "responder_id",
            "source",
            "company_id",
            "status",
            "subject",
            "association_type",
            "support_email",
            "to_emails",
            "product_id",
            "id",
            "type",
            "due_by",
            "fr_due_by",
            "is_escalated",
            "custom_fields",
            "created_at",
            "updated_at",
            "associated_tickets_count",
            "tags",
            "nr_due_by",
            "nr_escalated"
          ]
        },
        {
          "type": "object",
          "properties": {
            "cc_emails": {
              "type": "null"
            },
            "fwd_emails": {
              "type": "null"
            },
            "reply_cc_emails": {
              "type": "null"
            },
            "ticket_cc_emails": {
              "type": "null"
            },
            "fr_escalated": {
              "type": "boolean"
            },
            "spam": {
              "type": "boolean"
            },
            "email_config_id": {
              "type": "null"
            },
            "group_id": {
              "type": "integer"
            },
            "priority": {
              "type": "integer"
            },
            "requester_id": {
              "type": "integer"
            },
            "responder_id": {
              "type": "null"
            },
            "source": {
              "type": "integer"
            },
            "company_id": {
              "type": "integer"
            },
            "status": {
              "type": "integer"
            },
            "subject": {
              "type": "string"
            },
            "association_type": {
              "type": "null"
            },
            "support_email": {
              "type": "null"
            },
            "to_emails": {
              "type": "null"
            },
            "product_id": {
              "type": "integer"
            },
            "id": {
              "type": "integer"
            },
            "type": {
              "type": "string"
            },
            "due_by": {
              "type": "string"
            },
            "fr_due_by": {
              "type": "string"
            },
            "is_escalated": {
              "type": "boolean"
            },
            "custom_fields": {
              "type": "object",
              "properties": {
                "cf_reference_number": {
                  "type": "null"
                }
              },
              "required": [
                "cf_reference_number"
              ]
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "associated_tickets_count": {
              "type": "null"
            },
            "tags": {
              "type": "array",
              "items": {}
            },
            "nr_due_by": {
              "type": "null"
            },
            "nr_escalated": {
              "type": "boolean"
            }
          },
          "required": [
            "cc_emails",
            "fwd_emails",
            "reply_cc_emails",
            "ticket_cc_emails",
            "fr_escalated",
            "spam",
            "email_config_id",
            "group_id",
            "priority",
            "requester_id",
            "responder_id",
            "source",
            "company_id",
            "status",
            "subject",
            "association_type",
            "support_email",
            "to_emails",
            "product_id",
            "id",
            "type",
            "due_by",
            "fr_due_by",
            "is_escalated",
            "custom_fields",
            "created_at",
            "updated_at",
            "associated_tickets_count",
            "tags",
            "nr_due_by",
            "nr_escalated"
          ]
        },
        {
          "type": "object",
          "properties": {
            "cc_emails": {
              "type": "array",
              "items": {}
            },
            "fwd_emails": {
              "type": "array",
              "items": {}
            },
            "reply_cc_emails": {
              "type": "array",
              "items": {}
            },
            "ticket_cc_emails": {
              "type": "array",
              "items": {}
            },
            "fr_escalated": {
              "type": "boolean"
            },
            "spam": {
              "type": "boolean"
            },
            "email_config_id": {
              "type": "null"
            },
            "group_id": {
              "type": "integer"
            },
            "priority": {
              "type": "integer"
            },
            "requester_id": {
              "type": "integer"
            },
            "responder_id": {
              "type": "null"
            },
            "source": {
              "type": "integer"
            },
            "company_id": {
              "type": "null"
            },
            "status": {
              "type": "integer"
            },
            "subject": {
              "type": "string"
            },
            "association_type": {
              "type": "null"
            },
            "support_email": {
              "type": "null"
            },
            "to_emails": {
              "type": "null"
            },
            "product_id": {
              "type": "integer"
            },
            "id": {
              "type": "integer"
            },
            "type": {
              "type": "string"
            },
            "due_by": {
              "type": "string"
            },
            "fr_due_by": {
              "type": "string"
            },
            "is_escalated": {
              "type": "boolean"
            },
            "custom_fields": {
              "type": "object",
              "properties": {
                "cf_reference_number": {
                  "type": "null"
                }
              },
              "required": [
                "cf_reference_number"
              ]
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "associated_tickets_count": {
              "type": "null"
            },
            "tags": {
              "type": "array",
              "items": {}
            },
            "nr_due_by": {
              "type": "null"
            },
            "nr_escalated": {
              "type": "boolean"
            }
          },
          "required": [
            "cc_emails",
            "fwd_emails",
            "reply_cc_emails",
            "ticket_cc_emails",
            "fr_escalated",
            "spam",
            "email_config_id",
            "group_id",
            "priority",
            "requester_id",
            "responder_id",
            "source",
            "company_id",
            "status",
            "subject",
            "association_type",
            "support_email",
            "to_emails",
            "product_id",
            "id",
            "type",
            "due_by",
            "fr_due_by",
            "is_escalated",
            "custom_fields",
            "created_at",
            "updated_at",
            "associated_tickets_count",
            "tags",
            "nr_due_by",
            "nr_escalated"
          ]
        }
      ]
    }
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(200);
      expect(response.data.length).to.deep.equal(3);
      assert.jsonSchema(response.data, schema);
    })
    .catch((error) => {
      console.log(error);
    });
  });
})

describe("Update using Post Request on Time Entries and checking for updation", async () => {
  it("Updating Time Entries", async () => {

    let data = JSON.stringify({
      "note": "Invoice Prepration",
      "time_spent": "10:40",
      "agent_id": 154006815986
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://hassan.freshdesk.com/api/v2/tickets/1/time_entries',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Basic dnFBdG5PMWw4dUdMUzlyT21WcDk6WA=='
      },
      data : data
    };
    const schema = {
      "$schema": "http://json-schema.org/draft-04/schema#",
      "type": "object",
      "properties": {
        "billable": {
          "type": "boolean"
        },
        "note": {
          "type": "string"
        },
        "id": {
          "type": "integer"
        },
        "timer_running": {
          "type": "boolean"
        },
        "agent_id": {
          "type": "integer"
        },
        "ticket_id": {
          "type": "integer"
        },
        "company_id": {
          "type": "null"
        },
        "time_spent": {
          "type": "string"
        },
        "executed_at": {
          "type": "string"
        },
        "start_time": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "updated_at": {
          "type": "string"
        },
        "time_spent_in_seconds": {
          "type": "integer"
        }
      },
      "required": [
        "billable",
        "note",
        "id",
        "timer_running",
        "agent_id",
        "ticket_id",
        "company_id",
        "time_spent",
        "executed_at",
        "start_time",
        "created_at",
        "updated_at",
        "time_spent_in_seconds"
      ]
    }
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(201);
      assert.jsonSchema(response.data, schema);
    })
    .catch((error) => {
      console.log(error);
    });
  })

  it("Geting updated Time Entries", async () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://hassan.freshdesk.com/api/v2/time_entries',
      headers: { 
        'Authorization': 'Basic dnFBdG5PMWw4dUdMUzlyT21WcDk6WA==',
      }
    };
    const schema = {
      "$schema": "http://json-schema.org/draft-04/schema#",
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "billable": {
              "type": "boolean"
            },
            "note": {
              "type": "string"
            },
            "id": {
              "type": "integer"
            },
            "timer_running": {
              "type": "boolean"
            },
            "agent_id": {
              "type": "integer"
            },
            "ticket_id": {
              "type": "integer"
            },
            "company_id": {
              "type": "null"
            },
            "time_spent": {
              "type": "string"
            },
            "executed_at": {
              "type": "string"
            },
            "start_time": {
              "type": "string"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "time_spent_in_seconds": {
              "type": "integer"
            }
          },
          "required": [
            "billable",
            "note",
            "id",
            "timer_running",
            "agent_id",
            "ticket_id",
            "company_id",
            "time_spent",
            "executed_at",
            "start_time",
            "created_at",
            "updated_at",
            "time_spent_in_seconds"
          ]
        }
      ]
    }
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(200);
      idToDel = JSON.stringify(response.data[0].id);
      expect(response.data.length).to.deep.equal(3);
      assert.jsonSchema(response.data, schema);
    })
    .catch((error) => {
      console.log(error);
    });
  })
});

describe("Deleting the Time Entry", async () => {
  it("Deleting Time Entry using the Id stored globally", async () => {
  let config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: `https://hassan.freshdesk.com/api/v2/time_entries/${idToDel}`,
    headers: { 
      'Authorization': 'Basic dnFBdG5PMWw4dUdMUzlyT21WcDk6WA==', 
    }
  };
  await axios.request(config)
  .then((response) => {
    expect(response.status).to.deep.equal(204);
    console.log("Deleted Time Entry");
  })
  .catch((error) => {
    console.log(error);
  });
  });

  it("Getting Time Entries after deletion", async () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://hassan.freshdesk.com/api/v2/time_entries',
      headers: { 
        'Authorization': 'Basic dnFBdG5PMWw4dUdMUzlyT21WcDk6WA==',
      }
    };
    const schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "array",
  "items": [
    {
      "type": "object",
      "properties": {
        "billable": {
          "type": "boolean"
        },
        "note": {
          "type": "string"
        },
        "id": {
          "type": "integer"
        },
        "timer_running": {
          "type": "boolean"
        },
        "agent_id": {
          "type": "integer"
        },
        "ticket_id": {
          "type": "integer"
        },
        "company_id": {
          "type": "null"
        },
        "time_spent": {
          "type": "string"
        },
        "executed_at": {
          "type": "string"
        },
        "start_time": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "updated_at": {
          "type": "string"
        },
        "time_spent_in_seconds": {
          "type": "integer"
        }
      },
      "required": [
        "billable",
        "note",
        "id",
        "timer_running",
        "agent_id",
        "ticket_id",
        "company_id",
        "time_spent",
        "executed_at",
        "start_time",
        "created_at",
        "updated_at",
        "time_spent_in_seconds"
      ]
    },
    {
      "type": "object",
      "properties": {
        "billable": {
          "type": "boolean"
        },
        "note": {
          "type": "string"
        },
        "id": {
          "type": "integer"
        },
        "timer_running": {
          "type": "boolean"
        },
        "agent_id": {
          "type": "integer"
        },
        "ticket_id": {
          "type": "integer"
        },
        "company_id": {
          "type": "null"
        },
        "time_spent": {
          "type": "string"
        },
        "executed_at": {
          "type": "string"
        },
        "start_time": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "updated_at": {
          "type": "string"
        },
        "time_spent_in_seconds": {
          "type": "integer"
        }
      },
      "required": [
        "billable",
        "note",
        "id",
        "timer_running",
        "agent_id",
        "ticket_id",
        "company_id",
        "time_spent",
        "executed_at",
        "start_time",
        "created_at",
        "updated_at",
        "time_spent_in_seconds"
      ]
    }
  ]
}
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(200);
      expect(response.data.length).to.deep.equal(2);
      assert.jsonSchema(response.data, schema);
    })
    .catch((error) => {
      console.log(error);
    });
  })
});
