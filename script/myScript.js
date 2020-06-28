var shirtImages=["image/shirt.jpeg", "image/shirt2.jpg","image/shirt3.jpg","image/shirt4.jpg"];
			var jeansImages=["image/jeans.jpg", "image/jeans2.jpg","image/jeans3.jpg","image/jeans4.jpg"];
			var tshirtImages=["image/tshirt.jpg", "image/tshirt2.jpg","image/tshirt3.jpg","image/tshirt4.jpg"];
			var shoeImages=["image/shoes.jpg", "image/shoes2.jpg","image/shoes3.jpg","image/shoes4.jpg"];
			var imgArray=["image/shirt.jpeg", "image/shirt2.jpg","image/shirt3.jpg","image/shirt4.jpg",
										"image/jeans.jpg", "image/jeans2.jpg","image/jeans3.jpg","image/jeans4.jpg",
										"image/tshirt.jpg", "image/tshirt2.jpg","image/tshirt3.jpg","image/tshirt4.jpg",
										"image/shoes.jpg", "image/shoes2.jpg","image/shoes3.jpg","image/shoes4.jpg"];
										
			function getAll(){
				document.getElementById("mainbody").innerHTML="";
				var bodyTag=document.getElementById("mainbody");
				var mainDiv=document.createElement("div");
				mainDiv.id="container";
				mainDiv.className="row";
				paraTag=document.createElement("h2");
				paraTag.id="heading";
				var node=document.createTextNode("Welcome to Shopping World!!");
				paraTag.appendChild(node);
				mainDiv.appendChild(paraTag);
				bodyTag.appendChild(mainDiv);
				
				var arrayLen=imgArray.length;
				var i;
				for(i=0; i<arrayLen; i++){
					var divTag=document.createElement("div");
					divTag.id="div"+(i+1);
					divTag.className="col-sm-6 col-md-4 col-lg-3 imgDiv";
					var imgTag=document.createElement("img");
					imgTag.src=imgArray[i];
					imgTag.id="img"+(i+1);
					imgTag.className="images";
					divTag.appendChild(imgTag);
					var btnTag=document.createElement("button");
					btnTag.className="addButton";
					btnTag.id="btn1";
					var btnNode=document.createTextNode("Add to Cart");
					btnTag.appendChild(btnNode);
					divTag.appendChild(btnTag);
					mainDiv.appendChild(divTag);
					
					
				}
				
				 setTimeout(function(){
				$(".addButton").click(function(){
					if ($(this).parent().children().is("span")) {	   
						alert("Already added to cart!");
				   }else{
					 
					$(this).parent().append("<i class='fa fa-check-circle' id='i1'></i><span class='infoSpan'>Added to cart!</span>");
				   }
				});
			},500);
			}
			//function to get all shirt
			
			function getShirt(){
				var container=document.getElementById("container"); 
				var bodytag=document.getElementById("mainbody");
				bodytag.removeChild(container);
				var bodyTag=document.getElementById("mainbody");
				var mainDiv=document.createElement("div");
				mainDiv.id="container";
				paraTag=document.createElement("h2");
				paraTag.id="heading";
				var node=document.createTextNode("All types of Shirts!!");
				paraTag.appendChild(node);
				mainDiv.appendChild(paraTag);
				bodyTag.appendChild(mainDiv);
				
				var arrayLen=shirtImages.length;
				var i;
				for(i=0; i<arrayLen; i++){
					var divTag=document.createElement("div");
					divTag.id="div"+(i+1);
					divTag.className="col-sm-6 col-md-4 col-lg-3 imgDiv";
					var imgTag=document.createElement("img");
					imgTag.src=shirtImages[i];
					imgTag.id="img"+(i+1);
					imgTag.className="images";
					divTag.appendChild(imgTag);
					var btnTag=document.createElement("button");
					btnTag.className="addButton";
					var btnNode=document.createTextNode("Add to Cart");
					btnTag.appendChild(btnNode);
					divTag.appendChild(btnTag);
					mainDiv.appendChild(divTag);
				}
				
				 setTimeout(function(){
				$(".addButton").click(function(){
					if ($(this).parent().children().is("span")) {	   
						alert("Already added to cart!");
				   }else{
					 
					$(this).parent().append("<i class='fa fa-check-circle' id='i1'></i><span class='infoSpan'>Added to cart!</span>");
				   }
				});
			},500);
			}
			
			
			
			//function to get all jeans
			
			function getJeans(){
				var container=document.getElementById("container"); 
				var bodytag=document.getElementById("mainbody");
				bodytag.removeChild(container);
				var bodyTag=document.getElementById("mainbody");
				var mainDiv=document.createElement("div");
				mainDiv.id="container";
				paraTag=document.createElement("h2");
				paraTag.id="heading";
				var node=document.createTextNode("All types of Jeans!!");
				paraTag.appendChild(node);
				mainDiv.appendChild(paraTag);
				bodyTag.appendChild(mainDiv);
				
				var arrayLen=jeansImages.length;
				var i;
				for(i=0; i<arrayLen; i++){
					var divTag=document.createElement("div");
					divTag.id="div"+(i+1);
					divTag.className="col-sm-6 col-md-4 col-lg-3 imgDiv";
					var imgTag=document.createElement("img");
					imgTag.src=jeansImages[i];
					imgTag.id="img"+(i+1);
					imgTag.className="images";
					divTag.appendChild(imgTag);
					var btnTag=document.createElement("button");
					btnTag.className="addButton";
					var btnNode=document.createTextNode("Add to Cart");
					btnTag.appendChild(btnNode);
					divTag.appendChild(btnTag);
					mainDiv.appendChild(divTag);
				}
				
				 setTimeout(function(){
				$(".addButton").click(function(){
					if ($(this).parent().children().is("span")) {	   
						alert("Already added to cart!");
				   }else{
					 
					$(this).parent().append("<i class='fa fa-check-circle' id='i1'></i><span class='infoSpan'>Added to cart!</span>");
				   }
				});
			},500);
			}
			
			//function to get all Shoes
			function getShoes(){
				var container=document.getElementById("container"); 
				var bodytag=document.getElementById("mainbody");
				bodytag.removeChild(container);
				var bodyTag=document.getElementById("mainbody");
				var mainDiv=document.createElement("div");
				mainDiv.id="container";
				paraTag=document.createElement("h2");
				paraTag.id="heading";
				var node=document.createTextNode("All types of Jeans!!");
				paraTag.appendChild(node);
				mainDiv.appendChild(paraTag);
				bodyTag.appendChild(mainDiv);
				
				var arrayLen=shoeImages.length;
				var i;
				for(i=0; i<arrayLen; i++){
					var divTag=document.createElement("div");
					divTag.id="div"+(i+1);
					divTag.className="col-sm-6 col-md-4 col-lg-3 imgDiv";
					var imgTag=document.createElement("img");
					imgTag.src=shoeImages[i];
					imgTag.id="img"+(i+1);
					imgTag.className="shoesImages";
					divTag.appendChild(imgTag);
					var btnTag=document.createElement("button");
					btnTag.className="addButton";
					var btnNode=document.createTextNode("Add to Cart");
					btnTag.appendChild(btnNode);
					divTag.appendChild(btnTag);
					mainDiv.appendChild(divTag);
				}
				
				 setTimeout(function(){
				$(".addButton").click(function(){
					if ($(this).parent().children().is("span")) {	   
						alert("Already added to cart!");
				   }else{
					 
					$(this).parent().append("<i class='fa fa-check-circle' id='i1'></i><span class='infoSpan'>Added to cart!</span>");
				   }
				});
			},500);
			}
			
			//function to get all T-shirts
			function getTshirt(){
				var container=document.getElementById("container"); 
				var bodytag=document.getElementById("mainbody");
				bodytag.removeChild(container);
				var bodyTag=document.getElementById("mainbody");
				var mainDiv=document.createElement("div");
				mainDiv.id="container";
				paraTag=document.createElement("h2");
				paraTag.id="heading";
				var node=document.createTextNode("All types of Jeans!!");
				paraTag.appendChild(node);
				mainDiv.appendChild(paraTag);
				bodyTag.appendChild(mainDiv);
				
				var arrayLen=tshirtImages.length;
				var i;
				for(i=0; i<arrayLen; i++){
					var divTag=document.createElement("div");
					divTag.id="div"+(i+1);
					divTag.className="col-sm-6 col-md-4 col-lg-3 imgDiv";
					var imgTag=document.createElement("img");
					imgTag.src=tshirtImages[i];
					imgTag.id="img"+(i+1);
					imgTag.className="images";
					divTag.appendChild(imgTag);
					var btnTag=document.createElement("button");
					btnTag.className="addButton";
					var btnNode=document.createTextNode("Add to Cart");
					btnTag.appendChild(btnNode);
					divTag.appendChild(btnTag);
					mainDiv.appendChild(divTag);
				}
				
				 setTimeout(function(){
				$(".addButton").click(function(){
					if ($(this).parent().children().is("span")) {	   
						alert("Already added to cart!");
				   }else{
					 
					$(this).parent().append("<i class='fa fa-check-circle' id='i1'></i><span class='infoSpan'>Added to cart!</span>");
				   }
				});
			},500);
			}
			function login(){
				var container=document.getElementById("container"); 
				var bodytag=document.getElementById("mainbody");
				bodytag.removeChild(container);
				var bodyTag=document.getElementById("mainbody");
				var mainDiv=document.createElement("div");
				mainDiv.id="container";
				paraTag=document.createElement("h2");
				paraTag.id="heading";
				var node=document.createTextNode("Click here to login");
				paraTag.appendChild(node);
				mainDiv.appendChild(paraTag);
				bodyTag.appendChild(mainDiv);
			}
			function cart(){
				var container=document.getElementById("container"); 
				var bodytag=document.getElementById("mainbody");
				bodytag.removeChild(container);
				var bodyTag=document.getElementById("mainbody");
				var mainDiv=document.createElement("div");
				mainDiv.id="container";
				paraTag=document.createElement("h2");
				paraTag.id="heading";
				var node=document.createTextNode("Your Cart is Empty !!");
				paraTag.appendChild(node);
				mainDiv.appendChild(paraTag);
				bodyTag.appendChild(mainDiv);
			}
			
			function footerContent(){
				var footer=document.getElementById("f1");
				var copyRight=document.createElement("span");
				copyRight.className="copyRight";
				var textNode=document.createTextNode("Akhilesh Shopping Website !!");
				copyRight.appendChild(textNode);
				linebreak = document.createElement("br");
				copyRight.appendChild(linebreak);
				footer.appendChild(copyRight);	
				
				var fbLink=document.createElement("a");
				fbLink.href="facebook.com/archyakhilesh";		
				fbLink.className="footerIcon";
				var social=document.createElement("i");
				social.className="fa fa-facebook-square";
				fbLink.appendChild(social);
				footer.appendChild(fbLink);
				var gitLink=document.createElement("a");
				gitLink.href="github.com/archyakhilesh";		
				gitLink.className="footerIcon";
				var social=document.createElement("i");
				social.className="fa fa-github";
				gitLink.appendChild(social);
				footer.appendChild(gitLink);
				var instaLink=document.createElement("a");
				instaLink.href="instagram.com/archyakhilesh";		
				instaLink.className="footerIcon";
				var social=document.createElement("i");
				social.className="fa fa-instagram";
				instaLink.appendChild(social);
				footer.appendChild(instaLink);
				var twitLink=document.createElement("a");
				twitLink.href="twitter.com/archyakhilesh";		
				twitLink.className="footerIcon";
				var social=document.createElement("i");
				social.className="fa fa-twitter";
				twitLink.appendChild(social);
				footer.appendChild(twitLink);
				var wpLink=document.createElement("a");
				wpLink.href="twitter.com/archyakhilesh";		
				wpLink.className="footerIcon";
				var social=document.createElement("i");
				social.className="fa fa-whatsapp";
				wpLink.appendChild(social);
				footer.appendChild(wpLink);
				var copyRight=document.createElement("span");
				copyRight.className="copyRight";
				var textNode=document.createTextNode("9492040362");
				copyRight.appendChild(textNode);
				footer.appendChild(copyRight);		
			}
			
			
			  
				
			