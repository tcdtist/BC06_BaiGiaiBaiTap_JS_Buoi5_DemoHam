/**
 * Đầu vào (input)
 *  - chieuDai = 0
 *  - chieuRong = 0
 *  - dienTich = 0
 *  - chuVi = 0
 * Xử lý
 *  - dienTich = chieuDai * chieuRong
 *  - chuVi = (chieuDai + chieuRong) * 2
 * Đầu ra (output)
 *  - Xuất diện tích và chu vi của hình chữ nhật
 */

function getEle(id) {
    return document.getElementById(id);
}

getEle('tinhEx4_cv').addEventListener('click', () => {

    //Đầu vào
    var chieuDai = parseFloat(getEle("chieuDai").value);
    var chieuRong = parseFloat(getEle("chieuRong").value);
    var chuVi = 0;

    //Xét điều kiện
    if (chieuDai <= 0 || chieuRong <= 0) return alert('Chiều dài hoặc chiều rộng cần lớn hơn 0');
    if (chieuDai <= chieuRong) return alert('Chiều dài cần dài hơn chiều rộng.');

    //Xử lý
    chuVi = (chieuDai + chieuRong) * 2;

    //Đầu ra
    var kqEx4_cv = "Chu vi hình chữ nhật là:     " + chuVi;
    console.log(kqEx4_cv);
    getEle('kqEx4').style.display = "block";
    getEle('kqEx4').innerHTML = kqEx4_cv;
});

getEle('tinhEx4_dt').addEventListener('click', () => {

    //Đầu vào
    var chieuDai = parseFloat(getEle("chieuDai").value);
    var chieuRong = parseFloat(getEle("chieuRong").value);
    var dienTich = 0;

    //Xét điều kiện
    if (chieuDai <= 0 || chieuRong <= 0) return alert('Chiều dài hoặc chiều rộng cần lớn hơn 0');
    if (chieuDai < chieuRong) return alert('Chiều dài cần dài hơn chiều rộng.');

    //Xử lý
    dienTich = chieuDai * chieuRong;

    //Đầu ra
    var kqEx4_dt = "Diện tích hình chữ nhật là:     " + dienTich;
    console.log(kqEx4_dt);
    getEle('kqEx4').style.display = "block";
    getEle('kqEx4').innerHTML = kqEx4_dt;
});