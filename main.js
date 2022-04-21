var images =
["https://drive.google.com/file/d/1Tm7E6Gf5yAb9G0zXhOCK-IdPqCdrXpLR/view?usp=sharing",
"https://drive.google.com/file/d/1kYGaRkQGYuQh8CNAIwtD7qnp8V3YL_o9/view?usp=sharing",
"https://drive.google.com/file/d/1AL13UonSQA-oxqFvobAIMl_9fCSGeTad/view?usp=sharing",
"https://drive.google.com/file/d/12xWTaYQMnxVNHstuul5hR-I42WHoFEeb/view?usp=sharing",
"https://drive.google.com/file/d/13rvNyA5X_kAatzm6N8XFsWwyKZ8t8JvA/view?usp=sharing",
"https://drive.google.com/file/d/1cC4CdT_roUpLSG7fz7EKx4bWyF8WWWTx/view?usp=sharing",];

var names =  ["Álbum de Família","Mírian","família"];


var i = 0
function update()
{

 i++;
 var numbers_Of_Family_Member_In_Array = 5
 if(i> numbers_Of_Family_Member_In_Array )
 {
     i = 0;
 }
 var updatedImage = images [i];
 var updatedName = names [i];
 
 document.getElementById("family_member_image").src = updatedImage;
 document.getElementById("family_member_name").innerHTML = updatedName;

}
