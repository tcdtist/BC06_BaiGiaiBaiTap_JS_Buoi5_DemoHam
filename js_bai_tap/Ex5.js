/**
 * Đầu vào (input)
 *  - so_1 = 12
 *  - so_2 = 44
 *  - soHangChuc_1 = 0
 *  - soHangDonVi_1 = 0
 *  - tongHaiSo_1 = 0
 *  - soHangChuc_2 = 0
 *  - soHangDonVi_2 = 0
 *  - tongHaiSo_2 = 0
 * Xử lý
 *  - soHangChuc_1 = so_1 / 10
 *  - soHangDonVi_1 = so_1 % 10
 *  - tongHaiSo_1 = soHangChuc_1 + soHangDonVi_1
 * 
 *  - soHangChuc_2 = so_2 / 10
 *  - soHangDonVi_2 = so_2 % 10
 *  - tongHaiSo_2 = soHangChuc_2 + soHangDonVi_2
 * Đầu ra (output)
 *  - Xuất tổng 2 ký số 
 */

function getEle(id) {
    return document.getElementById(id);
}

getEle('tinhEx5').addEventListener('click', () => {

    //Đầu vào
    var soHangChuc, soHangDonVi;
    var soNhap = parseInt(getEle("soNhap_5").value);

    //Kiểm tra điều kiện
    if (soNhap < 10 || soNhap > 99) return alert('Số nhập cần là số có 2 chữ số.')

    //Tách lấy hàng chục và hàng dv
    soHangChuc = Math.floor(soNhap / 10)
    soHangDonVi = Math.floor(soNhap % 10)

    //Xử lý
    var tongHaiSo = soHangChuc + soHangDonVi;

    //Đầu ra
    var kqEx5 = "Tổng 2 ký số là:     " + tongHaiSo;
    console.log(kqEx5);
    getEle('kqEx5').style.display = "block";
    getEle('kqEx5').innerHTML = kqEx5;

});