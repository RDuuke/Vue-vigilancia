const vih = {
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.$root.interna = true
        })
    },
    template: `
    <div>
        <div class="rd-container">
            <div class="rd-element rd-s-100 rd-l-50 t-center rd-element-align-self">
                <img src="images/t-vih.png" alt=""> 
            </div>
            <div class="rd-element rd-s-100 rd-l-50 t-center">
                <img src="images/i-vih.png" alt="">
            </div>
            <div class="rd-element rd-s-100 rd-l-50 t-center">
                <a href="pdfs/PROTOCOLO VIH SIDA-2018.pdf" download="Protocolo VIH/SIDA">
                    <img src="images/btn-protocolo.png" alt="">
                </a>
            </div>
            <div class="rd-element rd-s-100 rd-l-50 t-center">
                <a href="pdfs/FICHA notificacion VIH-SIDA 2019.pdf" download="Ficha VIH/SIDA">
                    <img src="images/btn-ficha.png" alt="">
                </a>
            </div>
        </div>
        <div class="separator"></div>
        <div class="bg-red">
            <div class="rd-container">
                <div class="rd-element rd-s-100 rd-l-80 center t-center">
                    <p>
                        Tomado y adaptado de: Ministerio de Salud y Protección Social. Guía de práctica clínica basada en la evidencia para la atención
                         integral de la sífilis gestacional y congénita. 2014.
                   </p>
                </div>
            </div>
        </div>
        <div class="rd-container">
            <div class="rd-element rd-s-100">
                <h1 class="t-center color-yellow">
                    Caso confirmado<br>de VIH
                </h1>   
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 rd-l-50 center t-center">
                <p>Caso confirmado: todo caso de VIH/sida y muerte debe ingresar como confirmado por laboratorio</p>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-center from-l">
                <img src="images/F1.png" alt="">
            </div>
            <div class="separator"></div>
        </div>
        <div class="bg-yellow">
            <div class="rd-container">
                <div class="rd-element rd-s-100 rd-l-30 center">
                    <p class="t-center">
                        <b>Criterios de confirmación por laboratorio:</b>
                    </p>
                </div>
            </div>
        </div>
        <div class="rd-container">
            <div class="rd-element rd-s-100 t-center">
                <small><b>A partir de los 18 meses de edad no gestantes:</b></small>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-center from-l">
                <img src="images/F2.png" alt="">
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 rd-l-50 t-center">
                <p>
                   Se realiza a través de dos pruebas de inmunoensayo reactivas (rápida o Elisa).
                </p>
            </div>
            <div class="rd-element rd-s-100 rd-l-50">
                <p>
                    <b class="color-red">Caso confirmado en gestantes:</b> se realiza a través de dos pruebas de <b>inmunoensayo reactivas</b> (rápida o Elisa),
                    más carga viral que debe tener un valor superior a <b>5.000 copias</b>; si este valor es inferior, se debe confirmar en este caso
                    con <b>Western Blot.</b>
                </p>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-center">
                <small><b>Menores de 18 meses expuestos a infección por VIH/sida desde el nacimiento</b></small>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-center from-l">
                <img src="images/F4.png" alt="">
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 rd-l-20">
                <p>
                    1. a prueba carga viral a las <b>cuatro semanas</b>, si es mayor o igual a <b>5.000 copias</b> realizar inmediatamente 2.a carga viral.
                </p>
            </div>
            <div class="rd-element rd-s-100 rd-l-20">
                <p>
                    2.a prueba carga viral, si es <b>mayor o igual</b> a 5.000 copias se confirma el diagnóstico, de lo contrario se realiza carga <b>viral al mes.</b>
                </p>
            </div>
            <div class="rd-element rd-s-100 rd-l-20">
                <p>
                    Si la 1.a prueba de carga viral a las cuatro semanas está entre <b>50 y 5.000 copias</b>, realizar inmediatamente <b>2.a. carga viral.</b>
                </p>
            </div>
            <div class="rd-element rd-s-100 rd-l-20">
                <p>
                    2.a prueba carga viral, si es mayor o igual a 5.000 copias, se realiza otra carga viral para confirmar el diagnóstico,
                     de lo contrario se descarta <b>infección por VIH.</b>
                </p>
            </div>  
            <div class="rd-element rd-s-100 rd-l-20">
                <p>
                     Si la 1.a prueba carga viral a las cuatro semanas es menor de <b>50 copias</b>, se repite carga viral a los <b>cuatro meses</b> de edad.
                </p>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-center">
                <small><b>Menores de 18 meses de edad con criterios clínicos de VIH, sin conocimiento del estado<br>serológico de la madre</b></small>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-center from-l">
                <img src="images/F2.png" alt="">
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 rd-l-50">
                <p>
                   Si se desconoce el estado serológico de la madre, se inicia con una <b>1.a. prueba</b> presuntiva para <b>VIH</b>, Elisa o prueba rápida,
                   si es reactiva se aplica el algoritmo diagnóstico para niños expuestos al <b>VIH/sida</b> desde el nacimiento.
                </p>
            </div>
            <div class="rd-element rd-s-100 rd-l-50 t-center">
                <p>
                    Si el resultado es no reactivo se descarta infección por <b>VIH.</b>
                </p>
            </div>
        </div>
        <div class="separator"></div>
        <div class="bg-green">
            <div class="rd-container">
                <div class="rd-element rd-s-100 t-center">
                    <p>
                        *Para mayor información remítase a las guías de práctica clínica basada en la evidencia científica para VIH 2014
                        <br>del Ministerio de Salud y Protección Social)
                    </p>
                </div>
            </div>
        </div>
        <div class="separator"></div>
        <div class="rd-container">
            <div class="rd-element rd-s-100">
                <h1 class="t-center color-yellow">
                    Caso confirmado por sida
                </h1>   
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-justify rd-l-70 center">
                <p>
                    Caso Confirmado por laboratorio, de acuerdo con la edad que sea clasificado en las categorías clínicas <b>A3,
                    B3, C1, C2 y C3</b> (ver tabla 1). Este caso puede ser la primera forma de notificación del caso.
                </p>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100">
                <h1 class="t-center color-yellow">
                    Caso confirmado de muerte<br>
                    por sida.         
                </h1>   
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-justify rd-l-70 center">
                <p>
                    Caso confirmado por laboratorio de acuerdo con la edad, cuya causa de muerte fue sida. Este caso puede
                    ser la primera forma de notificación del caso.
                </p>
            </div>
            <div class="separator"></div>
        </div>
    </div>
    `
}