# jQuery-Date
An extended Date Object that uses jQuery for name spacing.

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
-----------------------------------------------------------------------------------------------------------
	$.date('m-d-Y h:i:s')		//	07-07-2016 01:50:43
-----------------------------------------------------------------------------------------------------------
