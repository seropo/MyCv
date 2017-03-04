function profile(){
 var panel=document.getElementById("panel");
    panel.style.background="url(img/cxcxcx.png)";
    panel.style.backgroundSize="400px 400px";
	panel.style.backgroundRepeat="no-repeat";

}
function portofolioview(){
 var panel=document.getElementById("panel");
    panel.style.background="url(img/cx.png)";
    panel.style.backgroundSize="400px 400px";
	panel.style.backgroundRepeat="no-repeat";

 }
function email(){

}
function navigation(){
window.location="home.php";
}
function portofolio(cx){
  cx=="garskin" ? window.location="http://gg-garskin.000webhostapp.com" : window.location="http://www.nwebtekno.comxa.com";
}
document.getElementById("profile").addEventListener("mouseover",function(){
 window.alert("cxcx");
 })
