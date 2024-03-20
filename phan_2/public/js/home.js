import { ajaxRequest } from "./ajax.js"

var listId = [];

function renderCard(data, cateId) {

    let html = "";
    for (let item of data) {
        listId.push({ id: item.id, cateId: cateId });
        html += `
    <div  class="col-4 mb-2">
        <div class="card">
            <div style="overflow: hidden;">
            <a href="?option=posts&id=${item.id}">
                <img class="card-img " style="height: 300px;object-fit: cover;"src="http://localhost/sv_gioi_nghe/phan_2/public/images/post/${item.thumbnail}" alt="">
            </a>
            </div>
            <div class="card-body">
                <h5 class="card-title "> <a href="?option=posts&id=${item.id}">${item.title}</a></h5>
                <p style="font-size: 13px;" class="card-text text-eclip">${item.content}</p>
                <a href="" class="btn btn-primary  d-block w-100">Xem Thêm</a>
            </div>
        </div>
    </div>
        `
    }
    return html;
}

function render(data) {
    let html = "";
    for (let item of data) {
        html += `
        <section class="mt-3">
        <div class="container bg-white p-5 rounded">
        <h3 class="mb-4 font-bold ">${item.category}</h3>
        <div class="row item${item.category_id}">`
        html += renderCard(item.data, item.category_id);
        html += `</div>
        <div class="text-center"><button id="btn-${item.category_id}" data-id="${item.category_id}" class="btn btn-primary load_more mt-4">Tải thêm</button></div>
        </div>
    </section>`
    }
    return html
}
function handleClickMore() {
    let dataId = $(this).attr("data-id");
    const listId2 = listId.filter(item => item.cateId == dataId).map(item => item.id);
    let data = ajaxRequest({ url: "get_load_more_post.php", method: "GET", data: { category_id: dataId, listId: JSON.stringify(listId2) } });
    data.then((data) => {
        const html = renderCard(data.data, dataId);
        $(`.item${dataId}`).append(html);
        let numCols = $(`.item${dataId}`).find('.col-4').length;
        if (data.total_products == numCols) {
            $(this).remove();
        }
    }).catch((error) => {
        console.error(error);
    })
}
$(document).ready(function () {
    const data = ajaxRequest({ url: "get_post.php", method: "GET" });
    data.then((data) => {
        const data2 = data.sort((a, b) => a.category_id - b.category_id)
        const html = render(data2);
        $("#category_list").html(html);
        $(".load_more").click(handleClickMore)
        console.log(listId);

    })


})
