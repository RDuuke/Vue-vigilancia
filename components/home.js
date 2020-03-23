const home = {
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.$root.interna = false
        })
    },
    methods: {
        showHeader : function () {
            this.$root.$data.interna = true
        }
    },
    template: `
    <div>
    <div class="separator"></div>
        <div class="rd-container">
            <div class="rd-element rd-s-100 rd-l-50">
                <p>
                    “La Vigilancia en Salud Pública (VSP) está dirigida a detectar, identificar y recolectar información que permita el análisis
                    y comprensión de las situaciones en salud definidas como prioritarias para el país, las cuales están soportadas
                    en la normatividad vigente, que define las responsabilidades de cada uno de los actores del sistema”
                </p>
                <br />
                <p>
                    Fuente: Lineamientos Nacionales 2020.Vigilancia y Control en Salud Pública.<br>
                    Estrategia basada en casos predefinidos. Instituto Nacional De Salud, Dirección
                    De Vigilancia Y Análisis Del Riesgo En Salud Pública. Bogotá DC – Colombia, Versión 2 - 27 de diciembre de 2019.
                </p>
                <br />
                <p>
                    En Colombia existen unos Lineamientos Nacionales de Vigilancia y Control en 
                    Salud Pública para realizar la vigilancia, análisis, valoración y modificación del riesgo de los Eventos de interés en salud pública. 
                    La estrategia de vigilancia está basada en la notificación rutinaria de los eventos de interés en salud
                    pública como casos predefinidos por las UPGD mediante un sistema de información denominado SIVIGILA.
                </p>
                <br />
                <p>
                    Las Infecciones de Transmisión Sexual consideradas como eventos de interés en salud pública que son objeto de notificación rutinaria en Colombia son:
                    la sífilis gestacional, la sífilis congénita, la hepatitis B, la hepatitis C, y el VIH/SIDA.
                    Para cada uno de los eventos existe un PROTOCOLO de Vigilancia en Salud Pública donde se encuentran, entre otros aspectos, los objetivos, las 
                </p>
                 
            </div>
             <div class="rd-element rd-s-100 rd-l-50">
                <p>
                    definiciones operativas de caso, las fuentes de datos, periodicidad de reportes, flujo de información, responsabilidad por niveles, 
                    plan de análisis, indicadores,acciones individuales, colectivas y de laboratorio.<br>
                </p>
                <br />
                <p>
                    Las UPGD tienen como parte de sus responsabilidades realizar las acciones tendientes a detectar y confirmar los eventos sujetos a vigilancia, 
                    incluyendo la realización de exámenes de laboratorio y demás procedimientos diagnósticos, 
                    y asegurar las intervenciones individuales y familiares del caso, que sean de su competencia.
                </p>
                <br />
                <p>
                    También existe para cada evento la FICHA DE NOTIFICACIÓN INDIVIDUAL, que debe ser diligenciada por la Unidad Primaria Generadora de Datos - UPGD. 
                    En general es el médico tratante o el profesional de la salud que realice el diagnóstico el responsable de realizar la ficha y 
                    generalmente cuenta con el apoyo del personal encargado de la vigilancia epidemiológica en la institución.
                    La notificación de las ITS mencionadas debe realizarse de forma semanal.
                </p>
                <br />
                <p>
                    El Instituto Nacional de Salud-INS ha iniciado un proceso de modernización del software de Sivigila, bajo la denominación Sivigila 4.0, 
                    que utiliza las ventajas de un ambiente Web, tuvo sus primeras pruebas y desarrollos durante 2019, y 
                    se espera su implementación progresiva y escalonada en 2020.
                </p>
            </div>
        </div>
        <div class="separator"></div>
        <div class="rd-container">
            <div class="rd-element rd-s-100 rd-l-1-3 t-center">
                <router-link :to="{ path : '/sifilis' }" @click.native="showHeader">
                    <img src="images/btn1.png" alt="">
                </router-link>
            </div>
            <div class="rd-element rd-s-100 rd-l-1-3 t-center">
                <router-link :to="{ path : '/vih' }" @click.native="showHeader">
                    <img src="images/btn2.png" alt="">
                </router-link>
            </div>
            <div class="rd-element rd-s-100 rd-l-1-3 t-center">
                <router-link :to="{ path : '/hepatitis' }" @click.native="showHeader">
                    <img src="images/btn3.png" alt="">
                </router-link>
            </div>
        </div>
        <div class="separator"></div>
    </div>
    `
}