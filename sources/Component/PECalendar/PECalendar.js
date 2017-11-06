// JScript source code
/**
Persian & English Date Picker 
Base on EnglishDatePicker: Julian Robichaux ,http://www.nsftools.com
Enayat Rajabi
Douran Software Technologies
version 1.0: March 2005( Esfand 1383)
version 1.1: April 2005( Farvardin 1384)
*/

var datePickerDivID = "datepicker";
var iFrameDivID = "datepickeriframe";
var PersianFlag=true;
var FinalDate=new Date();

var SelectStr;
var InitialYear=1300;
var FinalYear=1450;
var En_InitialYear=1900;
var En_FinalYear=2500;
// these variables define the date formatting we're expecting and outputting.
// If you want to use a different format by default, change the defaultDateSeparator
// and defaultDateFormat variables either here or on your HTML page.

var defaultDateSeparator = "/";		// common values would be "/" or "."
var defaultDateFormat = "ymd";	// valid values are "mdy", "dmy", and "ymd"
var dateSeparator = defaultDateSeparator;
var dateFormat = defaultDateFormat;

// A New Class For Shmasi Date,cuz English function doesn't work for shamsi date
function MyShamsi(ShamsiYear,ShamsiMonth,ShamsiDay){
this.ShamsiYear=ShamsiYear;
this.ShamsiMonth=ShamsiMonth;
this.ShamsiDay=ShamsiDay;
}
function getFullYear(){
	with(this)
		return parseInt(ShamsiYear);
}
function getMonth(){
	with(this)
		return parseInt(ShamsiMonth);
}
function getDate(){
	with(this)
		return parseInt(ShamsiDay);
}
function RzsetDate(day){
	with(this)
		ShamsiDay=day;
}
  MyShamsi.prototype.getFullYear=getFullYear;
  MyShamsi.prototype.getMonth=getMonth;
  MyShamsi.prototype.getDate=getDate;
  MyShamsi.prototype.RzsetDate=RzsetDate;
	  
// Main function for display table of calendar
function displayDatePicker(dateFieldName, displayBelowThisObject, dtFormat, dtSep,Lang)
{
  var targetDateField = document.getElementsByName(dateFieldName).item(0);

  // if we weren't told what node to display the datepicker beneath, just display it
  // beneath the date field we're updating
  if (!displayBelowThisObject)
    displayBelowThisObject = targetDateField;
  
  // if a date separator character was given, update the dateSeparator variable
  if (dtSep)
    dateSeparator = dtSep;
  else
    dateSeparator = defaultDateSeparator;
  
  // if a date format was given, update the dateFormat variable
  if (dtFormat)
    dateFormat = dtFormat;
  else
    dateFormat = defaultDateFormat;
  
  var x = displayBelowThisObject.offsetLeft;
  var y = displayBelowThisObject.offsetTop + displayBelowThisObject.offsetHeight;
  
  // deal with elements inside tables and such
  var parent = displayBelowThisObject;
  while (parent.offsetParent) {
    parent = parent.offsetParent;
    x += parent.offsetLeft;
    y += parent.offsetTop;
  }
  //for language type
  if(Lang=="fa-IR")
  	targetDateField.dir="rtl";
  else if(Lang=="en-US"){
  	 PersianFlag=false;
	 targetDateField.dir="ltr";
  }
  else {
	  PersianFlag=false;
	 targetDateField.dir="ltr";
  }
    
	
  //return
  drawDatePicker(targetDateField, x, y);
}


/**
Draw the datepicker object (which is just a table with calendar elements) at the
specified x and y coordinates, using the targetDateField object as the input tag
that will ultimately be populated with a date.

This function will normally be called by the displayDatePicker function.
*/
function drawDatePicker(targetDateField, x, y)
{

var dt;
if (PersianFlag==true)
	 dt = getFieldDate(targetDateField.value);
else 
	 dt = EgetFieldDate(targetDateField.value);

	
  // the datepicker table will be drawn inside of a <div> with an ID defined by the
  // global datePickerDivID variable. If such a div doesn't yet exist on the HTML
  // document we're working with, add one.
  if (!document.getElementById(datePickerDivID)) {
    // don't use innerHTML to update the body, because it can cause global variables
    // that are currently pointing to objects on the page to have bad references
    //document.body.innerHTML += "<div id='" + datePickerDivID + "' class='dpDiv'></div>";
    var newNode = document.createElement("div");
    newNode.setAttribute("id", datePickerDivID);
    newNode.setAttribute("class", "dpDiv");
    newNode.setAttribute("style", "visibility: hidden;");
    document.body.appendChild(newNode);
  }
  
  // move the datepicker div to the proper x,y coordinate and toggle the visiblity
  var pickerDiv = document.getElementById(datePickerDivID);
  pickerDiv.style.position = "absolute";
  pickerDiv.style.left = x + "px";
  pickerDiv.style.top = y + "px";
  pickerDiv.style.visibility = (pickerDiv.style.visibility == "visible" ? "hidden" : "visible");
  pickerDiv.style.zIndex = 10000;
  
  // draw the datepicker table base on language
  
  if (PersianFlag==true)
	refreshDatePicker(targetDateField.name, dt.getFullYear(), dt.getMonth(), dt.getDate() );
  else 
    refreshEDatePicker(targetDateField.name, dt.getFullYear(),dt.getMonth(), dt.getDate() );
 
 //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
 //Your Final Date is a Date Object Which is in the ( FinalDate ) Object
 
ToMiladi(dt.getFullYear(),dt.getMonth()+1, dt.getDate())
//alert(FinalDate.getFullYear()+'/'+FinalDate.getMonth()+'/'+FinalDate.getDate());

return FinalDate;
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

 }


/**
This is the function that actually draws the datepicker calendar.
*/
function refreshDatePicker(dateFieldName, year, month, day)
{

 var dayArrayShort = new Array('ش', 'ي', 'د', 'س', 'چ', 'پ', 'ج');
 var dayArrayMed = new Array('شنب', 'يکش', 'دوش', 'سه ش', 'چها', 'پنج', 'جمع');
 var dayArrayLong = new Array('شنبه', 'يکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه');
 var monthArrayShort = new Array('فرو', 'ارد', 'خرد', 'تير', 'مرد', 'شهر', 'مهر', 'آبا', 'آذر', 'دي', 'بهم', 'اسف');
 var monthArrayMed = new Array('فرور', 'اردي', 'خرداد', 'تير', 'مرداد', 'شهريو', 'مهر', 'آبان', 'آذر', 'دي', 'بهمن', 'اسفند');
 var monthArrayLong = new Array("فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور","مهر","آبان","آذر","دي","بهمن","اسفند");
  
 var TodayYear;
 var TodayMonth;
 var TodayDay;
 
  // if no arguments are passed, use today's date; otherwise, month and year
  // are required (if a day is passed, it will be highlighted later)
  var thisDay = new Date();
 
 //this line convert Miladi Date to shamsi date
  var ShamsiDate=ToShamsi(thisDay);
//keep Today Date in variables
  TodayYear=ShamsiDate.getFullYear();
  TodayMonth=ShamsiDate.getMonth();
  TodayDay=ShamsiDate.getDate();

//parse the date which selected by user
  if ((month >= 0) && (year > 0)) {
	ShamsiDate=new MyShamsi(year,month,1);
  } else {
    day = ShamsiDate.getDate();
	ShamsiDate.RzsetDate(1);
  }

  // the calendar will be drawn as a table
  // you can customize the table elements with a global CSS style sheet,
  // or by hardcoding style and formatting elements below
  var crlf = "\r\n";
  var TABLE = "<table cols=7 class='dpTable' dir='rtl' >" + crlf;
  var xTABLE = "</table>" + crlf;
  var TR = "<tr class='dpTR'>";
  var TR_title = "<tr class='dpTitleTR'>";
  var TR_days = "<tr class='dpDayTR'>";
  var TR_todaybutton = "<tr class='dpTodayButtonTR'>";
  var xTR = "</tr>" + crlf;
  var TD = "<td class='dpTD'";	// leave this tag open, because we'll be adding an onClick event
  var TD_title = "<td colspan=5 class='dpTitleTD'>";
  var TD_buttons = "<td class='dpButtonTD'>";
  var TD_todaybutton = "<td colspan=7 class='dpTodayButtonTD'>";
  var TD_days = "<td class='dpDayTD'>";
  var TD_selected = "<td class='dpDayHighlightTD'";	// leave this tag open, because we'll be adding an onClick event
  var xTD = "</td>" + crlf;
  var DIV_title = "<div class='dpTitleText'>";
  var DIV_selected = "<div class='dpDayHighlight'>";
  var xDIV = "</div>";
  
  var TD_Holiday="<td class='dpHolidayTD' ";
  var xTD_Holiday="</td>" + crlf;
  
  var TD_Today="<td class='dpTodayTD' ";
  
  // start generating the code for the calendar table
  var html = TABLE;
  var DayCount=0; //day counter in month
  var FirstDay; //index of first day of month
  var MonthDays; //numbers of month days
  
   
   var i;
  // this is the title bar, which displays the month and the buttons to
  // go back to a previous month or forward to the next month
  html += TR_title;
  html += TD_buttons + getButtonCode(dateFieldName, ShamsiDate, 1, "&lt;") + xTD;
  html+=TD_title + DIV_title;
  html+="<select style='font-family: Tahoma; font-size: 9pt; ' name=\"MonthSelector\" onChange=\"javascript:refreshDatePicker('"+dateFieldName+"','"+ShamsiDate.getFullYear()+"',this.selectedIndex,'"+ShamsiDate.getDate()+"');\">\n";	
	for (i=0;i<12;i++)
	{	
		if (i==ShamsiDate.getMonth())
			SelectStr="Selected";
		else
			SelectStr="";	
		html+="<option "+SelectStr+" value > "+ monthArrayLong[i]+" \n";
	}
	html+="</select>" ;
  
 
    html+="&nbsp;<select style='font-family: Tahoma; font-size: 9pt;' name=\"YearSelector\" onChange=\"javascript:refreshDatePicker('"+dateFieldName+"',this.selectedIndex+"+InitialYear+",'"+ShamsiDate.getMonth()+"','"+ShamsiDate.getDate()+"');\">\n";	
	for (i=InitialYear;i<=FinalYear;i++)
	{	
		if (i==ShamsiDate.getFullYear())
			SelectStr="Selected";
		else
			SelectStr="";	
		html+="<option "+SelectStr+" value > "+PersianNumber(i)+" \n";
	}
	html+="</select>"+xDIV+xTD ;
  
    html += TD_buttons + getButtonCode(dateFieldName, ShamsiDate, -1, "&gt;") + xTD;
  html += xTR;
  
  // this is the row that indicates which day of the week we're on
  html += TR_days;
  for(i = 0; i < dayArrayShort.length; i++)
    html += TD_days + dayArrayShort[i] + xTD;
  html += xTR;
  
  // now we'll start populating the table with days of the month
  html += TR;
  
  // first, the leading blanks
  //numbers of blank day
 
  MonthDays=GetMonDays(ShamsiDate.getFullYear(),ShamsiDate.getMonth());
  FirstDay=ToMiladi(ShamsiDate.getFullYear(),ShamsiDate.getMonth()+1,1)%7;
  
  //put blank TD 
  for (i = 0; i < FirstDay; i++){
    html += TD + "&nbsp;" + xTD;
    DayCount++; 
  }
  
  // now, the days of the month
  // current day of month
  dayNum = ShamsiDate.getDate();
  
  do {
    DayCount++; 
	
    TD_onclick = " onclick=\"updateDateField('" + dateFieldName + "', '" + getDateString(ShamsiDate) +"', '" + ShamsiDate.getFullYear()+"', '" + (ShamsiDate.getMonth()+1)+"', '" + ShamsiDate.getDate()+"');\">";
 	 
  	if (dayNum == day){
      html += TD_selected + TD_onclick + DIV_selected + dayNum + xDIV + xTD;	
	  if ( DayCount % 7 == 0 ) 
    		 html += xTR + TR;
	}
	else if ( DayCount % 7 == 0 ){
	     html += TD_Holiday +TD_onclick+ dayNum + xTD_Holiday;
    		 html += xTR + TR;
	}
	else if(dayNum==TodayDay && TodayMonth==ShamsiDate.getMonth() && TodayYear==ShamsiDate.getFullYear() ){
	  html += TD_Today +TD_onclick+ dayNum + xTD;
	}
	else
      html += TD + TD_onclick + dayNum + xTD;
      
    // increment the day
    dayNum=dayNum+1;    
    ShamsiDate.RzsetDate(dayNum);
   
  } while (dayNum <=MonthDays )
  
  html += xTR;
 
  html += TR_todaybutton + TD_todaybutton;
  html += "<button class='dpTodayButton' onClick='refreshDatePicker(\"" + dateFieldName + "\");'>ماه جاري</button> ";
  html += "<button class='dpTodayButton' onClick='updateDateField(\"" + dateFieldName + "\");'>خروج</button>";
  html += xTD + xTR;
  
  // and finally, close the table
  html += xTABLE;
  
  document.getElementById(datePickerDivID).innerHTML = html;
  
  // add an "iFrame shim" to allow the datepicker to display above selection lists
  adjustiFrame();
  
}

/**
Convenience function for writing the code for the buttons that bring us back or forward
a month.
*/
function getButtonCode(dateFieldName,dateVal, adjust, label)
{
  var newMonth = (dateVal.getMonth() + adjust) % 12;
  var newYear =dateVal.getFullYear() + parseInt((dateVal.getMonth() + adjust) / 12);
  
  if (newMonth <0) {
    newMonth += 12;
    newYear += -1;
  }
  // Each language shows its own table format calendar
  if (PersianFlag)
	return "<button class='dpButton' onClick='refreshDatePicker(\"" + dateFieldName + "\", " + newYear + ", " + newMonth + ");'>" + label + "</button>";
  else 
  	return "<button class='dpButton' onClick='refreshEDatePicker(\"" + dateFieldName + "\", " + newYear + ", " + newMonth + ");'>" + label + "</button>";
}

/**
Convert a JavaScript Date object to a string, based on the dateFormat and dateSeparator
variables at the beginning of this script library.
*/
function getDateString(dateVal)
{
  //if format date is YYYYMMDD then, return persian date format with persian numbers
  //else return normal Numbers which its format
  var dayString = "00" +dateVal.getDate();    
  var monthString = "00" + (dateVal.getMonth()+1);   
  dayString = dayString.substring(dayString.length - 2);
  monthString = monthString.substring(monthString.length - 2);
 
  switch (dateFormat) {
    case "dmy" :
     	  if (PersianFlag)
		  	return  "&#8234;"+dayString+"&#8234;"+ dateSeparator +"&#8234;"+ monthString + "&#8234;"+dateSeparator +"&#8234;"+ dateVal.getFullYear();
          else 
		  	return dayString + dateSeparator + monthString + dateSeparator + dateVal.getFullYear();
    case "ymd" :
	 default :
	      if (PersianFlag)
		 	return  "&#8234;"+dateVal.getFullYear()+"&#8234;"+ dateSeparator +"&#8234;"+ monthString + "&#8234;"+dateSeparator +"&#8234;"+ dayString;
	      else	
	        return  dateVal.getFullYear()+ dateSeparator + monthString + dateSeparator + dayString;	
	case "mdy" :
		  if (PersianFlag) 
		  	return  "&#8234;"+monthString+"&#8234;"+ dateSeparator +"&#8234;"+ dayString + "&#8234;"+dateSeparator +"&#8234;"+dateVal.getFullYear() ;
 		  else	
		    return monthString + dateSeparator + dayString + dateSeparator + dateVal.getFullYear();      
  }
}

/**
Convert a string to a Shamsi Date object.
*/
function getFieldDate(dateString)
{
  var dateVal;
  var dArray;
  var d, m, y;
  
  try {
    dArray = splitDateString(dateString);
    if (dArray) {
      switch (dateFormat) {
        case "dmy" :
          d= parseInt(dArray[2], 10);
          m = parseInt(dArray[1], 10) - 1;
          y = parseInt(dArray[0], 10);
		  break;
        case "ymd" :
          d= parseInt(dArray[0], 10);
          m = parseInt(dArray[1], 10) - 1;
          y = parseInt(dArray[2], 10);	  
          break;
        case "mdy" :
        default :
          d = parseInt(dArray[1], 10);
          m = parseInt(dArray[0], 10) - 1;
          y = parseInt(dArray[2], 10);
          break;
      }
      dateVal=new MyShamsi(y,m,d);	

	} else {
      dateVal = ToShamsi(new Date(dateString));
	}
  } catch(e) {
	dateVal = ToShamsi(new Date());
  }
  
  return dateVal;
}


/**
Try to split a date string into an array of elements, using common date separators.
If the date is split, an array is returned; otherwise, we just return false.
*/
function splitDateString(dateString)
{
  var dArray;
  if (dateString.indexOf("/") >= 0)
    dArray = dateString.split("/");
  else if (dateString.indexOf(".") >= 0)
    dArray = dateString.split(".");
  else if (dateString.indexOf("-") >= 0)
    dArray = dateString.split("-");
  else if (dateString.indexOf("\\") >= 0)
    dArray = dateString.split("\\");
  else
    dArray = false;
  
  return dArray;
}

/**
Update the field with the given dateFieldName with the dateString that has been passed,
and hide the datepicker. If no dateString is passed, just close the datepicker without
changing the field value.
**/
function updateDateField(dateFieldName, dateString ,year,month,day)
{ 

  var TextDate="";
  var dayString = "00" +day;   
  var monthString = "00" + month;   
  dayString = dayString.substring(dayString.length - 2);
  monthString = monthString.substring(monthString.length - 2);
  TextDate=dayString+dateSeparator+monthString+dateSeparator+year;
  
  var targetDateField = document.getElementsByName(dateFieldName).item(0);

  if(dateString){
	  if(PersianFlag)
  		targetDateField.value =TextDate;
	  else 
    	targetDateField.value =dateString;
  }
	
  document.getElementById(datePickerDivID).style.visibility = "hidden"; 
  adjustiFrame();
  targetDateField.focus();
  
  // after the datepicker has closed, optionally run a user-defined function called
  // datePickerClosed, passing the field that was just updated as a parameter
  // (note that this will only run if the user actually selected a date from the datepicker)
  if ((dateString) && (typeof(datePickerClosed) == "function"))
    datePickerClosed(targetDateField);
}

/**
Use an "iFrame shim" to deal with problems where the datepicker shows up behind
selection list elements, if they're below the datepicker. The problem and solution are
described at:
*/
function adjustiFrame(pickerDiv, iFrameDiv)
{
  if (!document.getElementById(iFrameDivID)) {
    // don't use innerHTML to update the body, because it can cause global variables
    // that are currently pointing to objects on the page to have bad references
    //document.body.innerHTML += "<iframe id='" + iFrameDivID + "' src='javascript:false;' scrolling='no' frameborder='0'>";
    var newNode = document.createElement("iFrame");
    newNode.setAttribute("id", iFrameDivID);
    newNode.setAttribute("src", "javascript:false;");
    newNode.setAttribute("scrolling", "no");
    newNode.setAttribute("frameborder", "0");
    document.body.appendChild(newNode);
  }
  
  if (!pickerDiv)
    pickerDiv = document.getElementById(datePickerDivID);
  if (!iFrameDiv)
    iFrameDiv = document.getElementById(iFrameDivID);
  
  try {
    iFrameDiv.style.position = "absolute";
    iFrameDiv.style.width = pickerDiv.offsetWidth;
    iFrameDiv.style.height = pickerDiv.offsetHeight;
    iFrameDiv.style.top = pickerDiv.style.top;
    iFrameDiv.style.left = pickerDiv.style.left;
    iFrameDiv.style.zIndex = pickerDiv.style.zIndex - 1;
    iFrameDiv.style.visibility = pickerDiv.style.visibility;
  } catch(e) {
  }
}

//return numbers of month days
function GetMonDays(thisYear,thisMonth)//Get number of days in a month
{
	var DaysInMonth=[31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
	
	//Is a Leap Year?
	if (((((((thisYear-474)% 2820) + 474) + 38) * 682) % 2816) < 682)
	{
		DaysInMonth[11]=30;
	}	
	
	return DaysInMonth[thisMonth];	
}

//return day index of shamsi date, 1383/12/14 is friday( or 7th day of week)
// first convert date to Miladi,then get day index of miladi date

function ToMiladi(Y, M, D){


 //********* Leap year *******************

    var flag=false;
		
	if (D==14) flag=true;
	if(Y ==1378){
        if(M==12 && D==10){
            Y = 2000;
			M = 2;
			D = 29;
			return;
        }
        if( M == 12 && D > 10){ 
            D = D - 1;
        }
	}
	else if(Y == 1379){
        D = D - 1;
        if(D == 0){
            M = M - 1;
            if (M > 0 && M < 7)
				D = 31;
            if (M > 6) 
			  D = 30;
              if( M == 0){
                D = 29;
                M = 12;
                Y = Y - 1;
              }
        }
   }
    if(M < 10 || (M == 10 && D < 11))
        Y = Y + 621;
     else
        Y = Y + 622;
    
    switch (M){
       
	    case 1:
            if (D < 12){
                M = 3;
				D = D + 20;
            }
			else{
                M = 4;
				D = D - 11;
			}
			break;
        case 2:
            if( D < 11){
                M = 4;
				D = D + 20;
            }
			else{
                M = 5;
				D = D - 10;
            }
			break;			
        case 3:
            if (D < 11){
                M = 5;
				D = D + 21;
            }
			else{
                M = 6;
				D = D - 10;
			}
			break;
        case 4:
			if (D < 10){
                M = 6;
				D = D + 21;
            }
			else{
                M = 7;
				D = D - 9;
			}
			break;
        case 5 :
            if (D < 10){
                M = M+2;
				D = D +22;
            }
			else{
                M = M+3;
				D = D - 9;
			}
			break;
        case 6 :
            if (D < 10){
                M = M+2;
				D = D +22;
            }
			else{
                M = M+3;
				D = D - 9;
			}
			break;
        case 8 :
            if (D < 10){
                M = M+2;
				D = D +22;
            }
			else{
                M = M+3;
				D = D - 9;
			}
			break;
        
		case 7:
            if (D < 9){
                M = 9;
				D = D +22;
            }
			else{
                M = 10;
				D = D - 8;
			}
			break;
		case 9:
		    if (D < 10){
                M =11;
				D = D +21;
            }
			else{
                M = 12;
				D = D - 9;
			}
			break;
        case 10:
            if (D < 11){
                M =12;
				D = D +21;
            }
			else{
                M = 1;
				D = D - 10;
			}
			break;
        case 11:
            

	        if( D < 12){
                M = 1;
				D = D + 20;
			}
            else{
                M = 2;
				D = D - 11;
            }
			break;
        case 12:
            if( D < 10){
                M = 2;
				D = D + 19;
            }
			else{
                M = 3;
				D = D - 9;
		    }
    }
	var MiladiDate;
	MiladiDate=new Date();
	MiladiDate.setYear(Y);
	MiladiDate.setMonth(M-1);
	MiladiDate.setDate(D);
FinalDate=new Date(Y,M-1,D);
	return MiladiDate.getDay()+1;
}
// convert Miladi Date To Hijri Shamsi Date


function ToShamsi(mydate){
var day="";
var month="";
var myweekday="";
var year="";
var timerID = null;
var timerRunning = false;
var dayf="";
var sal="";
var roozf="";
var mahf="";
var ShamsiDate;

myday = mydate.getDay();
mymonth = mydate.getMonth();
myweekday= mydate.getDate();
weekday= myweekday;
myyear= mydate.getYear();
year = myyear;

if ( ((mymonth>=0)&& (mymonth <= 1)) || ((mymonth == 2) && (myweekday <= 20)))
{
   sal = myyear - 622;
   s1 = true;
}
else
{
   sal = myyear - 621;
   s1 = false;
}


if ((myyear%4 == 0) && (myyear%400 != 0))
kabise = true;
else
kabise=false;

if (((myyear - 1) % 4 == 0) && ((myyear - 1)%400 != 0))
kabiseold = true;
else kabiseold=false;

if (myyear == 2000)
   kabise = true;
   
if (myyear == 2001)
   kabiseold = true;

shamsi=new Array(12);
shamsi[0] = 0;
shamsi[1] = 31;
shamsi[2] = 62;
shamsi[3] = 93;
shamsi[4] = 124;
shamsi[5] = 155;
shamsi[6] = 186;
shamsi[7] = 216;
shamsi[8] = 246;
shamsi[9] = 276;
shamsi[10] = 306;
shamsi[11] = 336;

if (kabise)
   kab = 1;
else
   kab = 0;

miladi=new Array(12);
miladi[0] = 0;
miladi[1] = 31 + kab;
miladi[2] = 59 + kab;
miladi[3] = 90 + kab;
miladi[4] = 120 + kab;
miladi[5] = 151 + kab;
miladi[6] = 181 + kab;
miladi[7] = 212 + kab;
miladi[8] = 243 + kab;
miladi[9] = 273 + kab;
miladi[10] = 304 + kab;
miladi[11] = 334 + kab;

if (kabiseold)
   kab1 = 1;
else
   kab1 = 0;

if (s1)
   x1 = myweekday + miladi[mymonth] + kab1;
else
   x1 = myweekday + miladi[mymonth];

if (x1< 80)
x1 = 365 - 79 + x1;
   else if (x1> 80)
        x1 = x1 - 79;
   else if (x1=80)
        {
        if(s1)
           x1 = 365 - 79 + x1;
        else
           x1 = x1 - 79;
        }

ss1 = true;
i = 12;
while (i > 0 && ss1)
{
   i = i - 1;
   if (x1 <= shamsi[i])
     ss1=true;
   else ss1=false;  
}
var ShamsiDate=new MyShamsi(sal,i,(x1 - shamsi[i]));

//ShYear=sal;
//ShMonth=i;
//ShDay=(x1 - shamsi[i]);

return ShamsiDate;
}

function refreshEDatePicker(dateFieldName, year, month, day)
{
  var dayArrayShort = new Array('Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa');
  var dayArrayMed = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
  var dayArrayLong = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  var monthArrayShort = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
  var monthArrayMed = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec');
  var monthArrayLong = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
  
  // if no arguments are passed, use today's date; otherwise, month and year
  // are required (if a day is passed, it will be highlighted later)
  var thisDay = new Date();
  var TodayDay = new Date();
  
  if ((month >= 0) && (year > 0)) {
    thisDay = new Date(year, month, 1);
  } else {
    day = thisDay.getDate();
    thisDay.setDate(1);
  }
  
  // the calendar will be drawn as a table
  // you can customize the table elements with a global CSS style sheet,
  // or by hardcoding style and formatting elements below
  var crlf = "\r\n";
  var TABLE = "<table cols=7 class='dpTable' >" + crlf;
  var xTABLE = "</table>" + crlf;
  var TR = "<tr class='dpTR'>";
  var TR_title = "<tr class='dpTitleTR'>";
  var TR_days = "<tr class='dpDayTR'>";
  var TR_todaybutton = "<tr class='dpTodayButtonTR'>";
  var xTR = "</tr>" + crlf;
  var TD = "<td class='dpTD'";	// leave this tag open, because we'll be adding an onClick event
  var TD_title = "<td colspan=5 class='dpTitleTD'>";
  var TD_buttons = "<td class='dpButtonTD'>";
  var TD_todaybutton = "<td colspan=7 class='dpTodayButtonTD'>";
  var TD_days = "<td class='dpDayTD'>";
  var TD_selected = "<td class='dpDayHighlightTD'";	// leave this tag open, because we'll be adding an onClick event
  var xTD = "</td>" + crlf;
  var DIV_title = "<div class='dpTitleText'>";
  var DIV_selected = "<div class='dpDayHighlight'>";
  var xDIV = "</div>";
  
  var TD_Today="<td class='dpTodayTD' ";
  
  // start generating the code for the calendar table
  var html = TABLE;
  
  // this is the title bar, which displays the month and the buttons to
  // go back to a previous month or forward to the next month
  html += TR_title;
  html += TD_buttons + getButtonCode(dateFieldName, thisDay, -1, "&lt;") + xTD;  
  html += TD_title + DIV_title;
 
 html+="&nbsp;&nbsp;<select style='font-family: Tahoma; font-size: 9pt; ' name=\"MonthSelector\" onChange=\"javascript:refreshEDatePicker('"+dateFieldName+"','"+thisDay.getFullYear()+"',this.selectedIndex,'"+thisDay.getDate()+"');\">\n";	
	for (i=0;i<12;i++)
	{	
		if (i==thisDay.getMonth())
			SelectStr="Selected";
		else
			SelectStr="";	
		html+="<option "+SelectStr+" value > "+monthArrayLong[i]+" \n";
	}
	html+="</select>";
  
 
  html+="&nbsp;<select style='font-family: Tahoma; font-size: 9pt;' name=\"YearSelector\" onChange=\"javascript:refreshEDatePicker('"+dateFieldName+"',this.selectedIndex+"+En_InitialYear+",'"+thisDay.getMonth()+"','"+thisDay.getDate()+"');\">\n";	
	for (i=En_InitialYear;i<=En_FinalYear;i++)
	{	
		if (i==thisDay.getFullYear())
			SelectStr="Selected";
		else
			SelectStr="";	
		html+="<option "+SelectStr+" value > "+i+" \n";
	}
	html+="</select>"+xDIV+xTD ;
  
   html += TD_buttons + getButtonCode(dateFieldName, thisDay, 1, "&gt;") + xTD;
   html += xTR;
  
  
  // this is the row that indicates which day of the week we're on
  html += TR_days;
  for(i = 0; i < dayArrayShort.length; i++)
    html += TD_days + dayArrayShort[i] + xTD;
  html += xTR;
  
  // now we'll start populating the table with days of the month
  html += TR;
  
  // first, the leading blanks
  for (i = 0; i < thisDay.getDay(); i++)
    html += TD + "&nbsp;" + xTD;
  
  // now, the days of the month
  do {
    dayNum = thisDay.getDate();
    TD_onclick = " onclick=\"updateDateField('" + dateFieldName + "', '" + getDateString(thisDay) + "');\">";
    
    if (dayNum == day)
      html += TD_selected + TD_onclick + DIV_selected + dayNum + xDIV + xTD;
   
    else if(dayNum==TodayDay.getDate() && thisDay.getFullYear()==TodayDay.getFullYear() && TodayDay.getMonth()==thisDay.getMonth())
	  html += TD_Today +TD_onclick+ dayNum + xTD;	
    else
      html += TD + TD_onclick + dayNum + xTD;
    
    // if this is a Saturday, start a new row
    if (thisDay.getDay() == 6)
      html += xTR + TR;
    
    // increment the day
    thisDay.setDate(thisDay.getDate() + 1);
  } while (thisDay.getDate() > 1)
  
  // fill in any trailing blanks
  if (thisDay.getDay() > 0) {
    for (i = 6; i > thisDay.getDay(); i--)
      html += TD + "&nbsp;" + xTD;
  }
  html += xTR;
  
  // add a button to allow the user to easily return to today, or close the calendar
  var today = new Date();
  var todayString = "Today is " + dayArrayMed[today.getDay()] + ", " + monthArrayMed[today.getMonth()] + " " + today.getDate();
  html += TR_todaybutton + TD_todaybutton;
  html += "<button class='dpTodayButton' onClick='refreshEDatePicker(\"" + dateFieldName + "\");'>this month</button> ";
  html += "<button class='dpTodayButton' onClick='updateDateField(\"" + dateFieldName + "\");'>close</button>";
  html += xTD + xTR;
  
  // and finally, close the table
  html += xTABLE;
  
  document.getElementById(datePickerDivID).innerHTML = html;
  // add an "iFrame shim" to allow the datepicker to display above selection lists
  adjustiFrame();
}

// English date convertor, this function convert string to date
function EgetFieldDate(dateString)
{
  var dateVal;
  var dArray;
  var d, m, y;
  
  try {
    dArray = splitDateString(dateString);
    if (dArray) {
      switch (dateFormat) {
        case "dmy" :
          d = parseInt(dArray[0], 10);
          m = parseInt(dArray[1], 10) - 1;
          y = parseInt(dArray[2], 10);
          break;
        case "ymd" :
          d = parseInt(dArray[2], 10);
          m = parseInt(dArray[1], 10) - 1;
          y = parseInt(dArray[0], 10);
          break;
        case "mdy" :
        default :
          d = parseInt(dArray[1], 10);
          m = parseInt(dArray[0], 10) - 1;
          y = parseInt(dArray[2], 10);
          break;
      }

      dateVal = new Date(y, m, d);
    } else {
      dateVal = new Date(dateString);
    }
  } catch(e) {
    dateVal = new Date();
  }
  
  return dateVal;
}
function PersianNumber(num){
    if(num>1000){
      return PersianNumber(parseInt(num/1000))+PersianNumber(parseInt((num%1000)/100))+PersianNumber(parseInt(((num%1000)%100)/10))+PersianNumber(parseInt((((num%1000)%100)%10)));
    }
	switch (num){
	   case 0:
		 num='&#1632;' ;
		 break;
	   case 1:
		 num='&#1633;' ;
		 	 break;
       case 2:
		 num='&#1634;' ;
		 	 break;
	   case 3:
		 num='&#1635;' ;
		 	 break;
	   case 4:
		 num='&#1636;' ;
		 	 break;
	   case 5:
		 num='&#1637;' ;
		 	 break;
	   case 6:
		 num='&#1638;' ;
	 	 break;
	   case 7:
		 num='&#1639;' ;
		 	 break;
	   case 8:
		 num='&#1640;' ;
		 	 break;
	   case 9:
		 num='&#1641;' ;
		 break;
	   case 10:
		 num='&#1633;&#1632;' ;
		 break;
	   case 11:
		 num='&#1633;&#1633;' ;
		 	 break;
       case 12:
		 num='&#1633;&#1634;' ;
		 	 break;
	   case 13:
		 num='&#1633;&#1635;' ;
		 	 break;
	   case 14:
		 num='&#1633;&#1636;' ;
		 	 break;
	   case 15:
		 num='&#1633;&#1637;' ;
		 	 break;
	   case 16:
		 num='&#1633;&#1638;' ;
	 	 break;
	   case 17:
		 num='&#1633;&#1639;' ;
		 	 break;
	   case 18:
		 num='&#1633;&#1640;' ;
		 	 break;
	   case 19:
		 num='&#1633;&#1641;' ;
		 break;
	   case 20:
		 num='&#1634;&#1632;' ;
		 break;
	   case 21:
		 num='&#1634;&#1633;' ;
		 	 break;
       case 22:
		 num='&#1634;&#1634;' ;
		 	 break;
	   case 23:
		 num='&#1634;&#1635;' ;
		 	 break;
	   case 24:
		 num='&#1634;&#1636;' ;
		 	 break;
	   case 25:
		 num='&#1634;&#1637;' ;
		 	 break;
	   case 26:
		 num='&#1634;&#1638;' ;
	 	 break;
	   case 27:
		 num='&#1634;&#1639;' ;
		 	 break;
	   case 28:
		 num='&#1634;&#1640;' ;
		 	 break;
	   case 29:
		 num='&#1634;&#1641;' ;
		 break;
	   case 30:
		 num='&#1635;&#1632;' ;
		 break;
	   case 31:
		 num='&#1635;&#1633;';
	}
	return num;
}

