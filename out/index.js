"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require('request');
const { promisify } = require('util');
const req = promisify(request);
const endpoint = "https://20kiyaost7.execute-api.us-west-2.amazonaws.com/prod?";
var platforms;
(function (platforms) {
    platforms[platforms["xbox"] = 1] = "xbox";
    platforms[platforms["ps4"] = 2] = "ps4";
    platforms[platforms["steam"] = 3] = "steam";
})(platforms = exports.platforms || (exports.platforms = {}));
class rocketleague_tracker_network {
    constructor(api_key) {
        this.api_key = api_key;
        this.request_options = { headers: {
                "X-API-KEY": this.api_key
            } };
    }
    get_data(id, platform) {
        return __awaiter(this, void 0, void 0, function* () {
            if (platform === "xbox") {
                platform = platforms.xbox;
            }
            else if (platform === "ps4") {
                platform = platforms.ps4;
            }
            else if (platform === "steam") {
                platform = platforms.steam;
            }
            let request_url = endpoint;
            request_url += "platform=" + platform;
            request_url += "&name=" + id;
            let data = yield req(request_url, this.request_options);
            let return_data = JSON.parse(data.body);
            return return_data;
        });
    }
    get_steam(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get_data(id, platforms.steam);
        });
    }
    get_ps4(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get_data(id, platforms.ps4);
        });
    }
    get_xbox(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get_data(id, platforms.xbox);
        });
    }
}
exports.rocketleague_tracker_network = rocketleague_tracker_network;
//# sourceMappingURL=index.js.map