import { ajaxRequest } from "./ajax.js";
import {getParam, setParam } from "./until.js";
function renderCard(data) {
    let html = "";
    for (let item of data) {
        html += `
        <div class="col-4 mb-2">
            <div class="card">
                <div style="overflow: hidden;">
                <a href="?option=posts&id=${item.id}">
                    <img class="card-img " style="height: 300px;" width="" src="http://localhost/sv_gioi_nghe/phan_2/public/images/post/${item.thumbnail}" alt="">
                </a>
                </div>
                <div class="card-body">
                    <h5 class="card-title">
                    <a href="?option=posts&id=${item.id}">
                        ${item.title}
                    </a>
                    </h5>
                    <p style="font-size: 13px;" class="card-text text-eclip">${item.content}</p>
                    <a href="" class="btn btn-primary  d-block w-100">Xem theem</a>
                </div>
            </div>
        </div>
        `
    }
    return html;
}
function renderPage(data) {
    setParam("page", data.current_page);
    let html = `<li class="page-item"><a  class="page-link prev"  href="#">Trước</a></li>`;
    for (let i = 0; i < data.total_page; i++) {
        html += `
        <li class="page-item"><a class="page-link page ${data.current_page == i + 1 ? "active" : ""}" href="#">${i + 1}</a></li>
        `
    }
    html += `<li class="page-item"><a class="page-link next" href="#">Sau</a></li>`
    return html;
}
$(document).ready(function () {
    const param = getParam("category");
    let team = [];
    if (param !== "All" && param !== null) {
        team = param.split(",");
        team.forEach(item => {
            $(`input[value="${item}"]`).prop("checked", true);
        });
    }
    function loadPosts(page = 1) {
        const data = ajaxRequest({
            url: "get_posts_page.php",
            method: "GET",
            data: { listId: JSON.stringify(team), page }
        });

        data.then((response) => {
            const html = renderCard(response.data);
            const htmlPage = renderPage(response.pagination);
            $("#pagination").html(htmlPage);
            $("#list_post").html(html);
            // Xóa sự kiện cũ trước khi gán sự kiện mới
            $(".page").off("click");
            const current_page = Number(response.pagination.current_page);
            $(".page-link.prev").on("click", function () {
                if (current_page > 1)
                    loadPosts(current_page - 1);
            })
            $(".page-link.next").on("click", function () {
                if (current_page < response.pagination.total_page)
                    loadPosts(current_page + 1);
            })
            // Gán sự kiện cho tất cả các phần tử .page
            $(".page").on("click", function () {
                const pageNumber = $(this).text();
                loadPosts(pageNumber);
            });
        }).catch((error) => {
            console.error(error);
        });
    }
    getParam("page") ? loadPosts(getParam("page")) : loadPosts(1);
});
$('input[name="category[]"]').change(function () {
    var select = [];
    $('input[name="category[]"]:checked').each(function () {
        select.push($(this).val());
    });
    if (select.length == 0) {
        setParam("category", "All");
    }
    else {
        const param = select.join(",");
        setParam("category", param);
    }
    const result = ajaxRequest({ url: "get_posts_page.php", method: "GET", data: { listId: JSON.stringify(select) } });
    result.then((data) => {

        const html = renderCard(data.data);
        $("#list_post").html(html);
    }).catch((error) => {
        console.error(error);
    })
});