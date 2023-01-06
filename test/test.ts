import { expect } from 'chai';
import 'mocha';

import * as RequestsBuilders from "../requests/requestBuilder";
import {RequestManager} from "../requests/requestManager";

describe("Upload file", () => {
    it("Upload file", async () => {
        const res = await new RequestManager(new RequestsBuilders.UploadFile()).send();
        expect(res.status).to.equal(200);
    })
})

describe("Get file metadata", () => {
    it("Get file metadata", async () => {
        const res = await new RequestManager(new RequestsBuilders.GetFileMetadata()).send();
        expect(res.status).to.equal(200);
    })
})

describe("Delete file", () => {
    it("Delete file", async () => {
        const res = await new RequestManager(new RequestsBuilders.DeleteFile()).send();
        expect(res.status).to.equal(200);
    })
})

