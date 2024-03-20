function ajaxRequest({ url, data, method = 'GET', dataType = 'json' }) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `ajax/${url}`,
            method: method,
            data: data,
            dataType: 'json',
            success: function (responseData) {
                resolve(responseData); 
            },
            error: function (xhr, status, error) {
                reject(error);
            }
        });
    });
}

export { ajaxRequest }