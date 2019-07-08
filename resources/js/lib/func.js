export function getHubTypeName(type) {
    if (type == "TRAIN_STATION") return "Train Station";
    else if (type == "BUS_STATION") return "Bus Station";
}

export function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

export function currency_number(input)
{
    let x = '';
    let x1 = '';
    let x2 = '';
    input += '';
    x = input.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

export function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export function getUserByID(db, id) {
    let data = [];

    const ref = db.collection("user").doc(id);
    ref.get().then((doc) => {
        if (doc.exists) {
            return doc.data();
        }
    });
}

export async function getUserToken() {
    let token = null;

    await firebase
        .auth()
        .currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            token = idToken;
        })
        .catch(function(error) {
            // Handle error
        });

    return token;
}

export function scrollTo(element, to, duration)
{
    var easeInOutQuad = function (t, b, c, d)
    {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function(){
        currentTime += increment;
        var val = easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

export function printElem(divId)
{
    var content = document.getElementById(divId).innerHTML;
    var mywindow = window.open('', 'Print', 'height=700,width=1000');

    mywindow.document.write('<html><head><title>Print</title><link rel="stylesheet" href="/css/app.css">');
    mywindow.document.write('</head><body class="section-to-print">');
    mywindow.document.write(content);
    mywindow.document.write('</body></html>');

    mywindow.document.close();
    mywindow.focus()
    setTimeout(function () {
        mywindow.print();
        mywindow.close();
    }, 500);
    return true;
}