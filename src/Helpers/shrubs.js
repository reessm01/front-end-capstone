import config from "./config.js";

export default function load(callback) {
    window.gapi.client.load("sheets", "v4", () => {
      window.gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: config.spreadsheetId,
          range: "shrubs!A2:I"
        })
        .then(
          response => {
            const data = response.result.values;
            const shrubs =
              data.map(shrubs => ({
                name: shrubs[0],
                height: shrubs[1],
                state: shrubs[2],
                description: shrubs[3],
                image: shrubs[4],
                site: shrubs[5],
                type: shrubs[6], 
                amazon: shrubs[7]
              })) || [];
            callback({
              shrubs
            });
          },
          response => {
            callback(false, response.result.error);
          }
        );
    });
  }