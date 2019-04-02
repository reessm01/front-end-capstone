// import config from ;


export default function load(callback) {
    window.gapi.client.load("sheets", "v4", () => {
      window.gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: config.spreadsheetId,
          range: "trees!A2:G"
        })
        .then(
          response => {
            const data = response.result.values;
            const trees =
              data.map(trees => ({
                name: trees[0],
                height: trees[1],
                state: trees[2],
                description: trees[3],
                image: trees[4],
                site: trees[5],
                type: trees[6]
              })) || [];
            callback({
              trees
            });
          },
          response => {
            callback(false, response.result.error);
          }
        );
    });
  }