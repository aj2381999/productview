//1.selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

//2.preventing div element opening along with preview box
const preventDiv = document.querySelectorAll(".gallery .text");

//3.clicking respective tabs and the images according to that
window.onload = ()=>{ //after window loaded
  filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
    if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-content"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        }
        else{
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
      preventDiv.forEach((text) => {
        let preventDivs = text.getAttribute("data-content");
        if((preventDivs == filterName) || (filterName == "all")){
          text.classList.remove("hide");
          text.classList.add("show");
        }
        else{
          text.classList.add("hide");
          text.classList.remove("show");
        }
      });
    }
  }
  //4.calling the preview function when user clicks on the image to maximize
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
  }
}

//5.fullscreen image preview function
//selecting all required elements
const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

//6.function for preview box
function preview(element){
  
//once user click on any image then remove the scroll bar of the body, so user can't scroll up or down
document.querySelector("body").style.overflow = "hidden";

let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
let selectedImgCategory = element.getAttribute("data-content"); //getting user clicked image data-name value
previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
previewBox.classList.add("show"); //show the preview image box
shadow.classList.add("show"); //show the light grey background

//7.close function in the preview box
closeIcon.onclick = ()=>{ //if user click on close icon of preview box
  previewBox.classList.remove("show"); //hide the preview box
  shadow.classList.remove("show"); //hide the light grey background
  document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
}

  if (x.style.display == "none"){x.style.display = "block";}else{x.style.display = "none";}
}

//8.Adding Parameter List
addItemId=0;
function addToCart(item){
  addItemId+=1;
  var selectedItem =document.createElement('div');
  selectedItem.setAttribute('id',addItemId);
  var title=document.createElement('div');
  title.innerText=item.getAttribute('data-name');
  var delBtn = document.createElement('button');
  delBtn.innerHTML='Remove';
  delBtn.setAttribute('onclick','del('+addItemId+')');
  var cartItems=document.getElementById('ctitle');
  selectedItem.append(title);
  selectedItem.append(delBtn);
  cartItems.append(selectedItem);
  alert("Item Quoted");
}

//9.delete function for the items added in the List
function del(item){
  document.getElementById(item).remove();
  alert("Item Removed");
}

//10.cart icon functionality 
const targetDiv=document.getElementById("ctitle");
const btn=document.getElementById("icon");
btn.onclick=function (){
  if(targetDiv.style.display === "none"){
    targetDiv.style.display ="block";
  }else{
    targetDiv.style.display ="none";
  }
}


// NOTE:
//For Understanding purpose of add'in items in list
// function addToCart(obj){
//   var product_id=obj.getAttribute('data-uid');
//   var product_name=obj.getAttribute('data-name');
//   console.log(product_id,product_name);
// }