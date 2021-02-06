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

final static float PHIXULYHOADON_NHADAN = 4.5f, PHIXULYHOADON_DOANHNGHIEP = 15;
final static float PHIDICHVUCOBAN_NHADAN = 20.5f, PHIDICHVUCOBAN_DOANHNGHIEP_10KETNOIDAU = 75, PHIKETNOITHEM = 5;
final static float PHITHUEKENHCAOCAP_NHADAN = 7.5f, PHITHUEKENHCAOCAP_DOANHNGHIEP = 50;

public static void main(String[] args) {
    // Đầu vào
    Scanner scanner = new Scanner(System.in);
    int loaiKhachHang = 0, maKhachHang = 0, soTaiKhoan = 0, soKenhDaThue = 0;
    double tongTien = 0;
    boolean flag = false;

    // Nhập dữ liệu
    System.out.println("-------------->> CHƯƠNG TRÌNH TÍNH TIỀN CÁP <<---------------");
    System.out.println("Mời bạn nhập vào loại khách hàng cần tính tiền: (1. Nhà dân - 2. Doanh nghiệp)");
    loaiKhachHang = Integer.parseInt(scanner.nextLine());

    switch (loaiKhachHang) {
        case 1:
        case 2:
            System.out.println("Mời bạn nhập mã khách hàng: (mã khách hàng là số. Vd: 123)");
            maKhachHang = Integer.parseInt(scanner.nextLine());
            System.out.println("Mời bạn nhập số tài khoản: (số tài khoản là số. Vd: 123456789)");
            soTaiKhoan = Integer.parseInt(scanner.nextLine());
            System.out.println("Số kênh cao cấp đã thuê: ");
            soKenhDaThue = Integer.parseInt(scanner.nextLine());

            // gọi hàm xử lý
            tongTien = xuLy(loaiKhachHang, soKenhDaThue, scanner);
            flag = true;
            break;
    }

    // Đầu ra chương trình
    if (flag) {
        System.out.println("---------->> HÓA ĐƠN <<----------");
        System.out.println("Loại khách hàng: " + loaiKhachHang);
        System.out.println("Mã khách hàng: " + maKhachHang);
        System.out.println("Số tài khoản: " + soTaiKhoan);
        System.out.println(">> Tổng tiền phải trả: " + tongTien + " VNĐ.");
    } else {
        System.out.println("Bạn nhập sai dữ liệu, vui lòng chạy lại chương trình và nhập lại ! >>>>>");
    }

    scanner.close();
}

public static double xuLy(int loaiKhachHang, int soKenhDaThue, Scanner scanner) {
    double tongTien = 0;

    switch (loaiKhachHang) {
        case 1: // Nhà dân
            // Gọi hàm tính tiền cáp
            tongTien = tinhTienCap(PHIXULYHOADON_NHADAN, PHIDICHVUCOBAN_NHADAN, PHITHUEKENHCAOCAP_NHADAN, soKenhDaThue);
            break;

        default: // Doanh nghiệp (vì loaiKhachHang chắc chắn = 1 hoặc 2 thì mới chạy vô hàm này nên để default luôn)
            // Đầu vào
            int soKetNoi;
            float phiDichVuCoBan = 0;

            // Nhập dữ liệu
            System.out.println("Bạn có bao nhiêu kết nối: ");
            soKetNoi = Integer.parseInt(scanner.nextLine());

            // Xử lý
            if (soKetNoi >= 0 && soKetNoi <= 10) {
                phiDichVuCoBan = PHIDICHVUCOBAN_DOANHNGHIEP_10KETNOIDAU * soKetNoi;
            } else if (soKetNoi > 10) {
                phiDichVuCoBan = (PHIDICHVUCOBAN_DOANHNGHIEP_10KETNOIDAU * 10) + (soKetNoi - 10) * PHIKETNOITHEM;
            } else {
                System.out.println("Nhập sai, mời chạy lại chương trình và nhập lại!");
                break;
            }

            // Gọi hàm tính tiền cáp
            tongTien = tinhTienCap(PHIXULYHOADON_DOANHNGHIEP, phiDichVuCoBan, PHITHUEKENHCAOCAP_DOANHNGHIEP,
                soKenhDaThue);
            break;
    }

    return tongTien; // Hàm trả về giá trị tongTien (kiểu double)
}

private static double tinhTienCap(float phiXuLyHoaDon, float phiDichVuCoBan, float phiThueKenh, int soKenhDaThue) {
    return (phiXuLyHoaDon + phiDichVuCoBan + (phiThueKenh * soKenhDaThue));
}