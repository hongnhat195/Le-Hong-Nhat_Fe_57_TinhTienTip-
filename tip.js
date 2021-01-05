// var tongTien = document.getElementById("txtTongTien").value;
// console.log("in di m");
// Tongtien1 = parseFloat(Tongtien);



function hienThi() {
    var tt = document.getElementById("txtTongTien").value;
    tt = parseFloat(tt);
    console.log(tt);
    var tip = document.getElementById("slTip").value;
    tip = parseFloat(tip);
    console.log(tip);
    var share = document.getElementById("txtSoNguoi").value;
    share = parseFloat(share);
    console.log(share);
    var tien = tt * tip / 100 / share;
    console.log(tien);
    document.getElementById("txtThongBaoTienTip").innerHTML = "Tip Amount $" + tien + " Mỗi người";
    // document.getElementById("txtThongBaoTienTip").innerHTML = tien;
    document.getElementById("txtThongBaoTienTip").style.display = "inline-block";
}

// document.getElementById("btnTinhTienTip").addEventListener("click", () => {

//     console.log("in ra nè")

// })