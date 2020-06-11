//for disabling 
var frmSubmitFlag = 0;




function submitform(frmObj) {
	if (frmSubmitFlag == 0) {
		showProgressbar();
		frmSubmitFlag = 1;
		frmObj.submit();
	} else {
		alert("Please Wait while your Request is in Process");
	}
}

// Added by Jignesh for RTF Editor in Mail Communication.
function loadEditor(textAreaId, isSaveButtonRequired, url) {
	var mysettings = new WYSIWYG.Settings();

	mysettings.removeToolbarElement("headings");
	mysettings.removeToolbarElement("insertimage");
	mysettings.removeToolbarElement("undo");
	mysettings.removeToolbarElement("redo");
	// mysettings.removeToolbarElement("createlink");
	// mysettings.removeToolbarElement("font");
	// mysettings.removeToolbarElement("fontsize");
	mysettings.removeToolbarElement("unorderedlist");
	mysettings.removeToolbarElement("strikethrough");
	// mysettings.removeToolbarElement("forecolor");
	// mysettings.removeToolbarElement("backcolor");
	// mysettings.removeToolbarElement("inserttable");
	mysettings.removeToolbarElement("seperator");
	// mysettings.removeToolbarElement("preview");
	mysettings.removeToolbarElement("seperator");
	// mysettings.removeToolbarElement("cut");
	// mysettings.removeToolbarElement("copy");
	// mysettings.removeToolbarElement("paste");
	mysettings.removeToolbarElement("viewSource");
	mysettings.removeToolbarElement("viewText");
	mysettings.removeToolbarElement("print");
	mysettings.removeToolbarElement("help");
	mysettings.removeToolbarElement("maximize");
	if (!isSaveButtonRequired) {
		mysettings.removeToolbarElement("save");
	} else {
		mysettings.URL = url;
	}
	// mysettings.removeToolbarElement("seperator");
	mysettings.Width = "100%";

	WYSIWYG.attach(textAreaId, mysettings);
}









// This function is used to give different CSS classes in specific tables for
// alternate rows.
function setRowOddEvenBackColor(){
	var tableObj = document.getElementsByTagName("table");
	// alert("tableObj-"+tableObj.length);
	if(tableObj != null)
	{
		for(var tabCount = 0; tabCount < tableObj.length; tabCount++)
		{
			var match = tableObj[tabCount].id.substring(0,12);
			// alert(match);
			if(match != null && match == "dynamicTable")
			{
				var rowObj = tableObj[tabCount].getElementsByTagName("tr");
				if(rowObj != null)
				{
					for(var rowCount = 0; rowCount < rowObj.length; rowCount++){
						if(rowCount % 2 == 0){
							rowObj[rowCount].className = "oddRow";
						}else{
							rowObj[rowCount].className = "evenRow";
						}
					}
				}
			}
		}
	}
}


// This function is used to give alternate text and title to the SELECT type
// object.
function setSelectObjAltText()
{
	var selectObj = document.getElementsByTagName("select");
	// alert("selectObj-"+selectObj.length);
	if(selectObj != null)
	{
		for(var selectCount = 0; selectCount < selectObj.length; selectCount++)
		{
			if(selectObj[selectCount] != null && selectObj[selectCount].options != null && selectObj[selectCount].options.length > 0)
			{
				for (var i=0; i<selectObj[selectCount].options.length; i++) 
				{
					selectObj[selectCount].options[i].title=selectObj[selectCount].options[i].text;
				}
			}
		}
	}
}
function getAge_yr_month(dateString,yr_id,mo_id) {
	  var now = new Date();
	  var today = new Date(now.getYear(),now.getMonth(),now.getDate());
	  var yearNow = now.getYear();
	  var monthNow = now.getMonth();
	  var dateNow = now.getDate();

	  var dob = dateString;

	  var yearDob = dob.getYear();
	  var monthDob = dob.getMonth();
	  var dateDob = dob.getDate();
	  var age = {};
	  var ageString = "";
	  var yearString = "";
	  var monthString = "";
	  var dayString = "";


	  yearAge = yearNow - yearDob;
	  
	  

	  if (monthNow >= monthDob)
	    var monthAge = monthNow - monthDob;
	  else {
	    yearAge--;
	    var monthAge = 12 + monthNow -monthDob;
	  }

	  if (dateNow >= dateDob)
	    var dateAge = dateNow - dateDob;
	  else {
	    monthAge--;
	    var dateAge = 31 + dateNow - dateDob;

	    if (monthAge < 0) {
	      monthAge = 11;
	      yearAge--;
	    }
	  }

	  age = {
	      years: yearAge,
	      months: monthAge,
	      days: dateAge
	      };

	  if ( age.years > 1 ) yearString = " years";
	  else yearString = " year";
	  if ( age.months> 1 ) monthString = " months";
	  else monthString = " month";
	  if ( age.days > 1 ) dayString = " days";
	  else dayString = " day";


	  if ( (age.years > 0) && (age.months > 0) && (age.days > 0) ){
	    ageString = age.years + yearString + ", " + age.months + monthString;
	  	document.getElementById(yr_id).value=age.years;document.getElementById(mo_id).value=age.months;
	  }else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) ){
	    ageString = age.years + yearString + "";document.getElementById(yr_id).value=age.years;
	  }else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) ){
	    ageString = age.years + yearString + " and " + age.months + monthString;
	    document.getElementById(yr_id).value=age.years;document.getElementById(mo_id).value=age.months;
	  }else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) ){
	    ageString = age.months + monthString;document.getElementById(mo_id).value=age.months;
	  }else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) ){
	    ageString = age.years + yearString;document.getElementById(yr_id).value=age.years;document.getElementById(mo_id).value=age.months;
	  }else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) ){
	    ageString = age.months + monthString;document.getElementById(mo_id).value=age.months;
	  }else{ ageString = "Oops! Could not calculate age!";}
	  
	 
	  return ageString;
	}
function age_calculator(dob_id,age_id,mon_id){
	var dob = document.getElementById(dob_id).value;
	var dob_dt=new Date(dob.split("/")[1]+"/"+dob.split("/")[0]+"/"+dob.split("/")[2]);
	var today_dt = new Date();
	var age_v = today_dt.getFullYear() - dob_dt.getFullYear();
	var mo = today_dt.getMonth()-dob_dt.getMonth();
	if(mo<0 || (mo===0 && today_dt.getDate()<dob_dt.getDate())){
		age_v--;
		}
	if(age_v>=0){
		if(age_v<4){document.getElementById(dob_id).value="";document.getElementById(age_id).value="";
		alert("Minimum age criteria is 4 year, So Student is not elligible for admission.");}
		/*else if(age_v>18){document.getElementById(dob_id).value="";document.getElementById(age_id).value="";
		alert("Maximum age criteria is 18 year, So Student is not elligible for admission.");}*/
		else{
		getAge_yr_month(dob_dt,age_id,mon_id);
	}}
	if(dob == "" || null == dob)
	{
	document.getElementById(dob_id).value="";
	document.getElementById(age_id).value="";
	document.getElementById(mon_id).value="";
	}
}
//this function is udsed to find age by dob to particular date and this function called from lkg,ukg enrollment
function age_calc_frm_parti_dt_lkg_ukg(dob_id,standard,age_id,mon_id,disability){
	var dob = document.getElementById(dob_id).value;
	/* var stu_dob = document.getElementById(dob_id).id;
	alert(stu_dob) */
	var dob_dt=new Date(dob.split("/")[1]+"/"+dob.split("/")[0]+"/"+dob.split("/")[2]);
	var today_dt = new Date('06/01/2019');
	var std=document.getElementById(standard).value;
	var dis=document.getElementById(disability).value;
	//var spneed=document.getElementById(sp_need).value;
	/*alert(std);*/
	//alert(dis);
	//alert(spneed);
	if((dis!=null && dis!="" && dis=="99")/* || (spneed!=null && spneed!="" && spneed!="select" && spneed=="None")*/)
		{
			if(std==null || std=="select" || std=="" || dob == "" || null == dob)
			{
			document.getElementById(dob_id).value="";
			document.getElementById(age_id).value="";
			document.getElementById(mon_id).value="";
				if(std==null || std=="select" || std=="")
				{
				alert("Please First Select Standard for DOB Verification");
				return false;
				}
				return false;
			}
			else{
				var age_v = today_dt.getFullYear() - dob_dt.getFullYear();
				/*alert(age_v);*/
				var mo;
				if (today_dt.getMonth() >= dob_dt.getMonth()){
			        var monthAge = today_dt.getMonth() - dob_dt.getMonth();
			    mo=monthAge;}
			    else {
			    	age_v--;
			        var monthAge = 12 + today_dt.getMonth() -dob_dt.getMonth();
			        mo=monthAge;
			    }
				var day;
			    if (today_dt.getDate() >= dob_dt.getDate())
					{var dateAge = today_dt.getDate() - dob_dt.getDate();
					day=dateAge;}
				else {
					mo--;
					var dateAge = 31 + today_dt.getDate() - dob_dt.getDate();
					day=dateAge;
					if (mo < 0) {
						mo = 11;
						age_v--;
					}
				}
				/*alert(age_v);
				alert(mo);
				alert(day);*/
				/* var mo = today_dt.getMonth()-dob_dt.getMonth(); */
				/* if(mo<0 || (mo===0 && today_dt.getDate()<dob_dt.getDate())){
					age_v--;
					} */
			    if(std!=null && std=="LKG"){
			    	
					
						if(age_v<=3){
						if (age_v>=3 && mo>=5 && day>=0)  
						{getAge_yr_month(dob_dt,age_id,mon_id);return true;}
						else  if(age_v<=3 ||mo<5){
							/*document.getElementById(dob_id).value="";
							document.getElementById(age_id).value="";*/
							$("#student_dob").data('kendoDatePicker').enable(true);
							alert("Minimum age criteria is 3 year 5 months and Maximum 4 Years 9 months 29 days, So Student is not elligible for admission.");
							return false;
						}
						}
						else if(age_v<=4)
							{
								if(age_v<4){getAge_yr_month(dob_dt,age_id,mon_id);return true;}
								else if(age_v==4){
									if(mo<9){getAge_yr_month(dob_dt,age_id,mon_id);return true;}
									else if(mo==9 && day<=29){
										getAge_yr_month(dob_dt,age_id,mon_id);return true;
										}
									else{
										/*document.getElementById(dob_id).value="";
										document.getElementById(age_id).value="";*/
										$("#student_dob").data('kendoDatePicker').enable(true);
										alert("Minimum age criteria is 3 year 5 months and Maximum 4 Years 9 months 29 days, So Student is not elligible for admission.");
										return false;
										}
									}
								else{
									/*document.getElementById(dob_id).value="";
									document.getElementById(age_id).value="";*/
									$("#student_dob").data('kendoDatePicker').enable(true);
									alert("Minimum age criteria is 3 year 5 months and Maximum 4 Years 9 months 29 days, So Student is not elligible for admission.");
									return false;
								}
							
							}
						else{
								/*document.getElementById(dob_id).value="";
								document.getElementById(age_id).value="";*/
								$("#student_dob").data('kendoDatePicker').enable(true);
								alert("Minimum age criteria is 3 year 5 months and Maximum 4 Years 9 months 29 days, So Student is not elligible for admission.");
								return false;
							}
					
				
				}else if(std!=null && std=="UKG"){
					
						if(age_v<=4){
						if (age_v>=4 && mo>=5 && day>=0)  
						{getAge_yr_month(dob_dt,age_id,mon_id);return true;}
						else  if(age_v<=4 ||mo<5){
							/*document.getElementById(dob_id).value="";
							document.getElementById(age_id).value="";*/
							$("#student_dob").data('kendoDatePicker').enable(true);
							alert("Minimum age criteria is 4 year 5 months and Maximum 5 Years 9 months 29 days, So Student is not elligible for admission.");
							return false;
						}
						}
						else if(age_v<=5)
						{
							if(age_v<5){getAge_yr_month(dob_dt,age_id,mon_id);return true;}
							else if(age_v==5){ 
								if(mo<9){getAge_yr_month(dob_dt,age_id,mon_id);return true;}
								else if(mo==9 && day<=29){
									getAge_yr_month(dob_dt,age_id,mon_id);return true;
									}
								else{
									/*document.getElementById(dob_id).value="";
									document.getElementById(age_id).value="";*/
									$("#student_dob").data('kendoDatePicker').enable(true);
									alert("Minimum age criteria is 4 year 5 months and Maximum 5 Years 9 months 29 days, So Student is not elligible for admission.");
									return false;
									}
								}
							else{
								/*document.getElementById(dob_id).value="";
								document.getElementById(age_id).value="";*/
								$("#student_dob").data('kendoDatePicker').enable(true);
								alert("Minimum age criteria is 4 year 5 months and Maximum 5 Years 9 months 29 days, So Student is not elligible for admission.");
								return false;
							}
						
						}else{
							/*document.getElementById(dob_id).value="";
							document.getElementById(age_id).value="";*/
							$("#student_dob").data('kendoDatePicker').enable(true);
							alert("Minimum age criteria is 4 year 5 months and Maximum 5 Years 9 months 29 days, So Student is not elligible for admission.");
							return false;
						}			
				}
				}
		}
	else{
		return true;
	}
}
//this function used to fing age by dob to particular date
function age_calc_frm_parti_dt(dob_id,standard,age_id,mon_id,disability,sp_need){
	var dob = document.getElementById(dob_id).value;
	/* var stu_dob = document.getElementById(dob_id).id;
	alert(stu_dob) */
	var dob_dt=new Date(dob.split("/")[1]+"/"+dob.split("/")[0]+"/"+dob.split("/")[2]);
	var today_dt = new Date('06/01/2019');
	var std=document.getElementById(standard).value;
	var dis=document.getElementById(disability).value;
	var spneed=document.getElementById(sp_need).value;
	/*alert(std);*/
	//alert(dis);
//	alert(spneed);
	if((dis!=null && dis!="" && dis=="99") && (spneed!=null && spneed!="" && spneed!="select" && spneed=="None"))
		{
	if(std==null || std=="select" || std=="" || dob == "" || null == dob)
	{
	document.getElementById(dob_id).value="";
	document.getElementById(age_id).value="";
	document.getElementById(mon_id).value="";
		if(std==null || std=="select" || std=="")
		{
		alert("Please First Select Standard for DOB Verification");
		return false;
		}
		return false;
	}
	else{
		var age_v = today_dt.getFullYear() - dob_dt.getFullYear();
		/*alert(age_v);*/
		var mo;
		if (today_dt.getMonth() >= dob_dt.getMonth()){
	        var monthAge = today_dt.getMonth() - dob_dt.getMonth();
	    mo=monthAge;}
	    else {
	    	age_v--;
	        var monthAge = 12 + today_dt.getMonth() -dob_dt.getMonth();
	        mo=monthAge;
	    }
		var day;
	    if (today_dt.getDate() >= dob_dt.getDate())
			{var dateAge = today_dt.getDate() - dob_dt.getDate();
			day=dateAge;}
		else {
			mo--;
			var dateAge = 31 + today_dt.getDate() - dob_dt.getDate();
			day=dateAge;
			if (mo < 0) {
				mo = 11;
				age_v--;
			}
		}
		/*alert(age_v);
		alert(mo);
		alert(day);*/
		/* var mo = today_dt.getMonth()-dob_dt.getMonth(); */
		/* if(mo<0 || (mo===0 && today_dt.getDate()<dob_dt.getDate())){
			age_v--;
			} */
	    if(std!=null && std=="LKG"){
	    	
			
				if(age_v<=3){
				if (age_v>=3 && mo>=10 && day>=0)  
				{getAge_yr_month(dob_dt,age_id,mon_id);return true;}
				else  if(age_v<=3 ||mo<10){
					/*document.getElementById(dob_id).value="";
					document.getElementById(age_id).value="";*/
					$("#student_dob").data('kendoDatePicker').enable(true);
					alert("Minimum age criteria is 3 year 10 months and Maximum 4 Years 9 months 29 days, So Student is not elligible for admission.");
					return false;
				}
				}
				else if(age_v<=4)
					{
						if(age_v<4){getAge_yr_month(dob_dt,age_id,mon_id);return true;}
						else if(age_v==4){
							if(mo<9){getAge_yr_month(dob_dt,age_id,mon_id);return true;}
							else if(mo==9 && day<=29){
								getAge_yr_month(dob_dt,age_id,mon_id);return true;
								}
							else{
								/*document.getElementById(dob_id).value="";
								document.getElementById(age_id).value="";*/
								$("#student_dob").data('kendoDatePicker').enable(true);
								alert("Minimum age criteria is 3 year 10 months and Maximum 4 Years 9 months 29 days, So Student is not elligible for admission.");
								return false;
								}
							}
						else{
							/*document.getElementById(dob_id).value="";
							document.getElementById(age_id).value="";*/
							$("#student_dob").data('kendoDatePicker').enable(true);
							alert("Minimum age criteria is 3 year 10 months and Maximum 4 Years 9 months 29 days, So Student is not elligible for admission.");
							return false;
						}
					
					}
				else{
						/*document.getElementById(dob_id).value="";
						document.getElementById(age_id).value="";*/
						$("#student_dob").data('kendoDatePicker').enable(true);
						alert("Minimum age criteria is 3 year 10 months and Maximum 4 Years 9 months 29 days, So Student is not elligible for admission.");
						return false;
					}
			
		
		}else if(std!=null && std=="UKG"){
			
				if(age_v<=4){
				if (age_v>=4 && mo>=10 && day>=0)  
				{getAge_yr_month(dob_dt,age_id,mon_id);return true;}
				else  if(age_v<=4 ||mo<10){
					/*document.getElementById(dob_id).value="";
					document.getElementById(age_id).value="";*/
					$("#student_dob").data('kendoDatePicker').enable(true);
					alert("Minimum age criteria is 4 year 10 months and Maximum 5 Years 9 months 29 days, So Student is not elligible for admission.");
					return false;
				}
				}
				else if(age_v<=5)
				{
					if(age_v<5){getAge_yr_month(dob_dt,age_id,mon_id);return true;}
					else if(age_v==5){ 
						if(mo<9){getAge_yr_month(dob_dt,age_id,mon_id);return true;}
						else if(mo==9 && day<=29){
							getAge_yr_month(dob_dt,age_id,mon_id);return true;
							}
						else{
							/*document.getElementById(dob_id).value="";
							document.getElementById(age_id).value="";*/
							$("#student_dob").data('kendoDatePicker').enable(true);
							alert("Minimum age criteria is 4 year 10 months and Maximum 5 Years 9 months 29 days, So Student is not elligible for admission.");
							return false;
							}
						}
					else{
						/*document.getElementById(dob_id).value="";
						document.getElementById(age_id).value="";*/
						$("#student_dob").data('kendoDatePicker').enable(true);
						alert("Minimum age criteria is 4 year 10 months and Maximum 5 Years 9 months 29 days, So Student is not elligible for admission.");
						return false;
					}
				
				}else{
					/*document.getElementById(dob_id).value="";
					document.getElementById(age_id).value="";*/
					$("#student_dob").data('kendoDatePicker').enable(true);
					alert("Minimum age criteria is 4 year 10 months and Maximum 5 Years 9 months 29 days, So Student is not elligible for admission.");
					return false;
				}
				/*else if(  (age_v>=6 && mo>=0 && day>0) ){
				
					document.getElementById(dob_id).value="";document.getElementById(age_id).value="";
					$("#student_dob").data('kendoDatePicker').enable(true);
					alert("Minimum age criteria is 4 year 5 months and Maximum 6 Years, So Student is not elligible for admission.");}
				else if(age_v>18){document.getElementById(dob_id).value="";document.getElementById(age_id).value="";
				alert("Maximum age criteria is 18 year, So Student is not elligible for admission.");}
				else{
					getAge_yr_month(dob_dt,age_id,mon_id);
				}*/
			
		}
		else if(std!=null && std=="1"){
			
				if(age_v<=5){
				if (age_v>=5 && mo>=5 && day>=0)  
				{getAge_yr_month(dob_dt,age_id,mon_id);return true;}
				else  if(age_v<=5 ||mo<5){
				/*document.getElementById(dob_id).value="";
				document.getElementById(age_id).value="";*/
				$("#student_dob").data('kendoDatePicker').enable(true);
				alert("Minimum age criteria is 5 year 5 months and Maximum 7 Years, So Student is not elligible for admission.");
				return false;
				}
				}else if(age_v<=7)
				{
					if(age_v<7){getAge_yr_month(dob_dt,age_id,mon_id);return true;}
					else if(age_v==7 && mo==0 && day==0){getAge_yr_month(dob_dt,age_id,mon_id);return true;}
					else{
						/*document.getElementById(dob_id).value="";
						document.getElementById(age_id).value="";*/
						$("#student_dob").data('kendoDatePicker').enable(true);
						alert("Minimum age criteria is 5 year 5 months and Maximum 7 Years, So Student is not elligible for admission.");
						return false;
					}
				
				}else{
					/*document.getElementById(dob_id).value="";
					document.getElementById(age_id).value="";*/
					$("#student_dob").data('kendoDatePicker').enable(true);
					alert("Minimum age criteria is 5 year 5 months and Maximum 7 Years, So Student is not elligible for admission.");
					return false;
				}
				/*else if(  (age_v>=7 && mo>=0 && day>0) ){
				
				document.getElementById(dob_id).value="";document.getElementById(age_id).value="";
				$("#student_dob").data('kendoDatePicker').enable(true);
				alert("Minimum age criteria is 5 year 5 months and Maximum 7 Years, So Student is not elligible for admission.");}
				
				else{
					getAge_yr_month(dob_dt,age_id,mon_id);
				}*/
				
		}
		else if(std!=null && std=="2"){
			
				if(age_v>=6){
					getAge_yr_month(dob_dt,age_id,mon_id);return true;
					}
				else{
						/*document.getElementById(dob_id).value="";
						document.getElementById(age_id).value="";*/
						$("#student_dob").data('kendoDatePicker').enable(true);
						alert("Minimum age criteria is 6 year, So Student is not elligible for admission.");
						return false;
					}
					
					 /* commented start
					  * else if(  (age_v>=8 && mo>=0 && day>0) ){
					document.getElementById(dob_id).value="";document.getElementById(age_id).value="";
					$("#student_dob").data('kendoDatePicker').enable(true);
					alert("Minimum age criteria is 6 year 5 months and Maximum 8 Years, So Student is not elligible for admission.");}
					else{
						getAge_yr_month(dob_dt,age_id,mon_id);
					}
					commented end */
			
		}
		else{getAge_yr_month(dob_dt,age_id,mon_id);return true;}
	}
		}
	else{
		return true;
	}
}
//only for kg//not used
function age_calc_frm_parti_dt_kg(dob_id,standard,age_id,mon_id){
	var dob = document.getElementById(dob_id).value;

	var dob_dt=new Date(dob.split("/")[1]+"/"+dob.split("/")[0]+"/"+dob.split("/")[2]);
	var today_dt= new Date('06/01/2019');
	var std=document.getElementById(standard).value;

	if(std==null || std=="select" || std=="" || dob == "" || null == dob)
	{
	document.getElementById(dob_id).value="";
	document.getElementById(age_id).value="";
	document.getElementById(mon_id).value="";
		if(std==null || std=="select" || std=="")
		{
		alert("Please First Select Standard for DOB Verification");
		}
	}
	else{
	
		/*alert(today_dt);*/
		var age_v = today_dt.getFullYear() - dob_dt.getFullYear();

		var mo;
		if (today_dt.getMonth() >= dob_dt.getMonth()){
		    var monthAge = today_dt.getMonth() - dob_dt.getMonth();
		    mo=monthAge;
		}
		else {
			age_v--;
		    var monthAge = 12 + today_dt.getMonth() -dob_dt.getMonth();
		    mo=monthAge;
		}
		var day;
		if (today_dt.getDate() >= dob_dt.getDate())
			{var dateAge = today_dt.getDate() - dob_dt.getDate();
			day=dateAge;}
		else {
			mo--;
			var dateAge = 31 + today_dt.getDate() - dob_dt.getDate();
			day=dateAge;
			if (mo < 0) {
				mo = 11;
				age_v--;
			}
		}
		/*alert(age_v);
		alert(mo);
		alert(day);*/

		if(std!=null){
			if(std=="LKG"){
	
				if(age_v>=0){
					if(age_v<=3){
					if (age_v>=3 && mo>=5 && day>=0)  
					{getAge_yr_month(dob_dt,age_id,mon_id);}
					else  if(age_v<=3 ||mo<5){
						document.getElementById(dob_id).value="";
						document.getElementById(age_id).value="";
						$("#student_dob").data('kendoDatePicker').enable(true);
						alert("Minimum age criteria is 3 year 5 months and Maximum 5 Years, So Student is not elligible for admission.");
					}
					}
					else if(age_v<=5)
						{
							if(age_v<5){getAge_yr_month(dob_dt,age_id,mon_id);}
							else if(age_v==5 && mo==0 && day==0){getAge_yr_month(dob_dt,age_id,mon_id);}
							else{
								document.getElementById(dob_id).value="";
								document.getElementById(age_id).value="";
								$("#student_dob").data('kendoDatePicker').enable(true);
								alert("Minimum age criteria is 3 year 5 months and Maximum 5 Years, So Student is not elligible for admission.");
							}
						
						}else{
							document.getElementById(dob_id).value="";
							document.getElementById(age_id).value="";
							$("#student_dob").data('kendoDatePicker').enable(true);
							alert("Minimum age criteria is 3 year 5 months and Maximum 5 Years, So Student is not elligible for admission.");
						}
				}
			
			}else if(std=="UKG"){
				if(age_v>=0){
					if(age_v<=4){
					if (age_v>=4 && mo>=5 && day>=0)  
					{getAge_yr_month(dob_dt,age_id,mon_id);}
					else  if(age_v<=4 ||mo<5){
						document.getElementById(dob_id).value="";
						document.getElementById(age_id).value="";
						$("#student_dob").data('kendoDatePicker').enable(true);
						alert("Minimum age criteria is 4 year 5 months and Maximum 6 Years, So Student is not elligible for admission.");
					}
					}
					else if(age_v<=6)
					{
						if(age_v<6){getAge_yr_month(dob_dt,age_id,mon_id);}
						else if(age_v==6 && mo==0 && day==0){getAge_yr_month(dob_dt,age_id,mon_id);}
						else{
							document.getElementById(dob_id).value="";
							document.getElementById(age_id).value="";
							$("#student_dob").data('kendoDatePicker').enable(true);
							alert("Minimum age criteria is 4 year 5 months and Maximum 6 Years, So Student is not elligible for admission.");
						}
					
					}else{
						document.getElementById(dob_id).value="";
						document.getElementById(age_id).value="";
						$("#student_dob").data('kendoDatePicker').enable(true);
						alert("Minimum age criteria is 4 year 5 months and Maximum 6 Years, So Student is not elligible for admission.");
					}
					/*else if(  (age_v>=6 && mo>=0 && day>0) ){
					
						document.getElementById(dob_id).value="";document.getElementById(age_id).value="";
						$("#student_dob").data('kendoDatePicker').enable(true);
						alert("Minimum age criteria is 4 year 5 months and Maximum 6 Years, So Student is not elligible for admission.");}
					else if(age_v>18){document.getElementById(dob_id).value="";document.getElementById(age_id).value="";
					alert("Maximum age criteria is 18 year, So Student is not elligible for admission.");}
					else{
						getAge_yr_month(dob_dt,age_id,mon_id);
					}*/
				}
			}
			/*if(age_v>=0){
				if(age_v<=3){
					if (age_v>=3 && mo>=10 && day>=0)  
					{
						getAge_yr_month(dob_dt,age_id,mon_id);
					}
					else  if(age_v<=3 ||mo<10){
						document.getElementById(dob_id).value="";document.getElementById(age_id).value="";
						$("#student_dob").data('kendoDatePicker').enable(true);
					alert("Minimum age criteria is 3 year 10 months and Maximum 4 Years 10 Months, So Student is not elligible for admission.");
					}
					}
					else if(age_v<=4){
						if(mo>=10 && day>0 ){
							document.getElementById(dob_id).value="";document.getElementById(age_id).value="";
							$("#student_dob").data('kendoDatePicker').enable(true);
							alert("Minimum age criteria is 3 year 10 months and Maximum 4 Years 10 Months, So Student is not elligible for admission.");
							else if(age_v>18){document.getElementById(dob_id).value="";document.getElementById(age_id).value="";
							alert("Maximum age criteria is 18 year, So Student is not elligible for admission.");}
						}
						else{
							getAge_yr_month(dob_dt,age_id,mon_id);
						}	
					}else{
						document.getElementById(dob_id).value="";document.getElementById(age_id).value="";
						$("#student_dob").data('kendoDatePicker').enable(true);
						alert("Minimum age criteria is 3 year 10 months and Maximum 4 Years 10 Months, So Student is not elligible for admission.");
					}
			}*/
		
		}
	}
}
// This function is used to give notification/message regarding maximum text
// area limit
function setTextAreaCharCount(textAreaId,maxLimit)
{
	var taxArea = document.getElementById(textAreaId);
	var taxAreaCountDiv = document.getElementById(textAreaId+"Count");
	
	if(taxArea != null)
	{
		if(taxArea.value.length > maxLimit)
		{
			taxArea.value = taxArea.value.substring(0, maxLimit);
		}
		else
		{
			charLeft = maxLimit - taxArea.value.length;
			if(charLeft == "0" && taxAreaCountDiv != null)
			{
				dispCharLeft = "<font color=\"red\"><b>Maximum characters limit reached.</b></font>";
				taxAreaCountDiv.innerHTML = dispCharLeft;
			}
			else if(taxAreaCountDiv != null)
			{
				dispCharLeft = "You have <b>"+charLeft+"</b> characters left.";
				taxAreaCountDiv.innerHTML = dispCharLeft;
			}
		}
	}
}

// This function is used to set remaining characters for TextArea on load of the
// JSP
function setTextAreaObjLengthText()
{
	var selectObj = document.getElementsByTagName("textarea");
	// alert("selectObj-"+selectObj.length);
	if(selectObj != null)
	{
		for(var selectCount = 0; selectCount < selectObj.length; selectCount++)
		{
			if(selectObj[selectCount] != null)
			{
				var countMaxObj = document.getElementById(selectObj[selectCount].id+"CountMax");
				if(countMaxObj != null)
				{
					if(document.all)
					{
						setTextAreaCharCount(selectObj[selectCount].id,trim(countMaxObj.innerHTML));
					}
					else
					{
						setTextAreaCharCount(selectObj[selectCount].id,trim(countMaxObj.textContent));
					}
				}
			}
		}
	}
}

function commonDownloadFile(formObj,urlKey,downloadType)
{
	document.getElementById("URL_TO_DOWNLOAD").value=urlKey;
	document.getElementById("type").value=downloadType;
	formObj.target="_blank";
	formObj.action="download.htm";
	formObj.submit();
}



function trimAll(sString) 
{
    while (sString.substring(0,1) == ' ')
    {
        sString = sString.substring(1, sString.length);
    }
    while (sString.substring(sString.length-1, sString.length) == ' ')
    {
        sString = sString.substring(0,sString.length-1);
    }
    return sString;
}

function convertToKenyanShillingFormatValWithDecimal(valStr,decAlertFlag)
{
	if(valStr != "" && /* valStr != 0 && */ valStr != "NaN" && typeof(valStr) != "undefined")
	{
		var val = '' + valStr;
		var decimalPart = "";
		var decCnt=0;

		val = removeCommaFrmInput(val);

		if(val == "")
		{
			return false;
		}
		var sign = "";
		if(val.charAt(0) == '-')
		{
			val = val.substring(1);
			if(!(val.length > 0))
			{
				val = "0";
			}
			sign = "-";
		}

		var decimalFlag;
		if (val.split(".").length>2) {
			alert("Invalid number entered with more than one decimal part.");
			return 0;
		}
		if(val.indexOf(".") != -1)
		{
			decimalFlag = true;
			decimalPart = val.substring(val.indexOf("."));
			val = val.substring(0,val.indexOf("."));
			if (val == ""){
				val="0";
			}
		}

		while(val.charAt(0) == "0" && val != "0")
		{
			val = val.substring(1,val.length);
		}




		var str = "0123456789";

		for(j = 0; j < val.length; j++)
		{
			if(str.indexOf(val.charAt(j)) == -1)
			{
				val = "";
				alert("Please enter numeric data in this field");
				decimalFlag = false;
				return false;
			}
		}
		for(j = 1; j < decimalPart.length; j++)
		{
			if(str.indexOf(decimalPart.charAt(j)) == -1)
			{
				alert("Please enter numeric data in this field");
				return false;
			}
		}   

		var valGr8 = false;
		if(val.length > 20)
		{
			valGr8 = true;
			val = val.substring(0,20);
		}
		var deciGr8 = false;

		if(decimalPart.length > 3)
		{
			deciGr8 = true;
			decimalPart = decimalPart.substring(0,3);
		}
		// to display 00 in decimal while blank or in case of decimal only

		if(decimalPart.length==0 || decimalPart.length==1)
		{
			decimalPart=".00";
		}     
		// to display single decimal place only
		else if(decimalPart.length==2)
		{
			decimalPart+="0";        	
		}

		var result = "";
		if(val.length > 3)
		{
			val = parseInt(val);
			var i = 1;
			while(val != 0)
			{
				var temp = ""+(val%1000);
				while(temp.length < 3)
				{
					temp = "0"+temp;
				}
				result = "," + temp + result;
				val = parseInt(val/1000);
			}
		}
		else
		{
			val = parseInt(val);
			result = ""+val;
		}
		if(result.charAt(0) == ",")
		{
			result = result.substring(1);
		}

		while(result.charAt(0) == "0" && result != "0")
		{
			result = result.substring(1,result.length);
		}
		if(result == "")
		{
			result = "0";
		}
		val = sign + result  + "" + decimalPart;
		if(valGr8)
		{
			alert("The absolute part cannot be greater than 20 digits");
			valGr8 = false;
		} 
		if(deciGr8 && decAlertFlag)
		{
			alert("The decimal part cannot be greater than 2 digits");
			deciGr8 = false;
		}
		return val;
	}
	else
	{
		return 0;
	}
}


function removeCommaFrmInput(val){
	var valString = '' + val ;
	if(valString == "")
		valString = "";
	else{
		while(valString.indexOf(",") != -1)
		{
			valString = valString.replace(',','');
		}
	}
	return valString;
}


function convertToShillingFormatForBlank(obj,decimalFlag)
{
	if(obj.value != "" && /* obj.value != 0 && */ obj.value != "NaN" && typeof(obj.value) != "undefined")
	{
		if(typeof(decimalFlag) == "undefined")
		{
			decimalFlag = true;

		}
		var val =  convertToKenyanShillingFormatValWithDecimal(obj.value,decimalFlag);
		if(val == false)
		{
			obj.value = "0.00";
			return false;
		}
		else
		{
			obj.value = val;
			return true;
		}
	}
	else
	{
		return true;
	}
}



window.history.go(1);
function createSkipFieldForAddRow(tabStr,formName){
	var txt_node = document.createElement('input');
	txt_node.setAttribute('type','hidden'); 
	txt_node.setAttribute('name','fieldsToSkip'); 
	for(var i=1;i<document.getElementById(tabStr).rows.length;i++){
		// txt_node.setAttribute('id','fieldsToSkip_'+(100+i));
		txt_node.setAttribute('value',tabStr+'_'+i);
		document.getElementById(formName).appendChild(txt_node);
	}
}


// Start by Devarshi Thakar - get Caste on Category

function getCategoryWiseCaste(category_id, element,element1,element2)
{
	var xmlhttp;
	var urls="stsReg.htm?actionCode=getCategoryWiseCaste&category_id="+category_id.value;
	$(".modal").show();
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}

		xmlhttp.onreadystatechange = function() {

			removeall();

			if (xmlhttp.readyState == 4) {
				z = 0;
				$(".modal").hide();
				var roott = xmlhttp.responseXML.documentElement;
				
				var ress = roott.getElementsByTagName("caste_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("caste_name")[z].childNodes[0].nodeValue;
				
				
				while (ress != null) {
					addoptions(ress, ress1);
					z++;
					
					ress = roott.getElementsByTagName("caste_id")[z].childNodes[0].nodeValue;
					ress1 = roott.getElementsByTagName("caste_name")[z].childNodes[0].nodeValue;
				}
			}
		};
		
		
		
		function removeall() 
		{
			$('#'+element.id).find('option').remove();
			$('#'+element1.id).find('option').remove();
			$('#'+element2.id).find('option').remove();
			/*
			 * var ct = document.forms[1].element.id.length; for (i = ct; i >=
			 * 0; i--) { alert(i); document.forms[1].element.id.options[i] =
			 * null; }
			 */
		}
		
		function addoptions(reslt, reslt1) 
		{
			var ct1 = document.createElement("OPTION");
			var ct2 = document.createElement("OPTION");
			var ct3 = document.createElement("OPTION");
			ct1.text = reslt1;
			ct1.value = reslt;
			ct2.text = reslt1;
			ct2.value = reslt;
			ct3.text = reslt1;
			ct3.value = reslt;
		
			document.getElementById(element.id).options.add(ct1);
			document.getElementById(element1.id).options.add(ct2);
			document.getElementById(element2.id).options.add(ct3);
			/* document.forms[1].element.options.add(ct1); */
		}
		
		xmlhttp.open("POST", urls, true);
		xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xmlhttp.overrideMimeType('text/xml');
		xmlhttp.send(null);
}

// End by Devarshi Thakar - get Caste on Category

// get District by State Id through Ajax
function getDistrictDtlsByStateIdByValueAndId(state_id, element,elementvalue){
	var xmlhttp;
	var urls="stsReg.htm?actionCode=getDistrictDtlsByStateId&stateId="+state_id;
	$(".modal").show();
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}

		xmlhttp.onreadystatechange = function() {
			removeall();
			if (xmlhttp.readyState == 4) {
				z = 0;
				$(".modal").hide();
				var roott = xmlhttp.responseXML.documentElement;
				var roott55 = xmlhttp.responseText;
			var ress = roott.getElementsByTagName("district_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("district_name")[z].childNodes[0].nodeValue;
				while (ress != null) {
					addoptions(ress, ress1);
					z++;
					var ress = roott.getElementsByTagName("district_id")[z].childNodes[0].nodeValue;
					var ress1 = roott.getElementsByTagName("district_name")[z].childNodes[0].nodeValue;
				}
			}
		};
		function removeall() 
		{
			$('#'+element).find('option').remove();
			/*
			 * var ct = document.forms[1].element.id.length; for (i = ct; i >=
			 * 0; i--) { alert(i); document.forms[1].element.id.options[i] =
			 * null; }
			 */
		}
		
		function addoptions(reslt, reslt1) 
		{
			var ct1 = document.createElement("OPTION");
			ct1.text = reslt1;
			ct1.value = reslt;
			if(reslt==elementvalue){ 
				ct1.selected = true;
			}
			document.getElementById(element).options.add(ct1);
			/* document.forms[1].element.options.add(ct1); */
		}
	
		xmlhttp.open("POST", urls, true);
		xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xmlhttp.overrideMimeType('text/xml');
		xmlhttp.send(null);
}

function getDistrictDtlsByStateId(state_id, element)
{
	
	var xmlhttp;
	var urls="stsReg.htm?actionCode=getDistrictDtlsByStateId&stateId="+state_id.value;
	$(".modal").show();
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}

		xmlhttp.onreadystatechange = function() {
			removeall();
			if (xmlhttp.readyState == 4) {
				z = 0;
				$(".modal").hide();
				var roott = xmlhttp.responseXML.documentElement;
				var roott55 = xmlhttp.responseText;
			var ress = roott.getElementsByTagName("district_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("district_name")[z].childNodes[0].nodeValue;
				while (ress != null) {
					addoptions(ress, ress1);
					z++;
					var ress = roott.getElementsByTagName("district_id")[z].childNodes[0].nodeValue;
					var ress1 = roott.getElementsByTagName("district_name")[z].childNodes[0].nodeValue;
				}
			}
		};
		function removeall() 
		{
			$('#'+element.id).find('option').remove();
			
		}
		
		function addoptions(reslt, reslt1) 
		{
			var ct1 = document.createElement("OPTION");
			ct1.text = reslt1;
			ct1.value = reslt;
			document.getElementById(element.id).options.add(ct1);
			
		}
		
		xmlhttp.open("POST", urls, true);
		xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xmlhttp.overrideMimeType('text/xml');
		xmlhttp.send(null);
}


function getDistrictDtlsByStateIdWithoutAll(state_id, element)
{
	var xmlhttp;
	var urls="stsReg.htm?actionCode=getDistrictDtlsByStateIdWithoutAll&stateId="+state_id.value;
	$(".modal").show();
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}

		xmlhttp.onreadystatechange = function() {

			removeall();

			if (xmlhttp.readyState == 4) {
				z = 0;
				$(".modal").hide();
				var roott = xmlhttp.responseXML.documentElement;
				var roott55 = xmlhttp.responseText;
				
			var ress = roott.getElementsByTagName("district_id")[z].childNodes[0].nodeValue;
			
				var ress1 = roott.getElementsByTagName("district_name")[z].childNodes[0].nodeValue;
				
				
				while (ress != null) {
					addoptions(ress, ress1);
					z++;
					
					var ress = roott.getElementsByTagName("district_id")[z].childNodes[0].nodeValue;
					var ress1 = roott.getElementsByTagName("district_name")[z].childNodes[0].nodeValue;
				}
			}
		};
		
		
		
		function removeall() 
		{
			$('#'+element.id).find('option').remove();
			/*
			 * var ct = document.forms[1].element.id.length; for (i = ct; i >=
			 * 0; i--) { alert(i); document.forms[1].element.id.options[i] =
			 * null; }
			 */
		}
		
		function addoptions(reslt, reslt1) 
		{
			var ct1 = document.createElement("OPTION");
			ct1.text = reslt1;
			ct1.value = reslt;
			document.getElementById(element.id).options.add(ct1);
			/* document.forms[1].element.options.add(ct1); */
		}
		
		xmlhttp.open("POST", urls, true);
		xmlhttp.setRequestHeader("Content-Type",
				"application/x-www-form-urlencoded");
		xmlhttp.overrideMimeType('text/xml');
		xmlhttp.send(null);
}

// get Taluka by District Id through Ajax
function getTalukaDtlsByDistrictId(district_id, taluka_id)
{  
	var xmlhttp;
	var urls="stsReg.htm?actionCode=getTalukaDtlsByDistrictId&districtId="+district_id.value;
	/*document.getElementById("maincontent").disabled = true;*/
	$(".modal").show();
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			var roott = xmlhttp.responseXML.documentElement;
			/*document.getElementById("maincontent").disabled = false;*/
			$(".modal").hide();
			
		var ress = roott.getElementsByTagName("taluka_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("taluka_name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("taluka_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("taluka_name")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+taluka_id.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(taluka_id.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}

function getTalukaDtlsByDistrictIdByValueAndId(district_id, taluka_id,elementvalue)
{  
	var xmlhttp;
	var urls="stsReg.htm?actionCode=getTalukaDtlsByDistrictId&districtId="+district_id;
	/*document.getElementById("maincontent").disabled = true;*/
	$(".modal").show();
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			var roott = xmlhttp.responseXML.documentElement;
			/*document.getElementById("maincontent").disabled = false;*/
			$(".modal").hide();
			
		var ress = roott.getElementsByTagName("taluka_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("taluka_name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("taluka_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("taluka_name")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+taluka_id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		if(reslt==elementvalue){ 
			ct1.selected = true;
		}
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(taluka_id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}

function getTalukaDtlsByDistrictIdWithAll(district_id, taluka_id)
{
	var xmlhttp;
	var urls="stsReg.htm?actionCode=getTalukaDtlsByDistrictIdWithAll&districtId="+district_id.value;
	$(".modal").show();
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
					
			
		var ress = roott.getElementsByTagName("taluka_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("taluka_name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("taluka_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("taluka_name")[z].childNodes[0].nodeValue;
			}
		}
	};
	
	
	
	if(document.getElementById("permaddressct_id")!=null){
		document.getElementById("permaddressct_id").click();
	}
	
	if(document.getElementById("permaddressvillage_id")!=null){
		document.getElementById("permaddressvillage_id").click();
	}
	
	
	function removeall() {
		$('#'+taluka_id.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(taluka_id.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}



// get Village by Taluka Id through Ajax

function getVillageDtlsByTalukaIdByValueAndId(taluka_id, village_id,elementvalue)
{
	var xmlhttp;
	var urls="stsReg.htm?actionCode=getVillageaDtlsByTalukaId&talukaId="+taluka_id;
	$(".modal").show();
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();
		
		if (xmlhttp.readyState == 4) {
			z = 0;
			var roott = xmlhttp.responseXML.documentElement;
			$(".modal").hide();
		var ress = roott.getElementsByTagName("village_id")[z].childNodes[0].nodeValue;
		var ress1 = roott.getElementsByTagName("village_name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++;
				var ress = roott.getElementsByTagName("village_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("village_name")[z].childNodes[0].nodeValue;
			}
		}
	};
	
	function removeall() 
	{
		$('#'+village_id).find('option').remove();
		/*
		 * var ct = document.forms[1].village_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].village_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		if(reslt==elementvalue){ 
			ct1.selected = true;
		}
		/* document.forms[1].village_id.options.add(ct1); */
		document.getElementById(village_id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}

function getVillageDtlsByTalukaId(taluka_id, village_id)
{
	var xmlhttp;
	var urls="stsReg.htm?actionCode=getVillageaDtlsByTalukaId&talukaId="+taluka_id.value;
	$(".modal").show();
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();
		
		if (xmlhttp.readyState == 4) {
			z = 0;
			var roott = xmlhttp.responseXML.documentElement;
			$(".modal").hide();
		var ress = roott.getElementsByTagName("village_id")[z].childNodes[0].nodeValue;
		var ress1 = roott.getElementsByTagName("village_name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++;
				var ress = roott.getElementsByTagName("village_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("village_name")[z].childNodes[0].nodeValue;
			}
		}
	};
	
	function removeall() 
	{
		$('#'+village_id.id).find('option').remove();
		/*
		 * var ct = document.forms[1].village_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].village_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		/* document.forms[1].village_id.options.add(ct1); */
		document.getElementById(village_id.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}




function getVillageDtlsByTalukaIdWithAll(taluka_id, village_id)
{
	var xmlhttp;
	var urls="stsReg.htm?actionCode=getVillageaDtlsByTalukaIdWithAll&talukaId="+taluka_id.value;
	$(".modal").show();
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();
		
		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
					
		var ress = roott.getElementsByTagName("village_id")[z].childNodes[0].nodeValue;
		var ress1 = roott.getElementsByTagName("village_name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++;
				var ress = roott.getElementsByTagName("village_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("village_name")[z].childNodes[0].nodeValue;
			}
		}
	};
	
	function removeall() 
	{
		$('#'+village_id.id).find('option').remove();
		/*
		 * var ct = document.forms[1].village_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].village_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		/* document.forms[1].village_id.options.add(ct1); */
		document.getElementById(village_id.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}

//get CRP by BRC_id through Ajax
function getCRPDtlsByBEOId(beo_id, crp_id)
{
	var xmlhttp;
	var urls="stsReg.htm?actionCode=getCRPDtlsByBEOId&beo_id="+beo_id.value;
	$(".modal").show();
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			var roott = xmlhttp.responseXML.documentElement;
			$(".modal").hide();
			
		var ress = roott.getElementsByTagName("crp_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("crp_name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("crp_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("crp_name")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+crp_id.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(crp_id.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}



function getLocationByPin(pin_no)
{
	var xmlhttp;
	var urls="stsReg.htm?actionCode=getLocationByPincode&pincode="+pin_no.value;
	$(".modal").show();
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			var roott = xmlhttp.responseXML.documentElement;
			$(".modal").hide();			
		var ress = roott.getElementsByTagName("village_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("taluka_id")[z].childNodes[0].nodeValue;
			var ress2 = roott.getElementsByTagName("district_id")[z].childNodes[0].nodeValue;

		
		}
	};
	function removeall() {
		/*$('#'+crp_id.id).find('option').remove();*/
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		
		alert(ress);
		/* document.forms[1].taluka_id.options.add(ct1); */
		/*document.getElementById(crp_id.id).options.add(ct1);*/
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}



function CheckGrade(abc)
{ 
	var regex  = /^(10|\d\.\d{1,2})?$/; 
	var numStr = abc.value;
	var DigitsAfterDecimal = 2;
	if(numStr.substr(0, 2) == "10"){
		var regex1 =/^(00|\d)(\.\d{1,2})?$/;
		if(numStr.length - (numStr.indexOf(".")+1) > DigitsAfterDecimal || !regex1.test(numStr.substr(numStr.length-2, 4))) {
			
			document.getElementById(abc.id).value="";
			document.getElementById(abc.id).focus();
			alert("Enter Valid Grade");
			return false;
		}
	}
	else if (!regex.test(numStr))
		{
		
		document.getElementById(abc.id).value="";
		document.getElementById(abc.id).focus();
	    alert("Enter Valid Grade");
	    return false;
		}
  
}


function ValidationForPin(a) {
	var val = a.value;
	if (val[0] == 0 || val[0] == 9) {
		alert("First digit of Pincode should not be 0 or 9.");
		a.value = "";
		return false;
	} else {
		if (/^\d{6}$/.test(val)) {
			// value is ok, use it
		} else {
			alert("Please enter valid Pincode of length 6");
			a.value = "";
			return false;
		}

	}

}


var var6,var7,var8,var9,var10;


function getPincode(var1,var2,var3,var4,var5){
	
	/*var6=var1;
	var7 = var2;
	
	var8 = var3; 
	var9 = var4;  
	var10 = var5;
	 
		 * 
		 * var4= name property var5 = onclick attribute var6= onchange var7=
		 * onblure
		 * 
		 * 
		 
		var xmlhttp;
	
		document.getElementById(var3).innerHTML="";
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

		
			var xml = xmlhttp.responseText;
			
			if (xml != null && xml != "" && xml != '' )
			{
				var parent = document.getElementById(var2);
				var child = document.getElementById(var3);
				parent.removeChild(child);
				
				parent.innerHTML="<select id='"+var3+"'	name='"+var4+"'  style='display: block;width:100%;height:100%' onclick='"+var5+"' onchange='stsOtherPin(this) ;"+var5+" ' onblur='"+var5+"'> <option value='select'>Select</option>";
				,'"+var1+"','"+var2+"','"+var3+"','"+var4+"','"+var5+"				
				document.getElementById(var3).innerHTML = xmlhttp.responseText;
			} 
			else
			{
				
				var parent = document.getElementById(var2);
				var child = document.getElementById(var3);
				parent.removeChild(child);
				 parent.innerHTML="<input type='text' id='"+var3+"' name='"+var4+"' maxlength='6' style='display: block;width:100%;height:100%' onclick='"+var5+"' onchange='ValidationForPin(this);"+var5+"' onblur='"+var5+"'>";
				
			}
			
		}
	};

	var url = "stsReg.htm?actionCode=getPincodeByTalukaId&taluka_id=" + var1.value ;
	 alert("sa"); 

	xmlhttp.open("POST", url, true);
	 alert("sa"); 
	//xmlhttp.send();
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);*/
}





function stsOtherPin (ovalue){
	
	
	if(ovalue.value != "0"){
		
		return false;
		
	}else{
		
		

		var parent = document.getElementById(var7);
		
		var child = document.getElementById(var8);
		
			parent.removeChild(child);
			
			
			 parent.innerHTML="<input type='text' id='"+var8+"' name='"+var9+"' maxlength='6' style='display: block;width:100%;height:100%' onclick='"+var10+"' onchange='ValidationForPin(this);"+var10+"' onblur='"+var10+"'>";
			
			
/*		getPincode(var1,var2,var3,var4,var5);*/
		
	}
	
}

//created for lat-long with pincode
function getPincodeLatLong(var1,var2,var3,var4,var5,abcd){
	 /*
		 * 
		 * var4= name property var5 = onclick attribute var6= onchange var7=
		 * onblure
		 * 
		 * 
		 */
	
	/*var6=var1;
	var7 = var2;
	
	var8 = var3; 
	var9 = var4;  
	var10 = var5;
		var xmlhttp;
	
		document.getElementById(var3).innerHTML="";
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			 var xml=xmlhttp.responseXML; 
			var xml = xmlhttp.responseText;
			 alert(xml); 
			if (xml != null && xml != "" && xml != '' )
			{
				var parent = document.getElementById(var2);
				var child = document.getElementById(var3);
				parent.removeChild(child);
			
				parent.innerHTML="<select id='"+var3+"'	name='"+var4+"'  style='display: block;width:100%;height:100%' onclick='"+var5+"' onchange='"+var5+";stsOtherPin(this) ;"+abcd+"' onblur='"+var5+"'> <option >Select</option>";
				
				
				document.getElementById(var3).innerHTML = xmlhttp.responseText;
				
		
			} 
			else
			{
				
				var parent = document.getElementById(var2);
			var child = document.getElementById(var3);
			
				parent.removeChild(child);
				
			
				 parent.innerHTML="<input type='text' id='"+var3+"' name='"+var4+"'  maxlength='6' style='display: block;width:100%;height:100%' onclick='"+var5+"' onchange='ValidationForPin(pin);"+var5+"' onblur='"+var5+"'>";
		
				
			}
			
		}
	};

	var url = "sts.htm?actionCode=getPincodeByTalukaId&taluka_id=" + var1.value ;
	 alert("sa"); 

	xmlhttp.open("POST", url, true);
	 alert("sa"); 
	//xmlhttp.send();
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);*/
}
function loadBRCKadmin(districtValue,brcId)
{
	var xmlhttp;
	
	var urls="stsReg.htm?actionCode=loadBRC&dise=true&id="+districtValue;
	$(".modal").show();
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();
		
		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
			
		var ress = roott.getElementsByTagName("brc_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("brc_name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("brc_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("brc_name")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+brcId).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		ct1.title=reslt1;
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(brcId).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}





function loadBRC(districtId,brcName)
{
	
   
	var xmlhttp;
	var a=districtId.value;
	
	var urls="stsReg.htm?actionCode=loadBRC&dise=true&id="+a;
	$(".modal").show();
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();
		
		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
			
		var ress = roott.getElementsByTagName("brc_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("brc_name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("brc_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("brc_name")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
	 	$('#'+brcName.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}
	
	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		ct1.title=reslt1;
		/* document.forms[1].taluka_id.options.add(ct1); */
		//alert(ct1);
		document.getElementById(brcName.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}

function loadREVBRC(districtId,brcName)
{
	
	var xmlhttp;
	var a=districtId.value;
	
	var urls="stsReg.htm?actionCode=loadREVBRC&dise=true&id="+a;
	$(".modal").show();
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();
		
		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
			
		var ress = roott.getElementsByTagName("rev_code")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("rev_name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("rev_code")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("rev_name")[z].childNodes[0].nodeValue;
			}
		}
	};

function removeall() {
	$('#'+brcName.id).find('option').remove();
}

function addoptions(reslt, reslt1) {
	var ct1 = document.createElement("OPTION");
	ct1.text = reslt1;
	ct1.value = reslt;
	ct1.title=reslt1;
	
	
	document.getElementById(brcName.id).options.add(ct1);
}

xmlhttp.open("POST", urls, true);
xmlhttp.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
xmlhttp.overrideMimeType('text/xml');
xmlhttp.send(null);
}

function loadPuTalukafromPuDistrict(districtId,brcName)
{
	var xmlhttp;
	var a=districtId.value;
	
	var urls="stsReg.htm?actionCode=loadPuTalukafromPuDistrict&dise=true&id="+a;
	$(".modal").show();
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();
		
		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
			
		var ress = roott.getElementsByTagName("taluka_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("taluka_name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("taluka_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("taluka_name")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+brcName.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		ct1.title=reslt1;
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(brcName.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}


function loadBRCWithoutCode(districtId,brcName){
	var xmlhttp;
	var a=districtId.value;
	var urls="stsReg.htm?actionCode=loadBRCWithoutCode&dise=true&id="+a;
	$(".modal").show();
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange = function() {
		removeall();
		
		if (xmlhttp.readyState == 4) {
			z = 0;
			var roott = xmlhttp.responseXML.documentElement;
			$(".modal").hide();
		var ress = roott.getElementsByTagName("brc_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("brc_name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("brc_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("brc_name")[z].childNodes[0].nodeValue;
				
			}
		}
	};
	if(document.getElementById("brc_code")!=null){
		document.getElementById("brc_code").value = "";
	}
	
	if(document.getElementById("crc_code")!=null){
		document.getElementById("crc_code").value = "";
	}
	if(document.getElementById("brc_id")!=null){
		document.getElementById("brc_id").click();
	}
	if(document.getElementById("brcName")!=null){
		document.getElementById("brcName").click();
	}
	if(document.getElementById("crcName")!=null){
		document.getElementById("crcName").click();
	}
	
	function removeall() {
		$('#'+brcName.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		ct1.title=reslt1;
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(brcName.id).options.add(ct1);
	}
	
	
	
	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
    }



function loadBRCwithAll(districtId,brcName){
	var xmlhttp;
	var a=districtId.value;
	var urls="stsReg.htm?actionCode=loadBRCwithAll&dise=true&id="+a;
	$(".modal").show();
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange = function() {
		removeall();
		
		if (xmlhttp.readyState == 4) {
			z = 0;
			var roott = xmlhttp.responseXML.documentElement;
			$(".modal").hide();
		var ress = roott.getElementsByTagName("brc_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("brc_name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("brc_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("brc_name")[z].childNodes[0].nodeValue;
				
			}
		}
	};
	if(document.getElementById("brc_code")!=null){
		document.getElementById("brc_code").value = "";
	}
	
	if(document.getElementById("crc_code")!=null){
		document.getElementById("crc_code").value = "";
	}
	if(document.getElementById("brc_id")!=null){
		document.getElementById("brc_id").click();
	}
	if(document.getElementById("brcName")!=null){
		document.getElementById("brcName").click();
	}
	if(document.getElementById("crcName")!=null){
		document.getElementById("crcName").click();
	}
	
	function removeall() {
		$('#'+brcName.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		ct1.title=reslt1;
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(brcName.id).options.add(ct1);
	}
	
	
	
	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
    }





function loadBRCCode(districtId,brcName)
{
	var xmlhttp;
	var a=districtId.value;
	$(".modal").show();
	var urls="sts.htm?actionCode=loadBRCCode&id="+a;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
					
			
		var ress = roott.getElementsByTagName("brc_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("brc_name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++;
				var ress = roott.getElementsByTagName("brc_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("brc_name")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+brcName.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		ct1.title=reslt1;
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(brcName.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}


function loadCRCfromBRC(brcName,crcName)
{
	
	var xmlhttp;
	var a=brcName.value;
	$(".modal").show();
	var urls="stsReg.htm?actionCode=loadCRCfromBRC&dise=true&id="+a;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
					
			
		var ress = roott.getElementsByTagName("crc_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("crc_Name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("crc_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("crc_Name")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+crcName.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		ct1.title=reslt1;
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(crcName.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}
function loadCRCfromBRCKadmin(brcValue,crcId)
{
	var xmlhttp;
	$(".modal").show();
	var urls="stsReg.htm?actionCode=loadCRCfromBRC&dise=true&id="+brcValue;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
					
			
		var ress = roott.getElementsByTagName("crc_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("crc_Name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("crc_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("crc_Name")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+crcId).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		ct1.title=reslt1;
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(crcId).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}

function loadHabitationfromVILLAGE(brcName,hab_id)
{
	var xmlhttp;
	var a=brcName.value;
	$(".modal").show();
	var urls="stsReg.htm?actionCode=loadHabitationfromVILLAGE&dise=true&id="+a;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
					
			
		var ress = roott.getElementsByTagName("habcd")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("habname")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("habcd")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("habname")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+hab_id.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		ct1.title=reslt1;
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(hab_id.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}

function loadPanchayatfromBRC(brcName,pan_id)
{
	var xmlhttp;
	var a=brcName.value;
	$(".modal").show();
	var urls="stsReg.htm?actionCode=loadPanchayatfromBRC&dise=true&id="+a;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
					
			
		var ress = roott.getElementsByTagName("pancd")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("panname")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("pancd")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("panname")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+pan_id.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		ct1.title=reslt1;
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(pan_id.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}

function loadEducationBlockfromDISTRICT(addressdistrict_id,edu_id)
{
	var xmlhttp;
	var a=addressdistrict_id.value;
	$(".modal").show();
	var urls="stsReg.htm?actionCode=loadEducationBlockByDistrict&dise=true&id="+a;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
					
			
		var ress = roott.getElementsByTagName("educd")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("eduname")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("educd")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("eduname")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+edu_id.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		ct1.title=reslt1;
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(edu_id.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}

function loadConstituencyfromDISTRICT(addressdistrict_id,con_id)
{
	var xmlhttp;
	var a=addressdistrict_id.value;
	$(".modal").show();
	var urls="stsReg.htm?actionCode=loadConstituencyfromDISTRICT&dise=true&id="+a;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
					
			
		var ress = roott.getElementsByTagName("constcd")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("constname")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("constcd")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("constname")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+con_id.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		ct1.title=reslt1;
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(con_id.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}

function loadMunicipalityfromDISTRICT(addressdistrict_id,mun_id)
{
	var xmlhttp;
	var a=addressdistrict_id.value;
	$(".modal").show();
	var urls="stsReg.htm?actionCode=loadMunicipalityfromDISTRICT&dise=true&id="+a;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
					
			
		var ress = roott.getElementsByTagName("muncd")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("munname")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("muncd")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("munname")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+mun_id.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		ct1.title=reslt1;
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(mun_id.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}

function loadCityfromDISTRICT(addressdistrict_id,cityA_id)
{
	var xmlhttp;
	var a=addressdistrict_id.value;
	$(".modal").show();
	var urls="stsReg.htm?actionCode=loadCityfromDISTRICT&dise=true&id="+a;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
					
			
		var ress = roott.getElementsByTagName("citycd")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("cityname")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("citycd")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("cityname")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+cityA_id.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		ct1.title=reslt1;
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(cityA_id.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}



function loadCRCfromBRCWithAll(brcName,crcName)
{
	var xmlhttp;
	var b = brcName[0].value;
	$(".modal").show();
	var a=brcName[1].value;
	
	var c = [b,a];
	
	var urls="stsReg.htm?actionCode=loadCRCfromBRCWithAll&dise=true&id="+c;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
					
			
		var ress = roott.getElementsByTagName("crc_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("crc_Name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("crc_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("crc_Name")[z].childNodes[0].nodeValue;
			}
		}
	};
	
	if(document.getElementById("crc_code")!=null){
		document.getElementById("crc_code").value = "";
	}
	
	function removeall() {
		$('#'+crcName.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		ct1.title=reslt1;
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(crcName.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}



function loadSchoolfromBrc(brcName,schoolName)
{
	var xmlhttp;
	var a=brcName.value;
	$(".modal").show();
	var urls="stsReg.htm?actionCode=loadSchoolfromBrc&id="+a;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
		
		var ress = roott.getElementsByTagName("school_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("school_Name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("school_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("school_Name")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+schoolName.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1.replace("~","&");
		ct1.value = reslt;
		ct1.title=reslt1.replace("~","&");
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(schoolName.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}




function loadSchoolfromCrc(crcName,schoolName)
{
	var xmlhttp;
	var a=crcName.value;
	$(".modal").show();
	var urls="stsReg.htm?actionCode=loadSchoolfromCrc&id="+a;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
		
		var ress = roott.getElementsByTagName("school_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("school_Name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("school_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("school_Name")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+schoolName.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1.replace("~","&");
		ct1.value = reslt;
		ct1.title=reslt1.replace("~","&");
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(schoolName.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}

function loadSchoolfromCrcWithoutAll(crcName,schoolName)
{
	var xmlhttp;
	var a=crcName.value;
	$(".modal").show();
	var urls="stsReg.htm?actionCode=loadSchoolfromCrcWithoutAll&id="+a;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
		
		var ress = roott.getElementsByTagName("school_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("school_Name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("school_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("school_Name")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+schoolName.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1.replace("~","&");
		ct1.value = reslt;
		ct1.title=reslt1.replace("~","&");
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(schoolName.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}

function loadSchoolfromCrcWithAll(crcName,schoolName)
{
	
	var xmlhttp;
	var a=crcName.value;
	$(".modal").show();
	var urls="sts.htm?actionCode=loadSchoolfromCrcWithAll&id="+a;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
					
		
		var ress = roott.getElementsByTagName("school_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("school_Name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("school_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("school_Name")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+schoolName.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		ct1.title =reslt1;
		
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(schoolName.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}
function loadSchoolfromCrcWithAllKadmin(crcValue,schoolId)
{
	
	var xmlhttp;
	$(".modal").show();
	var urls="sts.htm?actionCode=loadSchoolfromCrcWithAll&id="+crcValue;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var roott = xmlhttp.responseXML.documentElement;
					
		
		var ress = roott.getElementsByTagName("school_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("school_Name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("school_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("school_Name")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+schoolId).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		ct1.title =reslt1;
		
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(schoolId).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}


//start rutul

function loadTeacherfromSchool(t_schoolName,t_teacherName,flag,acyear)
{
	
	var xmlhttp;
	var a=t_schoolName.value;
	$(".modal").show();
	if (flag=='add'){
		var urls="sts.htm?actionCode=loadTeacherfromSchool&school_id="+a;
	}
	else if(flag=='update')
		{
		var urls="sts.htm?actionCode=loadTeacherfromSchoolforupdate&school_id="+a+"&acyear="+acyear;
		
		}
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		removeall();

		if (xmlhttp.readyState == 4) {
			z = 0;
			var roott = xmlhttp.responseXML.documentElement;
			$(".modal").hide();
		
		var ress = roott.getElementsByTagName("teacher_id")[z].childNodes[0].nodeValue;
			var ress1 = roott.getElementsByTagName("teacher_Name")[z].childNodes[0].nodeValue;
			
			while (ress != null) {
				addoptions(ress, ress1);
				z++
				var ress = roott.getElementsByTagName("teacher_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("teacher_Name")[z].childNodes[0].nodeValue;
			}
		}
	};
	function removeall() {
		$('#'+t_teacherName.id).find('option').remove();
		/*
		 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
		 * i--) { document.forms[1].taluka_id.options[i] = null; }
		 */
	}

	function addoptions(reslt, reslt1) {
		var ct1 = document.createElement("OPTION");
		ct1.text = reslt1;
		ct1.value = reslt;
		ct1.title =reslt1;
		/* document.forms[1].taluka_id.options.add(ct1); */
		document.getElementById(t_teacherName.id).options.add(ct1);
	}

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}

//end  rutul

function brcNameCheckFromDistrict(brcName, district_id)
{
	var xmlhttp;
	var pp;
	$(".modal").show();
	var urls="sts.htm?actionCode=brcNameCheckFromDistrict&districtId="+district_id.value+"&brcName="+brcName.value;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var brcCheck = xmlhttp.responseText;		
			
			pp = brcCheck.split("+")[0];
			if(pp=="BRC Available"){
				alert("BRC Name already Registered");
				document.getElementById("brcName").value="";	
				brcName.focus();
			}
		
		}
	};
	

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}
function brcCodeCheck(brcCode)
{
	var xmlhttp;
	var pp;
	$(".modal").show();
	var urls="sts.htm?actionCode=brcCodeCheck&brcCode="+brcCode.value;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4) {
			z = 0;
			var brcCodeCheckvar = xmlhttp.responseText;		
			$(".modal").hide();
			pp = brcCodeCheckvar.split("+")[0];
			if(pp=="BRC Available"){
				alert("BEO Code already Registered.");
				document.getElementById("brcCode").value="";	
				brcCode.focus();
			}
		
		}
	};
	

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}
function crcNameCheckFromBRC(crcName, BRC_id)
{
	var xmlhttp;
	var pp;
	$(".modal").show();
	var urls="sts.htm?actionCode=crcNameCheckFromBRC&BrcId="+BRC_id.value+"&crcName="+crcName.value;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var crcCheck = xmlhttp.responseText;		
			
			pp = crcCheck.split("+")[0];
			if(pp=="CRC Available"){
				alert("CRC Name already Registered.");
				document.getElementById("crcName").value="";	
				crcName.focus();
			}
		
		}
	};
	

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}
function crcCodeCheck(crcCode)
{
	var xmlhttp;
	var pp;
	$(".modal").show();
	var urls="sts.htm?actionCode=crcCodeCheck&crcCode="+crcCode.value;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4) {
			z = 0;
			$(".modal").hide();
			var crcCodeCheckvar = xmlhttp.responseText;		
			
			pp = crcCodeCheckvar.split("+")[0];
			if(pp=="CRC Available"){
				alert("CRC Code already Registered.");
				document.getElementById("crcCode").value="";	
				crcCode.focus();
			}
		
		}
	};
	

	xmlhttp.open("POST", urls, true);
	xmlhttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlhttp.overrideMimeType('text/xml');
	xmlhttp.send(null);
}




	
//addeed by raj savani :: brc code from brcId......

function getBrcMstBoFromBrcDtls(brcName)
{
	var xmlhttp;
	var a=brcName.value;
	$(".modal").show();
	var data1 = {"id":a};
	$.ajax({
	    url: "${pageContext.request.contextPath}/sts.htm?actionCode=getBrcMstBoFromBrcDtls",
	    data: data1,
	    type: "POST",
	    dataType:"text",
	    success: function( resdata,status,xhr ) {
	    	if(resdata){
			    
				document.getElementById("brc_code").value=resdata;
	    	}; 
		    
	    },
	    error: function( xhr, status, errorThrown ) {
	        alert( "Sorry, there was a problem!" );
	        console.log( "Error: " + errorThrown );
	        console.log( "Status: " + status );
	        console.dir( xhr );
	    },
	    complete: function( xhr, status ) {
	    	$(".modal").hide();
	    }
	}); 
	}	
	



//addeed by raj savani :: crc code from crcId......

/*function getCrcMstBoFromCrcDtls(crcName)
{
	
	var a=crcName.value;
	var data1 = {"id":a};
	
	$.ajax({
	    url: "${pageContext.request.contextPath}/sts.htm?actionCode=getCrcMstBoFromCrcDtls",
	    data: data1,
	    type: "POST",
	    dataType:"text",
	    success: function(resdata,status,xhr ) {
	    	if(resdata)
	    	{
				document.getElementById("crc_code").value=resdata;
	    	}; 
	    	
	    	getSchoolCountFromCrcId(crcName.value); 
	    },
	    error: function( xhr, status, errorThrown ) {
	        alert( "Sorry, there was a problem!" );
	        console.log( "Error: " + errorThrown );
	        console.log( "Status: " + status );
	        console.dir( xhr );
	    },
	    complete: function( xhr, status ) {
	    }
	}); 
	}*/	




function checkSchoolAvailability(var1){
	var schoolId = var1.value;
	$(".modal").show();
	var data1 = {"schoolId":schoolId};
	
	  $.ajax({
	    url: "${pageContext.request.contextPath}/sts.htm?actionCode=checkSchoolAvailability",
	    data: data1,
	    type: "POST",
	    success: function( resdata,status,xhr ) {
	    	if(resdata=="true"){
			   alert("School does not exist.");
			   document.getElementById(var1.id).value='';
			   
	    	};  
		    
	    },
	    error: function( xhr, status, errorThrown ) {
	        alert( "Something went wrong" );
	        console.log( "Error: " + errorThrown );
	        console.log( "Status: " + status );
	        console.dir( xhr );
	    },
	    complete: function( xhr, status ) {
	    	$(".modal").hide();
	    }
	}); 
	}

function checkSchoolAvailabilityold(var1){
	var schoolId = var1.value;
	$(".modal").show();
	var data1 = {"schoolId":schoolId};
	
	  $.ajax({
	    url: "${pageContext.request.contextPath}/sts.htm?actionCode=checkSchoolAvailability",
	    data: data1,
	    type: "POST",
	    success: function( resdata,status,xhr ) {
	    	 if(resdata=="false"){
				   alert("School already exist.");
				   document.getElementById(var1.id).value='';
				   
		    	};  
		    
	    },
	    error: function( xhr, status, errorThrown ) {
	        alert( "Something went wrong" );
	        console.log( "Error: " + errorThrown );
	        console.log( "Status: " + status );
	        console.dir( xhr );
	    },
	    complete: function( xhr, status ) {
	    	$(".modal").hide();
	    }
	}); 
	}

function searchCountDetails(var1,var2,var3,var4,var5,var6,var7)
{
	if(parseFloat(var6.textContent)>0)
	{
		document.getElementById("row_name").value=var1;
		document.getElementById("row_value").value=var2;
		document.getElementById("col_name").value=var3;
		
		document.getElementById("col_value").value=var4;
		document.getElementById("condition").value=var5;
		
		document.getElementById("diseHeader").value=var7;
		
		document.getElementById("actionCodeV").value = "searchCountDetails";
		document.searchCount.action = "sts.htm";
		document.searchCount.target="_blank";
		document.searchCount.submit();
	}
}
function searchCountDetailsForReportL(var1,var2,var3,var4,var5,var6,var7){
	

	

	document.getElementById("row_name").value=var1;
	document.getElementById("row_value").value=var2;
	document.getElementById("col_name").value=var3;
	
	document.getElementById("col_value").value=var4;
	document.getElementById("condition").value=var5;
	document.getElementById("diseHeader").value=var7;
	
	document.getElementById("actionCodeV").value = "searchCountDetailsForReportL";

	document.frmDropCountReport.action = "sts.htm?dise=true";
	document.frmDropCountReport.target="_blank";
	document.frmDropCountReport.submit();
	
}

// ADD BY KARSHAN KHODBHAYA : START FOR SHOW UNDERLINE WHEN VALUE GREATER THAN 0

/*$(document).ready(function() {
	
	$('.HyperLinkTD').mouseover(function(){
		if(parseFloat($(this).text())>0)
		{
			$(this).css('background-color','rgb(246, 217, 195)');
			$(this).css('text-decoration','underline');
			$(this).css('cursor','pointer');
		}
	});
		

	$('.HyperLinkTD').mouseout(function(){
		if(parseFloat($(this).text())>0)
		{
			$(this).css('background-color','');
			$(this).css('text-decoration','');
			$(this).css('cursor','');
		}
	});
	*/

/*$('#searchResultTable td').mouseover(function(){
	if(parseFloat($(this).text())>0)
	{
		$(this).css('background-color','rgb(246, 217, 195)');
		$(this).css('text-decoration','underline');
		$(this).css('cursor','pointer');
	}
});

$('#searchResultTable td').mouseout(function(){
	if(parseFloat($(this).text())>0)
	{
		$(this).css('background-color','');
		$(this).css('text-decoration','');
		$(this).css('cursor','');
	}
});*/



/*$('#diseReportFooter th').mouseover(function(){
	if(parseFloat($(this).text())>0)
	{
		$(this).css('text-decoration','underline');
		$(this).css('cursor','pointer');
	}
});

$('#diseReportFooter th').mouseout(function(){
	if(parseFloat($(this).text())>0)
	{
		$(this).css('text-decoration','');
		$(this).css('cursor','');
	}
});*/



/*});*/

//ADD BY KARSHAN KHODBHAYA : END FOR SHOW UNDERLINE WHEN VALUE GREATER THAN 0




function getSchoolCountFromCrcId(crcId){
	var a=crcId;
	$(".modal").show();
	var data1 = {"id":a};
	
	$.ajax({
	    url: "${pageContext.request.contextPath}/sts.htm?actionCode=getSchoolCountFromCrcId",
	    data: data1,
	    type: "POST",
	    dataType:"text",
	    success: function(resdata,status,xhr ) {
	    	if(resdata)
	    	{
			 
	    		
			    	document.getElementById("school_index_id").value="";
				    document.getElementById("school_index_id").value=resdata;
	    	}; 
		    
	    },
	    error: function( xhr, status, errorThrown ) {
	        alert( "Sorry, there was a problem!" );
	        console.log( "Error: " + errorThrown );
	        console.log( "Status: " + status );
	        console.dir( xhr );
	    },
	    complete: function( xhr, status ) {
	    	$(".modal").hide();
	    }
	}); 
	}




function searchingForStudent()
{
	var testSel=document.getElementsByTagName("select");
	di = true;
	if(document.getElementById("school_code").value=="" || document.getElementById("school_code").value==null)
	{
		for(var ind=0;ind<testSel.length;ind++)
		{
			if((testSel[ind].value=="-1") && (testSel[ind].id=="brcstate" || testSel[ind].id=="year" || testSel[ind].id=="district" || testSel[ind].id=="brcName" || testSel[ind].id=="crcName" || testSel[ind].id=="schoolName" || testSel[ind].id=="state_id" || testSel[ind].id=="district_id" || testSel[ind].id=="taluka_id" || testSel[ind].id=="village_id") && (testSel[ind].disabled == false))
			{
				if(document.getElementById(testSel[ind].id+"3")!=null)
				{
					document.getElementById(testSel[ind].id+"3").style.display="block";
					di=false;
				}
			}
			
		}
		return di;
	}
	else
	{
		return di;
	}
}


function setValue(aufil)
{
	for(var i=0;i<aufil.length;i++)
	{
		//alert(aufil[i].split("=")[0]+"--"+aufil[i].split("=")[1]);
		if(aufil[i].split("=")[1]!="" && aufil[i].split("=")[1]!=null)
		{
			$('#'+aufil[i].split("=")[0]).val(aufil[i].split("=")[1]);
		}
	}
}

function hideMsg()
{
	var testSel=document.getElementsByTagName("select");
	
	if(document.getElementById("school_code").value!="" || document.getElementById("school_code").value!=null)
	{
		for(var ind=0;ind<testSel.length;ind++)
		{
			
			if(testSel[ind].id=="brcstate" || testSel[ind].id=="district" || testSel[ind].id=="brcName" || testSel[ind].id=="crcName" || testSel[ind].id=="schoolName" || testSel[ind].id=="state_id" || testSel[ind].id=="district_id" || testSel[ind].id=="taluka_id" || testSel[ind].id=="village_id")
			{
				document.getElementById(testSel[ind].id+"3").style.display="none";
			}
			
		}
	}
}

function hideError(evt)
{
	if(document.getElementById(evt.id+"3")!=null)
	{
		document.getElementById(evt.id+"3").style.display="none";
	}else if(document.getElementById(evt.id+"1")!=null)
	{
		document.getElementById(evt.id+"1").style.display="none";
	}
	
}


function checkInputOnlyOne(evt)
{
	var inputTest = document.getElementById(evt).getElementsByTagName("input");
	for(var a=0;a<inputTest.length;a++)
	{
		if(inputTest[a].value!="" && inputTest[a].value!=null && inputTest[a].type=="text")
		{
			return true;
		}
	}
}


function checkSelectOnlyOne(evt)
{
	var selectTest = document.getElementById(evt).getElementsByTagName("select");
	for(var a=0;a<selectTest.length;a++)
	{
		if(selectTest[a].value!="" && selectTest[a].value!=null && selectTest[a].value!="-1")
		{
			return true;
		}
	}
}

function checkCheckBoxOnlyOne(evt)
{
	var boxTest = document.getElementById(evt).getElementsByTagName("input");
	for(var a=0;a<boxTest.length;a++)
	{
		if(boxTest[a].type=="checkbox" && boxTest[a].checked==true)
		{
			return true;
		}
	}
}

function checkDuplicateRecord(evt,inp,flg,msg)
{
	$(".modal").show();
	var data1 = {"data":evt};
	$.ajax({
	    url: "sts.htm?dise=true&actionCode=checkDuplicateRecord",
	    data: data1,
	    type: "POST",
	    dataType:"text",
	    success: function(resdata,status,xhr)
	    {$(".modal").hide();
	    	if (resdata == flg)
			{
				alert(msg);
								
				if(inp!=null && inp!="")
				{
					for(var a=0;a<inp.split(",").length;a++)
					{
						document.getElementById(inp.split(",")[a]).value=null;
					}
				}
				return true;
			}
			else
			{
				return false;
			}
		}
	}
	);
}

function checkDuplicateRecord(sl,evt,inp,flg,msg)
{
	 $(".modal").show();
	var data1 = {"data":evt};
	$.ajax({
	    url: "sts.htm?dise=true&actionCode=checkDuplicateRecord",
	    data: data1,
	    type: "POST",
	    dataType:"text",
	    success: function(resdata,status,xhr)
	    {$(".modal").hide();
	    	if (resdata == flg)
			{
	    		
				alert(msg);
				if(sl!=null && sl!="")
				{
					for(var a=0;a<sl.split(",").length;a++)
					{
						document.getElementById(sl.split(",")[a]).selectedIndex=0;
					}
				}
				
				if(inp!=null && inp!="")
				{
					for(var a=0;a<inp.split(",").length;a++)
					{
						document.getElementById(inp.split(",")[a]).value=null;
					}
				}
				return true;
			}
			else
			{
				return false;
			}
		}
	}
	);
}


function checkDuplicateRecordForPu(sl,evt,inp,flg,msg)
{
	 $(".modal").show();
	var data1 = {"data":evt};
	$.ajax({
	    url: "pu.htm?dise=true&actionCode=checkDuplicateRecordForPu",
	    data: data1,
	    type: "POST",
	    dataType:"text",
	    success: function(resdata,status,xhr)
	    {$(".modal").hide();
	    	if (resdata == flg)
			{
	    		
				alert(msg);
				if(sl!=null && sl!="")
				{
					for(var a=0;a<sl.split(",").length;a++)
					{
						document.getElementById(sl.split(",")[a]).selectedIndex=0;
					}
				}
				
				if(inp!=null && inp!="")
				{
					for(var a=0;a<inp.split(",").length;a++)
					{
						document.getElementById(inp.split(",")[a]).value=null;
					}
				}
				return true;
			}
			else
			{
				return false;
			}
		}
	}
	);
}



function checkDobOrAdmissionDate(first_id,second_id,third_id)
{
	
	var val1;
	var val2;
	
	var first = document.getElementById(first_id.id).value;
	var second = document.getElementById(second_id.id).value;
	var third = document.getElementById(third_id.id).value;

	var k = first.indexOf("/");
	var t = first.indexOf("/",3);
	val1 = first.substr(k+1,t-k-1) +"/"+first.substr(0,k)+"/"+first.substr(t+1,first.length);
	
	k = second.indexOf("/");
	t = second.indexOf("/",3);
	val2 = second.substr(k+1,t-k-1) +"/"+second.substr(0,k)+"/"+second.substr(t+1,second.length);
	
	if (Date.parse(val2) > Date.parse(val1)) {
		alert("Please enter valid (Admission Date) OR (Date of Birth).");
		
		document.getElementById(third_id.id).value = "";
		document.getElementById(first_id.id).value = "";
		document.getElementById(first_id.id).value.focus();
		
		return false;
	} 
	else{
		
		return true;
		
	}
	
}



function getdisevar(cast){
	
	var m,f;
	var arr;
	//alert();
	if(cast == "0"){m=m0;f=f0;}
	if(cast == "1"){m=m1;f=f1;}
	if(cast == "2"){m=m2;f=f2;}
	if(cast == "3"){m=m3;f=f3;}
	if(cast == "4"){m=m4;f=f4;}
	if(cast == "5"){m=m5;f=f5;}
	if(cast == "6"){m=m6;f=f6;}
	if(cast == "7"){m=m7;f=f7;}
	if(cast == "8"){m=m8;f=f8;}
	if(cast == "9"){m=m9;f=f9;}
	if(cast == "10"){m=m10;f=f10;}
	if(cast == "11"){m=m11;f=f11;}
	if(cast == "12"){m=m12;f=f12;}
	if(cast == "13"){m=m13;f=f13;}
	if(cast == "14"){m=m14;f=f14;}
	if(cast == "15"){m=m15;f=f15;}
	if(cast == "16"){m=m16;f=f16;}
	if(cast == "17"){m=m17;f=f17;}
	if(cast == "18"){m=m18;f=f18;}
	if(cast == "19"){m=m19;f=f19;}
	if(cast == "20"){m=m20;f=f20;}
	if(cast == "21"){m=m21;f=f21;}
	if(cast == "22"){m=m22;f=f22;}
	if(cast == "23"){m=m23;f=f23;}
	if(cast == "24"){m=m24;f=f24;}
	if(cast == "25"){m=m25;f=f25;}
	if(cast == "26"){m=m26;f=f26;}
	if(cast == "27"){m=m27;f=f27;}
	if(cast == "28"){m=m28;f=f28;}
	if(cast == "29"){m=m29;f=f29;}
	if(cast == "30"){m=m30;f=f30;}
	if(cast == "31"){m=m31;f=f31;}
	if(cast == "32"){m=m32;f=f32;}
	if(cast == "33"){m=m33;f=f33;}
	if(cast == "34"){m=m34;f=f34;}
	if(cast == "35"){m=m35;f=f35;}
	if(cast == "36"){m=m36;f=f36;}
	if(cast == "37"){m=m37;f=f37;}
	if(cast == "38"){m=m38;f=f38;}
	if(cast == "39"){m=m39;f=f39;}
	if(cast == "40"){m=m40;f=f40;}
	
	return [m,f];
}


function checkEnrollmentLength(evt)
{
	var val=document.getElementById(evt.id).value;
	
	if(val.length==9 || val.length==17 ){
	}else{
		alert("Enter valid SATS No.");
		document.getElementById(evt.id).value ="";
	}
	
}
function checkSslcLength(evt)
{
	var val=document.getElementById(evt.id).value;
	
	if(val.length==11){
	}else{
		alert("Enter valid SSLC No.");
		document.getElementById(evt.id).value ="";
	}
	
}

function checkAadharLength(evt)
{
	var val=document.getElementById(evt.id).value;
	
	if(val.length==12 || val.length==14 ){
	}else{
		alert("Enter valid Aadhar No.");
		document.getElementById(evt.id).value ="";
	}
	
}

function checkschoolcodeLength(evt)
{
	var val=document.getElementById(evt.id).value;
	
	if(val.length<11){
		
		alert("Enter 11 digit school code.");
		document.getElementById(evt.id).value ="";
	}
}




//

	function setCode(getId,setId)
	{
		if(getId.value!="-1" && getId.value!="ALL" && getId.value!=-1)
		{
			setId.value=getId.value;
		}
		else
		{
			setId.value=null;
			
			
		}
	}

	
	
	function setCodeWithMsg(getId,setId,msg)
	{
		if(getId.value!="" && getId.value!=null)
		{
			var fl=false;
			for(var a=0;a<setId.options.length;a++)
			{
				
				if(setId.options[a].value==getId.value)
				{
					fl=true;
					break;
				}
			}
			
			if(fl==false)
			{
				setId.value = setId.options[0].value;
				getId.value = null;
				alert(msg);
			}
			else
			{
				setId.value=getId.value;
			}

		}
		
		if(document.getElementById("brcName")!=null){
			document.getElementById("brcName").click();	
		}
		
		if(document.getElementById("crcName")!=null){
			document.getElementById("crcName").click();	
		}
		
		if(document.getElementById("schoolName")!=null){
			document.getElementById("schoolName").click();	
		}
		
		if(document.getElementById("brc_id")!=null){
			document.getElementById("brc_id").click();	
		}
		
		if(document.getElementById("crc_id")!=null){
			document.getElementById("crc_id").click();	
		}
		
	}



	function loadTeacherforSchoolTransfer(school_id,t_teacherName,acaYear)
	{
		var xmlhttp;
		var a=school_id.value;
		$(".modal").show();
		var urls="sts.htm?actionCode=loadTeacherforSchoolTransfer&school_id="+a+"&acayear="+acaYear;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function() {
			removeall();

			if (xmlhttp.readyState == 4) {
				z = 0;
				var roott = xmlhttp.responseXML.documentElement;
				$(".modal").hide();
			
			var ress = roott.getElementsByTagName("teacher_id")[z].childNodes[0].nodeValue;
				var ress1 = roott.getElementsByTagName("teacher_Name")[z].childNodes[0].nodeValue;
				
				while (ress != null) {
					addoptions(ress, ress1);
					z++
					var ress = roott.getElementsByTagName("teacher_id")[z].childNodes[0].nodeValue;
					var ress1 = roott.getElementsByTagName("teacher_Name")[z].childNodes[0].nodeValue;
				}
			}
		};
		function removeall() {
			$('#'+t_teacherName.id).find('option').remove();
			/*
			 * var ct = document.forms[1].taluka_id.length; for (i = ct; i >= 0;
			 * i--) { document.forms[1].taluka_id.options[i] = null; }
			 */
		}

		function addoptions(reslt, reslt1) {
			var ct1 = document.createElement("OPTION");
			ct1.text = reslt1;
			ct1.value = reslt;
			ct1.title =reslt1;
			/* document.forms[1].taluka_id.options.add(ct1); */
			document.getElementById(t_teacherName.id).options.add(ct1);
		}

		xmlhttp.open("POST", urls, true);
		xmlhttp.setRequestHeader("Content-Type",
				"application/x-www-form-urlencoded");
		xmlhttp.overrideMimeType('text/xml');
		xmlhttp.send(null);
	}
	
	function loadTeacherfromSchcd(schName,TeacherName){
		var element = TeacherName;	
		 $.ajax({
			url: "sts.htm?actionCode=loadSchoolMedfromSchcd&id="+schName.value,
			type: "POST",
			data: "<TEACHER></TEACHER>", 
			contentType: "text/xml",
			success: function(xml) {
			  var idArr = new Array();
			  var nameArr = new Array();
			  var i =0;
			  $(xml).find("teacher_id").each(function()  {
				  idArr[i++] =$(this).text();
			 });
			 i =0;
			 $(xml).find("teacher_Name").each(function()  {
				  nameArr[i++] =$(this).text();
			 });
			 $("#"+element.id+" option[value!='Select']").remove();
			 for (var j = 0; j < i; j++) {
				 $("#"+element.id).append("<option value = "+idArr[j]+">"+nameArr[j]+"</option>");
			}
			} 
		 });
		 }
	
	
	function getCentername(){
		var data1 ={"brcName":$('#brcName').val(),"crcName":$('#crcName').val()};
		$.ajax({
		    url: "${pageContext.request.contextPath}/sts.htm?actionCode=getCentername",
		    data: data1,
		    type: "POST",
		    dataType:"text",
		    success: function(resdata,status,xhr){
		    	$('#st_center_name').html(resdata);
			}
		});
	}
	
	function getBatchname(){
		var data1 ={"st_center_id":$('#st_center_name').val()};
		$.ajax({
		    url: "${pageContext.request.contextPath}/sts.htm?actionCode=getBatchName",
		    data: data1,
		    type: "POST",
		    dataType:"text",
		    success: function(resdata,status,xhr){
		    	$('#batch_id').html(resdata);
			}
		});
	}
	
	function getBCBatchname(){
		var data1 ={"st_center_id":$('#st_center_name').val()};
		$.ajax({
		    url: "${pageContext.request.contextPath}/sts.htm?actionCode=getBCBatchName",
		    data: data1,
		    type: "POST",
		    dataType:"text",
		    success: function(resdata,status,xhr){
		    	$('#batch_id').html(resdata);
			}
		});
	}
	
	
	function getBCBatchname1(){
		var data1 ={"st_center_id":$('#st_center_name').val()};
		$.ajax({
		    url: "${pageContext.request.contextPath}/sts.htm?actionCode=getBCBatchNameFromCenter",
		    data: data1,
		    type: "POST",
		    dataType:"text",
		    success: function(resdata,status,xhr){
		    	$('#batch_id').html(resdata);
			}
		});
	}
	
	function getcalfrombatch(){
		var data1 ={"batch":$('#batch_id').val()};
		$.ajax({
		    url: "${pageContext.request.contextPath}/sts.htm?actionCode=getCalFromBatch",
		    data: data1,
		    type: "POST",
		    dataType:"text",
		    success: function(resdata,status,xhr){
		    	$('#fromDate').html(resdata);
		    	$('#toDate').html(resdata);
		    	
			}
		});
	}
	
	
	
	function getBatch_schedule_dtl(){
		var data1 ={"batch_id":$('#batch_id').val()};
		$.ajax({
		    url: "${pageContext.request.contextPath}/sts.htm?actionCode=getBatch_schedule_dtl",
		    data: data1,
		    type: "POST",
		    dataType:"text",
		    success: function(resdata,status,xhr){
		    	$('#sch_timing_id').val(resdata);
			}
		});
	}
	
	
	function getStandard(){
		var data1 ={"batch_id":$('#batch_id').val()};
		$.ajax({
		    url: "${pageContext.request.contextPath}/sts.htm?actionCode=getStandard",
		    data: data1,
		    type: "POST",
		    dataType:"text",
		    success: function(resdata,status,xhr){
		    	$('#new_std_id').val(resdata);
		    	$('#std_id').html(resdata);
			}
		});
	}
	
	
	function getSubjectName(){
		var data1 ={"std_id":$('#std_id').val()};
		$.ajax({
		    url: "${pageContext.request.contextPath}/sts.htm?actionCode=getSubjectName",
		    data: data1,
		    type: "POST",
		    dataType:"text",
		    success: function(resdata,status,xhr){
		    	$('#sub_id').html(resdata);
			}
		});
	}
	
	
	