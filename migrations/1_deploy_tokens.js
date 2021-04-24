const OrionERC1155 = artifacts.require("./OrionERC1155.sol");

module.exports = function (deployer) {
  deployer.deploy(OrionERC1155, {});
};
