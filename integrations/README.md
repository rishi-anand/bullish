Options Last Price integration with Google Sheet

# Install

-   Go to your google sheet
-   Navigate to `Tools` -> `Script editor` 
-   Rename `Code.gs` to `OPTIONSLASTPRICE.gs` 
-   Copy contents from https://raw.githubusercontent.com/rishi-anand/bullish/main/integrations/OPTIONSLASTPRICE.gs to `OPTIONSLASTPRICE.gs` file and save

# Application

`=OPTIONSLASTPRICE("BANKNIFTY", "15-Jul-2021", "35000", "CE", "<bankniftyspotprice>")`

or use `TO_TEXT` and directly assign cell value

`=OPTIONSLASTPRICE(TO_TEXT(A3), TO_TEXT(A5), TO_TEXT(A9), TO_TEXT(B9), <cell address of bank nifty>)`

![alt text](https://raw.githubusercontent.com/rishi-anand/bullish/main/integrations/options_last_price.jgp.png)



