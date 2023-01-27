function calc(){
    var v1 = document.getElementById("v1").innerHTML.replace(/[^0-9]/g,'');
    var v2 = document.getElementById("v2").innerHTML.replace(/[^0-9]/g,'');
    var v3 = document.getElementById("v3").innerHTML.replace(/[^0-9]/g,'');
    var v4 = document.getElementById("v4").innerHTML.replace(/[^0-9]/g,'');
    var v5 = document.getElementById("v5").innerHTML.replace(/[^0-9]/g,'');

    var p1,p2,p3,p4,p5 = 0

    var total = parseInt(v1) + parseInt(v2)+ parseInt(v3)+ parseInt(v4)+ parseInt(v5)

    p1 = (v1 * 100)/total
    document.getElementById("1").innerHTML = p1.toFixed(2).concat("%")

    p2 = (v2 * 100)/total
    document.getElementById("2").innerHTML = p2.toFixed(2).concat("%")
    
    p3 = (v3 * 100)/total
    document.getElementById("3").innerHTML = p3.toFixed(2).concat("%")
    
    p4 = (v4 * 100)/total
    document.getElementById("4").innerHTML = p4.toFixed(2).concat("%")
    
    p5 = (v5 * 100)/total
    document.getElementById("5").innerHTML = p5.toFixed(2).concat("%")


    
}