require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note situate coconut include clog front tell'; 
let testAccounts = [
"0x1e9c59fdf7f9f643f23edd918cd282561f3b9a81d8afcc19c3b8822404c06b16",
"0xc411d42eff9765ac78ea093589d85d24504a9643152996e711c3f211ffe55eda",
"0xa5db999cefa33d6059ce860e7ff26328d6b1888b2e31a2eb5bbcbd2556bebce6",
"0x3e70e6d86bf998f35d9e76aad295b7120f6852e643a1014d8290cf2c47632291",
"0x5d69a46c75d835d5f6163ffd09cf219304e50c97a1f303dc4e8a8728b89f0e8a",
"0x42efb9dd607eedc46daf50b274d4dac7e286a503634ea51543569afad024318d",
"0xf811c5c7d2aabcecfdc43793e735e78d295b7cc2e4e592be9a42cf788c06d217",
"0x6a33524f06e44182c8473fec7d62374c5e8e2fcd6350b8f3a026bbe8ca90074c",
"0x474365842e174263af427815350fca4eaebb5a176ff4463c527ef01c25656835",
"0x8c802fcefa0b654ce9f9cad61b2a1944005e556d0673fceda6752b93bb7e0b91"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

