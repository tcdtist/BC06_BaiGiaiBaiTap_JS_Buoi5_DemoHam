/**
 * Đầu vào (input)
 *  - giaUSD = 23500 (VND)
 *  - soTien = 0 (USD)
 * Xử lý
 *  - tienViet = soTien * giaUSD
 * Đầu ra (output)
 *  - xuất tiền sau khi đổi
 */

function getEle(id) {
    return document.getElementById(id);
}

getEle('tinhEx3').addEventListener('click', () => {

    //Đầu vào
    var tienVNĐ = 0;
    var giaUSD = 23_500;
    var soTienCanDoi = parseFloat(getEle("soTienCanDoi").value);

    //Xét điều kiện
    if (soTienCanDoi <= 0) return alert('Số tiền cần đổi phải lớn hơn 0')

    //Xử lý
    tienVNĐ = soTienCanDoi * giaUSD;

    //Đầu ra
    currentFormat = new Intl.NumberFormat("vn-VN");
    var kqEx3 = "Tiền sau khi đổi là: " + currentFormat.format(tienVNĐ) + " VND"
    console.log(kqEx3);
    getEle('kqEx3').style.display = "block";
    getEle('kqEx3').innerHTML = kqEx3;
});