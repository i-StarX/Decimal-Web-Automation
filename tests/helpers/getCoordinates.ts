// import { request } from "@playwright/test";

export default class Coordinates {

    static async getCookies(page, name) {
        let pageCookies = await page.context().cookies();
        let targetCookies = pageCookies.filter(cookie => cookie.name.match(name));
        const cookiesString = JSON.stringify(targetCookies);
        const cookie = JSON.parse(cookiesString)
        return cookie[0].value;
    }

    static async getCoordinate(page, referenceName)  {
        const SSID = await this.getCookies(page, "SSID");
        const ILG = await this.getCookies(page, "ILG");
        const BRANCH_NAME = await this.getCookies(page, "BRANCH_NAME");
        const APP_SUBTYPE = await this.getCookies(page, "APP_SUBTYPE");
        const WORKSPACE_ID = await this.getCookies(page, "WORKSPACE_ID");
        const WORKSPACE_NAME = await this.getCookies(page, "WORKSPACE_NAME");
        const USER_ID = await this.getCookies(page, "USER_ID");
        const USERNAME = await this.getCookies(page, "USERNAME");
        const DEFAULT_ACCOUNT_ID = await this.getCookies(page, "DEFAULT_ACCOUNT_ID");
        const DEFAULT_ACCOUNT_NAME = await this.getCookies(page, "DEFAULT_ACCOUNT_NAME");
        const DEFAULT_ACCOUNT_HIERARCHY = await this.getCookies(page, "DEFAULT_ACCOUNT_HIERARCHY");
        const ACCESS_LEVEL = await this.getCookies(page, "ACCESS_LEVEL");
        const APP_ID = await this.getCookies(page, "APP_ID");
        const MODULE_ID = await this.getCookies(page, "MODULE_ID");
        const BRANCH_ID = await this.getCookies(page, "BRANCH_ID");
        const MICROAPP_HIERARCHY = await this.getCookies(page, "MICROAPP_HIERARCHY");
        const PATH = await this.getCookies(page, "path");
        const DEFAULT_ACCOUNT_USER_ROLE = await this.getCookies(page, "DEFAULT_ACCOUNT_USER_ROLE");
         
        const response = await fetch(`https://designer.vahanacloud.com/backend/design-manager-v2/api/v3/page/56844173277354280702825_1732773692367_12418/Page/all?moduleId=${MODULE_ID}&workspaceId=${WORKSPACE_ID}&appId=${APP_ID}&branchId=${BRANCH_ID}`, {
                method: "GET",
                headers: {
                    Authorization: "Basic dmFoYW5hOkRlY2ltYWxAMTIz",
                    Requestid: "1732751354638undefined",
                    Cookie: `BRANCH_NAME=${BRANCH_NAME}; APP_SUBTYPE=${APP_SUBTYPE}; WORKSPACE_ID=${WORKSPACE_ID}; WORKSPACE_NAME=${WORKSPACE_NAME}; WORKSPACE_ID=${WORKSPACE_ID}; USER_ID=${USER_ID}; USERNAME=${USERNAME}; DEFAULT_ACCOUNT_ID=${DEFAULT_ACCOUNT_ID}; DEFAULT_ACCOUNT_NAME=${DEFAULT_ACCOUNT_NAME}; DEFAULT_ACCOUNT_HIERARCHY=${DEFAULT_ACCOUNT_HIERARCHY}; ACCESS_LEVEL=${ACCESS_LEVEL}; APP_ID=${APP_ID}; MODULE_ID=${MODULE_ID}; BRANCH_ID=${BRANCH_ID}; MICROAPP_HIERARCHY=${MICROAPP_HIERARCHY}; path=${PATH}; SSID=${SSID}; ILG=${ILG}; DEFAULT_ACCOUNT_USER_ROLE=${DEFAULT_ACCOUNT_USER_ROLE}`
                },
            });

        const parsedData = await response.json();
        let elements = parsedData.data.page.uiEntityConifguration.children;
        let x = 0;
        let y = 0;
        for(let i = 0; i < elements.length; i++) {
            console.log(elements[i].properties.referenceName)
            if(elements[i].subType == "Row") {
                for(let n = 0; n < elements[i].children.length; n++) {
                    if(elements[i].children[n].properties.referenceName == referenceName) {
                        x = elements[i].children[n].x
                        y = elements[i].children[n].y
                    }
                }
            }
            if(elements[i].properties.referenceName == referenceName) {
                 x = elements[i].x
                 y = elements[i].y
            }
        }
        console.log(`${referenceName} - x: ${x}, y: ${y}`)
        return {"x": x, "y": y};
    }

}