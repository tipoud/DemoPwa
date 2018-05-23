import { BarcodeModule } from './barcode.module';

describe('BarcodeModule', () => {
  let barcodeModule: BarcodeModule;

  beforeEach(() => {
    barcodeModule = new BarcodeModule();
  });

  it('should create an instance', () => {
    expect(barcodeModule).toBeTruthy();
  });
});
