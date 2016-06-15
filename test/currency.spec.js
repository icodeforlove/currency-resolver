var currencyResolver = require('../index');

describe('General', function() {
	it('can get symbols', function() {
		expect(currencyResolver.getSymbol('AUD')).toEqual('AU$');
		expect(currencyResolver.getSymbol('BRL')).toEqual('R$');
		expect(currencyResolver.getSymbol('GBP')).toEqual('£');
		expect(currencyResolver.getSymbol('CAD')).toEqual('CA$');
		expect(currencyResolver.getSymbol('CLP')).toEqual('CL$');
		expect(currencyResolver.getSymbol('CNY')).toEqual('CN¥');
		expect(currencyResolver.getSymbol('CZK')).toEqual('Kč');
		expect(currencyResolver.getSymbol('DKK')).toEqual('Dkr');
		expect(currencyResolver.getSymbol('EUR')).toEqual('€');
		expect(currencyResolver.getSymbol('HKD')).toEqual('HK$');
		expect(currencyResolver.getSymbol('HUF')).toEqual('Ft');
		expect(currencyResolver.getSymbol('INR')).toEqual('Rs');
		expect(currencyResolver.getSymbol('IDR')).toEqual('Rp');
		expect(currencyResolver.getSymbol('ILS')).toEqual('₪');
		expect(currencyResolver.getSymbol('JPY')).toEqual('¥');
		expect(currencyResolver.getSymbol('KRW')).toEqual('₩');
		expect(currencyResolver.getSymbol('MYR')).toEqual('RM');
		expect(currencyResolver.getSymbol('MXN')).toEqual('MX$');
		expect(currencyResolver.getSymbol('NZD')).toEqual('NZ$');
		expect(currencyResolver.getSymbol('NOK')).toEqual('Nkr');
		expect(currencyResolver.getSymbol('PKR')).toEqual('PKRs');
		expect(currencyResolver.getSymbol('PHP')).toEqual('₱');
		expect(currencyResolver.getSymbol('PLN')).toEqual('zł');
		expect(currencyResolver.getSymbol('RUB')).toEqual('RUB');
		expect(currencyResolver.getSymbol('SGD')).toEqual('S$');
		expect(currencyResolver.getSymbol('ZAR')).toEqual('R');
		expect(currencyResolver.getSymbol('SEK')).toEqual('Skr');
		expect(currencyResolver.getSymbol('CHF')).toEqual('CHF');
		expect(currencyResolver.getSymbol('TWD')).toEqual('NT$');
		expect(currencyResolver.getSymbol('THB')).toEqual('฿');
		expect(currencyResolver.getSymbol('TRY')).toEqual('TL');
		expect(currencyResolver.getSymbol('USD')).toEqual('$');
	});

	it('can get currency code from symbol', function() {
		expect(currencyResolver.getCode('AU$')).toEqual('AUD');
		expect(currencyResolver.getCode('R$')).toEqual('BRL');
		expect(currencyResolver.getCode('£')).toEqual('GBP');
		expect(currencyResolver.getCode('CA$')).toEqual('CAD');
		expect(currencyResolver.getCode('CL$')).toEqual('CLP');
		expect(currencyResolver.getCode('CN¥')).toEqual('CNY');
		expect(currencyResolver.getCode('Kč')).toEqual('CZK');
		expect(currencyResolver.getCode('Dkr')).toEqual('DKK');
		expect(currencyResolver.getCode('€')).toEqual('EUR');
		expect(currencyResolver.getCode('HK$')).toEqual('HKD');
		expect(currencyResolver.getCode('Ft')).toEqual('HUF');
		expect(currencyResolver.getCode('Rs')).toEqual('INR');
		expect(currencyResolver.getCode('Rp')).toEqual('IDR');
		expect(currencyResolver.getCode('₪')).toEqual('ILS');
		expect(currencyResolver.getCode('¥')).toEqual('JPY');
		expect(currencyResolver.getCode('₩')).toEqual('KRW');
		expect(currencyResolver.getCode('RM')).toEqual('MYR');
		expect(currencyResolver.getCode('MX$')).toEqual('MXN');
		expect(currencyResolver.getCode('NZ$')).toEqual('NZD');
		expect(currencyResolver.getCode('Nkr')).toEqual('NOK');
		expect(currencyResolver.getCode('PKRs')).toEqual('PKR');
		expect(currencyResolver.getCode('₱')).toEqual('PHP');
		expect(currencyResolver.getCode('zł')).toEqual('PLN');
		expect(currencyResolver.getCode('RUB')).toEqual('RUB');
		expect(currencyResolver.getCode('S$')).toEqual('SGD');
		expect(currencyResolver.getCode('R')).toEqual('ZAR');
		expect(currencyResolver.getCode('Skr')).toEqual('SEK');
		expect(currencyResolver.getCode('CHF')).toEqual('CHF');
		expect(currencyResolver.getCode('NT$')).toEqual('TWD');
		expect(currencyResolver.getCode('฿')).toEqual('THB');
		expect(currencyResolver.getCode('TL')).toEqual('TRY');
		expect(currencyResolver.getCode('$')).toEqual('USD');
		expect(currencyResolver.getCode('RMB')).toEqual('CNY');
	});

	it('can get native symbols', function() {
		expect(currencyResolver.getSymbolNative('AUD')).toEqual('$');
		expect(currencyResolver.getSymbolNative('BRL')).toEqual('R$');
		expect(currencyResolver.getSymbolNative('GBP')).toEqual('£');
		expect(currencyResolver.getSymbolNative('CAD')).toEqual('$');
		expect(currencyResolver.getSymbolNative('CLP')).toEqual('$');
		expect(currencyResolver.getSymbolNative('CNY')).toEqual('CN¥');
		expect(currencyResolver.getSymbolNative('CZK')).toEqual('Kč');
		expect(currencyResolver.getSymbolNative('DKK')).toEqual('kr');
		expect(currencyResolver.getSymbolNative('EUR')).toEqual('€');
		expect(currencyResolver.getSymbolNative('HKD')).toEqual('$');
		expect(currencyResolver.getSymbolNative('HUF')).toEqual('Ft');
		expect(currencyResolver.getSymbolNative('INR')).toEqual('₹');
		expect(currencyResolver.getSymbolNative('IDR')).toEqual('Rp');
		expect(currencyResolver.getSymbolNative('ILS')).toEqual('₪');
		expect(currencyResolver.getSymbolNative('JPY')).toEqual('￥');
		expect(currencyResolver.getSymbolNative('KRW')).toEqual('₩');
		expect(currencyResolver.getSymbolNative('MYR')).toEqual('RM');
		expect(currencyResolver.getSymbolNative('MXN')).toEqual('$');
		expect(currencyResolver.getSymbolNative('NZD')).toEqual('$');
		expect(currencyResolver.getSymbolNative('NOK')).toEqual('kr');
		expect(currencyResolver.getSymbolNative('PKR')).toEqual('₨');
		expect(currencyResolver.getSymbolNative('PHP')).toEqual('₱');
		expect(currencyResolver.getSymbolNative('PLN')).toEqual('zł');
		expect(currencyResolver.getSymbolNative('RUB')).toEqual('руб.');
		expect(currencyResolver.getSymbolNative('SGD')).toEqual('$');
		expect(currencyResolver.getSymbolNative('ZAR')).toEqual('R');
		expect(currencyResolver.getSymbolNative('SEK')).toEqual('kr');
		expect(currencyResolver.getSymbolNative('CHF')).toEqual('CHF');
		expect(currencyResolver.getSymbolNative('TWD')).toEqual('NT$');
		expect(currencyResolver.getSymbolNative('THB')).toEqual('฿');
		expect(currencyResolver.getSymbolNative('TRY')).toEqual('TL');
		expect(currencyResolver.getSymbolNative('USD')).toEqual('$');
	});
});