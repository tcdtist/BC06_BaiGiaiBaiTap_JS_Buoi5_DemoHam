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

const GIA_DM_0 = 500, GIA_DM_1 = 650, GIA_DM_2 = 850, GIA_DM_3 = 1100, GIA_DM_4 = 1300;
const DM_1 = 50, DM_2 = 100, DM_3 = 200, DM_4 = 350;

xuLy = () => {
    var hoTen;
    var soKwDien;

    System.out.print("Nhập tên khách hàng: ");
    hoTen = scan.nextLine();
    System.out.print("Số Kw điện tiêu thụ: ");
    soKwDien = Integer.parseInt(scan.nextLine());

    System.out.println("***** BẢNG TÍNH TIỀN ĐIỆN ******");
    System.out.println("Tên khách hàng: " + hoTen);
    System.out.println("Số Kw tiêu thụ: " + soKwDien);

    XuLy(soKwDien);

    scan.close();
}

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

tinhTienDien = (soKw) => {
    var soTienThanhToan;
    System.out.println("\n   CHI TIẾT \t\t\t THÀNH TIỀN");
    if (soKw <= DM_1) {
        soTienThanhToan = tinhDinhMuc0(soKw);
        System.out.println(DM_1 + "  đầu (" + GIA_DM_0 + "đ/Kw): \t\t " + soKw * GIA_DM_0 + " VNĐ.");
    } else if ((soKw > DM_1) && (soKw <= DM_2)) {
        soTienThanhToan = tinhDinhMuc1(soKw);
        System.out.println(DM_1 + "  đầu (" + GIA_DM_0 + "đ/Kw): \t\t " + (DM_1 * GIA_DM_0) + " VNĐ.");
        System.out.println(DM_1 + " kế tiếp (" + GIA_DM_1 + "đ/Kw): \t\t " + ((soKw - DM_1) * GIA_DM_1) + " VNĐ.");
    } else if ((soKw > DM_2) && (soKw <= DM_3)) {
        System.out.println(DM_1 + "  đầu (" + GIA_DM_0 + "đ/Kw): \t\t " + (DM_1 * GIA_DM_0) + " VNĐ.");
        System.out.println(DM_1 + " kế (" + GIA_DM_1 + "đ/Kw): \t\t " + ((DM_2 - DM_1) * GIA_DM_1) + " VNĐ.");
        System.out.println(DM_2 + " kế (" + GIA_DM_2 + "đ/Kw): \t\t " + ((soKw - DM_2) * GIA_DM_2) + " VNĐ.");
        soTienThanhToan = tinhDinhMuc2(soKw);
    } else if ((soKw > DM_3) && (soKw <= DM_4)) {
        System.out.println(DM_1 + "  đầu (" + GIA_DM_0 + "đ/Kw): \t\t " + (DM_1 * GIA_DM_0) + " VNĐ.");
        System.out.println(DM_1 + " kế (" + GIA_DM_1 + "đ/Kw): \t\t " + ((DM_2 - DM_1) * GIA_DM_1) + " VNĐ.");
        System.out.println(DM_2 + " kế (" + GIA_DM_2 + "đ/Kw): \t\t " + ((DM_3 - DM_2) * GIA_DM_2) + " VNĐ.");
        System.out.println(
            (DM_3 - DM_1) + " kế (" + GIA_DM_3 + "đ/Kw): \t\t " + ((soKw - DM_3) * GIA_DM_3) + " VNĐ.");
        soTienThanhToan = tinhDinhMuc3(soKw);
    } else {
        System.out.println(DM_1 + "  đầu (" + GIA_DM_0 + "đ/Kw): \t\t " + (DM_1 * GIA_DM_0) + " VNĐ.");
        System.out.println(DM_1 + " kế (" + GIA_DM_1 + "đ/Kw): \t\t " + ((DM_2 - DM_1) * GIA_DM_1) + " VNĐ.");
        System.out.println(DM_2 + " kế (" + GIA_DM_2 + "đ/Kw): \t\t " + ((DM_3 - DM_2) * GIA_DM_2) + " VNĐ.");
        System.out.println(
            (DM_3 - DM_1) + " kế (" + GIA_DM_3 + "đ/Kw): \t\t " + ((DM_4 - DM_3) * GIA_DM_3) + " VNĐ.");
        System.out
            .println("Trên: " + DM_4 + "(" + GIA_DM_4 + "đ/Kw): \t\t " + ((soKw - DM_4) * GIA_DM_4) + " VNĐ.");
        soTienThanhToan = tinhDinhMuc4(soKw);
    }

    System.out.println("\nTiền điện phải trả: \t\t " + soTienThanhToan + " VNĐ.");
}