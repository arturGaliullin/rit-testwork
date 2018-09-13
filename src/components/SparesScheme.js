import React, { Component } from 'react'
import svgPanZoom from 'svg-pan-zoom'

export default class SparesScheme extends Component {
    componentDidMount() {
        const panZoom = svgPanZoom('#car', {
            zoomEnabled: true,
            controlIconsEnabled: false
        })

        this.zoomIn.addEventListener('click', e => {
            e.preventDefault()
            panZoom.zoomIn()
        })

        this.zoomOut.addEventListener('click', e => {
            e.preventDefault()
            panZoom.zoomOut()
        })
    }

    chooseSpare = e => {
        e.persist()

        if(!this.props.loading) {
            e.target.nextElementSibling.attributes['fill'].nodeValue = '#F2C94C'
            this.props.addSpare(e.target.parentNode.attributes['data-name'].nodeValue, e.target.parentNode.className.baseVal)
        }

        this.props.spares.forEach(spare => {
            if(spare && spare.id === e.target.parentNode.className.baseVal && !this.props.loading) {
                this.props.deleteSpare(e.target.parentNode.className.baseVal)
            }
        })
    }

    render() {
        return (
            <div className='scheme'>
                <div className="controls">
                    <div className='controls-button' id='zoom-in' ref={e => this.zoomIn = e}>+</div>
                    <div className='controls-button' id='zoom-out' ref={e => this.zoomOut = e}>-</div>
                </div>
                <svg
                    id='car'
                    width={237}
                    height={331}
                    viewBox='0 0 237 331'
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <desc>Created using Figma</desc>
                    <g transform="translate(-7510 -4816)">
                        <g data-name='Левое переднее колесо' className='left-front-wheel'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#a"
                                transform="translate(7511 4858.89)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#b"
                                transform="translate(7511 4858.89)"
                                fill='#7C7E8F'
                            />
                        </g>
                        <g data-name='Левое переднее крыло' className='left-front-wing'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#c"
                                transform="translate(7531.19 4836.34)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#d"
                                transform="translate(7531.19 4836.34)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Левая подвеска' className='left-suspension'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#e"
                                transform="translate(7517.69 4901.59)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#f"
                                transform="translate(7517.69 4901.59)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Левое заднее колесо' className='left-back-wheel'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#g"
                                transform="translate(7515.75 5050.23)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#h"
                                transform="translate(7515.75 5050.23)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Левая переднея дверь' className='left-front-door'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#i"
                                transform="translate(7531.5 4927.67)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#j"
                                transform="translate(7531.5 4927.67)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Левая задняя дверь' className='left-back-door'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#k"
                                transform="translate(7531.38 4985.91)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#l"
                                transform="translate(7531.38 4985.91)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Левое заднее крыло' className='left-back-wing'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#m"
                                transform="translate(7532.41 5029.6)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#n"
                                transform="translate(7532.41 5029.6)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Левое переднее окно' className='left-front-window'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#o"
                                transform="translate(7574 4937.9)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#p"
                                transform="translate(7574 4937.9)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Левое заднее окно' className='left-back-window'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#q"
                                transform="translate(7575.56 4991.72)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#r"
                                transform="translate(7575.56 4991.72)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Левая переднея ручка' className='left-front-handle'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#s"
                                transform="translate(7561.81 4966.21)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#t"
                                transform="translate(7561.81 4966.21)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Левая задняя ручка' className='left-back-handle'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#u"
                                transform="translate(7561.81 5024.26)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#v"
                                transform="translate(7561.81 5024.26)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Правое переднее колесо' className='right-front-wheel'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#w"
                                transform="translate(7704.5 4858.89)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#x"
                                transform="translate(7704.5 4858.89)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Правое переднее крыло' className='right-front-wing'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#y"
                                transform="translate(7685.92 4836.34)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#z"
                                transform="translate(7685.92 4836.34)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Правая подвеска' className='right-suspension'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#A"
                                transform="translate(7729.38 4901.59)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#B"
                                transform="translate(7729.38 4901.59)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Правое заднее колесо' className='right-back-wheel'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#C"
                                transform="translate(7699.81 5050.23)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#D"
                                transform="translate(7699.81 5050.23)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Правая переднея дверь' className='right-front-door'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#E"
                                transform="translate(7685.62 4927.67)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#F"
                                transform="translate(7685.62 4927.67)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Правая задняя дверь' className='right-back-door'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#G"
                                transform="translate(7685.62 4985.91)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#H"
                                transform="translate(7685.62 4985.91)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Правое заднее крыло' className='right-back-wing'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#I"
                                transform="translate(7684.9 5029.6)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#J"
                                transform="translate(7684.9 5029.6)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Капот' className='bonnet'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#K"
                                transform="translate(7577.5 4836.98)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#L"
                                transform="translate(7577.5 4836.98)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Лобовое стекло' className='front-window'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#M"
                                transform="translate(7580.63 4920.38)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#N"
                                transform="translate(7580.63 4920.38)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Правое переднее окно' className='right-front-window'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#O"
                                transform="translate(7661.27 4937.9)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#P"
                                transform="translate(7661.27 4937.9)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Правое заднее окно' className='right-back-window'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#Q"
                                transform="translate(7660.74 4991.72)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#R"
                                transform="translate(7660.74 4991.72)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Крыша' className='roof'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#S"
                                transform="translate(7593.24 4945.67)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#T"
                                transform="translate(7593.24 4945.67)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Левое зеркало' className='left-mirror'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#U"
                                transform="translate(7564.2 4918.55)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#V"
                                transform="translate(7564.2 4918.55)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Заднее стекло' className='back-window'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#W"
                                transform="translate(7577.72 5042.42)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#X"
                                transform="translate(7577.72 5042.42)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Багажник' className='trunk'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#Y"
                                transform="translate(7575.81 5063.67)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#Z"
                                transform="translate(7575.81 5063.67)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Передний бампер' className='front-bumper'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#aa"
                                transform="translate(7574.15 4817)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#ab"
                                transform="translate(7574.15 4817)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Левые задние фары' className='left-back-headlights'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#ac"
                                transform="translate(7576.5 5093.5)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#ad"
                                transform="translate(7576.5 5093.5)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Задний бампер' className='back-bumper'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#ae"
                                transform="translate(7574.69 5120.02)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#af"
                                transform="translate(7574.69 5120.02)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Правая переднея ручка' className='right-front-handle'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#ag"
                                transform="translate(7690.25 4966.21)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#ah"
                                transform="translate(7690.25 4966.21)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Правая задняя ручка' className='right-back-handle'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#ai"
                                transform="translate(7690.25 5024.26)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#aj"
                                transform="translate(7690.25 5024.26)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Правое зеркало' className='right-mirror'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#ak"
                                transform="translate(7670.6 4918.55)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#al"
                                transform="translate(7670.6 4918.55)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Правые задние фары' className='right-back-headlights'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#am"
                                transform="translate(7650.12 5094.18)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#an"
                                transform="translate(7650.12 5094.18)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Левые передние фары' className='left-front-headlights'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#ao"
                                transform="translate(7579.5 4846.35)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#ap"
                                transform="translate(7579.5 4846.35)"
                                fill="#7C7E8F"
                            />
                        </g>
                        <g data-name='Правые передние фары' className='right-front-headlights'>
                            <use
                                onClick={this.chooseSpare}
                                xlinkHref="#aq"
                                transform="translate(7647.81 4846.35)"
                                fill="#FFF"
                            />
                            <use
                                xlinkHref="#ar"
                                transform="translate(7647.81 4846.35)"
                                fill="#7C7E8F"
                            />
                        </g>
                    </g>
                    <defs>
                        <path
                            id="a"
                            d="M20.75 41.453c11.46 0 20.75-9.28 20.75-20.727C41.5 9.28 32.21 0 20.75 0S0 9.28 0 20.726c0 11.447 9.29 20.727 20.75 20.727z"
                        />
                        <path
                            id="b"
                            d="M41 20.726c0 11.17-9.066 20.227-20.25 20.227v1C32.486 41.953 42 32.45 42 20.726h-1zM20.75 40.953C9.566 40.953.5 31.897.5 20.726h-1c0 11.724 9.514 21.227 21.25 21.227v-1zM.5 20.726C.5 9.556 9.566.5 20.75.5v-1C9.014-.5-.5 9.003-.5 20.726h1zM20.75.5C31.934.5 41 9.556 41 20.726h1C42 9.003 32.486-.5 20.75-.5v1z"
                        />
                        <path
                            id="c"
                            d="M31.813 12.684C30.5 6.815 23.313 2.882 19 1.322 15.812.135 10.125-.052 5.812.01A5.905 5.905 0 0 0 0 5.94l.063 12.111h.312c13.75 0 24.875 11.113 24.875 24.847 0 13.672-11.125 24.784-24.813 24.784l.126 15.795c0 1.81 1.437 3.371 3.25 3.496l32.812 2.31a3.054 3.054 0 0 0 3.25-3.371c-1.313-14.234-6.438-65.925-8.063-73.23z"
                        />
                        <path
                            id="d"
                            d="M31.813 12.684l.976-.218-.977.218zM19 1.322l-.349.937.009.003.34-.94zM5.812.01l-.014-1h-.005l.02 1zM0 5.94h-1v.005l1-.005zm.063 12.111l-1 .006.005.994h.995v-1zm.374 49.631v-1H-.57l.008 1.008 1-.008zm.126 15.795h1v-.008l-1 .008zm3.25 3.496l.07-.998H3.88l-.068.998zm32.812 2.31l-.07.997h.004l.066-.997zm3.25-3.371l-.996.091v.005l.996-.096zm-7.087-73.448c-.73-3.263-3.064-5.895-5.65-7.872-2.585-1.97-5.596-3.414-7.798-4.212l-.68 1.88c2.11.763 4.85 2.067 7.264 3.92 2.414 1.847 4.33 4.115 4.913 6.72l1.951-.436zM19.348.385C15.959-.879 10.08-1.052 5.799-.99l.029 2c4.343-.063 9.84.138 12.824 1.248L19.35.384zM5.794-.99A6.905 6.905 0 0 0-1 5.94h2a4.905 4.905 0 0 1 4.832-4.93l-.039-2zM-1 5.946l.063 12.112 2-.01L1 5.935l-2 .01zM.063 19.052h.312v-2H.063v2zm.312 0c13.199 0 23.875 10.666 23.875 23.847h2c0-14.288-11.574-25.847-25.875-25.847v2zM24.25 42.9c0 13.119-10.676 23.784-23.813 23.784v2c14.24 0 25.813-11.559 25.813-25.784h-2zM-.562 67.691l.125 15.795 2-.016-.126-15.794-2 .015zm.125 15.787c0 2.33 1.838 4.332 4.18 4.494l.138-1.996c-1.282-.088-2.318-1.207-2.318-2.498h-2zm4.18 4.494l32.812 2.31.14-1.996-32.812-2.31-.14 1.996zm32.816 2.31a4.054 4.054 0 0 0 4.311-4.466l-1.99.193a2.054 2.054 0 0 1-2.189 2.277l-.132 1.996zm4.312-4.461c-.657-7.12-2.267-23.608-3.916-39.227-1.644-15.574-3.338-30.404-4.166-34.128l-1.953.435c.797 3.58 2.478 18.248 4.13 33.904 1.648 15.61 3.257 32.085 3.913 39.2l1.992-.184z"
                        />
                        <path
                            id="e"
                            d="M3.75.127L8 1.5c1.188.375 2 1.499 2 2.747v139.466c0 1.311-.938 2.497-2.188 2.747l-3.75.874a2.827 2.827 0 0 1-3.5-2.747L0 2.874C.062.938 1.938-.435 3.75.127z"
                        />
                        <path
                            id="f"
                            d="M3.75.127l.154-.476-.006-.002-.148.478zM8 1.5l-.154.476.004.001L8 1.5zm-.188 144.96l-.097-.49-.008.001-.008.002.114.487zm-3.75.874l-.113-.487-.004.001.118.486zm-3.5-2.747h.5v-.002l-.5.002zM0 2.874l-.5-.016v.018l.5-.002zM3.596.603l4.25 1.373.308-.951L3.904-.35l-.308.952zM7.85 1.977a2.387 2.387 0 0 1 1.65 2.27h1c0-1.463-.95-2.782-2.35-3.224l-.3.954zm1.65 2.27v139.466h1V4.247h-1zm0 139.466c0 1.086-.782 2.056-1.785 2.257l.195.98c1.497-.299 2.59-1.701 2.59-3.237h-1zm-1.801 2.26l-3.75.874.227.974 3.75-.874-.227-.974zm-3.754.875a2.327 2.327 0 0 1-2.882-2.261h-1a3.327 3.327 0 0 0 4.117 3.233l-.235-.972zm-2.882-2.263L.5 2.872l-1 .004.563 141.713 1-.004zM.5 2.89C.552 1.27 2.119.145 3.602.604l.296-.955C1.756-1.015-.427.607-.5 2.858l1 .032z"
                        />
                        <path
                            id="g"
                            d="M20.75 41.453c11.46 0 20.75-9.28 20.75-20.727C41.5 9.28 32.21 0 20.75 0S0 9.28 0 20.726c0 11.447 9.29 20.727 20.75 20.727z"
                        />
                        <path
                            id="h"
                            d="M41 20.726c0 11.17-9.066 20.227-20.25 20.227v1C32.486 41.953 42 32.45 42 20.726h-1zM20.75 40.953C9.566 40.953.5 31.897.5 20.726h-1c0 11.724 9.514 21.227 21.25 21.227v-1zM.5 20.726C.5 9.556 9.566.5 20.75.5v-1C9.014-.5-.5 9.003-.5 20.726h1zM20.75.5C31.934.5 41 9.556 41 20.726h1C42 9.003 32.486-.5 20.75-.5v1z"
                        />
                        <path
                            id="i"
                            d="M4.313.013L34.75 1.948c2.563.188 4.625 2.31 4.625 4.87l.563 48.757c0 1.81-1.563 3.246-3.376 2.996l-31.25-3.933A6.014 6.014 0 0 1 0 48.645V4.008C0 1.698 1.938-.174 4.313.013z"
                        />
                        <path
                            id="j"
                            d="M4.313.013l-.08.997h.016l.064-.997zM34.75 1.948l.073-.997h-.01l-.063.997zm4.625 4.87h-1v.011l1-.011zm.563 48.757h1v-.012l-1 .012zm-3.376 2.996l.137-.99-.012-.002-.124.992zm-31.25-3.933l.125-.992h-.003l-.122.992zM0 4.008h1-1zm4.25-2.997l30.437 1.935.126-1.996L4.376-.985 4.249 1.01zm30.427 1.935c2.066.15 3.698 1.862 3.698 3.872h2c0-3.11-2.493-5.644-5.552-5.867l-.146 1.995zm3.698 3.883l.563 48.757 2-.023-.563-48.757-2 .023zm.563 48.746c0 1.233-1.057 2.168-2.239 2.005l-.273 1.982c2.443.336 4.511-1.6 4.511-3.987h-2zm-2.25 2.004l-31.25-3.933-.25 1.984 31.25 3.933.25-1.984zM5.433 53.646A5.014 5.014 0 0 1 1 48.645h-2a7.014 7.014 0 0 0 6.191 6.986l.243-1.985zM1 48.645V4.008h-2v44.637h2zM1 4.008A2.99 2.99 0 0 1 4.234 1.01L4.39-.984C1.42-1.218-1 1.131-1 4.008h2z"
                        />
                        <path
                            id="k"
                            d="M3.875.026l32.75 4.12c2 .25 3.438 1.936 3.438 3.934v49.506c0 1.748-1.876 2.934-3.438 2.122L26 54.402c-1.813-.937-3.375-2.373-4.375-4.183L20 47.285a9.806 9.806 0 0 0-5.5-4.495l-7.25-2.247C2.937 39.232 0 35.236 0 30.74V3.397c.125-2.06 1.875-3.62 3.875-3.37z"
                        />
                        <path
                            id="l"
                            d="M3.875.026l.062-.496-.062.496zm32.75 4.12l-.062.497.062-.496zm0 55.562l.23-.444-.007-.003-.223.447zM26 54.402l-.23.444.007.003.223-.447zm-4.375-4.183l.438-.242-.438.242zM20 47.285l.437-.242v-.002l-.437.244zm-5.5-4.495l.154-.476-.006-.002-.148.478zm-7.25-2.247l.148-.478h-.003l-.145.478zM0 3.397l-.5-.03v.03H0zM3.813.522l32.75 4.12.124-.992L3.937-.47l-.124.992zm32.75 4.12c1.742.218 3 1.684 3 3.438h1c0-2.243-1.618-4.148-3.876-4.43l-.124.993zm3 3.438v49.506h1V8.08h-1zm0 49.506c0 1.387-1.49 2.31-2.708 1.678l-.46.888c1.908.991 4.167-.458 4.167-2.566h-1zm-2.715 1.675l-10.625-5.306-.446.894 10.625 5.307.446-.895zM26.23 53.958c-1.756-.902-3.212-2.237-4.167-3.98l-.876.483c1.045 1.878 2.714 3.414 4.583 4.385l.46-.888zm-4.168-3.981l-1.625-2.934-.874.484 1.625 2.934.874-.484zm-1.626-2.936c-1.24-2.2-3.385-3.941-5.782-4.727l-.308.952a9.103 9.103 0 0 1 5.218 4.263l.872-.488zm-5.788-4.728l-7.25-2.248-.296.955 7.25 2.248.296-.956zm-7.253-2.249C3.295 38.818.5 35.017.5 30.741h-1c0 4.714 3.08 8.904 7.605 10.28l.29-.957zM.5 30.741V3.397h-1v27.344h1zm0-27.313C.607 1.629 2.124.312 3.812.522l.124-.992C1.625-.759-.358 1.045-.499 3.367l.998.06z"
                        />
                        <path
                            id="m"
                            d="M39.718 64.585l-.562-38.769c0-1.373-.75-2.684-2-3.308l-16.25-9.115c-1.25-.687-2.25-1.686-3-2.81l-2.75-4.182c-1-1.498-2.438-2.684-4.188-3.309L2.406.096C1.093-.341-.22.782.03 2.156l2.75 14.171h1.062c14.125 0 25.563 11.425 25.563 25.534 0 11.112-7.125 20.539-17.063 24.097l2.438 12.673c.437 2.373 2.937 3.808 5.25 2.997 3.187-1.186 7.75-2.872 12.312-4.682 8.375-3.434 7.375-12.361 7.375-12.361z"
                        />
                        <path
                            id="n"
                            d="M39.718 64.585l-.5.007v.024l.003.024.497-.055zm-.562-38.769h-.5v.008l.5-.008zm-2-3.308l-.245.436.01.006.011.005.224-.447zm-16.25-9.115l.245-.436-.004-.002-.241.438zm-3-2.81l-.418.275.002.003.416-.277zm-2.75-4.182l.418-.275-.002-.003-.416.278zm-4.188-3.309l.168-.47-.002-.002-.166.472zM2.406.096l.165-.472-.007-.003-.158.475zM.03 2.156l-.492.09.001.005.49-.095zm2.75 14.171l-.491.095.079.405h.412v-.5zm9.562 49.631l-.168-.47-.404.144.081.42.491-.094zm2.438 12.673l.492-.09-.001-.004-.491.094zm5.25 2.997l.166.472.008-.004-.174-.468zm12.312-4.682l.185.464.005-.002-.19-.462zm7.875-12.368l-.562-38.769-1 .015.562 38.768 1-.014zm-.562-38.762c0-1.55-.846-3.04-2.277-3.756l-.447.895c1.07.534 1.724 1.664 1.724 2.861h1zM37.4 22.072l-16.25-9.115-.489.872 16.25 9.115.49-.872zm-16.253-9.117c-1.191-.649-2.105-1.565-2.825-2.649l-.832.555c.78 1.164 1.866 2.245 3.175 2.97l.482-.876zm-2.823-2.646l-2.75-4.183-.836.55 2.75 4.182.836-.549zm-2.752-4.186c-1.045-1.555-2.607-2.841-4.436-3.502l-.336.942c1.671.588 2.985 1.675 3.94 3.116l.832-.556zM11.134 2.62L2.57-.376l-.33.944 8.562 2.996.33-.944zM2.563-.379C.894-.935-.78.495-.461 2.245l.984-.179A1.326 1.326 0 0 1 2.248.57l.316-.949zM-.46 2.251l2.75 14.171.982-.19L.522 2.061l-.982.19zm3.24 14.576h1.063v-1H2.781v1zm1.063 0c13.85 0 25.063 11.201 25.063 25.034h1c0-14.386-11.662-26.034-26.063-26.034v1zm25.063 25.034c0 10.892-6.984 20.136-16.731 23.626l.337.942c10.127-3.627 17.394-13.236 17.394-24.568h-1zM11.852 66.053l2.438 12.673.982-.19-2.438-12.672-.982.189zm2.437 12.669c.494 2.68 3.311 4.289 5.907 3.378l-.33-.944c-2.03.712-4.213-.551-4.593-2.616l-.984.182zm5.916 3.374c3.187-1.186 7.755-2.873 12.323-4.686l-.37-.93c-4.556 1.81-9.114 3.493-12.302 4.68l.35.936zm12.328-4.688c4.359-1.787 6.288-5.018 7.117-7.787a14.92 14.92 0 0 0 .593-3.567 13.227 13.227 0 0 0-.017-1.408 6.822 6.822 0 0 0-.007-.084l-.003-.023a.237.237 0 0 0 0-.009l-.498.055-.497.055v.003l.002.015.006.067a11.764 11.764 0 0 1 .015 1.287 13.46 13.46 0 0 1-.551 3.322c-.765 2.553-2.523 5.502-6.54 7.149l.38.925z"
                        />
                        <path
                            id="o"
                            d="M0 1.02L.125.332c2.438-1.062 4 .562 5.25 2.809 0 0 5.688 6.992 10.688 21.538 5 14.546 5.625 24.16 5.625 24.16.375 1.56-.313 2.996-1.875 2.747L4.25 49.152c-1.75-.25-3-1.748-3.063-3.496L0 1.02z"
                        />
                        <path
                            id="p"
                            d="M0 1.02L-.492.93l-.01.05.002.053.5-.014zM.125.332l-.2-.459-.244.107-.048.262.492.09zm5.25 2.809l-.437.243.021.038.028.035.388-.316zM21.688 48.84l-.5.032.003.043.01.042.486-.117zm-1.875 2.747l.078-.494h-.001l-.078.494zM4.25 49.152l.077-.494h-.006l-.071.494zm-3.063-3.496l-.5.013v.005l.5-.018zM.493 1.11L.617.422-.367.243-.492.93l.984.179zM.325.791C1.395.325 2.217.457 2.923.916c.745.485 1.4 1.363 2.015 2.47l.874-.487C5.177 1.758 4.425.7 3.468.078 2.47-.572 1.292-.721-.075-.126l.4.917zm5.05 2.351l-.388.315a.891.891 0 0 1 .014.017l.045.058c.042.054.103.132.184.24.163.217.399.539.7.974a55.446 55.446 0 0 1 2.48 3.96c2.04 3.552 4.691 8.894 7.18 16.136l.945-.325c-2.511-7.303-5.203-12.73-7.258-16.31a56.905 56.905 0 0 0-2.524-4.03 31.882 31.882 0 0 0-.92-1.261 9.26 9.26 0 0 0-.065-.083l-.003-.004-.002-.002-.388.315zm10.215 21.7c2.492 7.25 3.89 13.253 4.668 17.464.39 2.1.621 3.741.757 4.865a44.888 44.888 0 0 1 .172 1.677l.001.019v.005l.5-.032.498-.033v-.002-.006l-.002-.023a15.135 15.135 0 0 0-.035-.424 46.588 46.588 0 0 0-.14-1.302 80.782 80.782 0 0 0-.767-4.926c-.784-4.233-2.199-10.31-4.707-17.607l-.945.326zM21.2 48.957c.167.692.081 1.295-.15 1.674-.21.342-.568.557-1.16.462l-.157.988c.97.155 1.738-.224 2.169-.928.409-.666.48-1.561.27-2.43l-.972.234zm-1.311 2.136L4.327 48.658l-.154.988 15.562 2.435.155-.988zM4.32 48.657c-1.493-.213-2.578-1.495-2.633-3.019l-1 .036c.071 1.972 1.486 3.687 3.492 3.973l.142-.99zm-2.633-3.014L.5 1.006l-1 .027L.688 45.669l1-.026z"
                        />
                        <path
                            id="q"
                            d="M0 2.207C0 .896 1.188-.166 2.5.022l15 2.06c2 .312 3.375 2.06 3.25 3.995-.563 8.178-2.563 28.592-7.5 36.209-3.5 5.369-7 8.99-9.438 11.05-1.25 1.123-3.187.25-3.25-1.436L0 2.207z"
                        />
                        <path
                            id="r"
                            d="M0 2.207h-.5v.005l.5-.005zM2.5.022l-.07.494h.002L2.5.023zm15 2.06l.077-.494-.009-.002-.068.496zm3.25 3.995l.499.034V6.11l-.499-.032zm-7.5 36.209l.419.273v-.001l-.419-.272zm-9.438 11.05l-.322-.382-.006.005-.006.005.334.372zM.563 51.9l-.5.006v.012l.5-.018zM.5 2.207c0-1.015.925-1.834 1.93-1.69l.14-.99C.95-.705-.5.599-.5 2.207h1zM2.432.517l15 2.06.136-.99-15-2.06-.136.99zm14.99 2.059c1.747.272 2.937 1.794 2.829 3.469l.998.064c.142-2.195-1.418-4.17-3.672-4.521l-.154.988zm2.83 3.467c-.282 4.084-.92 11.208-2.104 18.266-1.19 7.086-2.912 13.995-5.318 17.705l.84.544c2.532-3.907 4.278-11.013 5.464-18.083 1.19-7.097 1.833-14.27 2.115-18.364l-.998-.068zm-7.42 35.97c-3.473 5.33-6.924 8.897-9.342 10.94l.645.765c2.457-2.077 6.006-5.752 9.534-11.16l-.838-.545zm-9.354 10.95c-.913.822-2.368.209-2.416-1.082l-1 .037C.14 54 2.56 55.134 4.148 53.708l-.669-.744zm-2.416-1.069L.5 2.201l-1 .011.563 49.694 1-.012z"
                        />
                        <path
                            id="s"
                            d="M2.5 12.36A2.506 2.506 0 0 1 0 9.865V2.497A2.506 2.506 0 0 1 2.5 0C3.875 0 5 1.124 5 2.497v7.304c0 1.374-1.125 2.56-2.5 2.56z"
                        />
                        <path
                            id="t"
                            d="M2.5 11.86c-1.1 0-2-.9-2-1.996h-1c0 1.65 1.35 2.997 3 2.997v-1zm-2-1.996V2.497h-1v7.367h1zm0-7.367C.5 1.4 1.4.5 2.5.5v-1C.85-.5-.5.847-.5 2.497h1zM2.5.5c1.1 0 2 .9 2 1.997h1C5.5.847 4.15-.5 2.5-.5v1zm2 1.997v7.304h1V2.497h-1zm0 7.304c0 1.113-.916 2.06-2 2.06v1c1.666 0 3-1.426 3-3.06h-1z"
                        />
                        <path
                            id="u"
                            d="M2.5 12.36A2.506 2.506 0 0 1 0 9.865V2.497A2.506 2.506 0 0 1 2.5 0C3.875 0 5 1.124 5 2.497v7.304c0 1.374-1.125 2.56-2.5 2.56z"
                        />
                        <path
                            id="v"
                            d="M2.5 11.86c-1.1 0-2-.9-2-1.996h-1c0 1.65 1.35 2.997 3 2.997v-1zm-2-1.996V2.497h-1v7.367h1zm0-7.367C.5 1.4 1.4.5 2.5.5v-1C.85-.5-.5.847-.5 2.497h1zM2.5.5c1.1 0 2 .9 2 1.997h1C5.5.847 4.15-.5 2.5-.5v1zm2 1.997v7.304h1V2.497h-1zm0 7.304c0 1.113-.916 2.06-2 2.06v1c1.666 0 3-1.426 3-3.06h-1z"
                        />
                        <path
                            id="w"
                            d="M20.75 41.453c11.46 0 20.75-9.28 20.75-20.727C41.5 9.28 32.21 0 20.75 0S0 9.28 0 20.726c0 11.447 9.29 20.727 20.75 20.727z"
                        />
                        <path
                            id="x"
                            d="M41 20.726c0 11.17-9.066 20.227-20.25 20.227v1C32.486 41.953 42 32.45 42 20.726h-1zM20.75 40.953C9.566 40.953.5 31.897.5 20.726h-1c0 11.724 9.514 21.227 21.25 21.227v-1zM.5 20.726C.5 9.556 9.566.5 20.75.5v-1C9.014-.5-.5 9.003-.5 20.726h1zM20.75.5C31.934.5 41 9.556 41 20.726h1C42 9.003 32.486-.5 20.75-.5v1z"
                        />
                        <path
                            id="y"
                            d="M8.078 12.684c1.312-5.869 8.5-9.802 12.812-11.362C24.078.135 29.765-.052 34.078.01a5.905 5.905 0 0 1 5.812 5.93l-.062 12.111h-.313c-13.75 0-24.875 11.113-24.875 24.847 0 13.672 11.125 24.784 24.813 24.784l-.125 15.795c0 1.81-1.438 3.371-3.25 3.496l-32.813 2.31a3.054 3.054 0 0 1-3.25-3.371c1.375-14.234 6.438-65.925 8.063-73.23z"
                        />
                        <path
                            id="z"
                            d="M8.078 12.684l-.488-.11v.001l.488.109zM20.89 1.322l.17.47.005-.002-.175-.468zM34.078.01l.01-.5h-.003l-.007.5zm5.812 5.93l.5.003V5.94h-.5zm-.062 12.111v.5h.497l.003-.497-.5-.003zm-.375 49.631l.5.004.004-.504h-.504v.5zm-.125 15.795l-.5-.004v.004h.5zm-3.25 3.496l-.035-.499.035.499zm-32.813 2.31l.034.499H3.3l-.035-.5zm-3.25-3.371l.498.048-.498-.048zm8.55-73.12c.62-2.77 2.64-5.13 5.098-7.009 2.457-1.882 5.264-3.22 7.397-3.992l-.34-.94c-2.179.789-5.122 2.197-7.665 4.138-2.543 1.945-4.772 4.486-5.465 7.585l.976.218zm12.5-11.003C24.15.642 29.743.448 34.07.51l.014-1c-4.297-.062-10.08.119-13.37 1.343l.35.937zM34.068.51a5.405 5.405 0 0 1 5.322 5.431h1a6.405 6.405 0 0 0-6.303-6.43l-.019 1zM39.39 5.94l-.062 12.11 1 .006.062-12.111-1-.005zm.438 11.613h-.313v1h.313v-1zm-.313 0C25.49 17.552 14.14 28.889 14.14 42.9h1c0-13.457 10.9-24.347 24.375-24.347v-1zM14.14 42.9c0 13.949 11.35 25.284 25.313 25.284v-1C26.04 67.183 15.14 56.294 15.14 42.9h-1zm24.813 24.78l-.125 15.795 1 .008.125-15.795-1-.007zm-.125 15.799c0 1.55-1.237 2.89-2.785 2.997l.07.998c2.077-.143 3.715-1.925 3.715-3.995h-1zm-2.785 2.997L3.23 88.785l.07.998 32.813-2.31-.07-.998zm-32.81 2.31a2.554 2.554 0 0 1-2.72-2.824l-.995-.097a3.554 3.554 0 0 0 3.78 3.919l-.066-.998zM.512 85.96C1.2 78.844 2.81 62.365 4.45 46.75c1.643-15.635 3.311-30.343 4.116-33.959l-.976-.217c-.82 3.688-2.496 18.478-4.134 34.072A5075.41 5075.41 0 0 0-.482 85.865l.995.096z"
                        />
                        <path
                            id="A"
                            d="M6.25.127L2 1.5a2.887 2.887 0 0 0-2 2.747v139.466c0 1.311.937 2.497 2.188 2.747l3.75.874a2.827 2.827 0 0 0 3.5-2.747L10 2.874C9.937.938 8.062-.435 6.25.127z"
                        />
                        <path
                            id="B"
                            d="M6.25.127l-.148-.478-.006.002.154.476zM2 1.5l.15.477h.004L2 1.5zm.188 144.96l.113-.487-.008-.002-.008-.001-.098.49zm3.75.874l.117-.486-.004-.001-.114.487zm3.5-2.747l-.5-.002v.002h.5zM10 2.874l.5.002V2.858l-.5.016zM6.096-.35l-4.25 1.374.308.951L6.404.603 6.096-.35zM1.85 1.023A3.387 3.387 0 0 0-.5 4.247h1c0-1.034.674-1.962 1.65-2.27l-.3-.954zM-.5 4.247v139.466h1V4.247h-1zm0 139.466c0 1.536 1.093 2.938 2.59 3.237l.195-.98C1.282 145.769.5 144.799.5 143.713h-1zm2.574 3.234l3.75.874.227-.974-3.75-.874-.227.974zm3.746.873a3.327 3.327 0 0 0 4.117-3.233h-1a2.327 2.327 0 0 1-2.882 2.261l-.235.972zm4.117-3.231L10.5 2.876l-1-.004-.563 141.713 1 .004zM10.5 2.858C10.427.607 8.244-1.015 6.102-.351l.296.955C7.881.144 9.448 1.27 9.5 2.89l1-.032z"
                        />
                        <path
                            id="C"
                            d="M20.75 41.453c11.46 0 20.75-9.28 20.75-20.727C41.5 9.28 32.21 0 20.75 0S0 9.28 0 20.726c0 11.447 9.29 20.727 20.75 20.727z"
                        />
                        <path
                            id="D"
                            d="M41 20.726c0 11.17-9.066 20.227-20.25 20.227v1C32.486 41.953 42 32.45 42 20.726h-1zM20.75 40.953C9.566 40.953.5 31.897.5 20.726h-1c0 11.724 9.514 21.227 21.25 21.227v-1zM.5 20.726C.5 9.556 9.566.5 20.75.5v-1C9.014-.5-.5 9.003-.5 20.726h1zM20.75.5C31.934.5 41 9.556 41 20.726h1C42 9.003 32.486-.5 20.75-.5v1z"
                        />
                        <path
                            id="E"
                            d="M35.625.013L5.188 1.948C2.625 2.136.562 4.258.562 6.818L0 55.575c0 1.81 1.562 3.246 3.375 2.996l31.25-3.933a6.014 6.014 0 0 0 5.313-5.993V4.008c0-2.31-1.938-4.182-4.313-3.995z"
                        />
                        <path
                            id="F"
                            d="M35.625.013l.032.499h.007l-.039-.5zM5.188 1.948l-.032-.499H5.15l.037.5zM.562 6.818l.5.005v-.005h-.5zM0 55.575l-.5-.006v.006H0zm3.375 2.996l-.062-.496h-.006l.068.496zm31.25-3.933l-.06-.496h-.002l.062.496zm.968-55.124L5.156 1.449l.063.998L35.657.512l-.064-.998zM5.151 1.45C2.341 1.655.062 3.983.062 6.818h1c0-2.285 1.848-4.202 4.162-4.371L5.15 1.45zM.063 6.812L-.5 55.569l1 .011.562-48.757-1-.011zM-.5 55.575c0 2.098 1.816 3.785 3.943 3.491l-.136-.99C1.809 58.282.5 57.096.5 55.575h-1zm3.937 3.492l31.25-3.933-.124-.992-31.25 3.933.124.992zm31.249-3.932a6.514 6.514 0 0 0 5.752-6.49h-1a5.514 5.514 0 0 1-4.874 5.497l.122.992zm5.752-6.49V4.008h-1v44.637h1zm0-44.637c0-2.593-2.179-4.704-4.852-4.494l.078.997a3.49 3.49 0 0 1 3.773 3.497h1z"
                        />
                        <path
                            id="G"
                            d="M36.188.026l-32.75 4.12C1.438 4.397 0 6.083 0 8.08v49.506c0 1.748 1.875 2.934 3.438 2.122l10.624-5.306c1.813-.937 3.376-2.373 4.376-4.183l1.625-2.934a9.806 9.806 0 0 1 5.5-4.495l7.25-2.247c4.312-1.311 7.25-5.307 7.25-9.802V3.397c-.126-2.06-1.876-3.62-3.876-3.37z"
                        />
                        <path
                            id="H"
                            d="M36.188.026l-.063-.496.063.496zm-32.75 4.12l.061.497-.062-.496zm0 55.562l-.224-.447-.007.003.23.444zm10.624-5.306l.224.447.006-.003-.23-.444zm4.376-4.183L18 49.977l.438.242zm1.625-2.934l-.437-.244v.002l.436.242zm5.5-4.495l-.149-.478-.006.002.154.476zm7.25-2.247l-.146-.479-.003.001.148.478zm7.25-37.146h.5v-.015l-.001-.015-.5.03zM36.124-.47L3.375 3.65l.125.993L36.25.523l-.125-.993zM3.375 3.65C1.119 3.932-.5 5.837-.5 8.08h1c0-1.754 1.257-3.22 3-3.437l-.124-.993zM-.5 8.08v49.506h1V8.08h-1zm0 49.506c0 2.108 2.26 3.557 4.168 2.566l-.461-.888C1.99 59.898.5 58.974.5 57.587h-1zm4.16 2.57l10.626-5.307-.447-.894L3.214 59.26l.447.895zm10.632-5.31c1.87-.97 3.539-2.507 4.583-4.385L18 49.977c-.956 1.744-2.412 3.079-4.167 3.98l.459.889zm4.583-4.385l1.625-2.934-.875-.484L18 49.977l.875.484zm1.624-2.932a9.103 9.103 0 0 1 5.218-4.263l-.309-.952c-2.397.786-4.54 2.526-5.782 4.727l.873.488zm5.212-4.261l7.25-2.248-.297-.955-7.25 2.248.296.955zm7.247-2.247c4.525-1.376 7.605-5.566 7.605-10.28h-1c0 4.276-2.796 8.077-6.896 9.323l.29.957zm7.605-10.28V3.397h-1v27.344h1zm-.001-27.374C40.42 1.045 38.438-.759 36.126-.47l.123.992c1.688-.21 3.205 1.107 3.314 2.906l.999-.06z"
                        />
                        <path
                            id="I"
                            d="M.038 64.585L.6 25.816c0-1.373.75-2.684 2-3.308l16.188-9.115c1.25-.687 2.25-1.686 3-2.81l2.75-4.182c1-1.498 2.437-2.684 4.187-3.309L37.288.096c1.312-.437 2.625.686 2.375 2.06l-2.75 14.171H35.85c-14.125 0-25.562 11.425-25.562 25.534 0 11.112 7.125 20.539 17.062 24.097l-2.437 12.673c-.438 2.373-2.938 3.808-5.25 2.997-3.188-1.186-7.75-2.872-12.313-4.682C-.962 73.512.038 64.585.038 64.585z"
                        />
                        <path
                            id="J"
                            d="M.038 64.585l.496.055.003-.024v-.024l-.5-.007zM.6 25.816l.5.008v-.008H.6zm2-3.308l.224.447.01-.005.011-.007-.245-.435zm16.188-9.115l-.241-.438-.005.002.246.436zm3-2.81l.415.278.002-.003-.417-.274zm2.75-4.182l-.416-.278-.002.003.418.275zm4.187-3.309l-.165-.472-.003.001.168.471zM37.288.096L37.13-.38l-.008.003.166.472zm2.375 2.06l.49.095.002-.006-.492-.09zm-2.75 14.171v.5h.412l.078-.405-.49-.095zM27.35 65.958l.491.095.081-.421-.403-.145-.169.471zm-2.437 12.673l-.491-.094-.001.003.492.091zm-5.25 2.997l-.175.469.009.003.166-.472zM7.35 76.946l-.19.462.006.002.184-.464zM.538 64.592L1.1 25.824l-1-.015-.562 38.768 1 .015zM1.1 25.816c0-1.197.655-2.327 1.724-2.861l-.447-.895C.946 22.775.1 24.267.1 25.816h1zm1.745-2.873l16.188-9.114-.49-.872-16.188 9.115.49.871zm16.183-9.112c1.31-.725 2.396-1.806 3.175-2.97l-.831-.555c-.72 1.084-1.634 2-2.825 2.649l.481.876zm3.177-2.973l2.75-4.182-.835-.55-2.75 4.183.835.55zm2.748-4.18c.956-1.44 2.269-2.527 3.94-3.115l-.336-.942c-1.829.66-3.39 1.947-4.435 3.502l.831.556zm3.937-3.114L37.453.568l-.33-.944L28.56 2.62l.33.944zM37.446.57c.955-.318 1.906.5 1.725 1.496l.983.18C40.474.494 38.8-.935 37.13-.38l.316.95zm1.726 1.49l-2.75 14.172.982.19 2.75-14.17-.982-.191zm-2.26 13.767H35.85v1h1.063v-1zm-1.062 0c-14.4 0-26.062 11.648-26.062 26.034h1c0-13.833 11.213-25.034 25.062-25.034v-1zM9.788 41.861c0 11.332 7.266 20.942 17.394 24.568l.337-.942c-9.748-3.49-16.731-12.734-16.731-23.626h-1zm17.071 24.003l-2.437 12.673.982.189 2.437-12.673-.982-.19zM24.421 78.54c-.38 2.065-2.564 3.328-4.593 2.616l-.331.944c2.596.91 5.413-.698 5.907-3.378l-.983-.181zm-4.584 2.62c-3.188-1.187-7.745-2.87-12.302-4.68l-.37.93c4.569 1.813 9.136 3.5 12.323 4.686l.349-.937zM7.541 76.483c-3.984-1.646-5.728-4.595-6.485-7.149a13.547 13.547 0 0 1-.546-4.338 7.498 7.498 0 0 1 .024-.354v-.003l-.496-.055a45.247 45.247 0 0 0-.497-.055v.003l-.001.006a3.737 3.737 0 0 0-.01.107 13.32 13.32 0 0 0-.018 1.407c.037.908.18 2.193.585 3.567.821 2.768 2.734 6 7.062 7.788l.382-.924z"
                        />
                        <path
                            id="K"
                            d="M100.314 17.917c-.063-3.184-1.938-6.056-4.813-7.491C87.751 6.68 71.126 0 51.064 0 31 0 14.376 6.68 6.626 10.426c-2.875 1.373-4.75 4.307-4.812 7.491L0 84.53C-.06 86.963 2.44 88.71 4.69 87.775 12.626 84.466 29.75 78.66 51 78.66c21.25 0 38.438 5.806 46.375 9.053 2.25.936 4.75-.812 4.688-3.247l-1.75-66.549z"
                        />
                        <path
                            id="L"
                            d="M100.314 17.917l-.5.01v.003l.5-.013zm-4.813-7.491l.224-.448-.006-.003-.218.45zm-88.875 0l.216.45h.002l-.218-.45zm-4.812 7.491l.5.014v-.004l-.5-.01zM0 84.53l-.5-.014.5.014zm4.688 3.246l.192.462-.192-.462zm92.687-.063l.192-.461-.003-.001-.189.463zm4.688-3.246l.499-.013-.499.013zm-1.25-66.559c-.067-3.377-2.055-6.413-5.09-7.929l-.446.895c2.715 1.356 4.477 4.063 4.536 7.054l1-.02zm-5.095-7.932C87.934 6.213 71.23-.5 51.064-.5v1c19.957 0 36.505 6.647 44.22 10.376l.435-.9zM51.064-.5C30.896-.5 14.194 6.213 6.409 9.975l.435.9C14.559 7.148 31.106.5 51.064.5v-1zM6.41 9.974c-3.047 1.456-5.031 4.562-5.097 7.933l1 .02c.058-2.996 1.825-5.759 4.528-7.05l-.431-.903zm-5.097 7.93L-.5 84.514l1 .027 1.812-66.611-1-.027zM-.5 84.516c-.071 2.789 2.788 4.8 5.38 3.72l-.384-.923c-1.909.795-4.05-.691-3.996-2.772l-1-.025zm5.38 3.72c7.9-3.292 24.957-9.076 46.12-9.076v-1c-21.337 0-38.53 5.829-46.505 9.153l.385.924zm46.12-9.076c21.163 0 38.284 5.784 46.186 9.015l.378-.925c-7.973-3.261-25.227-9.09-46.564-9.09v1zm46.183 9.014c2.591 1.079 5.451-.931 5.379-3.72l-.999.025c.053 2.08-2.087 3.566-3.996 2.772l-.384.923zm5.379-3.72l-1.75-66.55-1 .026 1.751 66.55.999-.027z"
                        />
                        <path
                            id="M"
                            d="M93.184 8.678C85.998 5.368 71.748.062 47.934 0 24.122 0 9.873 5.369 2.684 8.678.247 9.8-.753 12.798.622 15.17l7.5 12.86a3.54 3.54 0 0 0 4.688 1.374c5.374-2.684 16.5-7.491 35.187-7.491 18.688 0 29.813 4.806 35.188 7.491a3.618 3.618 0 0 0 4.687-1.373l7.5-12.86c1.25-2.373.25-5.37-2.188-6.493z"
                        />
                        <path
                            id="N"
                            d="M93.184 8.678l.21-.454-.21.454zM47.934 0l.002-.5h-.002V0zM2.684 8.678l-.209-.455.21.455zM.622 15.17l-.433.25.001.002.432-.252zm7.5 12.86l.433-.25-.001-.001-.432.252zm4.688 1.374l-.224-.447-.007.003.23.444zm70.374 0l-.223.447.007.004.216-.451zm4.688-1.373l.426.262.006-.01-.432-.252zm7.5-12.86l.432.251.005-.01.005-.009-.442-.233zm-1.978-6.948C86.15 4.89 71.829-.437 47.936-.5l-.003 1c23.732.062 37.911 5.349 45.042 8.632l.419-.909zM47.934-.5C24.04-.5 9.718 4.89 2.475 8.223l.419.909C10.026 5.848 24.204.5 47.934.5v-1zM2.475 8.224C-.225 9.468-1.336 12.789.19 15.42l.866-.502C-.17 12.807.719 10.134 2.894 9.133l-.419-.908zM.19 15.422l7.5 12.86.864-.503-7.5-12.86-.864.503zM7.69 28.281a4.04 4.04 0 0 0 5.35 1.567l-.46-.888a3.039 3.039 0 0 1-4.024-1.18l-.866.5zm5.344 1.57c5.324-2.659 16.372-7.438 34.964-7.438v-1c-18.783 0-29.985 4.834-35.41 7.544l.446.894zm34.964-7.438c18.592 0 29.64 4.78 34.964 7.438l.447-.894c-5.426-2.71-16.628-7.544-35.411-7.544v1zm34.97 7.442a4.118 4.118 0 0 0 5.33-1.562l-.85-.525a3.118 3.118 0 0 1-4.046 1.185l-.433.902zm5.337-1.573l7.5-12.86-.864-.504-7.5 12.86.864.504zm7.51-12.879c1.383-2.623.28-5.935-2.42-7.18l-.419.909c2.175 1.002 3.072 3.684 1.955 5.805l.884.466z"
                        />
                        <path
                            id="O"
                            d="M21.788 1.02l-.125-.687c-2.438-1.062-4 .562-5.25 2.809 0 0-5.688 6.992-10.688 21.538C.725 39.226.1 48.84.1 48.84c-.375 1.56.313 2.996 1.875 2.747l15.563-2.435c1.75-.25 3-1.748 3.062-3.496L21.788 1.02z"
                        />
                        <path
                            id="P"
                            d="M21.788 1.02l.5.013.001-.052-.01-.051-.491.09zm-.125-.687l.492-.09-.048-.262-.245-.107-.2.459zm-5.25 2.809l.388.316.027-.035.022-.038-.437-.243zM.1 48.84l.486.117.01-.042.003-.043L.1 48.84zm1.875 2.747l-.077-.494h-.002l.08.494zm15.563-2.435l-.07-.495-.008.001.078.494zm3.062-3.496l.5.018v-.005l-.5-.013zM22.28.93l-.125-.687-.984.18.125.686.984-.18zm-.418-1.056c-1.366-.595-2.544-.446-3.542.204-.958.622-1.71 1.68-2.344 2.821l.874.486c.615-1.106 1.27-1.984 2.015-2.47.706-.458 1.528-.59 2.598-.124l.4-.917zm-5.45 3.268a66.724 66.724 0 0 0-.387-.315l-.002.002-.004.004-.013.018a12.232 12.232 0 0 0-.247.32c-.167.221-.415.56-.724 1.006a56.916 56.916 0 0 0-2.525 4.03c-2.054 3.58-4.746 9.007-7.258 16.31l.946.326c2.489-7.243 5.14-12.585 7.18-16.138a55.455 55.455 0 0 1 2.48-3.959 30.25 30.25 0 0 1 .883-1.214l.046-.058.011-.013.002-.003-.387-.316zM5.253 24.517C2.745 31.816 1.33 37.892.546 42.124A80.772 80.772 0 0 0-.22 47.05a46.415 46.415 0 0 0-.176 1.726l-.002.023v.008l.498.033.5.032v-.005a4.78 4.78 0 0 1 .007-.1l.028-.323c.026-.289.07-.714.137-1.273.137-1.124.369-2.765.757-4.865.78-4.21 2.177-10.215 4.67-17.463l-.947-.326zM-.386 48.724c-.209.869-.138 1.764.27 2.43.432.705 1.199 1.083 2.17.928l-.158-.988c-.59.095-.95-.12-1.158-.462-.232-.379-.318-.982-.152-1.674l-.972-.234zm2.439 3.358l15.562-2.435-.154-.988-15.563 2.435.155.988zm15.555-2.434c2.007-.286 3.421-2 3.492-3.973l-1-.036c-.054 1.524-1.14 2.806-2.633 3.02l.141.99zM21.1 45.67l1.188-44.636-1-.027L20.1 45.643l1 .026z"
                        />
                        <path
                            id="Q"
                            d="M20.758 2.207c0-1.311-1.188-2.373-2.5-2.185l-15 2.06c-2 .312-3.375 2.06-3.25 3.995.562 8.178 2.562 28.592 7.5 36.209 3.5 5.369 7 8.99 9.437 11.05 1.25 1.123 3.188.25 3.25-1.436l.563-49.693z"
                        />
                        <path
                            id="R"
                            d="M20.758 2.207l.5.005v-.005h-.5zm-2.5-2.185l.068.495h.002l-.07-.495zm-15 2.06l-.068-.496-.01.002.078.494zM.008 6.077l-.5.032.001.002.499-.034zm7.5 36.209l-.42.272h.001l.419-.272zm9.437 11.05l.335-.372-.006-.005-.006-.005-.323.382zm3.25-1.436l.5.018v-.012l-.5-.006zm1.063-49.693c0-1.608-1.45-2.912-3.07-2.68l.14.99c1.005-.144 1.93.675 1.93 1.69h1zM18.19-.473l-15 2.06.136.99 15-2.06-.136-.99zM3.18 1.586C.928 1.94-.632 3.915-.49 6.11l.998-.064C.399 4.37 1.589 2.848 3.335 2.575l-.154-.987zM-.49 6.112c.28 4.095.924 11.267 2.114 18.364 1.186 7.07 2.932 14.176 5.464 18.083l.84-.544c-2.406-3.71-4.129-10.619-5.318-17.705C1.426 17.251.788 10.127.507 6.043l-.998.068zM7.088 42.56c3.528 5.407 7.077 9.082 9.534 11.159l.645-.764c-2.419-2.044-5.87-5.611-9.341-10.941l-.838.546zm9.522 11.149c1.587 1.426 4.007.291 4.084-1.79l-1-.037c-.047 1.29-1.502 1.904-2.415 1.083l-.669.744zm4.084-1.802l.563-49.694-1-.011-.563 49.693 1 .012z"
                        />
                        <path
                            id="S"
                            d="M70.32 90.147c-2.437-5.369-7.75-19.478-7.75-40.64 0-12.112 5.438-30.653 7.813-37.458.625-1.81-.312-3.621-2-4.495C60.258 3.558 49.383.312 35.321 0 21.258.312 10.383 3.558 2.258 7.554c-1.687.874-2.625 2.684-2 4.495 2.438 6.805 7.813 25.346 7.813 37.457 0 21.163-5.313 35.272-7.75 40.641-.688 1.561-.25 3.309 1.125 4.308 4.437 3.246 15.437 9.551 33.937 9.302 18.5.249 29.438-6.056 33.938-9.302 1.25-.999 1.687-2.81 1-4.308z"
                        />
                        <path
                            id="T"
                            d="M70.32 90.147l-.455.207.001.002.455-.209zm.063-78.098l.472.165v-.002l-.472-.163zm-2-4.495l.23-.444-.01-.005-.22.449zM35.321 0l.01-.5H35.31l.01.5zM2.258 7.554l-.22-.449-.01.005.23.444zm-2 4.495l-.472.163.001.005.471-.168zm.063 78.098l-.456-.207-.002.006.458.201zm1.125 4.308l.295-.404H1.74l-.294.404zm33.937 9.302l.007-.5h-.014l.007.5zm33.938-9.302l.292.405.01-.007.01-.008-.312-.39zm1.455-4.514c-2.414-5.318-7.705-19.357-7.705-40.435h-1c0 21.248 5.334 35.428 7.794 40.848l.91-.413zM63.07 49.506c0-12.02 5.41-30.492 7.784-37.293l-.944-.329c-2.376 6.809-7.84 25.42-7.84 37.622h1zm7.785-37.294c.721-2.09-.38-4.137-2.243-5.102l-.46.888c1.512.783 2.286 2.357 1.757 3.888l.946.326zm-2.252-5.107C60.44 3.093 49.46-.182 35.332-.5l-.022 1c13.995.306 24.766 3.524 32.852 7.503l.442-.898zM35.31-.5C21.18-.182 10.2 3.093 2.038 7.105l.44.898C10.567 4.024 21.337.806 35.333.5l-.022-1zM2.028 7.11c-1.863.965-2.964 3.012-2.242 5.102l.945-.326C.202 10.355.976 8.78 2.488 7.998l-.46-.888zm-2.24 5.107C2.22 19.012 7.57 37.486 7.57 49.507h1C8.57 37.303 3.17 18.694.729 11.88l-.942.337zm7.783 37.29c0 21.077-5.291 35.116-7.706 40.434l.91.413c2.462-5.42 7.796-19.6 7.796-40.848h-1zM-.137 89.945c-.778 1.767-.284 3.77 1.289 4.913l.588-.809C.563 93.195.182 91.703.778 90.35l-.915-.403zm1.287 4.912c4.51 3.3 15.614 9.65 34.24 9.399l-.014-1c-18.374.248-29.27-6.013-33.635-9.206l-.59.807zm34.226 9.399c18.627.251 29.667-6.1 34.237-9.397l-.585-.81c-4.43 3.195-15.265 9.455-33.638 9.207l-.014 1zm34.257-9.412c1.43-1.143 1.925-3.201 1.142-4.906l-.909.417c.593 1.291.212 2.854-.858 3.708l.625.781z"
                        />
                        <path
                            id="U"
                            d="M17.674 1.89C16.11-.358 12.86-.67 10.986 1.328 6.798 5.76.486 13.127.048 17.872c-.625 7.179 5 4.994 5 4.994l14.938-9.052c2.25-1.374 2.875-4.308 1.438-6.493l-3.75-5.431z"
                        />
                        <path
                            id="V"
                            d="M17.674 1.89l.41-.284v-.002l-.41.286zm-6.688-.562l.363.343.002-.001-.365-.342zM.048 17.872l-.497-.046v.002l.497.044zm5 4.994l.182.466.04-.016.038-.023-.26-.427zm14.938-9.052l.26.427-.26-.427zm1.438-6.493l.417-.275-.006-.01-.412.285zm-3.34-5.717c-1.735-2.495-5.36-2.86-7.463-.618l.73.684c1.646-1.755 4.522-1.494 5.912.505l.821-.57zm-7.461-.62c-2.1 2.222-4.746 5.197-6.918 8.206C1.55 12.18-.217 15.305-.449 17.826l.995.091c.205-2.223 1.814-5.153 3.97-8.142 2.141-2.968 4.745-5.893 6.833-8.104l-.726-.687zM-.45 17.828c-.16 1.85.073 3.17.577 4.092a3.218 3.218 0 0 0 2.06 1.624c.744.19 1.537.14 2.08.043a6.483 6.483 0 0 0 .882-.226 4.124 4.124 0 0 0 .078-.028h.002l-.18-.467-.181-.466-.009.003a4.994 4.994 0 0 1-.768.2c-.491.089-1.066.136-1.65-.025-.548-.146-1.07-.468-1.436-1.137-.375-.686-.61-1.786-.458-3.526l-.997-.087zm5.758 5.465l14.937-9.052-.518-.855-14.938 9.052.519.855zm14.939-9.053c2.495-1.523 3.184-4.777 1.594-7.194l-.835.55c1.285 1.953.724 4.567-1.28 5.79l.52.854zm1.588-7.203l-3.75-5.431-.823.568 3.75 5.431.823-.568z"
                        />
                        <path
                            id="W"
                            d="M100.784 10.12L91.534.88c-1.063-1.06-2.813-1.186-4-.25-13.75 10.863-36.188 11.176-36.75 11.176-.563 0-23-.313-36.688-11.175-1.187-.937-2.937-.812-4 .25L.846 10.12c-1.187 1.186-1.125 3.122.188 4.183 5.687 4.87 22.125 16.419 49.75 16.419s44.062-11.55 49.75-16.42c1.375-1.06 1.437-2.996.25-4.182z"
                        />
                        <path
                            id="X"
                            d="M100.784 10.12l.353-.354-.353.354zM91.534.88l-.354.354.354-.353zm-4-.25l-.31-.392.31.393zm-73.438 0l.31-.39V.237l-.31.393zm-4 .25l.353.354-.353-.353zm-9.25 9.24l-.353-.354.353.354zm.188 4.183l.325-.38-.011-.009-.314.389zm99.5 0l-.306-.396-.01.008-.01.008.326.38zm.603-4.537l-9.25-9.24-.707.708 9.25 9.24.707-.708zm-9.25-9.24C90.649-.708 88.615-.858 87.224.239l.62.785c.983-.776 2.449-.675 3.336.211l.707-.707zM87.224.24C80.426 5.619 71.49 8.37 64.118 9.8c-7.354 1.43-13.056 1.505-13.334 1.505v1c.284 0 6.082-.081 13.524-1.523 7.425-1.442 16.583-4.278 23.536-9.76l-.62-.784zm-36.44 11.067c-.278 0-5.98-.076-13.327-1.505C30.093 8.37 21.173 5.62 14.407.239l-.622.784c6.922 5.481 16.064 8.318 23.481 9.76 7.435 1.442 13.233 1.523 13.518 1.523v-1zM14.406.238C13.015-.859 10.98-.709 9.743.527l.706.707c.888-.886 2.353-.987 3.338-.21l.619-.786zM9.743.527l-9.25 9.24.706.707 9.25-9.24-.706-.707zm-9.25 9.24c-1.39 1.387-1.326 3.67.226 4.925l.629-.778c-1.073-.867-1.134-2.456-.149-3.44l-.706-.708zm.215 4.916c5.752 4.924 22.3 16.539 50.076 16.539v-1c-27.476 0-43.802-11.485-49.425-16.299l-.65.76zm50.076 16.539c27.774 0 44.323-11.615 50.075-16.54l-.651-.759c-5.623 4.814-21.95 16.299-49.424 16.299v1zm50.055-16.523c1.624-1.254 1.69-3.543.298-4.933l-.707.708c.983.982.924 2.564-.202 3.433l.611.792z"
                        />
                        <path
                            id="Y"
                            d="M101.5.485C94.687 5.54 78.875 14.78 52.687 15.53 26.5 14.78 10.688 5.541 3.876.485 2.25-.702 0 .422 0 2.42v37.52c0 3.433 1.75 6.68 4.625 8.552C12.813 53.8 31 63.85 52.625 64.786c21.625-.936 39.813-10.987 48-16.294a10.247 10.247 0 0 0 4.625-8.552V2.42c.125-1.998-2.125-3.122-3.75-1.935z"
                        />
                        <path
                            id="Z"
                            d="M101.5.485l-.295-.404-.003.002.298.402zM52.687 15.53l-.014.5H52.702l-.014-.5zM3.876.485l.298-.402L4.17.081l-.295.404zm.75 48.007l-.273.42h.001l.272-.42zm48 16.294l-.022.5h.044l-.022-.5zm48-16.294l.272.42h.001l-.273-.42zM105.25 2.42l-.499-.031-.001.015v.016h.5zM101.202.083C94.457 5.09 78.741 14.284 52.673 15.03l.029 1C79.009 15.277 94.918 5.993 101.798.886l-.596-.803zm-48.5 14.947C26.634 14.284 10.918 5.09 4.173.083l-.596.803c6.88 5.107 22.789 14.391 49.096 15.144l.029-1zM4.17.08C2.223-1.34-.5.004-.5 2.42h1C.5.84 2.277-.063 3.58.888l.59-.807zM-.5 2.42v37.52h1V2.42h-1zm0 37.52c0 3.601 1.835 7.006 4.852 8.971l.546-.838A9.747 9.747 0 0 1 .5 39.94h-1zm4.853 8.972c8.203 5.316 26.512 15.42 48.25 16.374l.044-1c-21.512-.918-39.578-10.916-47.75-16.213l-.544.839zm48.294 16.374c21.738-.955 40.048-11.058 48.25-16.374l-.544-.84c-8.172 5.298-26.238 15.296-47.75 16.215l.044.999zm48.251-16.375a10.748 10.748 0 0 0 4.852-8.971h-1a9.745 9.745 0 0 1-4.398 8.133l.546.838zm4.852-8.971V2.42h-1v37.52h1zm-.001-37.489c.154-2.467-2.615-3.778-4.544-2.37l.59.807c1.321-.964 3.052-.028 2.956 1.5l.998.063z"
                        />
                        <path
                            id="aa"
                            d="M104.976 11.112C96.538 7.492 77.976 0 54.413 0 30.851 0 12.226 7.491 3.788 11.112.663 12.486-.837 16.107.476 19.228l3.937 5.494c.688 1.685 2.625 2.434 4.313 1.748 7-3.06 25.687-10.863 45.625-10.863 19.937 0 38.625 7.804 45.687 10.925a3.236 3.236 0 0 0 4.313-1.748l3.937-5.493c1.313-3.184-.125-6.805-3.312-8.179z"
                        />
                        <path
                            id="ab"
                            d="M104.976 11.112l.198-.459h-.001l-.197.46zm-101.188 0l-.197-.46-.004.003.201.457zM.476 19.228l-.461.194.022.052.032.045.407-.29zm3.937 5.494l.463-.189-.022-.055-.034-.048-.407.292zm4.313 1.748l.188.463.012-.005-.2-.458zm91.312.062l.203-.457h-.001l-.202.457zm4.313-1.748l-.407-.291-.034.048-.022.054.463.19zm3.937-5.493l.407.29.033-.046.022-.054-.462-.19zm-3.115-8.638C96.73 7.03 78.071-.491 54.413-.5v1C77.88.49 96.346 7.953 104.78 11.572l.394-.92zM54.413-.5c-23.657.01-42.38 7.53-50.822 11.153l.394.919C12.418 7.953 30.945.49 54.413.5v-1zM3.587 10.655C.221 12.135-1.407 16.04.015 19.422l.922-.388c-1.204-2.861.169-6.197 3.052-7.464l-.402-.915zM.069 19.519l3.938 5.494.813-.583-3.938-5.493-.813.582zm3.881 5.392c.798 1.957 3.037 2.806 4.964 2.022l-.377-.926c-1.448.589-3.084-.06-3.66-1.474l-.927.378zm4.976 2.017c6.996-3.057 25.585-10.83 45.425-10.82v-1c-20.036.009-38.822 7.843-45.826 10.904l.4.916zm45.425-10.82c19.839-.01 38.427 7.762 45.485 10.882l.404-.915c-7.067-3.124-25.853-10.958-45.89-10.968v1zm45.484 10.881c1.951.866 4.187-.074 4.979-2.016l-.926-.378a2.736 2.736 0 0 1-3.647 1.48l-.406.914zm4.922-1.913l3.938-5.494-.813-.583-3.938 5.494.813.583zm3.993-5.595c1.416-3.433-.135-7.345-3.576-8.828l-.396.918c2.933 1.264 4.258 4.594 3.048 7.529l.924.381z"
                        />
                        <path
                            id="ac"
                            d="M0 0l27.625 10.673c1.688.624 2.813 2.185 2.813 3.995v4.558c0 1.997-2 3.37-3.875 2.684L0 12"
                        />
                        <path
                            id="ad"
                            d="M27.625 10.673l-.18.466.006.003.174-.47zM26.562 21.91l-.174.468.002.001.172-.47zM-.18.466L27.445 11.14l.36-.933L.18-.466l-.36.932zM27.45 11.142c1.498.554 2.486 1.932 2.486 3.526h1c0-2.026-1.261-3.77-3.139-4.464l-.346.938zm2.486 3.526v4.558h1v-4.558h-1zm0 4.558c0 1.643-1.648 2.784-3.203 2.214l-.344.94c2.196.803 4.547-.803 4.547-3.154h-1zm-3.2 2.215L.175 11.531l-.35.938 26.563 9.91.35-.938z"
                        />
                        <path
                            id="ae"
                            d="M107.25 8.185l-1.5-5.181c-.688-1.686-2.563-4.12-5.688-2.435-6.812 3.62-26.25 12.299-46.25 12.299-19.937 0-39.375-8.616-46.25-12.299-3.125-1.686-5 .75-5.687 2.435l-1.5 5.181c-1.313 3.184 1 5.12 4.187 6.43 8.438 3.621 25.625 11.3 49.25 11.362 23.563 0 40.75-7.74 49.25-11.361 3.188-1.311 5.5-3.247 4.188-6.43z"
                        />
                        <path
                            id="af"
                            d="M107.25 8.185l-.481.14.008.026.01.025.463-.19zm-1.5-5.181l.48-.14-.007-.025-.01-.024-.463.189zM100.062.569l.235.441.003-.001-.238-.44zm-92.5 0l-.237.44h.001l.236-.44zM1.875 3.004l-.463-.19-.01.025-.008.026.48.139zm-1.5 5.181l.462.19.01-.024.008-.027-.48-.139zm4.187 6.43l.197-.46-.007-.002-.19.463zm49.25 11.362l-.001.5h.001v-.5zm49.25-11.361l-.19-.463-.006.002.196.46zm4.668-6.57l-1.5-5.181-.961.278 1.5 5.181.961-.278zm-1.517-5.231c-.365-.895-1.058-2.028-2.122-2.713-1.106-.712-2.551-.898-4.266.027l.475.88c1.409-.76 2.464-.572 3.249-.066.827.532 1.415 1.458 1.738 2.25l.926-.378zM99.828.127c-6.798 3.614-26.12 12.251-46.016 12.24v1c20.104-.01 39.657-8.728 46.485-12.357l-.47-.883zm-46.016 12.24C33.978 12.378 14.657 3.803 7.798.128l-.472.882c6.892 3.692 26.445 12.347 46.486 12.357v-1zM7.8.13C6.084-.796 4.639-.61 3.534.102 2.47.787 1.777 1.92 1.412 2.815l.926.378c.322-.792.91-1.718 1.737-2.25.785-.506 1.84-.694 3.25.066L7.8.129zM1.394 2.865l-1.5 5.181.961.278 1.5-5.181-.96-.278zm-1.482 5.13c-.721 1.751-.453 3.222.474 4.414.894 1.151 2.368 2.003 3.986 2.669l.38-.925c-1.57-.646-2.845-1.416-3.576-2.357-.698-.898-.93-1.987-.34-3.42l-.924-.381zm4.453 7.08c8.434 3.62 25.717 11.329 49.446 11.402l.002-1c-23.52-.05-40.613-7.699-49.054-11.321l-.394.919zm49.447 11.402c23.668-.01 40.95-7.783 49.446-11.402l-.392-.92C94.362 17.779 77.27 25.49 53.812 25.477v1zm49.44-11.4c1.618-.665 3.092-1.517 3.986-2.668.927-1.192 1.196-2.663.474-4.414l-.925.38c.591 1.434.36 2.523-.338 3.42-.731.942-2.007 1.712-3.577 2.358l.38.925z"
                        />
                        <path
                            id="ag"
                            d="M2.5 12.36c1.375 0 2.5-1.123 2.5-2.496V2.497A2.506 2.506 0 0 0 2.5 0 2.506 2.506 0 0 0 0 2.497v7.304c0 1.374 1.125 2.56 2.5 2.56z"
                        />
                        <path
                            id="ah"
                            d="M2.5 12.86c1.65 0 3-1.346 3-2.996h-1c0 1.096-.9 1.997-2 1.997v1zm3-2.996V2.497h-1v7.367h1zm0-7.367C5.5.847 4.15-.5 2.5-.5v1c1.1 0 2 .9 2 1.997h1zM2.5-.5C.85-.5-.5.847-.5 2.497h1C.5 1.4 1.4.5 2.5.5v-1zm-3 2.997v7.304h1V2.497h-1zm0 7.304c0 1.634 1.334 3.06 3 3.06v-1c-1.084 0-2-.947-2-2.06h-1z"
                        />
                        <path
                            id="ai"
                            d="M2.5 12.36c1.375 0 2.5-1.123 2.5-2.496V2.497A2.506 2.506 0 0 0 2.5 0 2.506 2.506 0 0 0 0 2.497v7.304c0 1.374 1.125 2.56 2.5 2.56z"
                        />
                        <path
                            id="aj"
                            d="M2.5 12.86c1.65 0 3-1.346 3-2.996h-1c0 1.096-.9 1.997-2 1.997v1zm3-2.996V2.497h-1v7.367h1zm0-7.367C5.5.847 4.15-.5 2.5-.5v1c1.1 0 2 .9 2 1.997h1zM2.5-.5C.85-.5-.5.847-.5 2.497h1C.5 1.4 1.4.5 2.5.5v-1zm-3 2.997v7.304h1V2.497h-1zm0 7.304c0 1.634 1.334 3.06 3 3.06v-1c-1.084 0-2-.947-2-2.06h-1z"
                        />
                        <path
                            id="ak"
                            d="M4.521 1.89c1.563-2.248 4.813-2.56 6.688-.562 4.187 4.432 10.5 11.799 10.937 16.544.625 7.179-5 4.994-5 4.994L2.209 13.814C-.041 12.44-.666 9.506.77 7.32l3.75-5.431z"
                        />
                        <path
                            id="al"
                            d="M4.521 1.89l-.41-.286-.001.002.411.284zm6.688-.562l-.365.342.001.001.364-.343zm10.937 16.544l.498-.044v-.002l-.498.046zm-5 4.994l-.26.427.038.023.041.016.181-.466zM2.209 13.814l-.261.426.001.001.26-.427zM.77 7.32l-.412-.284-.006.01.418.274zm4.16-5.146c1.39-1.999 4.266-2.26 5.913-.505l.73-.684C9.47-1.255 5.845-.891 4.11 1.604l.82.571zm5.914-.504c2.089 2.211 4.692 5.136 6.833 8.104 2.156 2.989 3.765 5.919 3.97 8.142l.996-.091c-.232-2.521-1.999-5.647-4.155-8.636-2.172-3.01-4.818-5.984-6.917-8.206l-.727.687zm10.803 16.244c.151 1.74-.084 2.84-.458 3.526-.366.669-.888.991-1.437 1.137-.583.16-1.158.114-1.65.025a4.995 4.995 0 0 1-.768-.2l-.008-.003-.181.466-.18.466.002.001.005.002.016.006a3.599 3.599 0 0 0 .254.084c.16.048.405.112.684.162.544.097 1.336.147 2.081-.043a3.218 3.218 0 0 0 2.06-1.624c.503-.923.737-2.243.576-4.092l-.996.087zm-4.243 4.523L2.468 13.386l-.519.855 14.938 9.052.518-.855zM2.47 13.387C.465 12.163-.096 9.549 1.189 7.596l-.836-.55c-1.59 2.417-.9 5.671 1.595 7.194l.521-.853zM1.183 7.605l3.75-5.431-.823-.568-3.75 5.43.823.57z"
                        />
                        <path
                            id="am"
                            d="M30.438 0L2.813 9.989C1.125 10.613 0 12.174 0 13.984v4.557c0 1.998 2 3.372 3.875 2.685l26.563-9.91"
                        />
                        <path
                            id="an"
                            d="M2.813 9.989l-.17-.47h-.004l.174.47zm1.062 11.237l.172.47.003-.002-.175-.468zM30.267-.47L2.642 9.518l.34.94L30.609.47l-.34-.94zM2.64 9.52C.762 10.214-.5 11.958-.5 13.984h1c0-1.594.988-2.972 2.486-3.526l-.347-.938zM-.5 13.984v4.557h1v-4.557h-1zm0 4.557c0 2.352 2.352 3.958 4.547 3.154l-.344-.939C2.148 21.326.5 20.186.5 18.541h-1zm4.55 3.153l26.562-9.91-.35-.937L3.7 20.758l.35.937z"
                        />
                        <path
                            id="ao"
                            d="M.5 8.148s8-3.85 13.625-5.411c3-.812 7.188-1.81 10.5-2.622 2.625-.624 5.125 1.373 5.125 4.058v1.124c0 3.37-2.5 6.18-5.813 6.68-6.125.873-15.25 2.928-23.937 8.671"
                        />
                        <path
                            id="ap"
                            d="M14.125 2.737l-.13-.483-.004.001.134.482zm10.5-2.622l-.116-.486h-.003l.119.486zm-.688 11.861l.071.495h.004l-.075-.495zM.5 8.149l.217.45h.001l.004-.002.017-.008a36.82 36.82 0 0 1 .329-.156A140.581 140.581 0 0 1 5.4 6.487c2.699-1.155 6.08-2.497 8.859-3.268l-.268-.964c-2.846.79-6.277 2.154-8.985 3.313A141.61 141.61 0 0 0 .29 7.695l-.004.002H.284l.216.451zM14.256 3.22c2.992-.81 7.17-1.806 10.488-2.62l-.238-.97C21.2.44 17.002 1.44 13.994 2.253l.262.966zM24.74.6C27.049.052 29.25 1.81 29.25 4.173h1c0-3.005-2.799-5.244-5.74-4.544l.23.972zm4.509 3.572v1.124h1V4.173h-1zm0 1.124c0 3.116-2.311 5.721-5.387 6.185l.149.989c3.55-.535 6.238-3.548 6.238-7.174h-1zm-5.383 6.185c-6.162.879-15.369 2.949-24.143 8.75l.552.834c8.6-5.687 17.643-7.726 23.732-8.595l-.141-.99z"
                        />
                        <path
                            id="aq"
                            d="M29.188 8.148s-7.938-3.85-13.563-5.411c-3-.812-7.187-1.81-10.5-2.622C2.5-.509 0 1.488 0 4.173v1.124c0 3.37 2.5 6.18 5.813 6.68 6.125.873 15.187 1.428 23.875 7.171"
                        />
                        <path
                            id="ar"
                            d="M15.625 2.737l.134-.482h-.003l-.131.482zM5.125.115l.119-.486h-.003l-.116.486zm.688 11.861l-.075.495h.004l.07-.495zm23.375-3.828a159.951 159.951 0 0 0 .216-.45l-.005-.002a1.818 1.818 0 0 0-.017-.009l-.069-.033-.263-.126a137.783 137.783 0 0 0-4.337-1.96c-2.692-1.159-6.108-2.523-8.954-3.313l-.268.964c2.779.77 6.144 2.112 8.827 3.268a136.887 136.887 0 0 1 4.563 2.069l.066.032.017.008.004.002h.001l.218-.45zM15.755 2.254C12.748 1.441 8.55.44 5.244-.37l-.238.972c3.318.813 7.496 1.81 10.488 2.619l.262-.966zM5.24-.37C2.299-1.071-.5 1.169-.5 4.173h1C.5 1.809 2.701.053 5.01.6l.23-.972zM-.5 4.173v1.124h1V4.173h-1zm0 1.124c0 3.626 2.689 6.639 6.238 7.174l.149-.989C2.811 11.018.5 8.412.5 5.297h-1zm6.242 7.174c6.167.88 15.097 1.427 23.67 7.095l.551-.835c-8.802-5.819-17.997-6.382-24.08-7.25l-.141.99z"
                        />
                    </defs>
                </svg>
            </div>

        )
    }
}