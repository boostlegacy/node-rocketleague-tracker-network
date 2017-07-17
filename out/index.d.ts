export declare enum platforms {
    xbox = 1,
    ps4 = 2,
    steam = 3,
}
export interface request_options {
    headers: request_headers;
}
export interface request_headers {
    "X-API-KEY": string;
}
export interface api_data {
    platformId: platforms;
    platformName: "steam" | "xbox" | "ps4";
    platformShortName: "steam" | "xbox" | "ps4";
    platformUserId: string;
    platformUserHandle: string;
    stats: stats[];
    tracking: tracked_data[];
}
export interface tracked_data {
    collectDate: string;
    stats: simple_stats[];
}
export interface simple_stats {
    label: "Tracker Score" | "Goal/Shot %" | "Wins" | "Goals" | "Saves" | "Shots" | "MVPs" | "Assists" | "MVP/Win %" | "Reward Level" | "Reward Wins";
    value: string;
}
export interface stats {
    label: "Un-Ranked" | "Ranked Duel 1v1" | "Ranked Doubles 2v2" | "Ranked Solo Standard 3v3" | "Ranked Standard 3v3" | "Tracker Score" | "Goal/Shot %" | "Wins" | "Goals" | "Saves" | "Shots" | "MVPs" | "Assists" | "MVP/Win %" | "Reward Level" | "Reward Wins";
    subLabel: null | "[I] Unranked" | "[I] Bronze I" | "[II] Bronze I" | "[III] Bronze I" | "[IV] Bronze I" | "[V] Bronze I" | "[I] Bronze II" | "[II] Bronze II" | "[III] Bronze II" | "[IV] Bronze II" | "[V] Bronze II" | "[I] Bronze III" | "[II] Bronze III" | "[III] Bronze III" | "[IV] Bronze III" | "[V] Bronze III" | "[I] Silver I" | "[II] Silver I" | "[III] Silver I" | "[IV] Silver I" | "[V] Silver I" | "[I] Silver II" | "[II] Silver II" | "[III] Silver II" | "[IV] Silver II" | "[V] Silver II" | "[I] Silver III" | "[II] Silver III" | "[III] Silver III" | "[IV] Silver III" | "[V] Silver III" | "[I] Gold I" | "[II] Gold I" | "[III] Gold I" | "[IV] Gold I" | "[V] Gold I" | "[I] Gold II" | "[II] Gold II" | "[III] Gold II" | "[IV] Gold II" | "[V] Gold II" | "[I] Gold III" | "[II] Gold III" | "[III] Gold III" | "[IV] Gold III" | "[V] Gold III" | "[I] Platinum I" | "[II] Platinum I" | "[III] Platinum I" | "[IV] Platinum I" | "[V] Platinum I" | "[I] Platinum II" | "[II] Platinum II" | "[III] Platinum II" | "[IV] Platinum II" | "[V] Platinum II" | "[I] Platinum III" | "[II] Platinum III" | "[III] Platinum III" | "[IV] Platinum III" | "[V] Platinum III" | "[I] Diamond I" | "[II] Diamond I" | "[III] Diamond I" | "[IV] Diamond I" | "[V] Diamond I" | "[I] Diamond II" | "[II] Diamond II" | "[III] Diamond II" | "[IV] Diamond II" | "[V] Diamond II" | "[I] Diamond III" | "[II] Diamond III" | "[III] Diamond III" | "[IV] Diamond III" | "[V] Diamond III" | "[I] Champion I" | "[II] Champion I" | "[III] Champion I" | "[IV] Champion I" | "[V] Champion I" | "[I] Champion II" | "[II] Champion II" | "[III] Champion II" | "[IV] Champion II" | "[V] Champion II" | "[I] Champion III" | "[II] Champion III" | "[III] Champion III" | "[IV] Champion III" | "[V] Champion III" | "[I] Grand Champion" | "[II] Grand Champion" | "[III] Grand Champion" | "[IV] Grand Champion" | "[V] Grand Champion";
    category: "Ranked Season" | "Featured" | "Totals" | "Season Reward";
    value: string;
    rank: null | number;
    percentile: number | null;
    displayValue: string;
}
export declare class rocketleague_tracker_network {
    api_key: string;
    request_options: request_options;
    constructor(api_key: string);
    get_data(id: string | number, platform: platforms | "xbox" | "steam" | "ps4"): Promise<api_data>;
    get_steam(id: string | number): Promise<api_data>;
    get_ps4(id: string): Promise<api_data>;
    get_xbox(id: string): Promise<api_data>;
}
