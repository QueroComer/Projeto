var filtroEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
var validaForm = function () {
    var valido = true;
    $("input, select").removeClass("invalido");
    $(".alerta").remove();
    var mensagem = "";
    var nomeCampo;
    $("input, select").each(function () {
        mensagem = "";
        nomeCampo = $('label[for="' + $(this).attr('id') + '"]').text().toLowerCase().replace("*","");
        if ($(this).attr("required") != undefined) {
            if ($(this).val() == "" || $(this).val() == undefined) {                
                mensagem = "Por favor, preencha o campo " + nomeCampo;
            }//else if ($(this).attr("type") == "date" && doDateVenc) {                
               // mensagem = "Data incorreta";
        //}
            else if ($(this).attr("type") == "password" && ($(this).val() != $(this).next("input[type='password']").val() && $(this).next("input[type='password']").length > 1)) {
                console.log($(this).next("input[type='password']"));
               mensagem = "As senhas devem ser iguais!";
            } else if ($(this).attr("type") == "email" && !filtroEmail.test($(this).val())) {
                mensagem = "E-mail invalido!";
            }
            if (mensagem != "") {
                $(this).addClass("invalido");
                $(this).after("<label class='alerta'>" + mensagem + "</label>");
                valido = false;
            }
        }        
    });
    return valido;
}

var cadastrar = function () {
    window.location = "/Home/Cadastro";
}

var loginComEmail = function () {
    if (validaForm()) {
        $.post("Home/Login", $("form").serialize() , function (data) {
            if (data.status == true) {
                window.location = "Logged";
            } else {
                alert("Falha ao realizar login!");
            }
        }, "json");
    }
}

var reDate4 = /^((0?[1-9]|[12]\d)\/(0?[1-9]|1[0-2])|30\/(0?[13-9]|1[0-2])|31\/(0?[13578]|1[02]))\/(19|20)?\d{2}$/;
var reDate = reDate4;

function doDateVenc(Id, pStr, pFmt) {
    d = document.getElementById(Id);
    if (d.value != "") {
        if (d.value.length < 10) {
            alert("Data Inválida!\nDigite corretamente a data: dd/mm/aaaa !");
            d.value = "";
            d.focus();
            return false;
        } else {

            eval("reDate = reDate" + pFmt);
            if (reDate.test(pStr)) {
                return false;
            } else if (pStr != null && pStr != "") {
                alert("ALERTA DE ERRO!!\n\n" + pStr + " NÃO é uma data válida.");
                d.value = "";
                d.focus();
                return false;
            }
        }
    } else {
        return false;
    }
}
/*
function makeCode() {
    var qrcode = new QRCode("qrcode", {
        text: window.location,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    qrcode.makeCode();
}*/

function parseDate(str) {
    var m = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    return (m) ? new Date(m[3], m[2]-1, m[1]) : null;
}

function validaSenha(senha, confirmacao) {
    if (senha != confirmacao) {
        alert("As senhas não conferem");
        return false;
    }
}