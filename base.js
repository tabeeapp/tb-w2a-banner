(function(){
    var
        //tabee.app/js-script/access
        __tbgen = window.location.host === '127.0.0.1:999'
            ? '//127.0.0.1:999'
            : '//tabee.app/js-script/access',

        defconf = {
        //Extra Params from URL
            idfa: '',
            gps_adid: '',
            ip_address: '', // put ip address

        //Main options
            vendor: 'adjust',
            link_type: 'link',
            new_tab: false,
            design_template: 'default',
            display_iphone: true,
            display_ipad: true,
            display_android_phone: true,
            display_android_tablet: true,
            utm_get: true,
            adgroup_join: false,
            separator_type: ' : ',
            debug: false,

        // General Parameter iOS
            app_id_ios: '1005851014',
            //App ID in the Appstore e.g. 1000000000000 (iOS) or app.id.com (Google Play) 
            bundle_id_ios: 'tabee.app',
            app_id_ios: '1005851014',

        // General Parameter Android
            bundle_id_android: 'com.tabee.android',
            app_gallery_id: 'C102837509',

            campaign_id: 'Website',
            adgroup_id: 'Banner',
            // Adjust: AdGroup ID.
            // Appmetrica: ID of an affiliated publisher (sub-partner).
            creative_id: 'Header',
            // Adjust: Creative ID.
            // Appmetrica: ID of a specific banner.
            
            additional_ids: '',

        //Link params
            ul_body: '',
            ul_path: '',
            deeplink: 'tabee://login',
            link: '',

        //Apple Parameters General
            affiliate_ios: '110lqC',
            // Apple Affiliate ID
            mt_ios: '8',
            tracker_id_ios: '',

        //Adjust Parameters General
            engagement_type: 'fallback_click',
            fallback_lp: 'https://tabee.app/download',
            s2s: '1',
            redirect_ios: 'https://tabee.app/download/ios',
            redirect_android: 'https://tabee.app/download/android',
            redirect_all: 'https://tabee.app/download/',
            fallback: 'https://tabee.app/',
            //Adjust Parameters iOS
            adjust_tracker_id_ios: 'd2npa3x',
            //Adjust Parameters Android
            adjust_tracker_id_android: 'd2npa3x',

        // Appmetrica Parameters General
            appmetrika_app_id: '280200',
            site_id: '', // ID of a specific advertising place.
            // Appmetrica Parameters iOS
            appmetrica_tracker_id_ios: '1036112026079909427',
            // Appmetrica Parameters Android
            appmetrica_tracker_id_android: '1036112026079909427',

        // Appsflyer Parameters General
            site_id: '', 
            // Appsflyer Parameter iOS
            af_app_id_ios: '1005851014',
            // Appsflyer Parameter Android
            af_app_id_android: '1005851014',

        //Appearance options
            force_display: false,
            container: null,
            position: 'top',
            icon: __tbgen + '/example.png',
            icon_fit: 'cover',
            icon_background: '#81d742',
            icon_border: '#fff',
            icon_radius: 15,
            background_image: '',
            background_color: '#e7c05b !important',
            text_color: '#000',
            download_background: '#fff',
            download_text_color: '#000',
            download_radius: 10,
            close_colour: '#fff',
            close_delay: 1,
            open_delay: 2,
            hide_type: 'timeout',
            hide_timeout: 60,
            redisplay_type: 'timeout',
            redisplay_timeout: 5, //Minutes

        //Content options
            subject_text: 'The App',
            subject_text_css: '',
            subline_text: 'Get right now',
            subline_text_css: '',
            download_text: 'Download',
            download_css: '',

        //Pixel options
            sending_impressions: true,

        //Android options
            app_scheme_body: '',
            app_scheme_path: '',

        //Unknown options
            location_show: 'RU,EN',
            date_start: null,
            date_end: null,
        },
        config = assignQuery( Object.assign( defconf, (window.TabeeConfig || {}) ) ),
        ids = {
            container: uniq() + uniq(),
            show: uniq(),
            close: uniq(),
            top: uniq(),
            right: uniq(),
            icon: uniq(),
            title: uniq(),
            desc: uniq(),
            button: uniq(),
            pixel: uniq()
        }

    /* MAIN */

    config = assignUTM( config )

    if ( config.debug ) {
        document.getElementById('debug').innerHTML = [
            'OS: ' + getCurrentOs(),
            'userAgent:' + navigator.userAgent,
            'vendor:' + navigator.vendor,
            'opera:' + window.opera
        ].join( '<br/>' )
    }

    if ( checkShow( config ) ) {
        init( config, ids )
    }

    /* FUNCTIONS */

    function init ( params, ids ) {
        var 
            $template = document.createElement('script'),
            $vendor = document.createElement('script')

        $template.src = __tbgen + '/templates/' + params.design_template + '.js'
        $vendor.src = __tbgen + '/generators/' + params.vendor + '.js'

        document.head.appendChild( $template )
        document.head.appendChild( $vendor )
        
        waitForLoad( params, ids )
    }

    function waitForLoad ( params, ids ) {
        if ( window.__tbgen_generate_ui && window.__tbgen_vendor_mapping ) {
            __tbgen_generate_ui( params, ids )
        } else {
            setTimeout(function(){
                waitForLoad( params, ids )
            }, 500 )
        }
    }

    function checkShow ( params ) {
        var
            os = getCurrentOs()

        if (['ios','android'].indexOf(os) < 0) {
            return false
        }

        if ( !params.force_display ) {
            var
                closed = localStorage.getItem( '__tbgen_closed' ) === 'true'

            if ( closed ) {
                    closedTimeRaw = localStorage.getItem( '__tbgen_closed_time' ),
                    closedTime = closedTimeRaw ? parseInt( closedTimeRaw ) : 0,
                    show_popup = Date.now() > closedTime + parseFloat( params.redisplay_timeout ) * 60 * 1000
                    
                if ( !show_popup ) return false
            }
        }

        //iPhone and iPad
        if ( os === 'ios' ) {
            if ( window.innerWidth < 768 && params.display_iphone ) {
                return true
            }

            if ( window.innerWidth >= 768 && params.display_ipad ) {
                return true
            }
        }

        if ( os === 'android' ) {
            if ( window.innerWidth < 768 && params.display_android_phone ) {
                return true
            }

            if ( window.innerWidth >= 768 && params.display_android_tablet ) {
                return true
            }
        }

        return false
    }

    function getCurrentOs () {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera
    
        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            return "wp"
        }
    
        if (/android/i.test(userAgent)) {
            return "android"
        }
    
        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod|Macintosh/.test(userAgent) && !window.MSStream) {
            return "ios"
        }
    
        return "unknown"
    }
    
    window.__tbgen_apply_show_expression = function ( $container, $pixel ) {
        $container.appendChild( $pixel )
    }

    window.__tbgen_close = function ( $container, ids ) {
        return function () {
            $container.className = ids.container
            localStorage.setItem( '__tbgen_closed', 'true' )
            localStorage.setItem( '__tbgen_closed_time', Date.now() )
        }
    }

    window.__tbgen_generate_css = function ( id, css, append ) {
        var 
            pixelated = [ 
                'padding',
                'padding-top',
                'padding-right',
                'padding-bottom',
                'padding-left',
                'margin',
                'margin-top',
                'margin-right',
                'margin-bottom',
                'margin-left', 
                'font-size', 
                'left', 
                'top', 
                'right', 
                'bottom', 
                'width', 
                'height' ,
                'border-radius'
            ],
            empties = {
                content: "''"
            },
            res = id + '{'

        Object.keys( css ).forEach(function(key){
            var 
                value = pixelated.indexOf( key ) > -1
                    ? __tbgen_tools_px( css[key] )
                    : css[key]

            if ( !value && value !== void 0 && empties[key] ) {
                value = empties[key]
            }

            res += key + ':' + value + ';'
        })
        
        if ( append ) {
            append.forEach(function(str){
                res += str + ';'
            })
        }

        return res + '}'
    }

    window.__tbgen_generate_style = function ( ids, generator ) {
        var
            $s = document.createElement('style'),
            cn = {},
            css = ''

        Object.keys( ids ).forEach(function(key){
            cn[key] = key === 'container' || key === 'show'
                ? '.' + ids[key]
                : '.' + ids.container + ' .' + ids[key]
        })

        css = generator( cn )
            .map(function(st){ return __tbgen_generate_css( st.selector, st.css, st.append )})
            .join( '' )

        $s.innerHTML = css.replace( /;+/g, ';' )

        document.head.appendChild($s)
    }

    window.__tbgen_generate_link = function ( params ) {
        var
            os = getCurrentOs()

        if ( !__tbgen_vendor_mapping[os] ) return '#'

        if ( params.link_type === 'ul' && params.ul_body ) {
            return ( 
                __tbgen_vendor_mapping[os].ul_gen
                    ? __tbgen_vendor_mapping[os].ul_gen( params )
                    : params.ul_body + ( params.ul_path || '' )
                ) + 
                __tbgen_join_params( params, __tbgen_vendor_mapping[os].ul )
        } else {
            var
                url = typeof __tbgen_vendor_mapping[os].base_url === 'function'
                    ? __tbgen_vendor_mapping[os].base_url( params )
                    : __tbgen_vendor_mapping[os].base_url

            return url + 
                ( 
                    __tbgen_vendor_mapping[os].tracker_id 
                        ? params[__tbgen_vendor_mapping[os].tracker_id] 
                        : '' 
                ) + 
                __tbgen_join_params( params, __tbgen_vendor_mapping[os].link )
        }
    }

    window.__tbgen_generate_impression = function ( params ) {
        var
            os = getCurrentOs()

        if ( !__tbgen_vendor_mapping[os] || !__tbgen_vendor_mapping[os].impression ) return '/'
    
        var
            imp_url = typeof __tbgen_vendor_mapping[os].impression_url === 'function'
                ? __tbgen_vendor_mapping[os].impression_url( params )
                : __tbgen_vendor_mapping[os].impression_url

        return imp_url + 
            params[__tbgen_vendor_mapping[os].tracker_id] + 
            __tbgen_join_params( params, __tbgen_vendor_mapping[os].impression )
    }

    /*
    function openLink ( params ) {
        return function ( e ) {
            e.preventDefault()
            e.stopPropagation()
            window.open( __tbgen_generate_link( params ), params.new_tab ? '_blank' : '_self' )
        }
    }
    */

    /* TOOLS */

    window.__tbgen_tools_px = function ( num ) { 
        return parseFloat(num) === num && num !== 0 && num !== '0' 
            ? num + 'px' 
            : num 
    }

    window.__tbgen_join_params = function ( params, extract ) {
        var 
            res = []

        Object.keys( extract ).forEach(function( key ){
            var 
                rawkey = extract[key]

            if ( Array.isArray( rawkey ) ) {
                var
                    values = []

                rawkey.forEach(function(key){
                    values.push( params[key] )
                })

                res.push( key + '=' + values.join('') )
            } else {
                var 
                    isEncode = rawkey[0] === '|',
                    xkey = isEncode ? rawkey.substr(1) : rawkey,
                    value = params[xkey]
                    
                if ( value ) {
                    ;( isEncode )
                        ? res.push(key + '=' + encodeURIComponent(value))
                        : res.push(key + '=' + value)
                }
            }
        })

        if ( res.length > 0 ) {
            return '?' + res.join('&')
        }

        return ''
    }

    function assignUTM( params ) {
        if ( !params.utm_get ) return params

        if ( params.utm_source ) {
            params.campaign = params.utm_source
        }

        if ( params.utm_campaign ) {
            if ( params.adgroup_join ) {
                var
                    keys = params.adgroup_join.split( '|' )

                params.adgroup_id = keys.map(function(key){
                    return params[key]
                }).join( params.separator_type )
            } else {
                params.adgroup_id = params.utm_campaign
            }
        }

        if ( params.utm_term ) {
            params.creative_id = params.utm_term
        }

        return params
    }

    function assignQuery ( params ) {
        var
            hashed = ['icon_background', 'icon_border', 'background_color', 'text_color', 'close_colour', 'download_background', 'download_text_color'],
            decode = [ 'separator_type' ],
            query = getQuery(),
            res = Object.assign( {}, params )

        query.forEach(function(pair){
            res[pair.key] = hashed.indexOf(pair.key) > -1 
                ? '#' + pair.value.replace( /#/g, '' ).replace( /%23/g, '' )
                : (
                    decode.indexOf( pair.key ) > -1 
                        ? decodeURIComponent( pair.value )
                        : pair.value
                )
        })

        return res
    }

    function getQuery ( q ) {
        var
            query = q || window.location.search, 
            raw = query.replace( /^\?/, '' ).split('&').map(function(pair){var split = pair.split('='); return { key: split[0], value: decodeURIComponent( split[1] ) }}),
            hash = raw.find(function(item){ return item.key === 'banner_hash'}),
            obj = {}

        if ( hash ) {
            var 
                hashed = getQuery(decb64(hash.value))

            hashed.forEach(function(item){
                if ( item.key !== 'banner_hash' ) {
                    obj[item.key] = item.value === 'true' || item.value === 'false'
                        ? item.value === 'true'
                        : decodeURIComponent( item.value )
                }
            })
        }

        raw.forEach(function(item){
            obj[item.key] = item.value === 'true' || item.value === 'false'
                ? item.value === 'true'
                : decodeURIComponent( item.value )
        })

        return Object.keys(obj).map(function(key){
            return {
                key: key,
                value: obj[key]
            }
        })
    }

    function decb64 ( str ) {
        return decodeURIComponent(atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(''))
    }

    function uniq () { return '_' + Math.random().toString(36).substr(2, 9) }

})()