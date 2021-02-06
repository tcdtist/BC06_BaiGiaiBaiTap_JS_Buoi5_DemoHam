function getEle(id) {
    return document.getElementById(id);
}

getEle('tinhEx2').addEventListener('click', () => {
    xuLy();
});

const THUE_SUAT_60_DAU = 0.05;
const THUE_SUAT_60DEN120 = 0.1;
const THUE_SUAT_120DEN216 = 0.15;
const THUE_SUAT_216DEN384 = 0.2;
const THUE_SUAT_384DEN624 = 0.25;
const THUE_SUAT_624DEN960 = 0.3;
const THUE_SUAT_TREN960 = 0.35;

xuLy = () => {

    //Đầu vào
    var hoTen;
    var tongThuNhap1Nam;
    var soNguoiPhuThuoc;
    var thueThuNhapCaNhan;
    var kqEx2 = "";

    //Lấy họ tên
    hoTen = getEle('hoTen_2').value
    //Lấy tổng thu nhập 1 năm: (đơn vị: triệu VNĐ)
    tongThuNhap1Nam = parseFloat(getEle('tongThuNhap1Nam_2').value);
    //Lấy số người phụ thuộc
    soNguoiPhuThuoc = parseInt(getEle('soNguoiPhuThuoc_2').value);

    //Kiểm tra
    if (soNguoiPhuThuoc < 0) soNguoiPhuThuoc = 0;
    if (tongThuNhap1Nam <= 0) return alert('Tổng thu nhập/năm cần lớn hơn 0, không thì tính thuế chi.');
    if (soNguoiPhuThuoc < 0) return alert('Số người phụ thuộc không được nhập số âm.');

    //Xử lý
    thueThuNhapCaNhan = tinhThueThuNhapCaNhan(tongThuNhap1Nam, soNguoiPhuThuoc);

    //Trường hợp không phải đóng thuế
    thueThuNhapCaNhan <= 0 ? kqEx2 = "Bạn không cần đóng thuế thu nhập cá nhân!" : kqEx2 = "Thuế thu nhập cá nhân" + " anh/chị " + hoTen + " phải trả là: " + thueThuNhapCaNhan + " triệu VNĐ";

    //Xuất kết quả
    console.log(kqEx2);
    getEle('kqEx2').style.display = "block";
    getEle('kqEx2').innerHTML = kqEx2;
}

tinhThueThuNhapCaNhan = (tongThuNhap1Nam, soNguoiPhuThuoc) => {
    var thueCaNhan;
    var thuNhapChiuThue = tongThuNhap1Nam - 4 - soNguoiPhuThuoc * 1.6;

    if (thuNhapChiuThue <= 60) {
        thueCaNhan = thuNhapChiuThue * THUE_SUAT_60_DAU;
    } else if (thuNhapChiuThue > 60 && thuNhapChiuThue <= 120) {
        thueCaNhan = 60 * THUE_SUAT_60_DAU + (thuNhapChiuThue - 60) * THUE_SUAT_60DEN120;
    } else if (thuNhapChiuThue > 120 && thuNhapChiuThue <= 216) {
        thueCaNhan = 60 * THUE_SUAT_60_DAU + (120 - 60) * THUE_SUAT_60DEN120
            + (thuNhapChiuThue - 120) * THUE_SUAT_120DEN216;
    } else if (thuNhapChiuThue > 216 && thuNhapChiuThue <= 384) {
        thueCaNhan = 60 * THUE_SUAT_60_DAU + (120 - 60) * THUE_SUAT_60DEN120 + (216 - 120) * THUE_SUAT_120DEN216
            + (thuNhapChiuThue - 216) * THUE_SUAT_216DEN384;
    } else if (thuNhapChiuThue > 384 && thuNhapChiuThue <= 624) {
        thueCaNhan = 60 * THUE_SUAT_60_DAU + (120 - 60) * THUE_SUAT_60DEN120 + (216 - 120) * THUE_SUAT_120DEN216
            + (384 - 216) * THUE_SUAT_216DEN384 + (thuNhapChiuThue - 384) * THUE_SUAT_384DEN624;
    } else if (thuNhapChiuThue > 624 && thuNhapChiuThue <= 960) {
        thueCaNhan = 60 * THUE_SUAT_60_DAU + (120 - 60) * THUE_SUAT_60DEN120 + (216 - 120) * THUE_SUAT_120DEN216
            + (384 - 216) * THUE_SUAT_216DEN384 + (624 - 384) * THUE_SUAT_384DEN624
            + (thuNhapChiuThue - 624) * THUE_SUAT_624DEN960;
    } else {
        thueCaNhan = 60 * THUE_SUAT_60_DAU + (120 - 60) * THUE_SUAT_60DEN120 + (216 - 120) * THUE_SUAT_120DEN216
            + (384 - 216) * THUE_SUAT_216DEN384 + (624 - 384) * THUE_SUAT_384DEN624
            + (960 - 624) * THUE_SUAT_624DEN960 + (thuNhapChiuThue - 960) * THUE_SUAT_TREN960;
    }
    return thueCaNhan;
}
