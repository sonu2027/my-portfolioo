// import { Client, ID, Databases, Storage, Query } from "../../package.json/appwrite";
const Client=require("Client")
const ID=require("ID")
const Databases=require("Databases")
const Storage=require("Storage")
class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(process.env.appwriteURL)
      .setProject(process.env.appwriteProjectID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ comments }) {
    try {
      return await this.databases.createDocument(
        process.env.appwriteDatabaseID,
        process.env.appwriteCollectionID,
        ID.unique(),
        {
          comments,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: createPost :: error", error);
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        process.env.appwriteDatabaseID,
        process.env.appwriteCollectionID,
        slug
      );
    } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
      return false;
    }
  }

  async deleteTask(documentId) {
    console.log("slug in deleteDocument", documentId);
    try {
      return await this.databases.deleteDocument(
        process.env.appwriteDatabaseID,
        process.env.appwriteCollectionID,
        documentId
      );
    } catch (error) {
      console.log("Error while deleteing", error);
    }
  }
}

const service = new Service();
export default service;
