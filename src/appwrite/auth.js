import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectID);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      // if (userAccount) {
      // call another method
      // return this.login({email, password});
      // } else {
      //    return  userAccount;
      // }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      // createEmailSession
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Login failed", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
  }

  // async logout() {

  //     try {
  //         await this.account.deleteSessions();
  //     } catch (error) {
  //         console.log("Appwrite serive :: logout :: error", error);
  //     }
  // }

  async logout(sessionId) {
    try {
      return await this.account.deleteSessions(sessionId);
    } catch (error) {
      throw error;
    }
  }
  
}

const authService = new AuthService();

export default authService;