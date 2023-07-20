export default class Adpi {
  constructor({ baseUrl, authToken }) {
    this._baseUrl = baseUrl;
    this._authToken = authToken;
  }

  // GET https://around.nomoreparties.co/v1/group-42/
  getCardList() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authToken,
      },
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
      )
      .catch((err) => {
        console.error(err); // log the error to the console
      });
  }
}

// GET https://around.nomoreparties.co/v1/group-42/
// getUserInfo()
