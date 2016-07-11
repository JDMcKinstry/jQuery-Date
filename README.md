# jQuery-Date
An extended Date Object that uses jQuery for name spacing. Has all the methods of a regular Date Object, plus lots more!!!

#### Quick Link to Raw File -> [jQuery.date.min.js](https://cdn.rawgit.com/JDMcKinstry/jQuery-Date/master/jQuery.date.min.js)

## Added Methods
	$.date('addYears')			Accepts Positive and Negative Integers
	$.date('addMonths')			Accepts Positive and Negative Integers
	$.date('addWeeks')			Accepts Positive and Negative Integers
	$.date('addDays')			Accepts Positive and Negative Integers
	$.date('addHours')			Accepts Positive and Negative Integers
	$.date('addMinutes')		Accepts Positive and Negative Integers
	$.date('addSeconds')		Accepts Positive and Negative Integers
	$.date('getDayName')		Returns the Name of the Day. Pass `true` to get 3 letter abbriviation.
	$.date('getMonthName')		Returns the Name of the Month. Pass `true` to get 3 letter abbriviation.	
	$.date('getWeek')			Returns the number of the week within the given year.
	$.date('stdTimezoneOffset')	Returns the standard time timezone offset.
	$.date('dst')				Returns Bool if is Daylight Savings Time

## Format It!!!
Quickly get a formated Date String using formatting similar to PHP, or one of many preset `key` names! Use like:

	$.date(new Date(), 'format', 'm-d-Y h:i:s')
	//	|OR| 
	$.date(new Date(), 'm-d-Y h:i:s')
	//	|OR|
	$.date('m-d-Y h:i:s')

### Basic Format Characters:

Day |  | Week | & Month |
--- | --- | --- | --- |
'd' | Day of the month, 2 digits with leading zeros | 'W' | ISO-8601 week number of year, weeks starting on Monday
'D' | A textual representation of a day, three letters | 'F' | A full textual representation of a month, such as January or March
'j' | Day of the month without leading zeros | 'm' | Numeric representation of a month, with leading zeros
'l (lowercase 'L')' | A full textual representation of the day of the week | 'M' | A short textual representation of a month, three letters
'N' | ISO-8601 numeric representation of the day of the week | 'n' | Numeric representation of a month, without leading zeros
'S' | English ordinal suffix for the day of the month, 2 characters | 't' | Number of days in the given month
'w' | Numeric representation of the day of the week
'z' | The day of the year (starting from 0)

Year |  |
--- | --- |
'L' | Whether it's a leap year
'o' | ISO-8601 year number. This has the same value as Y
'Y' | A full numeric representation of a year, 4 digits
'y' | A two digit representation of a year

Time |  | Timezone | & Full Date/Time |
--- | --- | --- | --- |
'a' | Lowercase Ante meridiem and Post meridiem | 'e' | Timezone identifier
'A' | Uppercase Ante meridiem and Post meridiem | 'I | (capital i)' Whether or not the date is in daylight saving time
'B' | Swatch Internet time | 'O' | Difference to Greenwich time (GMT) in hours
'g' | 12-hour format of an hour without leading zeros | 'P' | Difference to Greenwich time (GMT) with colon between hours and minutes
'G' | 24-hour format of an hour without leading zeros | 'T' | Timezone abbreviation
'h' | 12-hour format of an hour with leading zeros | 'Z' | Timezone offset in seconds
'H' | 24-hour format of an hour with leading zeros | 'c' | ISO 8601 date
'i' | Minutes with leading zeros | 'r' | » RFC 2822 formatted date
's' | Seconds, with leading zeros | 'U' | Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)
'u' | Milliseconds | 

### Preset Format Keys

compound |  | constants |  |
--- | --- | --- | --- |
'commonLogFormat' |  'd/M/Y:G:i:s' | 'AMERICAN' | 'F j Y'
'exif' | 'Y:m:d G:i:s' | 'AMERICANSHORT' | 'm/d/Y'
'isoYearWeek' |  'Y\\\WW' | 'AMERICANSHORTWTIME' | 'm/d/Y h:i:sA'
'isoYearWeek2' | 'Y-\\\WW' | 'ATOM' | 'Y-m-d\\\TH:i:sP'
'isoYearWeekDay' | 'Y\\\WWj' | 'COOKIE' | 'l d-M-Y H:i:s T'
'isoYearWeekDay2' | 'Y-\\\WW-j' | 'EUROPEAN' | 'j F Y'
'mySQL' | 'Y-m-d h:i:s' | 'EUROPEANSHORT' | 'd.m.Y'
'postgreSQL' | 'Y.z' | 'EUROPEANSHORTWTIME' | 'd.m.Y H:i:s'
'postgreSQL2' | 'Yz' | 'ISO8601' |  'Y-m-d\\\TH:i:sO'
'soap' | 'Y-m-d\\\TH:i:s.u' | 'LEGAL' | 'j F Y'
'soap2' | 'Y-m-d\\\TH:i:s.uP' | 'RFC822' | 'D d M y H:i:s O'
'unixTimestamp' | '@U' | 'RFC850' | 'l d-M-y H:i:s T'
'xmlrpc' | 'Ymd\\\TG:i:s' | 'RFC1036' | 'D d M y H:i:s O'
'xmlrpcCompact' | 'Ymd\\\tGis' | 'RFC1123' | 'D d M Y H:i:s O'
'wddx' | 'Y-n-j\\\TG:i:s' | 'RFC2822' |  'D d M Y H:i:s O'
 |  | 'RFC3339' |  'Y-m-d\\\TH:i:sP'
 |  | 'RSS' |  'D d M Y H:i:s O'
 |  | 'W3C' |  'Y-m-d\\\TH:i:sP'

Pretty |  |
--- | --- |
'pretty-a' | 'g:i.sA l jS \\\o\\\f F Y'
'pretty-b' | 'g:iA l jS \\\o\\\f F Y'
'pretty-c' | 'n/d/Y g:iA'
'pretty-d' | 'n/d/Y'
'pretty-e' | 'F jS - g:ia'
'pretty-f' | 'g:iA'

---
---

### Examples

-----------------------------------------------------------------------------------------------------------
	$.date()						//	Thu Jul 07 2016 13:50:43 GMT-0400 (Eastern Daylight Time)	//	Uses new Date()
	$.date(326347200000)			//	Mon May 05 1980 00:00:00 GMT-0400 (Eastern Daylight Time)
	$.date(1980, 5, 5)				//	Mon May 05 1980 00:00:00 GMT-0400 (Eastern Daylight Time)
	$.date(new Date(1980, 4, 5))	//	Mon May 05 1980 00:00:00 GMT-0400 (Eastern Daylight Time)
	$.date('5/5/1980')				//	Mon May 05 1980 00:00:00 GMT-0400 (Eastern Daylight Time)
-----------------------------------------------------------------------------------------------------------
	$.date(326347200000, 'getMonthName')			//	May
	$.date(1980, 5, 5, 'getMonthName')				//	May
	$.date(new Date(1980, 4, 5), 'getMonthName')	//	May
	$.date('5/5/1980', 'getMonthName')				//	May
	$.date('getMonthName')							//	July	//	Uses new Date()
-----------------------------------------------------------------------------------------------------------
	$.date('pretty') Object {	//	Uses new Date()
		pretty-a: "1:50.43PM Thu 7th of Jul, 2016",
		pretty-b: "1:50PM Thu 7th of Jul, 2016",
		pretty-c: "7/07/2016 1:50PM",
		pretty-d: "7/07/2016",
		pretty-e: "Jul 7th - 1:50pm"
		pretty-f: "1:50PM"
		pretty-g: "July 7th, 2016"
		pretty-h: "July 7th, 2016 1:50PM"
-----------------------------------------------------------------------------------------------------------
	$.date('m-d-Y h:i:s')		//	07-07-2016 01:50:43
-----------------------------------------------------------------------------------------------------------
