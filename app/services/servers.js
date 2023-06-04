const Axios = require('axios');

let ServersService = function () { }
let serversList = null;

ServersService.prototype.getServersList = function () {
  if (serversList === null) {
    serversList = Axios({
      url: `https://raw.githubusercontent.com/SteamDatabase/SteamTracking/0ae12036fceb607d31a2cecb504f4ffa6f52d306/Random/NetworkDatagramConfig.json`,
      method: 'get'
    })
  }

  return serversList;

}

module.exports = ServersService;
