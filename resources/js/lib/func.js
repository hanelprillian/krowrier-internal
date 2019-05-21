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
