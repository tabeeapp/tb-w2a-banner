window.__tbgen_vendor_mapping = {
    ios: {
        base_url: 'https://apps.apple.com/app/id',
        tracker_id: 'app_id_ios',
        link: {
            pt: 'tracker_id_ios',
            ct: [ 'campaign_id', 'separator_type', 'adgroup_id', 'separator_type', 'creative_id'],
            at: 'affiliate_ios',
            mt: 'mt_ios',
        },
    },
    android: {
        base_url: 'https://play.google.com/store/apps/details?id=',
        tracker_id: 'bundle_id_android',
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
            //redirect_ios: '|redirect_ios',
            //redirect_android: '|redirect_android',
        },
    }
}