//https://eth-ropsten.alchemyapi.io/v2/UzHnHnTLy9dOWWC_JBQuPV_LUy5n4vn1

require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/UzHnHnTLy9dOWWC_JBQuPV_LUy5n4vn1',
      accounts: ['b4b2a61c868952ff6e68b1ec910e6f3dc14629b43d03b44c36c330564c0b9600'],
    },
  },
};