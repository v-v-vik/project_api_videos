
import {SETTINGS} from "../../src/settings";
import {req} from "../test-helpers";


describe("/videos", () => {

    beforeAll(async() => {
        await req.delete("/testing/all-data")
    });


    it("should get empty array", async () => {
        const res = await req
            .get(SETTINGS.PATH.VIDEOS)
            .expect(200, [])
        console.log(res.body)
    })

    let newVideo1;
    it("should create a new element in the array", async() => {
        const newData = {
            title: "some title",
            author: "some author",
            availableResolutions: [
                "P144"
            ]
        }
        const createRes = await req
            .post(SETTINGS.PATH.VIDEOS)
            .send(newData)
            .expect(201)

        newVideo1 = createRes.body;
        expect(newVideo1).toEqual({
            id: expect.any(Number),
            title: newData.title,
            author: newData.author,
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: expect.any(String),
            publicationDate: expect.any(String),
            availableResolutions: newData.availableResolutions,


        })

    })

    it("should not create a new element in the array with incorrect data", async() => {
        const newData = {
            title: 1,
            author: "some author",
            availableResolutions: [
                "P144"
            ]
        }
        await req
            .post(SETTINGS.PATH.VIDEOS)
            .send(newData)
            .expect(400)

        })

    it("should get an existing element via id parameter", async() => {

         await req
            .get(SETTINGS.PATH.VIDEOS + "/1")
            .send()
            .expect(200)

    })

    it("should not get an element of array with wrong id parameter", async() => {

         await req
            .get(SETTINGS.PATH.VIDEOS + "/-1")
            .send()
            .expect(404)

    })





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







