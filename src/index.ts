import Signer from '@waves/signer';
import Provider from '@waves.exchange/provider-web';

const signer = new Signer({
    // Specify URL of the node on Testnet
    NODE_URL: 'https://nodes-testnet.wavesnodes.com'
});
signer.setProvider(new Provider());


function sendData() {
    console.log("sending data");
    const name = document.querySelector(".data").value;
    signer.data({data: [{type: "string", key: name, value: "verified"}]}).broadcast();
}

function init() {
    document.querySelector(".add-button").addEventListener("click", sendData);
}

document.addEventListener("DOMContentLoaded", init);