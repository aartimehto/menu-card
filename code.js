onEvent("BeveragesBtn", "click", function( ) {
  setScreen("Beverages");
});
onEvent("AppetizersBtn", "click", function( ) {
  setScreen("Snacks");
});
onEvent("MainCourseBtn", "click", function( ) {
  setScreen("MainCourse");
});
onEvent("DessertsBtn", "click", function( ) {
  setScreen("Desserts");
});
onEvent("CheckoutBtn", "click", function( ) {
  var appertizers_price = getNumber("appetizer_price1") + getNumber("appetizer_price2") + getNumber("appetizer_price3") + getNumber("appetizer_price4") + getNumber("appetizer_price5") + getNumber("appetizer_price6") + getNumber("appetizer_price7") + getNumber("appetizer_price8") + getNumber("appetizer_price9") + getNumber("appetizer_price10");
  var maincourse_price = getNumber("maincourse_price1") + getNumber("maincourse_price2") + getNumber("maincourse_price3") + getNumber("maincourse_price4") + getNumber("maincourse_price5") + getNumber("maincourse_price6") + getNumber("maincourse_price7") + getNumber("maincourse_price8") + getNumber("maincourse_price9") + getNumber("maincourse_price10");
  var beverages_price = getNumber("beverages_price1") + getNumber("beverages_price2") + getNumber("beverages_price3") + getNumber("beverages_price4") + getNumber("beverages_price5") + getNumber("beverages_price6") + getNumber("beverages_price7") + getNumber("beverages_price8") + getNumber("beverages_price9") + getNumber("beverages_price10");
  var desserts_price = getNumber("desserts_price1") + getNumber("desserts_price2") + getNumber("desserts_price3") + getNumber("desserts_price4") + getNumber("desserts_price5") + getNumber("desserts_price6") + getNumber("desserts_price7") + getNumber("desserts_price8") + getNumber("desserts_price9") + getNumber("desserts_price10");
  setNumber("appetizers_total", appertizers_price);
  setNumber("maincourse_total", maincourse_price);
  setNumber("beverages_total", beverages_price);
  setNumber("desserts_total", desserts_price);
  setNumber("total", appertizers_price + maincourse_price + beverages_price + desserts_price);
  setScreen("Checkout");
});
onEvent("HomeBtn", "click", function( ) {
  setScreen("Homescreen");
});
onEvent("HomeBtn1", "click", function( ) {
  setScreen("Homescreen");
});
onEvent("HomeBtn2", "click", function( ) {
  setScreen("Homescreen");
});
onEvent("HomeBtn3", "click", function( ) {
  setScreen("Homescreen");
});
onEvent("HomeBtn4", "click", function( ) {
  setScreen("Homescreen");
});
onEvent("add_appetizer1", "click", function( ) {
  setNumber("appetizer1", getNumber("appetizer1") + 1);
  setNumber("appetizer_price1", getNumber("appetizer1") * 350);
});
onEvent("add_appetizer2", "click", function( ) {
  setNumber("appetizer2", getNumber("appetizer2") + 1);
  setNumber("appetizer_price2", getNumber("appetizer2") * 650);
});
onEvent("add_appetizer3", "click", function( ) {
  setNumber("appetizer3", getNumber("appetizer3") + 1);
  setNumber("appetizer_price3", getNumber("appetizer3") * 350);
});
onEvent("add_appetizer4", "click", function( ) {
  setNumber("appetizer4", getNumber("appetizer4") + 1);
  setNumber("appetizer_price4", getNumber("appetizer4") * 450);
});
onEvent("add_appetizer5", "click", function( ) {
  setNumber("appetizer5", getNumber("appetizer5") + 1);
  setNumber("appetizer_price5", getNumber("appetizer5") * 250);
});
onEvent("add_appetizer6", "click", function( ) {
  setNumber("appetizer6", getNumber("appetizer6") + 1);
  setNumber("appetizer_price6", getNumber("appetizer6") * 350);
});
onEvent("add_appetizer7", "click", function( ) {
  setNumber("appetizer7", getNumber("appetizer7") + 1);
  setNumber("appetizer_price7", getNumber("appetizer7") * 350);
});
onEvent("add_appetizer8", "click", function( ) {
  setNumber("appetizer8", getNumber("appetizer8") + 1);
  setNumber("appetizer_price8", getNumber("appetizer8") * 250);
});
onEvent("add_appetizer9", "click", function( ) {
  setNumber("appetizer9", getNumber("appetizer9") + 1);
  setNumber("appetizer_price9", getNumber("appetizer9") * 450);
});
onEvent("add_appetizer10", "click", function( ) {
  setNumber("appetizer10", getNumber("appetizer10") + 1);
  setNumber("appetizer_price10", getNumber("appetizer10") * 300);
});
onEvent("remove_appetizer1", "click", function( ) {
  setNumber("appetizer1", getNumber("appetizer1") - 1);
  setNumber("appetizer_price1", getNumber("appetizer1") * 350);
});
onEvent("remove_appetizer2", "click", function( ) {
  setNumber("appetizer2", getNumber("appetizer2") - 1);
  setNumber("appetizer_price2", getNumber("appetizer2") * 650);
});
onEvent("remove_appetizer3", "click", function( ) {
  setNumber("appetizer3", getNumber("appetizer3") - 1);
  setNumber("appetizer_price3", getNumber("appetizer3") * 350);
});
onEvent("remove_appetizer4", "click", function( ) {
  setNumber("appetizer4", getNumber("appetizer4") - 1);
  setNumber("appetizer_price4", getNumber("appetizer4") * 450);
});
onEvent("remove_appetizer5", "click", function( ) {
  setNumber("appetizer5", getNumber("appetizer5") - 1);
  setNumber("appetizer_price5", getNumber("appetizer5") * 250);
});
onEvent("remove_appetizer6", "click", function( ) {
  setNumber("appetizer6", getNumber("appetizer6") - 1);
  setNumber("appetizer_price6", getNumber("appetizer6") * 350);
});
onEvent("remove_appetizer7", "click", function( ) {
  setNumber("appetizer7", getNumber("appetizer7") - 1);
  setNumber("appetizer_price7", getNumber("appetizer7") * 350);
});
onEvent("remove_appetizer8", "click", function( ) {
  setNumber("appetizer8", getNumber("appetizer8") - 1);
  setNumber("appetizer_price8", getNumber("appetizer8") * 250);
});
onEvent("remove_appetizer9", "click", function( ) {
  setNumber("appetizer9", getNumber("appetizer9") - 1);
  setNumber("appetizer_price9", getNumber("appetizer9") * 450);
});
onEvent("remove_appetizer10", "click", function( ) {
  setNumber("appetizer10", getNumber("appetizer10") - 1);
  setNumber("appetizer_price10", getNumber("appetizer10") * 300);
});

onEvent("add_maincourse1", "click", function( ) {
  setNumber("maincourse1", getNumber("maincourse1") + 1);
  setNumber("maincourse_price1", getNumber("maincourse1") * 350);
});
onEvent("add_maincourse2", "click", function( ) {
  setNumber("maincourse2", getNumber("maincourse2") + 1);
  setNumber("maincourse_price2", getNumber("maincourse2") * 650);
});
onEvent("add_maincourse3", "click", function( ) {
  setNumber("maincourse3", getNumber("maincourse3") + 1);
  setNumber("maincourse_price3", getNumber("maincourse3") * 350);
});
onEvent("add_maincourse4", "click", function( ) {
  setNumber("maincourse4", getNumber("maincourse4") + 1);
  setNumber("maincourse_price4", getNumber("maincourse4") * 450);
});
onEvent("add_maincourse5", "click", function( ) {
  setNumber("maincourse5", getNumber("maincourse5") + 1);
  setNumber("maincourse_price5", getNumber("maincourse5") * 250);
});
onEvent("add_maincourse6", "click", function( ) {
  setNumber("maincourse6", getNumber("maincourse6") + 1);
  setNumber("maincourse_price6", getNumber("maincourse6") * 350);
});
onEvent("add_maincourse7", "click", function( ) {
  setNumber("maincourse7", getNumber("maincourse7") + 1);
  setNumber("maincourse_price7", getNumber("maincourse7") * 350);
});
onEvent("add_maincourse8", "click", function( ) {
  setNumber("maincourse8", getNumber("maincourse8") + 1);
  setNumber("maincourse_price8", getNumber("maincourse8") * 250);
});
onEvent("add_maincourse9", "click", function( ) {
  setNumber("maincourse9", getNumber("maincourse9") + 1);
  setNumber("maincourse_price9", getNumber("maincourse9") * 450);
});
onEvent("add_maincourse10", "click", function( ) {
  setNumber("maincourse10", getNumber("maincourse10") + 1);
  setNumber("maincourse_price10", getNumber("maincourse10") * 300);
});
onEvent("remove_maincourse1", "click", function( ) {
  setNumber("maincourse1", getNumber("maincourse1") - 1);
  setNumber("maincourse_price1", getNumber("maincourse1") * 350);
});
onEvent("remove_maincourse2", "click", function( ) {
  setNumber("maincourse2", getNumber("maincourse2") - 1);
  setNumber("maincourse_price2", getNumber("maincourse2") * 650);
});
onEvent("remove_maincourse3", "click", function( ) {
  setNumber("maincourse3", getNumber("maincourse3") - 1);
  setNumber("maincourse_price3", getNumber("maincourse3") * 350);
});
onEvent("remove_maincourse4", "click", function( ) {
  setNumber("maincourse4", getNumber("maincourse4") - 1);
  setNumber("maincourse_price4", getNumber("maincourse4") * 450);
});
onEvent("remove_maincourse5", "click", function( ) {
  setNumber("maincourse5", getNumber("maincourse5") - 1);
  setNumber("maincourse_price5", getNumber("maincourse5") * 250);
});
onEvent("remove_maincourse6", "click", function( ) {
  setNumber("maincourse6", getNumber("maincourse6") - 1);
  setNumber("maincourse_price6", getNumber("maincourse6") * 350);
});
onEvent("remove_maincourse7", "click", function( ) {
  setNumber("maincourse7", getNumber("maincourse7") - 1);
  setNumber("maincourse_price7", getNumber("maincourse7") * 350);
});
onEvent("remove_maincourse8", "click", function( ) {
  setNumber("maincourse8", getNumber("maincourse8") - 1);
  setNumber("maincourse_price8", getNumber("maincourse8") * 250);
});
onEvent("remove_maincourse9", "click", function( ) {
  setNumber("maincourse9", getNumber("maincourse9") - 1);
  setNumber("maincourse_price9", getNumber("maincourse9") * 450);
});
onEvent("remove_maincourse10", "click", function( ) {
  setNumber("maincourse10", getNumber("maincourse10") - 1);
  setNumber("maincourse_price10", getNumber("maincourse10") * 300);
});
onEvent("add_beverages1", "click", function( ) {
  setNumber("beverages1", getNumber("beverages1") + 1);
  setNumber("beverages_price1", getNumber("beverages1") * 350);
});
onEvent("add_beverages2", "click", function( ) {
  setNumber("beverages2", getNumber("beverages2") + 1);
  setNumber("beverages_price2", getNumber("beverages2") * 650);
});
onEvent("add_beverages3", "click", function( ) {
  setNumber("beverages3", getNumber("beverages3") + 1);
  setNumber("beverages_price3", getNumber("beverages3") * 350);
});
onEvent("add_beverages4", "click", function( ) {
  setNumber("beverages4", getNumber("beverages4") + 1);
  setNumber("beverages_price4", getNumber("beverages4") * 450);
});
onEvent("add_beverages5", "click", function( ) {
  setNumber("beverages5", getNumber("beverages5") + 1);
  setNumber("beverages_price5", getNumber("beverages5") * 250);
});
onEvent("add_beverages6", "click", function( ) {
  setNumber("beverages6", getNumber("beverages6") + 1);
  setNumber("beverages_price6", getNumber("beverages6") * 350);
});
onEvent("add_beverages7", "click", function( ) {
  setNumber("beverages7", getNumber("beverages7") + 1);
  setNumber("beverages_price7", getNumber("beverages7") * 350);
});
onEvent("add_beverages8", "click", function( ) {
  setNumber("beverages8", getNumber("beverages8") + 1);
  setNumber("beverages_price8", getNumber("beverages8") * 250);
});
onEvent("add_beverages9", "click", function( ) {
  setNumber("beverages9", getNumber("beverages9") + 1);
  setNumber("beverages_price9", getNumber("beverages9") * 450);
});
onEvent("add_beverages10", "click", function( ) {
  setNumber("beverages10", getNumber("beverages10") + 1);
  setNumber("beverages_price10", getNumber("beverages10") * 300);
});
onEvent("remove_beverages1", "click", function( ) {
  setNumber("beverages1", getNumber("beverages1") - 1);
  setNumber("beverages_price1", getNumber("beverages1") * 350);
});
onEvent("remove_beverages2", "click", function( ) {
  setNumber("beverages2", getNumber("beverages2") - 1);
  setNumber("beverages_price2", getNumber("beverages2") * 650);
});
onEvent("remove_beverages3", "click", function( ) {
  setNumber("beverages3", getNumber("beverages3") - 1);
  setNumber("beverages_price3", getNumber("beverages3") * 350);
});
onEvent("remove_beverages4", "click", function( ) {
  setNumber("beverages4", getNumber("beverages4") - 1);
  setNumber("beverages_price4", getNumber("beverages4") * 450);
});
onEvent("remove_beverages5", "click", function( ) {
  setNumber("beverages5", getNumber("beverages5") - 1);
  setNumber("beverages_price5", getNumber("beverages5") * 250);
});
onEvent("remove_beverages6", "click", function( ) {
  setNumber("beverages6", getNumber("beverages6") - 1);
  setNumber("beverages_price6", getNumber("beverages6") * 350);
});
onEvent("remove_beverages7", "click", function( ) {
  setNumber("beverages7", getNumber("beverages7") - 1);
  setNumber("beverages_price7", getNumber("beverages7") * 350);
});
onEvent("remove_beverages8", "click", function( ) {
  setNumber("beverages8", getNumber("beverages8") - 1);
  setNumber("beverages_price8", getNumber("beverages8") * 250);
});
onEvent("remove_beverages9", "click", function( ) {
  setNumber("beverages9", getNumber("beverages9") - 1);
  setNumber("beverages_price9", getNumber("beverages9") * 450);
});
onEvent("remove_beverages10", "click", function( ) {
  setNumber("beverages10", getNumber("beverages10") - 1);
  setNumber("beverages_price10", getNumber("beverages10") * 300);
});
onEvent("add_desserts1", "click", function( ) {
  setNumber("desserts1", getNumber("desserts1") + 1);
  setNumber("desserts_price1", getNumber("desserts1") * 350);
});
onEvent("add_desserts2", "click", function( ) {
  setNumber("desserts2", getNumber("desserts2") + 1);
  setNumber("desserts_price2", getNumber("desserts2") * 650);
});
onEvent("add_desserts3", "click", function( ) {
  setNumber("desserts3", getNumber("desserts3") + 1);
  setNumber("desserts_price3", getNumber("desserts3") * 350);
});
onEvent("add_desserts4", "click", function( ) {
  setNumber("desserts4", getNumber("desserts4") + 1);
  setNumber("desserts_price4", getNumber("desserts4") * 450);
});
onEvent("add_desserts5", "click", function( ) {
  setNumber("desserts5", getNumber("desserts5") + 1);
  setNumber("desserts_price5", getNumber("desserts5") * 250);
});
onEvent("add_desserts6", "click", function( ) {
  setNumber("desserts6", getNumber("desserts6") + 1);
  setNumber("desserts_price6", getNumber("desserts6") * 350);
});
onEvent("add_desserts7", "click", function( ) {
  setNumber("desserts7", getNumber("desserts7") + 1);
  setNumber("desserts_price7", getNumber("desserts7") * 350);
});
onEvent("add_desserts8", "click", function( ) {
  setNumber("desserts8", getNumber("desserts8") + 1);
  setNumber("desserts_price8", getNumber("desserts8") * 250);
});
onEvent("add_desserts9", "click", function( ) {
  setNumber("desserts9", getNumber("desserts9") + 1);
  setNumber("desserts_price9", getNumber("desserts9") * 450);
});
onEvent("add_desserts10", "click", function( ) {
  setNumber("desserts10", getNumber("desserts10") + 1);
  setNumber("desserts_price10", getNumber("desserts10") * 300);
});
onEvent("remove_desserts1", "click", function( ) {
  setNumber("desserts1", getNumber("desserts1") - 1);
  setNumber("desserts_price1", getNumber("desserts1") * 350);
});
onEvent("remove_desserts2", "click", function( ) {
  setNumber("desserts2", getNumber("desserts2") - 1);
  setNumber("desserts_price2", getNumber("desserts2") * 650);
});
onEvent("remove_desserts3", "click", function( ) {
  setNumber("desserts3", getNumber("desserts3") - 1);
  setNumber("desserts_price3", getNumber("desserts3") * 350);
});
onEvent("remove_desserts4", "click", function( ) {
  setNumber("desserts4", getNumber("desserts4") - 1);
  setNumber("desserts_price4", getNumber("desserts4") * 450);
});
onEvent("remove_desserts5", "click", function( ) {
  setNumber("desserts5", getNumber("desserts5") - 1);
  setNumber("desserts_price5", getNumber("desserts5") * 250);
});
onEvent("remove_desserts6", "click", function( ) {
  setNumber("desserts6", getNumber("desserts6") - 1);
  setNumber("desserts_price6", getNumber("desserts6") * 350);
});
onEvent("remove_desserts7", "click", function( ) {
  setNumber("desserts7", getNumber("desserts7") - 1);
  setNumber("desserts_price7", getNumber("desserts7") * 350);
});
onEvent("remove_desserts8", "click", function( ) {
  setNumber("desserts8", getNumber("desserts8") - 1);
  setNumber("desserts_price8", getNumber("desserts8") * 250);
});
onEvent("remove_desserts9", "click", function( ) {
  setNumber("desserts9", getNumber("desserts9") - 1);
  setNumber("desserts_price9", getNumber("desserts9") * 450);
});
onEvent("remove_desserts10", "click", function( ) {
  setNumber("desserts10", getNumber("desserts10") - 1);
  setNumber("desserts_price10", getNumber("desserts10") * 300);
});
