
/*
 * webflow-format
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { WebflowFormat } from '../webflow-format';
import { Sa5Core, Sa5Debug } from '../webflow-core';

const init = () => { 

    new Sa5Core().init();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-demo");
    debug.debug ("Initializing");

    const webflowFormat = new WebflowFormat();

    const elements = document.querySelectorAll('[wfu-format]') as NodeListOf<HTMLElement>; 

    // Iterate over the matched elements
    elements.forEach((element) => { 

      // Do something with each element
      webflowFormat.formatField(element); 

    });

}
  
document.addEventListener("DOMContentLoaded", init)