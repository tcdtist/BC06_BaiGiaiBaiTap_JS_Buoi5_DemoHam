/**
 * Đầu vào (input)
 *  - soThuc_1
 *  - soThuc_2
 *  - soThuc_3
 *  - soThuc_4
 *  - soThuc_5
 *  - tongCacSo = 0
 *  - trungBinh = 0
 * Xử lý
 *  - tongCacSo =  soThuc_1 + soThuc_2 + soThuc_3 + soThuc_4 + soThuc_5
 *  - trungBinh = tongCacSo / 5
 * Đầu ra (output)
 *  - xuất trungBinh
 */

function getEle(id) {
    return document.getElementById(id);
}

getEle('tinhEx2').addEventListener('click', () => {

    //Đầu vào
    var soThuc_1 = parseFloat(getEle('soThuc1').value);
    var soThuc_2 = parseFloat(getEle('soThuc2').value);
    var soThuc_3 = parseFloat(getEle('soThuc3').value);
    var soThuc_4 = parseFloat(getEle('soThuc4').value);
    var soThuc_5 = parseFloat(getEle('soThuc5').value);
    var tongCacSo = 0;
    var giaTriTB = 0;

    //Xử lý
    tongCacSo = soThuc_1 + soThuc_2 + soThuc_3 + soThuc_4 + soThuc_5;
    giaTriTB = tongCacSo / 5;

    //Đầu ra
    console.log("Trung bình 5 số là: " + giaTriTB);
    var kqEx2 = " Giá trị trung bình của 5 số:     (" + soThuc_1 + " + " + soThuc_2 + " + " + soThuc_3 + " + " + soThuc_4 + " + " + soThuc_5 + ") / 5 = " + giaTriTB;
    getEle('kqEx2').style.display = "block";
    getEle('kqEx2').innerHTML = kqEx2;

});
