
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

    // create request

    let newVideo1:any;
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

    // get by id request

    it("should get an existing element via id parameter", async() => {

         await req
            .get(SETTINGS.PATH.VIDEOS + "/1")
            .expect(200)

    })

    it("should not get an element of array with wrong id parameter", async() => {

         await req
            .get(SETTINGS.PATH.VIDEOS + "/-1")
            .expect(404)

    })

    // put request by id parameter

    // let updVideo1: any;
    it("should change an existing element via id parameter", async() => {
        const newData = {
            title: "some title upd22",
            author: "some author upd22",
            canBeDownloaded: true,
            minAgeRestriction: 16,
            publicationDate: "2024-10-25T10:16:54.827Z",
            availableResolutions: [
                "P144", "P2160"
            ]
        }

        const updateRes = await req
            .put(SETTINGS.PATH.VIDEOS + "/1")
            .send(newData)
            .expect(200)

        newVideo1 = updateRes.body;
        expect(newVideo1).toEqual({
            id: expect.any(Number),
            title: newData.title,
            author: newData.author,
            canBeDownloaded: newData.canBeDownloaded,
            minAgeRestriction: newData.minAgeRestriction,
            createdAt: expect.any(String),
            publicationDate: newData.publicationDate,
            availableResolutions: newData.availableResolutions,

        })

    })

    it("should not change an existing element via id parameter with incorrect input data", async() => {
        const newData = {
            title: "some title upd22",
            author: "some author upd22",
            canBeDownloaded: null,
            minAgeRestriction: 16,
            publicationDate: "2024-10-25T10:16:54.827Z",
            availableResolutions: [
                "P144", "P2160"
            ]
        }


        await req
            .put(SETTINGS.PATH.VIDEOS + "/1")
            .send(newData)
            .expect(400)


    })

    it("should delete an existing element via id parameter", async() => {

        await req
            .delete(SETTINGS.PATH.VIDEOS + "/1")
            .expect(204)

    })

    it("should not delete an element with non existing id parameter", async() => {

        await req
            .delete(SETTINGS.PATH.VIDEOS + "/-1")
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







