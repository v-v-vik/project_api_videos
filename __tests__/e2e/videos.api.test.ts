
import {SETTINGS} from "../../src/settings";
import {req} from "../test-helpers";
import {dataset1} from "../datasets";
import {setDB} from "../../src/db/db";

describe("/videos", () => {


    it("should get empty array", async () => {
        const res = await req
            .get(SETTINGS.PATH.VIDEOS)
            .expect(200, [])
        console.log(res.body)
    })

    // it('should not get empty array', async () => {
    //     setDB(dataset1);
    //
    //     const res = await req
    //         .get(SETTINGS.PATH.VIDEOS)
    //         .expect(200)
    //
    //     console.log(res.body)
    //
    //     expect(res.body.length).toBe(1)

    //
    // })





})

