
function getEle(id) {
    return document.getElementById(id);
}

getEle('tinhEx4').addEventListener('click', () => {
    xuLyEx4();
});

//Khởi tạo các biến hằng số
const PHIXULYHOADON_NHADAN = 4.5, PHIXULYHOADON_DOANHNGHIEP = 15;
const PHIDICHVUCOBAN_NHADAN = 20.5, PHIDICHVUCOBAN_DOANHNGHIEP_10KETNOIDAU = 75, PHIKETNOITHEM = 5;
const PHITHUEKENHCAOCAP_NHADAN = 7.5, PHITHUEKENHCAOCAP_DOANHNGHIEP = 50;

//Hàm xử lý
xuLyEx4 = () => {
    // Đầu vào
    var loaiKhachHang = 0, maKhachHang = 0, soTaiKhoan = 0, soKenhDaThue = 0;
    var tongTien = 0;
    var kqEx4 = getEle('kqEx4');
    var flag = false;

    // Nhập dữ liệu
    // Lấy loại khách hàng cần tính tiền: (1. Nhà dân - 2. Doanh nghiệp)
    if (getEle('nhaDan').checked) loaiKhachHang = 1;
    if (getEle('doanhNghiep').checked) loaiKhachHang = 2;

    //Xử lý
    switch (loaiKhachHang) {
        case 1:
        case 2:
            // Lấy mã khách hàng: (mã khách hàng là số. Vd: 123)
            maKhachHang = parseInt(getEle("maKhachHang").value);
            // Lấy số tài khoản: (số tài khoản là số. Vd: 123456789)
            soTaiKhoan = parseInt(getEle("soTaiKhoan").value);
            //Lấy số kênh cao cấp đã thuê:
            soKenhDaThue = parseInt(getEle("soKenhDaThue").value);

            //Check điều kiện nhập
            if (soKenhDaThue <= 0) return alert('Số kênh cao cấp đã thuê cần > 0.');

            // gọi hàm tinhTongTien
            tongTien = tinhTongTien(loaiKhachHang, soKenhDaThue);
            flag = true;
            break;
        default:
            alert('Loại khách hàng không được bỏ trống!');
    }

    // Đầu ra chương trình
    if (tongTien != undefined && flag) {
        kqEx4.style.display = 'block';
        kqEx4.innerHTML = "HÓA ĐƠN:";
        kqEx4.appendChild(document.createElement('BR'));
        kqEx4.innerHTML += "- Loại khách hàng: " + loaiKhachHang;
        kqEx4.appendChild(document.createElement('BR'));
        kqEx4.innerHTML += "- Mã khách hàng: " + maKhachHang;
        kqEx4.appendChild(document.createElement('BR'));
        kqEx4.innerHTML += "- Số tài khoản: " + soTaiKhoan;
        kqEx4.appendChild(document.createElement('BR'));
        kqEx4.innerHTML += "-> Tổng tiền phải trả: " + tongTien + " $.";
    }
}

//Hàm tính tổng tiền
tinhTongTien = (loaiKhachHang, soKenhDaThue) => {
    var tongTien = 0;

    switch (loaiKhachHang) {
        case 1: // Nhà dân
            // Gọi hàm tính tiền cáp
            tongTien = tinhTienCap(PHIXULYHOADON_NHADAN, PHIDICHVUCOBAN_NHADAN, PHITHUEKENHCAOCAP_NHADAN, soKenhDaThue);
            break;

        default: // Doanh nghiệp (vì loaiKhachHang chắc chắn = 1 hoặc 2 thì mới chạy vô hàm này nên để default luôn)
            // Đầu vào
            var soKetNoi;
            var phiDichVuCoBan = 0;

            // Nhập dữ liệu
            soKetNoi = hienThiNhapKetNoiThem();

            // Xử lý
            if (soKetNoi > 0 && soKetNoi <= 10) {
                phiDichVuCoBan = PHIDICHVUCOBAN_DOANHNGHIEP_10KETNOIDAU * soKetNoi;
            } else if (soKetNoi > 10) {
                phiDichVuCoBan = (PHIDICHVUCOBAN_DOANHNGHIEP_10KETNOIDAU * 10) + (soKetNoi - 10) * PHIKETNOITHEM;
            } else {
                return alert('Nhập sai, số kết nối thêm phải là số nguyên dương!');
            }

            // Gọi hàm tính tiền cáp
            tongTien = tinhTienCap(PHIXULYHOADON_DOANHNGHIEP, phiDichVuCoBan, PHITHUEKENHCAOCAP_DOANHNGHIEP,
                soKenhDaThue);
            break;
    }
    return tongTien; // Hàm trả về giá trị tongTien
}

//hàm tính tiền cáp
tinhTienCap = (phiXuLyHoaDon, phiDichVuCoBan, phiThueKenh, soKenhDaThue) => {
    return (phiXuLyHoaDon + phiDichVuCoBan + (phiThueKenh * soKenhDaThue));
}

//Hàm hiển thị nhập kết nối thêm
hienThiNhapKetNoiThem = () => {
    if (getEle('doanhNghiep').checked) {
        getEle('soKetNoi_hidden').style.display = 'block';
        var soKetNoi = parseInt(getEle("soKetNoi").value);
    } else {
        getEle('soKetNoi_hidden').style.display = 'none';
    }
    getEle('kqEx4').style.display = 'none'; //Ẩn thanh kết quả
    return soKetNoi;
}