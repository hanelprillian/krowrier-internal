export function getHubTypeName(type) {
    if (type == "TRAIN_STATION") return "Train Station";
    else if (type == "BUS_STATION") return "Bus Station";
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
