const hepatitis = {
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.$root.interna = true
        })
    },
    template: `
    <div>
        <div class="rd-container">
            <div class="rd-element rd-s-100 rd-l-50 t-center rd-element-align-self">
                <img src="images/t-hepatitis.png" alt=""> 
            </div>
            <div class="rd-element rd-s-100 rd-l-50 t-center">
                <img src="images/i-hepatitis.png" alt="">
            </div>
            <div class="rd-element rd-s-100 rd-l-50 t-center">
                <a href="pdfs/PROTOCOLO Hepatitis B C y delta-ins 2017.pdf" download="Protocolo Hepatitis">
                    <img src="images/btn-protocolo.png" alt="">
                </a>
            </div>
            <div class="rd-element rd-s-100 rd-l-50 t-center">
                <a href="pdfs/FICHA notificacion Hepatitis-2019.pdf" download="Ficha Hepatitis">
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
        <div class="separator"></div>
        <div class="rd-container">
            <div class="rd-element rd-s-100">
                <h1 class="t-center color-yellow">
                    Caso<br>Confirmado<br>por Laboratorio
                </h1>   
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-center from-l">
                <img src="images/F1.png" alt="">
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 rd-l-50 center t-center">
                <p><b class="color-red">Caso de Hepatitis B a clasificar.</b></p>
            </div>
            <div class="rd-element rd-s-100 t-center from-l">
                <img src="images/F1.png" alt="">
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-justify">
                <p>
                    Paciente con <b>nueve meses o más</b> de vida que posea una prueba para detección en sangre o tejido de antígeno de superficie 
                    <b>(HBsAg) positiva/reactiva</b>, con o sin síntomas asociados y a quien no se le haya realizado de forma 
                    simultánea la detección en sangre o tejido de los anticuerpos contra el antígeno core <b>(Anti-HBcIgM o Anti-HBc Total)</b>, 
                    necesarios para la identificación de la fase de la enfermedad.
                    Estos casos se deben notificar como <b>“a clasificar”</b> con la salvedad que deben ser obligatoriamente ajustados a más tardar en el próximo 
                    periodo epidemiológico (4 semanas subsiguientes) con los resultados de los anticuerpos contra el antígeno core, 
                    definiendo si presenta una infección de tipo aguda o crónica.
                </p>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 rd-l-50 center t-center">
                <p><b class="color-red">Caso de Hepatitis B Aguda.</b></p>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-center from-l">
                <img src="images/F1.png" alt="">
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-justify">
                <p>
                    Paciente con nueve meses o más de vida que posea una prueba para detección de antígeno de superficie (HBsAg)
                    positiva/reactiva o histopatología compatible con infección por el VHB, asociada a una prueba de detección de 
                    anticuerpo contra el antígeno core del tipo IgM específicos contra el antígeno del núcleo del virus de la hepatitis B (IgMAnti-HBc) 
                    positiva/reactiva y que cumple por lo menos con uno de los siguientes criterios:
                </p>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-center from-l">
                <img src="images/F2.png" alt="">
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 rd-l-50">
                <p>
                   Malestar general, dolores musculares, articulares, astenia, hiporexia, náusea, vómito, coluria.
                </p>
            </div>
            <div class="rd-element rd-s-100 rd-l-50">
                <p>
                    Ictericia o elevación de enzimas hepáticas (alanina-aminotransferasas) a más de 2,5 veces el valor normal
                </p>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 rd-l-50 center t-center">
                <p><b class="color-red">Caso de Hepatitis B Aguda.</b></p>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-center from-l">
                <img src="images/F2.png" alt="">
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-justify">
                <p>
                    Paciente que cumpla con algunas de las definiciones de caso para Hepatitis B ya descritas y que adicionalmente 
                    presente una prueba para detección de anticuerpos contra el antígeno Delta <b>(Anti-VHD)</b> positiva/reactiva en sangre o tejido
                </p>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 rd-l-50 center t-center">
                <p><b class="color-red">Caso de Hepatitis C.</b></p>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-center from-l">
                <img src="images/F2.png" alt="">
            </div>
            <div class="separator"></div>
             <div class="rd-element rd-s-100 t-justify">
                <p>
                    Paciente que presente una prueba de (EIA, CLIA) para detección de anticuerpos totales contra el VHC (Anti-VHC) 
                    positiva/reactiva o histopatología compatible con infección por el VHC, verificada por lo menos con una de las 
                    siguientes pruebas para de detección específica para el VHC:
                </p>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-center from-l">
                <img src="images/F5.png" alt="">
            </div>
            <div class="rd-element rd-s-100 rd-l-40 t-center">
                <p>
                    <b>
                        Prueba de inmunoensayo recombinante<br>(RIBA o LIA)
                    </b>
                </p>
            </div>
            <div class="rd-element rd-s-100 rd-l-35 t-center">
                <p>
                    <b>
                         Detección molecular del VHC en sangre (RT-PCR)
                    </b>                
                </p>
            </div>
            <div class="rd-element rd-s-100 rd-l-25">
                <p>
                    <b>
                        Inmunoblot
                    </b>                
                </p>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-center">
                <p><b>Puede o no cumplir por lo menos con uno de los siguientes criterios:</b></p>
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 t-center from-l">
                <img src="images/F2.png" alt="">
            </div>
            <div class="separator"></div>
            <div class="rd-element rd-s-100 rd-l-50">
                <p>
                    Malestar general, dolores musculares, articulares, astenia, hiporexia, náusea, vómito, coluria
                </p>
            </div>
            <div class="rd-element rd-s-100 rd-l-50 t-center">
                <p>
                    Ictericia o elevación de alanino-aminotransferasas a más de 2,5 veces el valor normal.
                </p>
            </div>
            <div class="separator"></div>
        </div>
    </div>
    `
}