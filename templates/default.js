function __tbgen_generate_ui ( params, ids ) {
    __tbgen_generate_style( ids, templateStyles )
    generateHTML()

    function templateStyles ( cn ) {
        return [
            {
                selector: cn.container,
                css: {
                    overflow: 'hidden',
                    position: params.container ? 'relative' : 'fixed',
                    left: 0,
                    right: 0,
                    transition: 'transform .5s ease, box-shadow 1s ease',
                    padding: 20,
                    'box-shadow': 'none', 
                    'box-sizing': 'border-box',
                    'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                    'z-index': 9999999,

                    'background-color': params.background_color,
                    color: params.text_color,
                },
                append: [ getPos(params) ]
            },
            {
                selector: cn.container + cn.show,
                css: {
                    transform: 'translateY(0)',
                    'box-shadow': params.container
                        ? 'none'
                        : '0px ' + ( params.position === 'bottom' ? '-10px' : '10px' ) + ' 20px rgba(0,0,0,.5)'
                }
            },

            //Close btn
            {
                selector: cn.close,
                css: {
                    display: params.container ? 'none' : 'block',
                    position: 'absolute',
                    right: 10,
                    top: 10,
                    width: 20,
                    height: 20,
                    opacity: .7,
                    transform: 'rotateX(90deg)',
                    'border-radius': 15,

                    transition: 'transform 1s ease ' + params.close_delay + 's',
                    'background-color': params.close_colour
                }
            },
            {
                selector: cn.close + ':before',
                css: {
                    content: '',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: 10,
                    height: 1,
                    transform: 'translate(-50%,-50%) rotate(45deg)',

                    'background-color': params.background_color
                }
            },
            {
                selector: cn.close + ':after',
                css: {
                    content: '',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: 10,
                    height: 1,
                    transform: 'translate(-50%,-50%) rotate(-45deg)',

                    'background-color': params.background_color
                }
            },
            {
                selector: cn.show + cn.close,
                css: {
                    transform: 'none'
                }
            },

            //Top
            {
                selector: cn.top,
                css: {
                    display: 'flex',
                    'flex-direction': 'row',
                    'align-items': 'flex-start',
                    'justify-content': 'flex-start'
                }
            },

            //Icon
            {
                selector: cn.icon,
                css: {
                    width: 64,
                    height: 64,
                    flex: '0 0 64px',
                    overflow: 'hidden',
                    'margin-right': 20,
                    'box-sizing': 'border-box',

                    border: '3px solid' + params.icon_border,
                    'border-radius': params.icon_radius,
                    'object-fit': params.icon_fit,
                    'background-color': params.icon_background
                }
            },

            //Right
            {
                selector: cn.right,
                css: {
                    flex: '1 1 100%',
                    display: 'flex',
                    'flex-direction': 'column',
                    'align-items': 'flex-start',
                    'justify-content': 'center',
                    'align-self': 'stretch'
                }
            },

            //Title
            {
                selector: cn.title,
                css: {
                    display: 'block',
                    'font-size': 16,
                    'font-weight': 'bold',
                    'margin-bottom': 4
                },
                append: [ params.subject_text_css ]
            },

            //Desc
            {
                selector: cn.desc,
                css: {
                    display: 'block',
                    'font-size': 16,
                    'font-weight': 400
                },
                append: [ params.subline_text_css ]
            },

            //Button
            {
                selector: cn.button,
                css: {
                    cursor: 'pointer',
                    display: 'block',
                    width: '100%',
                    border: 'none',
                    padding: 15,
                    'font-size': 16,
                    'font-weight': 400,
                    'margin-top': 20,
                    'box-sizing': 'border-box',
                    'text-decoration': 'none',
                    'text-align': 'center',
                    
                    color: params.download_text_color,
                    'background-color': params.download_background,
                    'border-radius': params.download_radius
                },
                append: [ params.download_css ]
            },

            //Hidden pixel
            {
                selector: cn.pixel,
                css: {
                    height: '1px!important',
                    width: '1px!important',
                    border: 'none!important',
                    margin: '0!important',
                    padding: '0!important',
                    position: 'fixed',
                    'pointer-events': 'none'
                }
            }
        ]
    }

    function getPos ( params ) {
        if ( params.container ) return ';margin: 20px 0;'

        var pos = {
            top: ';top:0;transform:translateY(-100%);',
            bottom: ';bottom:0;transform:translateY(100%);'
        }

        return pos[params.position] || pos.top
    }

    function generateHTML () {
        var
            $c = document.createElement('div'),
            $close = document.createElement('span'),
            $btn = document.createElement('a'),
            $hidden = document.createElement('img')

        //Container
        $c.className = ids.container
        $c.innerHTML = '<div class="' + ids.top + '">' + (params.icon ? '<img class="' + ids.icon + '" src="' + params.icon +'">' : '' ) + '<div class="' + ids.right + '"><span class="' + ids.title + '">' + params.subject_text + '</span><span class="' + ids.desc + '">' + params.subline_text + '</span></div></div>'

        //Close
        $close.className = ids.close
        $close.addEventListener( 'click', window.__tbgen_close( $c, ids ) )
        $c.appendChild( $close )

        //Button
        $btn.className = ids.button
        $btn.innerText = params.download_text
        $btn.setAttribute( 'href', __tbgen_generate_link( params ) )
        $btn.setAttribute( 'target', params.new_tab ? '_blank' : '_self' )
        $c.appendChild( $btn )

        //HiddenPixel
        $hidden.className = ids.pixel

        if ( params.container ) {
            var
                container = document.querySelector( params.container )
            ;( container ) && ( container.appendChild( $c ) )
        } else {
            document.body.appendChild( $c )
        }

        setTimeout(function(){

            $c.className = ids.container + ' ' + ids.show

            if ( params.sending_impressions ) {
                setTimeout(function(){

                    $hidden.setAttribute( 'src', __tbgen_generate_impression( params ) )
                    __tbgen_apply_show_expression( $c, $hidden )

                    if ( params.hide_type === 'timeout' ) {
                        setTimeout( window.__tbgen_close( $c, ids ), params.hide_timeout * 1000 )
                    } else if ( params.hide_type === 'session' ) {
                        window.addEventListener( 'beforeunload', window.__tbgen_close( $c, ids ) )
                    }

                }, 1000)
            }

        }, params.container ? 0 : params.open_delay * 1000)
    }
}