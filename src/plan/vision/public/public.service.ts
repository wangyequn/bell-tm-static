import {Injectable} from '@angular/core';

import {ApiUrl, Rest, ShowService} from 'core/rest';

@Injectable()
export class VisionPublicService extends ShowService {
    constructor(rest: Rest, api: ApiUrl) {
        super(rest, api);
    }
}
