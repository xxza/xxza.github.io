window.onload=aa;

function aa()
{
	var a = document.getElementsByTagName("input");

	for(var i=0; i<a.length; i++)
	{
		a[i].setAttribute("onclick","ff(this)");

	}
	
}
function ff(b)//点击符号事件
{

	var text = document.getElementById("text");

	text.setAttribute("value",text.value+b.value);

	if(b == document.getElementById("reset"))
	{

		window.self.location.reload();
	}

		else if(b == document.getElementById("equal"))
		{

			var yy = text.getAttribute("value");

			if(yy.indexOf("+")!=-1)
			{
				var p = yy.split("+");		
			
				var res = parseInt(p[0])+parseInt(p[1]);
				var text = document.getElementById("text");

				text.setAttribute("value",res);
			}
			
			else if(yy.indexOf("-")!=-1)
			{
				var p = yy.split("-");		
			
				var res = parseInt(p[0])-parseInt(p[1]);
				var text = document.getElementById("text");

				text.setAttribute("value",res);
			}
			
			else if(yy.indexOf("*")!=-1)
			{
				var p = yy.split("*");		
			
				var res = parseInt(p[0])*parseInt(p[1]);
				var text = document.getElementById("text");

				text.setAttribute("value",res);
			}
			else if(yy.indexOf("/")!=-1)
			{
				var p = yy.split("/");		
			
				var res = parseInt(p[0])/parseInt(p[1]);
				var text = document.getElementById("text");

				text.setAttribute("value",res);
			}
			
			
		}
		
		
	

	
}	

