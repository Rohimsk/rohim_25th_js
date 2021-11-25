


var jamidar;

var companyName = "IEMA R&D";

var contact = "6786676667";

var country = "INDIA";

function showData()
{

    var element = document.createElement("tr");

    var td1 = document.createElement("td");   

    var td2 = document.createElement("td");

    var td3 = document.createElement("td");

    var dataNode1 =document.createTextNode(companyName);

    var dataNode2 =document.createTextNode(contact);

    var dataNode3 =document.createTextNode(country);

    td1.appendChild(dataNode1);

    td2.appendChild(dataNode2);

    td3.appendChild(dataNode3);

    element.appendChild(td1);

    element.appendChild(td2);

    element.appendChild(td3);

    document.getElementById("showinputdata").appendChild(element);

    // localStorage.setItem("DATA : ",data);


}
