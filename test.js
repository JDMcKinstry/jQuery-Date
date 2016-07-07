window.d = $.date();
console.log(d);
console.log(new Array(100).join('-'));
try { console.log('$.date()', $.date()); } catch(e) { console.log('$.date()', e); }
try { console.log("$.date(326347200000)", $.date(326347200000)); } catch(e) { console.log("\t\t$.date(326347200000)", e);  }
try { console.log("$.date(1980, 5, 5)", $.date(1980, 5, 5)); } catch(e) { console.log("\t\t$.date(1980, 5, 5)", e);  }
try { console.log("$.date(new Date(1980, 4, 5))", $.date(new Date(1980, 4, 5))); } catch(e) { console.log("\t\t$.date(new Date(1980, 4, 5))",  e); }
try { console.log("$.date('5/5/1980')", $.date('5/5/1980')); } catch(e) { console.log("\t\t$.date('5/5/1980'))", e);  }
console.log(new Array(100).join('-'));
try { console.log("$.date(326347200000, 'getMonthName')", $.date(326347200000, 'getMonthName')); } catch(e) { console.log("\t\t$.date(326347200000, 'getMonthName')", e);  }
try { console.log("$.date(1980, 5, 5, 'getMonthName')", $.date(1980, 5, 5, 'getMonthName')); } catch(e) { console.log("\t\t$.date(1980, 5, 5, 'getMonthName')", e);  }
try { console.log("$.date(new Date(1980, 4, 5), 'getMonthName')", $.date(new Date(1980, 4, 5), 'getMonthName')); } catch(e) { console.log("\t\t$.date(new Date(1980, 4, 5), 'getMonthName')",  e); }
try { console.log("$.date('5/5/1980', 'getMonthName')", $.date('5/5/1980', 'getMonthName')); } catch(e) { console.log("\t\t$.date('5/5/1980', 'getMonthName'), 'getMonthName')", e);  }
try { console.log("$.date('getMonthName')", $.date('getMonthName')); } catch(e) { console.log("\t\t$.date('getMonthName')", e); }
console.log(new Array(100).join('-'));
try { console.log("$.date('pretty')", $.date('pretty')); } catch(e) { console.log("$.date('pretty')", e); }
console.log(new Array(100).join('-'));
try { console.log("$.date('m-d-Y h:i:s')", $.date('m-d-Y h:i:s')); } catch(e) { console.log("$.date('m-d-Y h:i:s')", e); }
console.log(new Array(100).join('-'));
