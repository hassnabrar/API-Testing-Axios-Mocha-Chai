const axios = require("axios");
const {expect} =  require("chai");
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
          
          await axios.request(config)
          .then(async (response) => {
            expect(response.status).to.deep.equal(200);
            expect(response.data.length).to.deep.equal(1);
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
    
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(200);
      expect(response.data.length).to.deep.equal(1);
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
    
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(200);
      expect(response.data.length).to.deep.equal(15);
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
    
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(200);
      expect(response.data.length).to.deep.equal(3);
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
    
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(200);
      expect(response.data.length).to.deep.equal(6);
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
    
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(200);
      expect(response.data.length).to.deep.equal(1);
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
    
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(200);
      expect(response.data.length).to.deep.equal(1);
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
    
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(200);
      expect(response.data.length).to.deep.equal(3);
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
    
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(201);
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
    
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(200);
      idToDel = JSON.stringify(response.data[0].id);
      expect(response.data.length).to.deep.equal(2);
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
    
    await axios.request(config)
    .then((response) => {
      expect(response.status).to.deep.equal(200);
      expect(response.data.length).to.deep.equal(1);
    })
    .catch((error) => {
      console.log(error);
    });
  })
});
