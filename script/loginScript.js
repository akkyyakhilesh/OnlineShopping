function loginForm(){
				var container=document.getElementById("container"); 
				var bodytag=document.getElementById("mainbody");
				bodytag.removeChild(container);
				$("<div/>",{
					id:"div1",
					className:"firstDiv"
				}).appendTo("body");
			}