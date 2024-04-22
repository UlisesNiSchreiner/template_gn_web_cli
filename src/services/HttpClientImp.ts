import axios from "axios";
import { isMobile } from "../untils/ScreenUntiles";
import { Platform, Request, HttpClient } from 'graph-navigation-js'

const getPlatform = () => isMobile() ? Platform.MOBILE_WEB : Platform.DESKTOP_WEB;
const headers = {
  'Content-Type': 'application/json',
  'client': getPlatform(),
}

export default class HttpClientImp extends HttpClient {
baseUrl: string

constructor (baseUrl: string) {
  super()
  this.baseUrl = baseUrl
}

  async post(request: Request): Promise<string> {
    const response = await axios.post(this.baseUrl, request, { headers } );

    return JSON.stringify(response.data);
  }

  async put(request: Request): Promise<string> {
    const response = await axios.put(this.baseUrl, request, { headers } );
    
    return JSON.stringify(response.data);
  }
}
