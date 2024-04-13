import config from './config.json' assert { type: 'json'};
import Cddnss from 'cloudflare-ddns-sync';

// either email and key or token
const cddnss = new Cddnss(config);

const records = [
    {
        name: 'test-ddns.tintotenis.com',
        type: 'A',
    }
];

const changeListenerId = cddnss.syncOnIpChange(records, (recordData) => {
    console.log(recordData);
});