const { assert } = require("chai");

describe("Token", function() {
  const initialSupply = ethers.utils.parseEther("1000"); // 18 decimals
  let token;
  beforeEach(async () => {
    const Token = await ethers.getContractFactory("DOGToken");
    token = await Token.deploy(initialSupply);
    await token.deployed();
  });

  it("should have minted some to the deployer", async function() {
    const [addr1] = await ethers.provider.listAccounts();

    const balance = await token.balanceOf(addr1);
    assert.equal(balance.toString(), initialSupply.toString());
  });
});
