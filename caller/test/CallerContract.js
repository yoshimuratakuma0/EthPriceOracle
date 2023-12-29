const CallerContract = artifacts.require("CallerContract");

contract("CallerContract", (accounts) => {
    let [alice, bob] = accounts;
    let contractInstance;
    beforeEach(async () => {
        contractInstance = await CallerContract.new();
    });
    it("test", async () => {
        assert.equal(1+1, 2);
    })
});