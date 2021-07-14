
/*====================================================================================================================================*
  OPTIONSLASTPRICE by Rishi Anand (rishi.anand0@gmail.com)
  ====================================================================================================================================
  Version:      0.1
  Project Page: <will update>
  Copyright:    (c) 2021 by Rishi Anand
  License:      GNU General Public License, version 3 (GPL-3.0) 
                http://www.opensource.org/licenses/gpl-3.0.html
  ------------------------------------------------------------------------------------------------------------------------------------
  A library for getting last price of option

     OPTIONSLASTPRICE            For use by end users to get last price of options for a particular symobl, expiry and strike price

  Future enhancements may include:

   - Support for option chain in excel sheet

  Or feel free to write these and add on to the library yourself!
  ------------------------------------------------------------------------------------------------------------------------------------
  Changelog:
  
  0.1    Initial release
 *====================================================================================================================================*/
/**
 * Calls a rest api hosted by Rishi to get last price of call and put option for a particular symbol and expiry and strike price.
 * 
 * For example:
 *
 *   =OPTIONSLASTPRICE("BANKNIFTY", "15-Jul-2021", "35500","CE", <hash to refresh value>)
 * 
 * @param {symbol} the URL to a public JSON feed
 * @param {expiry} a comma-separated lists of paths to import. Any path starting with one of these paths gets imported.
 * @param {strikeprice} a comma-separated list of options that alter processing of the data
 * @param {option} a comma-separated list of options that alter processing of the data
 * @param {time} a comma-separated list of options that alter processing of the data
 *
 * @return a single value which is last price of the call or put option
 * @customfunction
 **/
function OPTIONSLASTPRICE(symbol, expiry, strikeprice, option, time) {
  Logger.log(Utilities.formatString('%d', symbol));
  Logger.log(Utilities.formatString('%s', expiry));
  Logger.log(Utilities.formatString('%d', expiry));
  Logger.log(Utilities.formatString('%s', expiry));

  var routeResp = UrlFetchApp.fetch("https://raw.githubusercontent.com/rishi-anand/bullish/main/integrations/route.json");
  Logger.log(routeResp.getContentText());
  var routeData = JSON.parse(routeResp.getContentText());
  Logger.log(routeData.route);

  var response = UrlFetchApp.fetch(Utilities.formatString('%s/oc/%s/%s/%s', "http://34.95.145.73", symbol, expiry, strikeprice));
  Logger.log(response.getContentText());
  var data = JSON.parse(response.getContentText());
  // Logger.log(data.name);
  // return input * 2;
  if(option == "CE") {
    return data.CE;
  } else {
    return data.PE;
  }
}
