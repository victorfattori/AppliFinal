import React from 'react';

export function getSpeechToText() {
  return new Promise((resolve, reject) => {
    fetch('http://192.168.1.153:1300', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: 'speak',
    })
      .then((response) => response.text())
      .then((data) => {
        // Utilisez les données récupérées ici
        resolve(data);
      })
      .catch((error) => {
        // ici, vous pouvez gérer les erreurs
        console.error(error);
        reject(error);
      });
    });
  }
