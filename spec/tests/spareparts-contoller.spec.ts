import "jasmine";
import AdController from "../../src/controllers/ad-controller";
import databaseConnect from "../../src/configurations/mongoose.config";
// import server from "../../src/server";

describe("AdController", () => {
    const testdata = {
        "part_name": "Brake Disc",
        "part_no": "904jks7837655",
        "part_model": "Juke",
        "condition": "used",
        "seller_type": "Private",
        "description": "Clean and original parts",
        "brand": "Nissan",
        "price": 45500,
        "images": ["http://image.png", "http://image2.jpg"],
        "category": "Vehicle",
        "compatible": "Nisson juke 2017 model",
        "seller_id": "4563884778957667"
    }
    const queryId = "5b7f5fdfedd612f7aefd79c4";
    let server: any;
    beforeAll((done) => {
        // server = require("../../src/server");
        databaseConnect();
        // console.log(AdController.querySingleAd(query));
        done();
    });
    describe("AdController Functions and Methods", () => {
        beforeAll((done) => {
            this.ad = new AdController(testdata);
            // this.fn = AdController.querySingleAd(query);
            spyOn(AdController, "querySingleAd");
            AdController.querySingleAd(queryId);
            done();
        });
        it("expect the AdController.querySingleAd to have been called", () => {
            expect(AdController.querySingleAd).toHaveBeenCalled();
        });
        // it("Call to the AdController.querySingleAd with a return value", () => {
        //     // AdController.querySingleAd(query);
        //     expect(AdController.querySingleAd.call).toEqual(true);
        // });

        it("querySingleAd", () => {
            // console.log(this);
            expect(this.ad.make).toBe("BMW");
            expect(this.ad.model).toBeDefined();
        });
        it("checking for ad data type", () => {
            expect(typeof this.ad).toBe("object");
        });
    });
});