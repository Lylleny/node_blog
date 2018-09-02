import axios from 'axios';

const Http = {

    Post: function (url, postData, Success, Fail) {
        let confige = {
            method: 'POST',
            timeout: 30000,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;',
            },
        }
        let body = this.toQueryString(postData);
        console.log(body,url)
        axios.post(url, body, confige).then(function (re) {
            console.log(re);
            Success(re)
        }).catch(function (err) {
            console.log(err);
            Fail(err)
        });

    },

    Get:function (url, Success, Fail) {
        let confige = {
            method: 'GET',
            timeout: 30000,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;',
            },
        }

        console.log(url)
        axios.get(url, confige).then(function (re) {
            console.log(re);
            Success(re.data)
        }).catch(function (err) {
            console.log(err);
            Fail(err)
        });
    },

    toQueryString: function (obj) {
        return obj ? Object.keys(obj).sort().map(function (key) {
            var val = obj[key];
            if (Array.isArray(val)) {
                return val.sort().map(function (val2) {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
                }).join('&');
            }
            return encodeURIComponent(key) + '=' + encodeURIComponent(val);
        }).join('&') : '';
    },
}

export default Http;