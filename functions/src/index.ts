import {https} from "firebase-functions/v2";
import * as admin from "firebase-admin";

admin.initializeApp();

exports.guardarDatoDePrueba = https.onRequest(
  {cors: true},
  async (request, response) => {
    if (request.method !== "POST") {
      response.status(405).send("Método no permitido");
      return;
    }

    const dato = request.body;

    try {
      const docRef = await admin
        .firestore()
        .collection("pruebas")
        .add({
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
          payload: dato,
        });

      response.status(200).send({
        message: "Dato guardado correctamente en Firestore",
        documentId: docRef.id,
      });
    } catch (error) {
      console.error("Error al guardar en Firestore:", error);
      response.status(500).send("Error interno del servidor");
    }
  }
);
