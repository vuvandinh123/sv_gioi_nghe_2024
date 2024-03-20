import { ajaxRequest } from "./ajax.js";
import { getParam } from "./until.js";

$(document).ready(function () {

    $("#like").on("click", function () {
        const proId = getParam("id");
        const data = ajaxRequest({ url: "update_like.php", method: "GET", data: { id: proId } });
        data.then((data) => {
            if (data) {
                $(".like-icon").addClass("text-danger");
                $("#like-count").html(data);
            }
        })
    })
})