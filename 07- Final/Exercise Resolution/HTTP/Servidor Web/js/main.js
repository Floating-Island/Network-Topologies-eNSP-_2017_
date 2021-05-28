var MAXSTRINGLENGTH=20;
var MAXPASSLENGTH=256;
var MINPASSLENGTH=8;

function editar(nombre)
{
    (document.getElementById(nombre)).style.background= "rgba(255, 226, 0, 0.3)";
    return;
}
function estadonormal (id)
{
    document.getElementById(id).style= "";
}

function validarpalabra(inputid,spanid)
 {
    var input = document.getElementById(inputid);
    var span = document.getElementById(spanid);

    var pat=/^([a-z]+$)/i;

    if(!(pat.test(input.value)&&input.value.length<MAXSTRINGLENGTH)) //limita el tamaño y valida
    {
        input.style.background= "rgba(255, 0, 0, 0.3)";
        span.style.display="inline";
    }
    else
        {
            input.style.background="rgba(0, 152, 0, 0.2)";
            span.style.display="none";
        }
    return;
}

function validardni(inputid,spanid)
 {
    var input = document.getElementById(inputid);
    var span = document.getElementById(spanid);

    var pat=/^(\d{8}$)/;

    if(!pat.test(input.value))
    {
        input.style.background= "rgba(255, 0, 0, 0.3)";
        span.style.display="inline";
    }
    else
        {
            input.style.background="rgba(0, 152, 0, 0.2)";
            span.style.display="none";
        }
    return;
}

function validarmail(inputid,spanid)
 {
    var input = document.getElementById(inputid);
    var span = document.getElementById(spanid);

    var pat=/^(\w+[@]\w+\.com$)/i;

    if(!(pat.test(input.value)&&input.value.length<MAXSTRINGLENGTH)) //limita el tamaño y valida
    {
        input.style.background= "rgba(255, 0, 0, 0.3)";
        span.style.display="inline";
    }
    else
        {
            input.style.background="rgba(0, 152, 0, 0.2)";
            span.style.display="none";
        }
    return;
}


function validarletras(inputid,spanid)
 {
    var input = document.getElementById(inputid);
    var span = document.getElementById(spanid);
    
        var pat=/^([a-z]+$)/i;

        if(!(pat.test(input.value)&&input.value.length<MAXSTRINGLENGTH)) //limita el tamaño y valida
        {
            input.style.background= "rgba(255, 0, 0, 0.3)";
            span.style.display="inline";
        }
        else
            {
                input.style.background="rgba(0, 152, 0, 0.2)";
                span.style.display="none";
            }
        return;
}

function validarcontrasena(inputid,spanid)
 {
    var input = document.getElementById(inputid);
    var span = document.getElementById(spanid);
    
        var pat=/^(.*$)/i;

        if(!(pat.test(input.value) && input.value.length>=MINPASSLENGTH && input.value.length<MAXPASSLENGTH)) //limita el tamaño y valida
        {
            input.style.background= "rgba(255, 0, 0, 0.3)";
            span.style.display="inline";
        }
        else
            {
                input.style.background="rgba(0, 152, 0, 0.2)";
                span.style.display="none";
            }
        return;
}

function chequeaigualdad(inputid1,inputid2,spanid)
{
    var input1 = document.getElementById(inputid1);
    var input2 = document.getElementById(inputid2);
    var span = document.getElementById(spanid);

        if(!(input1.value==input2.value)) //limita el tamaño y valida
        {
            input1.style.background= "rgba(255, 0, 0, 0.3)";
            span.style.display="inline";
        }
        else
            {
                input1.style.background="rgba(0, 152, 0, 0.2)";
                span.style.display="none";
            }
        return;
}


function validarobligatorio(id)
{
    if(document.getElementById(id).value==0)
        {
            document.getElementById("errordigitosobligatorio").style.display="inline";
        }
    else
    {
        document.getElementById("errordigitosobligatorio").style.display="none";
    }
    return;
}
