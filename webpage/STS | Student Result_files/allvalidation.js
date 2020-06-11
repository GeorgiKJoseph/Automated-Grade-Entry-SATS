function formValidation(divName)
{
	var flag=true;
	var select= $("#"+divName+" select");
	for(var i = 0;i<select.length;i++){
		if(select[i].value == "Select" ||select[i].value == "-1" || select[i].value == "" || select[i].value == "ALL"){	
			if(document.getElementById(select[i].id+"3")!=null){
				document.getElementById(select[i].id + "3").style.display = "block";
				flag = false;
			}
		}
	}

	var input= $("#"+divName+" input");
	for(var i = 0;i<input.length;i++){
		if(input[i].value == "" || input[i].value == null){	
			if(document.getElementById(input[i].id+"3")!=null){
				document.getElementById(input[i].id + "3").style.display = "block";
				flag = false;
			}
		}
	}
	
	var textarea= $("#"+divName+" textarea");
	for(var i = 0;i<textarea.length;i++){
		if(textarea[i].value == "" || textarea[i].value == null){	
			if(document.getElementById(textarea[i].id+"3")!=null){
				document.getElementById(textarea[i].id + "3").style.display = "block";
				flag = false;
			}
		}
	}
	
	return flag;
}

function onlyalphabet(inputtxt) {
	var letters = /^[A-Za-z]+$/;
	if (!inputtxt.value == "") {
		if (inputtxt.value.match(letters)) {

			return true;
		} else {

			alert('Please input alphabet characters only & space is not allowed');
			inputtxt.value = "";
			inputtxt.focus();
			return false;
		}
	}
}

function alphanumber(inputtxt) {
	var letters = /^[A-Za-z0-9]+$/;
	if (!inputtxt.value == "") {
		if (inputtxt.value.match(letters)) {

			return true;
		} else {

			alert('Please input alphanumeric values only');
			inputtxt.value = "";
			inputtxt.focus();
			return false;
		}
	}
}
function noKeyInsert(inputtxt) {
	var letters = /^[A-Za-z0-9!$.^&*()_@#]{1,40}$/;
	if (!inputtxt.value == "") {
		if (inputtxt.value.match(letters)) {
			alert('Please input alphanumeric values only');
			inputtxt.value = "";
			inputtxt.focus();
			return false;
			
		} else {

			return true;
		}
	}
}
function alphanumberWithSpecialCharacter(inputtxt) {
	var letters = /^[A-Za-z0-9!$.^&*{}()_@# ]+$/;
	if (inputtxt.value != "") {
		if (inputtxt.value.match(letters)) {
			return true;
		} else {
			alert('Please input proper value.');
			return false;
		}
	}
}

function onlyalphabetwithspace(inputtxt1) 
{
	var letters = /^[A-Za-z ]+$/;
	if (!inputtxt1.value == "") {
		if (inputtxt1.value.match(letters)) {

			return true;
		} else {
			alert('Please input alphabet characters only');
			inputtxt1.value = "";
			inputtxt1.focus();
			return false;
		}
	}
}

function checkFile200kb_pdf(fieldObj) {
	var FileName = fieldObj.value;
	var FileExt = FileName.substr(FileName.lastIndexOf('.') + 1);
	var FileSize = fieldObj.files[0].size;
	var FileSizeMB = (FileSize / 10485760).toFixed(2);

	if (FileExt == "pdf" && FileSize < 204800 || FileExt == "doc"
			&& FileSize < 204800 || FileExt == "docx" && FileSize < 204800) {
		return true;
	} else {

		var error = "Please make sure your file is in pdf,doc or docx format and less than 200 KB.";
		alert(error);
		document.getElementById("birth").value = "";

		return false;
	}
}

function checkXmlFile(fieldObj) {
	var FileName = fieldObj.value;
	var FileExt = FileName.substr(FileName.lastIndexOf('.') + 1);
	var FileSize = fieldObj.files[0].size;
	var FileSizeMB = (FileSize / 10485760).toFixed(2);

	if (FileExt == "xml" && FileSize < 204800 || FileExt == "xlsm" && FileSize < 204800 ) {
		return true;
	} else {

		var error = "Please make sure your file is in xml or xlsm format and less than 200 KB.";
		alert(error);

		return false;
	}
}

function yearlength(form1) {
	var len = form1.value.length;
	if (len < 4) {
		alert("Please enter a valid Year with minimum 4 digits!!");
		form1.value = "";
		form1.focus();
		return false;
	}

	onlynumbers(form1);
}

function percentageformat(num) {
	var re = /^((0|[1-9]\d?)(\.\d{1,2})?|100(\.00?)?)$/;

	if (num.value.match(re)) {
		return true;
	} else {
		alert("Please enter percentage in correct format");
		num.value = "";
		num.focus();
		return false;
	}

}

function aplhaspecial(inputtxt) {
	var ck_alphaspec = /^[A-Za-z!$.^&*()_ ]{1,40}$/;
	if (!inputtxt.value == "") {
		if (inputtxt.value.match(ck_alphaspec)) {

			return true;
		} else {

			alert('Please enter alphabet characters only');
			inputtxt.value = "";
			inputtxt.focus();
			return false;
		}
	}
}

function validateaddress(inputtxta) {
	var ck_alphaspec = /^[A-Za-z0-9!-$.\,\-\/^&*()_ ]{1,40}$/;
	if (!inputtxta.value == "") {
		if (inputtxta.value.match(ck_alphaspec)) {

			return true;
		} else {

			alert('Please enter valid values');
			inputtxta.value = "";
			inputtxta.focus();
			return false;
		}
	}
}

function checkfuturedate(form) 
{
	var monthfield = form.value.split("/")[0];
	var dayfield = form.value.split("/")[1];
	var yearfield = form.value.split("/")[2];
	var tmpdate = dayfield + "/" + monthfield + "/" + yearfield;
	var myDate = new Date(tmpdate);
	var today = new Date();
	if (myDate > today) {
		alert("You cannot enter future date.");
		form.value = "";
		form.focus();
		return true;
	} else {
		return false;
	}

}

function checkinputdate(form) {

	var yearfield = form.value.split("/")[2];
	
	if (yearfield < 1991) {
		alert("You have entered invalid year. Please select the year after 1990.");
		form.value = "";
		return false;
	}

}

function checkpastdate(form) {

	var monthfield = form.value.split("/")[0];
	var dayfield = form.value.split("/")[1];
	var yearfield = form.value.split("/")[2];
	var tmpdate = dayfield + "/" + monthfield + "/" + yearfield;
	var myDate = new Date(tmpdate);
	var today = new Date();

	if ( myDate < today) {
		alert("You cannot enter past date.");
		form.value = "";
		form.focus();
		return true;
	} else {
		return false;
	}

}
function checkPreviousDate(form) {

	var monthfield = form.value.split("/")[0];
	var dayfield = (form.value.split("/")[1])-1;
	var yearfield = form.value.split("/")[2];
	var tmpdate = dayfield + "/" + monthfield + "/" + yearfield;
	var myDate = new Date(tmpdate);
	var today = new Date();
	alert("TODAY"+today);
	alert("myDate"+myDate);

	if ( myDate < today) {
		alert("You cannot enter past date.");
		form.value = "";
		form.focus();
		return true;
	} else {
		return false;
	}

}


function allowtodayfututre(val) {

	var form = val;
	var monthfield = form.value.split("/")[0];
	var dayfield = form.value.split("/")[1];
	var yearfield = form.value.split("/")[2];
	var tmpdate = dayfield + "/" + monthfield + "/" + yearfield;
	// alert(tmpdate);
	var myDate = new Date(tmpdate);
	var today = new Date();

	var todaydate = today.getDate();
	var todaymonth = today.getMonth();
	var todayyear = today.getFullYear();

	var todaydate1 = myDate.getDate();
	var todaymonth1 = myDate.getMonth();
	var todayyear1 = myDate.getFullYear();

	// alert("today only date---->>>>>"+todaydate+"/"+todaymonth+"/"+todayyear);
	var finaltoday = todaydate + "/" + todaymonth + "/" + todayyear;
	var finalmyDate = todaydate1 + "/" + todaymonth1 + "/" + todayyear1;
	// alert("Mydate is-->"+myDate);
	// alert("today is-->"+finaltoday);

	if (myDate > today || finalmyDate == finaltoday) {
		return true;
	} else {
		alert("You cannot enter past date.");
		val.focus();
		return false;
	}
	

}

function ddmmyyyycheck(text) {
	var dateformat = /^(0[1-9]|[12][0-9]|3[01])[\/](?:(0[1-9]|1[012])[\/](19|20)[0-9]{2})$/;
	if (!text.value == "") {
	if (text.value.match(dateformat)) {
		return true;
	} else {
		alert("Please enter Date in DD/MM/YYYY format.");
		text.value = "";

	}
	}
}
function checkFile_img(fieldObj) {
	var FileName = fieldObj.value;
	var FileExt = FileName.substr(FileName.lastIndexOf('.') + 1);
	var FileSize = fieldObj.files[0].size;
	var FileSizeMB = (FileSize / 10485760).toFixed(2);

	if (FileExt == "jpg" && FileSize < 51200 || FileExt == "jpeg" && FileSize < 51200 || FileExt == "png" && FileSize < 51200) {
		return true;
	} else {
		/*
		 * var error = "File type : "+ FileExt+"\n\n"; error += "Size: " +
		 * FileSizeMB + " MB \n\n"; error += "Please make sure your file is in
		 * pdf or doc format and less than 50KB.\n\n";
		 */
		var error = "Please make sure your photo is in JPEG/JPG/PNG format and less than 50KB.";
		alert(error);
		document.getElementById("photo").value = "";

		return false;
	}
}

function checkFile300kb_img(fieldObj) {
	var FileName = fieldObj.value;
	var FileExt = FileName.substr(FileName.lastIndexOf('.') + 1);
	var FileSize = fieldObj.files[0].size;
	var FileSizeMB = (FileSize / 10485760).toFixed(2);

	if (FileExt == "jpg" && FileSize < 307200 || FileExt == "jpeg" && FileSize < 307200 || FileExt == "png" && FileSize < 51200) {
		return true;
	} else {

		var error = "Please make sure your file is in JPEG/JPG/PNG format and less than 300 KB.";
		alert(error);
		document.getElementById("birth").value = "";

		return false;
	}
}

function onlynumbers(form) {
	if (isNaN(form.value)) {
		alert('Please Enter a Number.');
		form.focus();
		form.value = "";
		return false;
	} else
		return true;
}

function pinValidation(pin) {
	var val = pin.value;
	if (val[0] == 0 || val[0] == 9 || val[0] != 5) {
		alert("First digit of Pincode should not be 0 or 9 and only 5 is allowed .");
		pin.value = "";
		return false;
	} 
	else  {
		if (/^\d{6}$/.test(val)) {
			// value is ok, use it
		} else {
			alert("Please enter valid Pincode of length 6");
			pin.value = "";
			return false;
		}

	}

}

/*function validyear(yearvalue) {
	var year=yearvalue.value;
	if (isNaN(year)) {
		alert('Please Enter a Number.');
		return false;
	if (year.length != 4) {
         alert("enter the valid year");
         return false;
    }
	var current_year=new Date().getFullYear();
    if((year < 1715) || (year > current_year))
        {
        alert("Year should be in range 1715 to current year");
        return false;
        }
    return true;
}*/

function pinValidationOther(pin) {
	var val = pin.value;
	if (val[0] == 0 || val[0] == 9 ) {
		alert("First digit of Pincode should not be 0 or 9.");
		pin.value = "";
		return false;
	} 
	else  {
		if (/^\d{6}$/.test(val)) {
			// value is ok, use it
		} else {
			alert("Please enter valid Pincode of length 6");
			pin.value = "";
			return false;
		}

	}

}

function adharValidation(adhar) {
	var val = adhar.value;
	if(null != val && val != ""){
	if (/^\d{12}$/.test(val)) {
		// value is ok, use it
	} else {
		alert("Please enter valid Aadhar No of length 12");
		adhar.value = "";
		return false;
	}
	}
}

function mobileValidation(mble) {
	var val = mble.value;
	if (!mble.value == "") {
		if (/^[0-9]{10,10}$/.test(val)) {
			return true;
		} else {
			alert("Please enter valid mobile number");
			mble.value = "";
			mble.focus();
			return false;
		}
	}
}
function validateEmail(txtinput) {
	var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([A-Za-z]{2,6}(?:\.[a-z]{2})?)$/;
	{
		if (!txtinput.value == "") {
			if (txtinput.value.match(ck_email)) {

				return true;
			} else {
				txtinput.value = "";
				txtinput.focus();
				alert('Please enter valid Email Id.');
				return false;
			}
		}
	}
}

function telephone(inputtxt) {
	var ck_spcl = /^[0-9]{7,15}$/;
	if (inputtxt.value.match(ck_spcl)) {

		return true;
	} else {

		alert('Please input correct number');
		inputtxt.value = "";

		return false;
	}
}

function dateCompare(form1,form) {
//	var form1 = document.getElementById('fromdate'); //from date element's object
	
	var monthfieldbirth = form1.value.split("/")[0];
	var dayfieldbirth = form1.value.split("/")[1];
	var yearfieldbirth = form1.value.split("/")[2];
	var tmpdatebirth = dayfieldbirth + "/" + monthfieldbirth + "/"
			+ yearfieldbirth;
	var myDatebirth = new Date(tmpdatebirth);
	

//	var form = document.getElementById('todate'); // to date element's object
	
	var monthfielddeath = form.value.split("/")[0];
	var dayfielddeath = form.value.split("/")[1];
	var yearfielddeath = form.value.split("/")[2];
	var tmpdatedeath = dayfielddeath + "/" + monthfielddeath + "/"
			+ yearfielddeath;
	var myDatedeath = new Date(tmpdatedeath);

	if (myDatebirth > myDatedeath) {
		
		alert("Please enter valid end date!!");
		form.value = "";
		
	}
	/*else if (myDatebirth < myDatedeath) {
		
		alert("Please enter valid end date1!!");
		form.value = "";
		
	}*/
}
function dateCompareByPassingId(to_date,frm_date) {
	var form1 = document.getElementById('frm_date');
	
	var monthfieldbirth = form1.value.split("/")[0];
	var dayfieldbirth = form1.value.split("/")[1];
	var yearfieldbirth = form1.value.split("/")[2];
	var tmpdatebirth = dayfieldbirth + "/" + monthfieldbirth + "/"+ yearfieldbirth;
	var myDatebirth = new Date(tmpdatebirth);

	var form = document.getElementById('to_date'); // to date element's object
	var monthfielddeath = form.value.split("/")[0];
	var dayfielddeath = form.value.split("/")[1];
	var yearfielddeath = form.value.split("/")[2];
	var tmpdatedeath = dayfielddeath + "/" + monthfielddeath + "/"+ yearfielddeath;
	var myDatedeath = new Date(tmpdatedeath);
	if (myDatebirth > myDatedeath) {
		alert("Please enter valid end date!!");
		form.value = "";
	}

}
function standardCompare(min,max) {

	if (parseInt(min.value) > parseInt(max.value)) {
		
		alert("Please select valid standard!!");
		max.value = "";
		
	}
	
}


function alphanumberwithspace(inputtxt) {
	var letters = /^[A-Za-z0-9 ]+$/;
	if (!inputtxt.value == "") {
		if (inputtxt.value.match(letters)) {
			return true;
		} else {

			alert('Please input alphanumeric values only');
			inputtxt.value = "";
			inputtxt.focus();
			return false;
		}
	}
}


function resetForm(evt)
{
	alert(evt);
	document.getElementById(evt).reset();
}


function aadharValidation(pin) {
	var val = pin.value;

	if (/^\d{12}$/.test(val)) {
		// value is ok, use it
	} else {
		alert("Please enter valid Aadhar Card No");
		pin.value = "";
		return false;
	}

}



function mobilenoValidation(pin) {
	var val = pin.value;
	if (val[0] == 6 || val[0] == 7 || val[0] == 8 || val[0] == 9) {
		if (/^\d{10}$/.test(val)) {
			// value is ok, use it
		} else {
			alert("Please enter valid mobile number");
			pin.value = "";
			return false;
		}
	}else{
		alert("Please enter valid mobile number");
		pin.value = "";
		return false;
	}
}


function checkMaxLength(e,max_length)
{
		var id=e.id;
		var len=e.value.length;
	
		if(parseInt(len) > parseInt(max_length))
			{
				alert("You can not enter more then "+max_length+" characters");
				e.value="";
			}
}
function checkMaxMinLength(e,max_length,min_length)
{
		var id=e.id;
		var len=e.value.length;
	
		if(parseInt(len) > parseInt(max_length))
			{
				alert("You can not enter more then "+max_length+" characters");
				e.value="";
			}
		if(parseInt(len) < parseInt(min_length))
		{
			alert("Please Enter at least "+min_length+" characters");
			e.value="";
		}
}

function hideError(el){
	$('#'+el.id+'3').hide();
}