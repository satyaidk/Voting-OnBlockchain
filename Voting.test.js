const Voting = artifacts.require("Voting");

contract("Voting", function(accounts) {
  it("initializes with two candidates", async function() {
    const instance = await Voting.deployed();
    const count = await instance.candidatesCount();
    assert.equal(count, 2);
  });

  it("allows a voter to cast a vote", async function() {
    const instance = await Voting.deployed();
    const candidateId = 1;
    await instance.vote(candidateId, { from: accounts[0] });
    const candidate = await instance.candidates(candidateId);
    assert.equal(candidate.voteCount, 1);
  });
});
