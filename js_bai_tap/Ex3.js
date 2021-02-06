/*
 * Đầu vào: 
 * - Nhập Tên, số Kw
 * - hằng số    var GIA_DM_0 = 500, GIA_DM_1 = 650, GIA_DM_2 = 850, GIA_DM_3 = 1100, GIA_DM_4 = 1300;
 * 			    var DM_1 = 50, DM_2 = 100, DM_3 = 200, DM_4 = 350;
 * Xử lý:
 *  50 kw đầu giá 500: soKw* GIA_DM_0
 *  50 kw kế giá 650: (DM_1 * GIA_DM_0) + (soKw - DM_1)*GIA_DM_1;
 *  100 kw kế giá 850: (DM_1 * GIA_DM_0) + (DM_2 - DM_1)*GIA_DM_1 + (soKw - DM_2)*GIA_DM_2
 *  150 kw kế tiếp giá 1100: (DM_1 * GIA_DM_0) + (DM_2 - DM_1)*GIA_DM_1 + (DM_3 - DM_2)*GIA_DM_2 + (soKw - DM_3)*GIA_DM_3
 *  Còn lại 1300: (DM_1 * GIA_DM_0) + (DM_2 - DM_1)*GIA_DM_1 + (DM_3 - DM_2)*GIA_DM_2 + (DM_4 - DM_3)*GIA_DM_3+(soKw - DM_4)*GIA_DM_43

 * Xuất Tiền điện phải trả
 * */
function getEle(id) {
    return document.getElementById(id);
}

//HÀM CHẠY KHI NHẤN NÚT "Tính tiền điện"
getEle('tinhEx3').addEventListener('click', () => {
    xuLy();
});

//KHAI BÁO CÁC BIẾN HẰNG SỐ DÙNG CHUNG
const GIA_DM_0 = 500, GIA_DM_1 = 650, GIA_DM_2 = 850, GIA_DM_3 = 1100, GIA_DM_4 = 1300;
const DM_1 = 50, DM_2 = 100, DM_3 = 200, DM_4 = 350;

//HÀM XỬ LÝ
xuLy = () => {
    var hoTen;
    var soKwDien;

    //Lấy tên khách hàng:
    hoTen = getEle("hoTen_3").value
    //Lấy số Kw điện tiêu thụ:
    soKwDien = parseFloat(getEle("soKwDien").value);

    //Kiểm tra điều kiện
    if (soKwDien <= 0) return alert('Số kW điện tiêu thụ cần > 0.');

    //Xử lý và xuất quả về
    tinhTienDien(soKwDien);
    getEle('kqEx3').style.display = "block";
}

//RÚT GỌN TÁCH HÀM TÍNH TIỀN ĐIỆN THEO TỪNG ĐỊNH MỨC
tinhDinhMuc0 = (soKw) => {
    var thanhTien;
    thanhTien = soKw * GIA_DM_0;
    return thanhTien;
}

tinhDinhMuc1 = (soKw) => {
    var thanhTien;
    thanhTien = tinhDinhMuc0(DM_1);
    thanhTien += (soKw - DM_1) * GIA_DM_1;
    return thanhTien;
}

tinhDinhMuc2 = (soKw) => {
    var thanhTien;
    thanhTien = tinhDinhMuc1(DM_2);
    thanhTien += (soKw - DM_2) * GIA_DM_2;
    return thanhTien;
}

tinhDinhMuc3 = (soKw) => {
    var thanhTien;
    thanhTien = tinhDinhMuc2(DM_3);
    thanhTien += (soKw - DM_3) * GIA_DM_3;
    return thanhTien;
}

tinhDinhMuc4 = (soKw) => {
    var thanhTien;
    thanhTien = tinhDinhMuc3(DM_4);
    thanhTien += (soKw - DM_4) * GIA_DM_4;
    return thanhTien;
}

//HÀM TÍNH TIỀN ĐIỆN VÀ XUẤT KẾT QUẢ
tinhTienDien = (soKw) => {
    //Khởi tạo biến
    var soTienThanhToan = 0;
    var kqTongTien = 0;

    //Check điều kiện tính và xuất kết quả
    if (soKw <= DM_1) {
        soTienThanhToan = tinhDinhMuc0(soKw);
        kqDinhMuc1(soKw);
    } else if ((soKw > DM_1) && (soKw <= DM_2)) {
        soTienThanhToan = tinhDinhMuc1(soKw);
        kqDinhMuc2(soKw);
    } else if ((soKw > DM_2) && (soKw <= DM_3)) {
        soTienThanhToan = tinhDinhMuc2(soKw);
        kqDinhMuc3(soKw);
    } else if ((soKw > DM_3) && (soKw <= DM_4)) {
        soTienThanhToan = tinhDinhMuc3(soKw);
        kqDinhMuc4(soKw);
    } else {
        soTienThanhToan = tinhDinhMuc4(soKw);
        kqDinhMuc5(soKw);
    }
    kqTongTien = "Tổng tiền điện phải trả: " + soTienThanhToan + " VNĐ.";
    console.log(kqTongTien);
    kqEx3.innerHTML += kqTongTien;
};

//RÚT GỌN TÁCH HÀM XUẤT KẾT QUẢ THEO TỪNG ĐỊNH MỨC
kqDinhMuc1 = (soKw) => {
    var kqEx3 = getEle('kqEx3'); //tạo biến để gọn code

    (soKw <= DM_1) ?
        kqEx3.innerHTML = "->" + DM_1 + "  đầu (" + GIA_DM_0 + "đ/Kw): " + soKw * GIA_DM_0 + " VNĐ." :
        kqEx3.innerHTML = "->" + DM_1 + "  đầu (" + GIA_DM_0 + "đ/Kw): " + (DM_1 * GIA_DM_0) + " VNĐ.";

    kqEx3.appendChild(document.createElement('BR')); // xuống dòng khi in kết quả ra màn hình
};
kqDinhMuc2 = (soKw) => {
    var kqEx3 = getEle('kqEx3');
    kqDinhMuc1(soKw);

    ((soKw > DM_1) && (soKw <= DM_2)) ?
        kqEx3.innerHTML += "->" + DM_1 + " kế tiếp (" + GIA_DM_1 + "đ/Kw): " + ((soKw - DM_1) * GIA_DM_1) + " VNĐ." :
        kqEx3.innerHTML += "->" + DM_1 + " kế (" + GIA_DM_1 + "đ/Kw): " + ((DM_2 - DM_1) * GIA_DM_1) + " VNĐ.";

    kqEx3.appendChild(document.createElement('BR'));
};
kqDinhMuc3 = (soKw) => {
    var kqEx3 = getEle('kqEx3');
    kqDinhMuc2(soKw);

    ((soKw > DM_2) && (soKw <= DM_3)) ?
        kqEx3.innerHTML += "->" + DM_2 + " kế (" + GIA_DM_2 + "đ/Kw): " + ((soKw - DM_2) * GIA_DM_2) + " VNĐ." :
        kqEx3.innerHTML += "->" + DM_2 + " kế (" + GIA_DM_2 + "đ/Kw): " + ((DM_3 - DM_2) * GIA_DM_2) + " VNĐ.";

    kqEx3.appendChild(document.createElement('BR'));
};
kqDinhMuc4 = (soKw) => {
    var kqEx3 = getEle('kqEx3');
    kqDinhMuc3(soKw);

    ((soKw > DM_3) && (soKw <= DM_4)) ?
        kqEx3.innerHTML += "->" + (DM_3 - DM_1) + " kế (" + GIA_DM_3 + "đ/Kw): " + ((soKw - DM_3) * GIA_DM_3) + " VNĐ." :
        kqEx3.innerHTML += "->" + (DM_3 - DM_1) + " kế (" + GIA_DM_3 + "đ/Kw): " + ((DM_4 - DM_3) * GIA_DM_3) + " VNĐ.";

    kqEx3.appendChild(document.createElement('BR'));
};
kqDinhMuc5 = (soKw) => {
    var kqEx3 = getEle('kqEx3');
    kqDinhMuc4(soKw);

    kqEx3.innerHTML += "->" + "Trên: " + DM_4 + "(" + GIA_DM_4 + "đ/Kw): " + ((soKw - DM_4) * GIA_DM_4) + " VNĐ.";

    kqEx3.appendChild(document.createElement('BR'));
};