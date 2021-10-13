import { hf } from '/js/desktop/hf.js';
import { slider } from '/js/desktop/slider.js';
import { index } from '/js/desktop/index.js';
import { delivery_options } from '/js/desktop/delivery-options.js';
import { faq } from '/js/desktop/faq.js';
import { partnership } from '/js/desktop/partnership.js';
import { orderandpayment } from '/js/desktop/placing-an-order-and-payment.js';
import { bim } from '/js/desktop/bim.js';
import { converter } from '/js/desktop/converter.js';
import { cd } from '/js/desktop/cd.js';
import { contacts } from '/js/desktop/contacts.js';
import { contacts_map } from '/js/desktop/contacts_map.js';
import { subcd } from '/js/desktop/subcd.js';
import { subcd2 } from '/js/desktop/subcd2.js';
import { documents } from '/js/desktop/documents.js';
import { video } from '/js/desktop/video.js';
import { alsorecomended } from '/js/desktop/alsorecomended.js';
import { share } from '/js/desktop/share.js';
import { purmo } from '/js/desktop/purmo.js';
import { article } from '/js/desktop/article.js';
import { sale } from '/js/desktop/sale.js';


var Module = 
{

    WriteCookie: function (name, value, days) {

        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        else {
            expires = "";
        }

        document.cookie = name + "=" + value + expires + "; path=/;SameSite=strict;Secure;";
    },
    ReadCookie: function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
     HF: hf,
     Slider: slider,   
     Index: index,
     Delivery:delivery_options,
     FAQ:faq,
     Partnership:partnership,
     OrderAndPayment:orderandpayment,
     BIM:bim,
     Converter:converter,
     CD:cd,
     Contacts:contacts,
     ContactsMap:contacts_map,
     Subcd:subcd,
     Subcd2:subcd2,
     Documents:documents,
     Video:video,
     AlsoRecomended:alsorecomended,
     Share:share,
     Purmo:purmo,
     Article:article,
     Sale:sale
     
}
window.Module = Module;