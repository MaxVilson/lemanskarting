// percentageOfDaysPast = (Days between Start Date and Today) / (Days between Start Date and End Date)
var percentageOfDaysPast = .7;
var strokeDashOffsetValue = 100 - (percentageOfDaysPast * 30);
var countdownBar = $(".js-circle__progress");
countdownBar.css("stroke-dashoffset", strokeDashOffsetValue);
