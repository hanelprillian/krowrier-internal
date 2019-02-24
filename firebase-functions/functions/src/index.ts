import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const totalHub = functions.https.onRequest((request, response) => {
    admin
        .firestore()
        .collection("booking")
        .get()
        .then((snapshot) => {
            response.send({
                size: snapshot.size
            });
        })
        .catch((err) => {
            console.log(err);
            response.status(500).send(err);
        });
});

export const totalBooking = functions.https.onCall((data, context) => {
    return admin
        .firestore()
        .collection("booking")
        .get()
        .then((snapshot) => {
            return { size: snapshot.size };
        })
        .catch((err) => {
            console.log(err);
        });
});
