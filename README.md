## Web2App Banner Builder

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Build%20w2a%20banners%20%&url=&hashtags=w2a,mobile)&nbsp;[![Language](http://img.shields.io/badge/language-js-brightgreen.svg?style=flat)](https://php.net)&nbsp;
## Overview ##

Web2App Banner Builder for variety of analytical solutions.

## Table of contents

* [Working with Banners](#start)
   * [Prerequisite](#prerequisite)   
      * [Activate Module](#activate)
      * [Dynamic Banner General](#dynamic-general)
      * [Dynamic Banner Design](#dynamic-design)
      * [Dynamic Banner Tracking](#dynamic-tracking)
   * [Samples](#sample)   
* [Licence](#licence)

## <a id="start"></a>Working with Banners##

### <a id="prerequisite"></a>Prerequisite ###

Before getting started with the set up make sure you have integrated attribution provider. If you are looking for the support integration ask us `consulting`@`tabee.mobi`.

-----

#### <a id="activate"></a>Activate Module ####

Activate tags by entering correct id's on `base.js` and customise your mapping for UTM tags 

---

### <a id="dynamic-general"></a>Dynamic Banner General Behaviour###

Customise links and behaviour:
```
&deeplink=tabee%25253A%25252F%25252Fhello
&idfa=000000
&link=link%25253A%25252F%25252Fhello
&ul_body=https://mua4.adj.st?ul_path=/pro
&link_type=link
&force_display=true
&hide_timeout=200
```

---

### <a id="dynamic-design"></a>Dynamic Banner Design###

Customise design via web site params (url-encoding):

```
?background_color=3ab4f0
&text_color=1a2433
&subject_text=Testing
&download_text=Click%20it
&position=bottom
&icon_border=000
&subline_text=any%20type%20of%20any%20text%20and%20colour%20with%20custom%20size%20and%20font
```

---

### <a id="dynamic-tracking"></a>Dynamic Banner Tracking###

To build dynamic banner with dynamic parameters (including UTM tags) you can use the following parameters in the url

```
?utm_source=google
&utm_medium=cpc
&utm_campaign={network}
&utm_content={creative}
&utm_term={keyword}
&cost=0.1

```

---

### <a id="sample"></a>Sample ###

#### Classic Params

`https://tabee.app/js-script/access/?campaign_id=Test%20Campaign&adgroup_id=Test%20Adgroup&background_color=3ab4f0&text_color=1a2433&subject_text=Testing%20Dynamic%20Banner&download_text=GO&deeplink=tabee%253A%252F%252Fhello&idfa=000000&link=link%253A%252F%252Fhello&position=bottom&open_delay=0&hide_timeout=600&icon_border=000&subline_text=Any%20Discription%20of%20any%20type%20of%20text&ul_body=https://mua4.adj.st&ul_path=pro&link_type=ul&force_display=true`

#### UTM tags

`https://tabee.app/js-script/access/?background_color=3ab4f0&text_color=1a2433&subject_text=Testing%20Dynamic%20Banner&download_text=GO&deeplink=tabee%253A%252F%252Fhello&link=link%253A%252F%252Fhello&position=bottom&open_delay=0&hide_timeout=600&icon_border=000&subline_text=Any%20Discription%20of%20any%20type%20of%20text&ul_body=https://mua4.adj.st&ul_path=pro&link_type=ul&force_display=true?utm_source=UTMSource&utm_medium=UTMmedium&utm_campaign=UTMNetwork&utm_content=UTMCreative&utm_term=UTMTerm&cost=0.1`

---

[Logs]:  logs/


## <a id="licence"></a>Licence and Copyright ##

The JS module is licensed under the MIT License.

Tabee Networking Limited (c) 2020 All Rights Reserved

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[![Analytics](https://ga-beacon.appspot.com/UA-125243602-3/js-banners/README.md)](https://github.com/igrigorik/ga-beacon)
