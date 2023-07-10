export default class UserInfo {
  constructor(selectors) {
    this.nameSelector = selectors.nameSelector;
    this.jobSelector = selectors.jobSelector;
  }

  getUserInfo() {
    return {
      name: document.querySelector(this.nameSelector).textContent,
      job: document.querySelector(this.jobSelector).textContent,
    };
  }

  setUserInfo(user) {
    document.querySelector(this.nameSelector).textContent = user.name;
    document.querySelector(this.jobSelector).textContent = user.job;
  }
}

const userInfo = new UserInfo({
  nameSelector: "#name",
  jobSelector: "#job",
});
