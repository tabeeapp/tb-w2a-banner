window.__tbgen_vendor_mapping = {
    ios: {
        base_url: 'https://redirect.appmetrica.yandex.com/serve/',
        impression_url: function ( params ){
            return 'https://app.appsflyer.com/id' + params.af_app_id_ios
        },
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
        impression: {
            campaign: 'campaign_id',
            adgroup: 'adgroup_id',
            creative: 'creative_id',
            deep_link: '|deeplink',
            label: 'label',
            s2s: 's2s',
            ip_address: 'ip_address'
        }
    },
    android: {
        base_url: 'https://redirect.appmetrica.yandex.com/serve/',
        impression_url: function ( params ){
            return 'https://app.appsflyer.com/id' + params.af_app_id_android
        },
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
        impression: {
            campaign: 'campaign_id',
            adgroup: '|adgroup_id',
            creative: 'creative_id',
            deep_link: '|deeplink',
            label: 'label',
            s2s: 's2s',
            ip_address: 'ip_address'
        }
    }
}