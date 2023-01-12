window.__tbgen_vendor_mapping = {
    ios: {
        base_url: 'https://redirect.appmetrica.yandex.com/serve/',
        impression_url: null,
        tracker_id: 'appmetrica_tracker_id_ios',
        ul_gen: function ( params ) { 
            return params.appmetrika_app_id + '.redirect.appmetrica.yandex.com/' + ( params.ul_path || '' ) 
        },
        ul: {
            appmetrica_tracking_id: 'tracker_id',
            c: 'campaign_id',
            afpub_id: '|adgroup_id',
            site_id: 'site_id',
            creative_id: 'creative_id',
            deeplink: '|deeplink',
            ios_ifa: 'idfa',
            google_aid: 'gps_adid'
            //device_ip: '',
            //device_ua: '',
            //fallback: '|fallback',
            //redirect: '|redirect_all',
            //redirect_ios: '|redirect_ios'
        },
        link: {
            c: 'campaign_id',
            afpub_id: '|adgroup_id',
            site_id: 'site_id',
            creative_id: 'creative_id',
            deeplink: '|deeplink',
            ios_ifa: 'idfa',
            google_aid: 'gps_adid',
            device_ip: 'ip_address'
            //fallback: '|fallback',
            //redirect: '|redirect_all',
            //redirect_ios: '|redirect_ios'
        },
        impression: {}
    },
    android: {
        base_url: 'https://redirect.appmetrica.yandex.com/serve/',
        impression_url: null,
        tracker_id: 'appmetrica_tracker_id_android',
        ul_gen: function ( params ) { 
            return params.appmetrika_app_id + '.redirect.appmetrica.yandex.com/' + ( params.ul_path || '' ) 
        },
        ul: {
            appmetrica_tracking_id: 'tracker_id',
            c: 'campaign_id',
            afpub_id: '|adgroup_id',
            site_id: 'site_id',
            creative_id: 'creative_id',
            deeplink: '|deeplink',
            ios_ifa: 'idfa',
            google_aid: 'gps_adid'
            //device_ip: '',
            //device_ua: '',
            //fallback: '|fallback',
            //redirect: '|redirect_all',
            //redirect_android: '|redirect_android'
        },
        link: {
            c: 'campaign_id',
            afpub_id: '|adgroup_id',
            site_id: 'site_id',
            creative_id: 'creative_id',
            deeplink: '|deeplink',
            ios_ifa: 'idfa',
            google_aid: 'gps_adid',
            device_ip: 'ip_address'
            //fallback: '|fallback',
            //redirect: '|redirect_all',
            //redirect_android: '|redirect_android',
        },
        impression: {}
    }
}