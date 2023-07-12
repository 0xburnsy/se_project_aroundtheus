const user = { name: "", job: "" };

export default class UserInfo {
  constructor(selectors) {
    this.nameElement = document.querySelector(selectors.nameElement);
    this.jobElement = document.querySelector(selectors.jobElement);
  }

  getUserInfo() {
    return {
      name: this.nameElement.textContent,
      job: this.jobElement.textContent,
    };
  }

  setUserInfo(user) {
    debugger;
    this.nameElement.textContent = user.name;
    this.jobElement.textContent = user.job;
  }
}
