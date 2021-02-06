/*
 * Nhập điểm môn 1, môn 2, môn 3, điểm chuẩn, đối tượng, khu vực
 * 
 * Khu Vực A=2, B=1, C=0.5, X=0 khu vực không thuộc diện ưu tiên
 * Đối tượng 1= 2.5; Đối tượng 2= 1.5; Đối tượng 3= 1 Đối tượng 0= 0 không thuộc diện ưu tiên
 * Hàm tinhDiemKhuVuc(int khuVuc)
 * Hàm tinhDiemUuTien(int doiTuong)
 * Hàm xetDiemLiet(float mon1, float mon2, float mon3)
 * Hàm tinhTongDiem
 * Xet (tổng điểm >= điểm chuẩn) và (không có điểm 0) thì đậu, ngược lại là rớt
 * 
 * In ra thí sinh đó đậu hay rớt và tổng số điểm đạt được
 * */

function getEle(id) {
    return document.getElementById(id);
}

getEle('tinhEx1').addEventListener('click', () => {
    xuLyEx1();
});

const KHU_VUC_A = 2; // khai báo các biến hằng số
const KHU_VUC_B = 1;
const KHU_VUC_C = 0.5;
const DOI_TUONG_1 = 2.5;
const DOI_TUONG_2 = 1.5;
const DOI_TUONG_3 = 1;

xuLyEx1 = () => {
    // Đầu vào
    var nhapKhuVuc, nhapDoiTuong, kqEx1;
    var mon1, mon2, mon3, diemChuan, diem3Mon, tongDiem, diemKV, diemDT;

    // Nhập dữ liệu
    diemChuan = parseFloat(getEle('diemChuan').value);
    mon1 = parseFloat(getEle('mon1').value);
    mon2 = parseFloat(getEle('mon2').value);
    mon3 = parseFloat(getEle('mon3').value);

    // Xử lý và in kết quả
    if (!tinhDiemLiet(mon1, mon2, mon3)) {
        nhapKhuVuc = getEle('nhapKhuVuc').value;
        nhapDoiTuong = getEle('nhapDoiTuong').value;

        diem3Mon = mon1 + mon2 + mon3;
        diemKV = tinhDiemKhuVuc(nhapKhuVuc);
        diemDT = tinhDiemDoiTuong(nhapDoiTuong);
        tongDiem = diem3Mon + diemKV + diemDT;

        if ((tongDiem >= diemChuan)) {
            kqEx1 = "Tổng điểm: " + tongDiem + " -> Đậu.";
        } else {
            kqEx1 = "Tổng điểm: " + tongDiem + " -> Rớt.";
        }
    } else {
        kqEx1 = ("Bạn có điểm liệt, rớt chắc rồi !.");
    }

    //In kết quả
    console.log(kqEx1);
    getEle('kqEx1').style.display = "block";
    getEle('kqEx1').innerHTML = kqEx1;
}

tinhDiemKhuVuc = (khuVuc) => {
    var diemKhuVuc;

    if (khuVuc.toUpperCase().charAt(0) == 'A') { // toUpperCase -> chuyển ký tự thành in hoa
        diemKhuVuc = KHU_VUC_A;
    } else if (khuVuc.toUpperCase().charAt(0) == 'B') { // charAt(0) -> lấy ký tự đầu tiên
        diemKhuVuc = KHU_VUC_B;
    } else if (khuVuc.toUpperCase().charAt(0) == 'C') {
        diemKhuVuc = KHU_VUC_C;
    } else {
        diemKhuVuc = 0;
    }
    return diemKhuVuc;
}

tinhDiemDoiTuong = (doiTuong) => {
    var diemDoiTuong;
    if (doiTuong.charAt(0) === '1') {
        diemDoiTuong = DOI_TUONG_1;
    } else if (doiTuong.charAt(0) === '2') {
        diemDoiTuong = DOI_TUONG_2;
    } else if (doiTuong.charAt(0) === '3') {
        diemDoiTuong = DOI_TUONG_3;
    } else {
        diemDoiTuong = 0;
    }
    return diemDoiTuong;
}

tinhDiemLiet = (diemMon1, diemMon2, diemMon3) => {
    var flag = false;
    if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
        flag = true;
    }
    return flag;
}
