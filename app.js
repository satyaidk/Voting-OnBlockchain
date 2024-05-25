const Web3 = require('web3');
const contract = require('@truffle/contract');

const votingArtifact = require('../build/contracts/Voting.json');

let Voting = contract(votingArtifact);

window.App = {
  start: function() {
    let self = this;

    Voting.setProvider(web3.currentProvider);

    web3.eth.getAccounts(function(err, accounts) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accounts.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }

      self.account = accounts[0];
    });
  },

  castVote: function(candidateId) {
    let self = this;

    Voting.deployed().then(function(instance) {
      return instance.vote(candidateId, { from: self.account });
    }).then(function(result) {
      // Update the UI or notify the user of success
    }).catch(function(err) {
      console.error(err);
    });
  }
};

window.addEventListener('load', function() {
  if (typeof web3 !== 'undefined') {
    window.web3 = new Web3(web3.currentProvider);
  } else {
    window.web3 = new Web3(new Web3.providers.HttpProvider("<http://localhost:8545>"));
  }

  App.start();
});
