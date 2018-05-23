import { GeolocModule } from './geoloc.module';

describe('GeolocModule', () => {
  let geolocModule: GeolocModule;

  beforeEach(() => {
    geolocModule = new GeolocModule();
  });

  it('should create an instance', () => {
    expect(geolocModule).toBeTruthy();
  });
});
