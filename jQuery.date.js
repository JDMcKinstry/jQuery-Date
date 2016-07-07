;(function($) {
	$.extend({	//	$.date([num|str|date], [varied])
		date: function() {
			var args = Array.prototype.slice.call(arguments, 0);
			//	arg 0 is nothing
			if (!args.length) {
				return $.extend(true, new Date(), $.date.methods);
			}
			else if (args.length == 1) {
				if ( (typeof args[0] == 'number') || (typeof args[0] == 'string' && !isNaN(Date.parse(args[0]))) || (args[0] instanceof Date) ) return $.extend(true, new Date(args[0]), $.date.methods);
				if (typeof args[0] == 'string') {	//	arg 0 is string and may be direct call to method)
					var d = new Date();
					args.unshift(d);
					return $.date.apply(this, args);
				}
			}
			else if (args.length > 1) {
				
				// arg 0 is a numeric value (may be milliseconds or year[if is year, arg 1 must be month])
				if (typeof args[0] == 'number') {
					var d;
					if (typeof args[1] !== 'number') {	//	is milliseconds
						d = new Date(args[0]);
						args = Array.prototype.slice.call(arguments, 1);
					}
					else {
						var dv = [];	//	date values
						for (var i=0;i<args.length;i++) {
							if (typeof args[i] !== 'number') break;
							dv.push(args[i]);
						}
						d = new Date(dv);
						args = Array.prototype.slice.call(arguments, i);
					}
					args.unshift(d);
					return $.date.apply(this, args);
				}
				//	arg 0 is string (may be date value or call to method)
				if (typeof args[0] == 'string') {
					var d = new Date();
					if (!isNaN(Date.parse(args[0]))) {	//	arg 0 is date string
						d = new Date(args[0]);
						args = Array.prototype.slice.call(arguments, 1);
					}
					args.unshift(d);
					return $.date.apply(this, args);
				}
				// arg 0 is a date object
				if (args[0] instanceof Date) {
					var d = $.date(args[0]);
					if (typeof args[1] == 'string') {
						if (d[args[1]]) {	//	is method call
							var m = args[1];
							args = args.slice(2);
							return d[m].apply(d, args);
						}
						else if (/compound|constants|pretty/.test(args[1])) {
							
						}
						//console.log("\t\t\t", [d, 'format'].concat(args.slice(1)))
						return $.date.apply(this, [d, 'format'].concat(args.slice(1)));
					}
					
				}
			}
			throw new Error("Incorrect Parameters:\t" + JSON.stringify(args));
		}
	});
	$.date.methods = {
		'addYears': function(v) { this.setFullYear(this.getFullYear() + parseFloat(v)); return $.date(this); },
		'addMonths': function(v) { this.setMonth(this.getMonth() + parseFloat(v)); return $.date(this); },
		'addWeeks': function(v) { this.addDays(7 * parseFloat(v)); return $.date(this); },
		'addDays': function(v) { this.setDate(this.getDate() + parseFloat(v)); return $.date(this); },
		'addHours': function(v) { this.setHours(this.getHours() + parseFloat(v)); return $.date(this); },
		'addMinutes': function(v) { this.setMinutes(this.getMinutes() + parseFloat(v)); return $.date(this); },
		'addSeconds': function(v) { this.setSeconds(this.getSeconds() + parseFloat(v)); return $.date(this); },
		'getDayName': function(shortForm) {
			var days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
			return shortForm ? days[this.getDay()].substr(0,3) : days[this.getDay()];
		},
		'getMonthName': function(shortForm) {
			var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
			return shortForm ? months[this.getMonth()].substr(0,3) : months[this.getMonth()];
		},
		'getWeek': function() {
			var a = new Date(this.getFullYear(), 0, 1);
			return Math.ceil(((this - a) / 864E5 + a.getDay() + 1) / 7);
		},
		'stdTimezoneOffset': function() {
			var a = new Date(this.getFullYear(), 0, 1),
				b = new Date(this.getFullYear(), 6, 1);
			return Math.max(a.getTimezoneOffset(), b.getTimezoneOffset());
		},
		'dst': function() {
			return this.getTimezoneOffset() < this.stdTimezoneOffset();
		}
	}
	$.date.formats = {
		/*	DAY	*/
		'd': function() { var a = this.getDate(); return a > 9 ? a : '0' + a; },
		'D': function() { return this.getDayName(this, true); },
		'j': function() { return this.getDate(); },
		'l': function() { return this.getDayName(this); },
		'N': function() { return this.getDay() + 1; },
		'S': function() {
			var suffixes = [ 'st', 'nd', 'rd', 'th' ],
				a = this.getDate()
			if (a == 1 || a == 21 || a ==31) return "st";
			else if (a == 2 || a == 22) return "nd";
			else if (a == 3 || a == 23) return "rd";
			return "th";
		},
		'w': function() { return this.getDay(); },
		'z': function() { return Math.round(Math.abs((this.getTime() - new Date('1/1/' + this.getFullYear()).getTime())/(8.64e7))); },
		/*	WEEK	*/
		'W': function() { return this.getWeek(this); },
		/*	MONTH	*/
		'F': function() { return this.getMonthName(this); },
		'm': function() { var a = this.getMonth() + 1; return a > 9 ? a : '0' + a; },
		'M': function() { return this.getMonthName(this, true); },
		'n': function() { return this.getMonth() + 1; },
		't': function() { return new Date(this.getFullYear(), this.getMonth()+1, 0).getDate() },
		/*	YEAR	*/
		'L': function() { var a = this.getFullYear(); return 0 == a % 4 && 0 != a % 100 || 0 == a % 400; },
		'o': function() { return parseInt(this.getFullYear()); },	//	todo: base on week's parent year
		'Y': function() { return parseInt(this.getFullYear()); },
		'y': function() { return parseInt((this.getFullYear()+'').substr(-2)); },
		/*	TIME	*/
		'a': function() { return this.getHours() >= 12 ? "pm" : "am"; },
		'A': function() { return this.getHours() >= 12 ? "PM" : "AM"; },
		'B': function() { return "@"+("00"+Math.floor((((this.getHours()+1)%24*60+this.getMinutes())*60+this.getSeconds()+(this.getMilliseconds()*0.001))/86.4)).slice(-3); },
		'g': function() { var a = this.getHours(); return a <= 12 ? a : a - 12; },	//	12-hour format of an hour without leading zeros
		'G': function() { return this.getHours(); },	//	24-hour format of an hour without leading zeros
		'h': function() { var a = this.getHours(); a = a <= 12 ? a : a - 12; return a > 9 ? a : '0' + a; },	//		12-hour format of an hour with leading zeros
		'H': function() { var a = this.getHours(); return a > 9 ? a : '0' + a; },	//		24-hour format of an hour with leading zeros
		'i': function() { var a = this.getMinutes(); return a > 9 ? a : '0' + a; },	//	Minutes with leading zeros
		's': function() { var a = this.getSeconds(); return a > 9 ? a : '0' + a; },	//	Seconds, with leading zeros
		'u': function() { return this.getMilliseconds(); },	//	this is NOT microseconds ... it's JS :P,
		/*	TIMEZONE	*/
		'e': function() { var a = this.toString().match(/ ([A-Z]{3,4})([-|+]?\d{4})/); return a.length > 1 ? a[1] : ''; },
		'I': function() {
			var a = new Date(this.getFullYear(), 0, 1),
				b = new Date(this.getFullYear(), 6, 1),
				c = Math.max(a.getTimezoneOffset(), b.getTimezoneOffset());
			return this.getTimezoneOffset() < c ? 1 : 0;
		},
		'O': function() { var a = this.toString().match(/ ([A-Z]{3,4})([-|+]?\d{4})/); return a.length > 2 ? a[2] : ''; },
		'P': function() { var a = this.toString().match(/ ([A-Z]{3,4})([-|+]?\d{4})/); return a.length > 2 ? a[2].substr(0,3) + ':' + a[2].substr(3,2) : ''; },
		'T': function() { return this.toLocaleString('en', {timeZoneName:'short'}).split(' ').pop(); },	//	may not be reliable on Apple Systems	//	NOTE: Apple Sux
		'Z': function() { return this.getTimezoneOffset() * 60; },
		/*	FULL DATE/TIME	*/
		'c': function() { return this.addHours(new Date(this), -(this.getTimezoneOffset() / 60)).toISOString(); },
		'r': function() { return this.addHours(new Date(this), -(this.getTimezoneOffset() / 60)).toISOString(); },
		'U': function() { return this.getTime() / 1000 | 0; }
	}
	$.date.compound = {
		'commonLogFormat': 'd/M/Y:G:i:s',
		'exif': 'Y:m:d G:i:s',
		'isoYearWeek': 'Y\\WW',
		'isoYearWeek2': 'Y-\\WW',
		'isoYearWeekDay': 'Y\\WWj',
		'isoYearWeekDay2': 'Y-\\WW-j',
		'mySQL': 'Y-m-d h:i:s',
		'postgreSQL': 'Y.z',
		'postgreSQL2': 'Yz',
		'soap': 'Y-m-d\\TH:i:s.u',
		'soap2': 'Y-m-d\\TH:i:s.uP',
		'unixTimestamp': '@U',
		'xmlrpc': 'Ymd\\TG:i:s',
		'xmlrpcCompact': 'Ymd\\tGis',
		'wddx': 'Y-n-j\\TG:i:s'
	}
	$.date.constants = {
		'AMERICAN': 'F j, Y',
		'AMERICANSHORT': 'm/d/Y',
		'AMERICANSHORTWTIME': 'm/d/Y h:i:sA',
		'ATOM': 'Y-m-d\TH:i:sP',
		'COOKIE': 'l, d-M-Y H:i:s T',
		'EUROPEAN': 'j F Y',
		'EUROPEANSHORT': 'd.m.Y',
		'EUROPEANSHORTWTIME': 'd.m.Y H:i:s',
		'ISO8601': 'Y-m-d\TH:i:sO',
		'LEGAL': 'j F Y',
		'RFC822': 'D, d M y H:i:s O',
		'RFC850': 'l, d-M-y H:i:s T',
		'RFC1036': 'D, d M y H:i:s O',
		'RFC1123': 'D, d M Y H:i:s O',
		'RFC2822': 'D, d M Y H:i:s O',
		'RFC3339': 'Y-m-d\TH:i:sP',
		'RSS': 'D, d M Y H:i:s O',
		'W3C': 'Y-m-d\TH:i:sP'
	}
	$.date.pretty = {
		'pretty-a': 'g:i.sA l jS \\o\\f F, Y',
		'pretty-b': 'g:iA l jS \\o\\f F, Y',
		'pretty-c': 'n/d/Y g:iA',
		'pretty-d': 'n/d/Y',
		'pretty-e': 'F jS - g:ia',
		'pretty-f': 'g:iA',
	}
	$.date.methods.format = function(str, utc) {
		if (str) {
			if (str == 'compound') {
				if (utc === false) return this.format.compound;
				var r = {};
				for (var x in $.date.compound) r[x] = this.format($.date.compound[x]);
				return r;
			}
			else if ($.date.compound[str]) return this.format($.date.compound[str], utc);
			if (str == 'constants') {
				if (utc === false) return this.format.constants;
				var r = {};
				for (var x in $.date.constants) r[x] = this.format($.date.constants[x]);
				return r;
			}
			else if ($.date.constants[str]) return this.format($.date.constants[str], utc);
			if (str == 'pretty') {
				if (utc === false) return this.format.pretty;
				var r = {};
				for (var x in $.date.pretty) r[x] = this.format($.date.pretty[x]);
				return r;
			}
			else if ($.date.pretty[str]) return this.format($.date.pretty[str], utc);
			var ret = str.split(''), lc = '';
			for (var x in ret) {
				var c = ret[x];
				if ((c && /[a-z]/i.test(c)) && !(/\\/.test(lc + c))) {
					var rx = new RegExp(c, 'g');
					ret[x] = $.date.formats[c] ? $.date.formats[c].apply(this) : c;
				}
				lc = ret[x];
			}
			return ret.join('').replace(/\\/g, '');
		}
		return str;
	}
})(jQuery);