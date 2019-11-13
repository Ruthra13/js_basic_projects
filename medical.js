<html>
<head>
<script>
function myfunc()
{
  var tablet_to_search,search_medicine_len,tab_name,i,found=0,str_len,output="";
  tablet_to_search = document.getElementById("ta").value;
  search_medicine_len=tablet_to_search.length;
  console.log(search_medicine_len);
  var medicine_info = [["paracetamol",   "tablet", "mg", "150", "30",  "50"],
 								       ["gelucil syrup", "liquid", "ml", "150", "30", "100"],
	 							       ["cpm", 		       "tablet", "mg", "150", "0",   "10"],
								       ["metrandazole",  "tablet", "mg", "100", "4",   "20"]];
  if(search_medicine_len > 0)
			{
				for(i = 0; i < medicine_info.length; i++)
				{
					n = 0;
					str_len = 0;
					tab_name = medicine_info[i][0];
					console.log(tab_name);
					while(n < search_medicine_len && n<tab_name.length)
					{
						if(tablet_to_search[n] == tab_name[n])
						{
							str_len = str_len + 1;
						}
						n++;
					}
					console.log("str_len = " + str_len);
					if(search_medicine_len == str_len)
					{
						found = 1;
			      output = output +  "Medicine name: " + medicine_info[i][0] + "<br>"+ "Type: " + medicine_info[i][1] + "<br>" + "Unit: " + medicine_info[i][2]+ "<br>" + "Quantity: " + medicine_info[i][3]+ "<br>"+"Price: " +medicine_info[i][4]+"<br>"+ "Availability: "+medicine_info[i][5]+"<br>"+"<br>";
	          console.log("output = " + output);
            document.getElementById("details").innerHTML = output;         
					}
				}
			}
			if ( found == 0 )
			{
				document.getElementById("details").innerHTML = " ";
			}
			
		}
	</script>
</head>
<body>
	<p>TYPE YOUR MEDICINE TO SEARCH :  <input type="text" id="ta" onkeyup="testFunc()"> </input></p>
  <p id="details"></p>
</body>
</html>
   
