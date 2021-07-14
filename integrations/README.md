Bullish integration with Google Sheet

# Install

-   Go to your google sheet
-   Navigate to `Tools` -> `Script editor` 
-   Rename `Code.gs` to `BULLISH.gs` 
-   Copy contents from https://raw.githubusercontent.com/rishi-anand/bullish/main/integrations/BULLISH.gs to `BULLISH.gs` file and save

# Application

`=BULLISH("BANKNIFTY", "15-Jul-2021", "35000", "CE")`

or use `TO_TEXT` and directly assign cell value

`=BULLISH(TO_TEXT(A3), TO_TEXT(I26), TO_TEXT(A29), TO_TEXT(B29))`


