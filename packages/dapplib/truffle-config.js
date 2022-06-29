require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth often minor hockey clip sun genre'; 
let testAccounts = [
"0xf2d57de06e28d08af59eba929fa360ddae54a92284d9d7d3892afaefba1269a1",
"0x8f66931465e6d924b52697a4dc06d5a8be1d3e34ad06bc8da19c53ad7bd21cf9",
"0x227da4f9d9765d817b0af64e94b00142b0f9c1905b49c0c298c559d3ee9a5bdc",
"0x55dabc0b11d5fafa0b59df9aaead22a9c1ed0efaee506341db9f068f15ad2498",
"0xfef55b4e724eb88ceaf706b27d456d3de5924276793c4f55cea2f93ce7ddaf0f",
"0x4c57317a4478e3faa217b0af2e2811c7b1272e49d73bbd4db26d1798e9dee672",
"0x07cc2d9c9592cd878215d0dccff91c68bd38d824255ec6bbc9e3bd90302c7120",
"0x5a19b1e75f417cb7b2ad35e0a20096ac9647d57b85c22785990579bd17458a20",
"0x1381f5c7e8ad8f9bc1f8072afaf2cbb74a6adfcc33a0a707256bc43bd44cf3b1",
"0x49cde8f7101d866be395e3b7ac8e6682e82b333783493e7029e17981e687209e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


