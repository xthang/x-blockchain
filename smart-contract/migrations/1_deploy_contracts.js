const AXSToken = artifacts.require("AXSToken");
const SmoothLovePotion = artifacts.require("SmoothLovePotion");

mainnetAccount = '0x1422f054C92c81944776A2e69b6aD9D25908489D';
testAccount = '0x7316a92c92D8208C81eD7bAe582347F34880FFe5';

module.exports = function (deployer) {
  deployer.deploy(AXSToken, mainnetAccount);
  // deployer.link(AXSToken, SmoothLovePotion);
  deployer.deploy(SmoothLovePotion, mainnetAccount);
};
