const tokenAddress = /* TODO: add the token address */;

const airdrop = [/* TODO: add your friends */];

async function main() {
  const token = await ethers.getContractAt("DOGToken", tokenAddress);

  for(let i = 0; i < airdrop.length; i++) {
    await token.transfer(airdrop[i], ethers.utils.parseEther("100"));
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
