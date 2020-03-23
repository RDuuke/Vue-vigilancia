const sifilis = {
    beforeRouteEnter (to, from, next) {
       next(vm => {
           vm.$root.interna = true
       })
    },
    template: `
    <div>
        <div class="rd-container">
            <div class="rd-element rd-s-100 rd-l-50 t-center">
                <img src="images/t-sifilis.png" alt=""> 
            </div>
            <div class="rd-element rd-s-100 rd-l-50 t-center">
                <img src="images/i-sifilis.png" alt="">
            </div>
            <div class="rd-element rd-s-100 rd-l-50 t-center">
                <a href="pdfs/PROTOCOLO Sifilis gestacional y congenita-INS 2017.pdf" download="Protocolo Sífilis Gestacional y Congénita">
                    <img src="images/btn-protocolo.png" alt="">
                </a>
            </div>
            <div class="rd-element rd-s-100 rd-l-50 t-center">
                <a href="pdfs/FICHA notificacion sifilis gestacional y congenita-2019.pdf" download="Ficha Sífilis Gestacional y Congénita">
                    <img src="images/btn-ficha.png" alt="">
                </a>
            </div>
        </div>
        <div class="bg-red">
            <div class="rd-container">
                <div class="rd-element rd-s-100 rd-l-80 center t-center">
                    <p>
                        Tomado y adaptado de: Ministerio de Salud y Protección Social. Guía de práctica clínica basada en la evidencia para la atención integral de la
                       sífilis gestacional ycongénita. 2014
                   </p>
                </div>
            </div>
        </div>
        <div class="rd-container">
            <div class="rd-element rd-s-100">
                <h1 class="t-center color-yellow">
                    Caso confirmado<br>de sífilis gestacional
                </h1>   
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 rd-l-80 center t-justify">
                <p>Toda mujer gestante, puérpera o con aborto en los últimos 40 días con o sin signos clínicos sugestivos de sífilis 
                (comopor ejemplo: úlcera genital, erupción cutánea, placas en palmas y plantas), con prueba treponémica rápida positiva 
                acompañada de una prueba no treponémica reactiva (VDRL, RPR) a cualquier dilución, que no ha recibido tratamiento 
                adecuado para sífilis durante la presente gestación o que tiene una reinfección no tratada*.</p>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-center from-l">
                <img src="/images/F1.png" alt="">
            </div>
        </div>
        <div class="bg-yellow">
            <div class="rd-container">
                <div class="rd-element rd-s-100 rd-l-30 center">
                    <p class="t-center">
                        <b>Reinfección</b><br>
                        Es aquel caso que cumpla al menos uno de los siguientes criterios:
                    </p>
                </div>
            </div>
        </div>
        <div class="separator"></div>
        <div class="rd-container">
            <div class="rd-element rd-s-100 t-center from-l">
                <img src="images/F2.png" alt="">
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 rd-l-50">
                <p>
                    <b class="color-red">Gestante o mujer en puerperio</b> (40 días postparto) que después de haber recibido tratamiento adecuado para 
                    <b>sífilis</b> de acuerdo con el estadio de la enfermedad, presenta durante el seguimiento <b>clínico y serológico</b>, 
                    la aparición de lesiones compatibles en genitales o en piel, o un aumento en los títulos de la prueba no treponémica <b>(VDRL, RPR)</b> 
                    de cuatro veces o de dos diluciones con respecto a la prueba no treponémica inicial.
                </p>
            </div>
            <div class="rd-element rd-s-100 rd-l-50">
                <p>
                    <b class="color-red">Gestante o mujer en puerperio</b> (40 días postparto) con diagnóstico de <b>sífilis</b> primaria o secundaria que recibió 
                    tratamiento adecuado y <b>seis meses después</b> los títulos de la prueba no treponémica <b>(VDRL, RPR)</b> no descienden cuatro
                    veces o dos diluciones, o con sífilis latente (temprana, tardía o de duración
                    desconocida) y en quien <b>12 meses después</b> los títulos de la prueba no
                    treponémica no descienda cuatro veces o dos diluciones.
                </p>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 rd-l-30 center">
                <h1 class="color-yellow t-center">Caso confirmado<br>de sífilis gestacional</h1>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-center from-l">
                <img src="images/F3.png" alt="">
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 rd-l-25">
                <p>
                    <b class="color-red">Nexo epidemiológico:</b> fruto de la gestación (mortinato o nacido vivo) de madre con <b>sífilis gestacional</b> sin tratamiento
                     o con tratamiento inadecuado para prevenir la sífilis congénita, sin importar el resultado de la prueba no treponémica <b>(VDRL, RPR)</b>
                     del neonato. Se considera tratamiento adecuado para prevenir la sífilis congénita haber recibido al menos una dosis de <b>penicilina benzatínica
                     de 2´400.000 UI</b> intramuscular (IM) aplicada <b>30 o más días</b> antes del momento del parto.
                </p>
            </div>
            <div class="rd-element rd-s-100 rd-l-25">
                <p>
                    <b class="color-red">Laboratorio:</b> todo fruto de la gestación con prueba no treponémica <b>(VDRL, RPR)</b> con títulos cuatro veces
                    mayores que los títulos de la madre al momento del parto, lo que equivale a dos diluciones por encima del título
                    materno
                </p>
            </div>
            <div class="rd-element rd-s-100 rd-l-25">
                <p>
                    <b class="color-red">Clínica:</b> todo recién nacido hijo degestante con diagnóstico de <b>sífilis en el embarazo</b> actual, con una o varias
                    manifestaciones sugestivas de sífilis congénita al examen físico con exámenes <b>paraclínicos sugestivos</b> de sífilis congénita 
                </p>
            </div>
            <div class="rd-element rd-s-100 rd-l-25">
                <p>
                    <b class="color-red">Laboratorio:</b> todo fruto de la gestación con demostración de Treponema pallidum por campo oscuro, inmunofluorescencia u otra
                    coloración o procedimiento
                </p>
            </div>
        </div>
    </div>
    `
}