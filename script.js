// ==============================
// TÌM KIẾM
// ==============================

function timKiem() {

    let tuKhoa =
        document.getElementById("searchInput").value;

    if (tuKhoa.trim() === "") {

        alert("Vui lòng nhập nội dung cần tìm!");

        return;
    }

    alert("Bạn đang tìm kiếm: " + tuKhoa);
}


// ==============================
// NHẤN ENTER ĐỂ TÌM
// ==============================

document
    .getElementById("searchInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            timKiem();

        }

    });


// ==============================
// NÚT MENU
// ==============================

function moMenu() {

    alert("Bạn vừa nhấn nút menu!");

}