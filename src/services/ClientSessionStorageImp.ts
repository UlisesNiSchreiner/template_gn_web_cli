import { ClientSessionStorage } from 'graph-navigation-js'

export default class ClientSessionStorageImp extends ClientSessionStorage {

  super() {}

  async putSessionId(sessionId: string): Promise<void> {
    localStorage.setItem("sessionID", sessionId);
  }

  async getSessionId(): Promise<string> {
    const sessionID = localStorage.getItem("sessionID");
    return sessionID !== null ? sessionID.toString() : "";
  }
}
