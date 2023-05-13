var j = 1;

function OnOff()
{
 	j++;

	if (j % 2 == 0)
	{
        document.getElementById('div_1_3').style.backgroundColor = "white";
        document.getElementById('div_1_3').style.boxShadow = "rgba(255, 255, 255, 0.35) 0px 0px 50px 25px";

        document.getElementById('headerText2').style.color = "white";

        document.getElementById('div_1_3').style.backgroundColor = "white";
        

        
	}

	else
	{
        document.getElementById('div_1_3').style.backgroundColor = "#A8A8A8";
        document.getElementById('div_1_3').style.boxShadow = "rgba(255, 255, 255, 0.35) 0px 0px 0px 0px";

        document.getElementById('headerText2').style.color = "grey";

        document.getElementById('div_1_3').style.backgroundColor = "black";
        

		j = 1;
	}
}