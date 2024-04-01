
const adresseServeur = "http://afrisofttech-003-site32.btempurl.com";//test
//const  adresseServeur = "http://afrisofttech-002-site15.btempurl.com";//reell
const adresseServeurToCheck = "afrisofttech-002-site15.btempurl.com";


const adresseMouvementPowerBank = "http://afrisofttech-003-site20.btempurl.com";
const adresseIPpowerBank = "http://150.109.121.50:6888";


/**
 * function to make a http request
 * @param {*} urlSchema 
 * @param {*} method 
 * @param {*} data 
 * @param {*} callBack 
 */
function fetchDataFunction(urlSchema, method, data, callBack) {
    $.ajax({
        method: method,
        type: method,
        url: adresseServeur + urlSchema,
        data: data,
        success: function (data) {
            //redirection vers la pages de confirmation code
            if (callBack) {
                callBack(data);
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}


function saveDataFunction(formId, callFront, callBack) {

    Swal.fire({
        title: 'Confirmation',
        text: "Voulez-vous vraiment créer ce compte ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmer !'
    }).then((result) => {
        if (result.value) {

            let form = document.getElementById(formId);
            let url = adresseServeur + form.getAttribute("action");
            let formData = new FormData(form);

            let jsonData = {};
            if (callFront) {
                jsonData = callFront(formData);
            }
            $.ajax({
                method: "POST",
                type: "POST",
                url: url,
                data: jsonData,
                cache: false,
                contentType: "application/json",
                processData: false,
                success: function (data) {
                    //redirection vers la pages de confirmation code

                    if (callBack) {
                        callBack(data);
                    }

                },
                error: function (data) {
                    swal.fire("Error serveur " + data.status, data.responseJSON.message, "error");
                    console.log(data);
                }
            });

        }
    })

}