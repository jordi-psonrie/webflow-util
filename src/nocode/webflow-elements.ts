
/*
 * webflow-elements
 * Slider, Lightbox, Tabs, and more. 
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */


import { Sa5Attribute } from '../globals';
import { Sa5Lightbox } from '../webflow-elements/lightbox';
import { Sa5Button } from '../webflow-elements/button';
import { Sa5LightboxCaptionHandler } from '../webflow-lightbox/caption-handler';
import { WebflowTabs } from '../webflow-elements/tabs';
import { WebflowSlider } from '../webflow-elements/slider';


const init = () => { 

    // elements is a NodeList of all elements with the "wfu-tabs" attribute
    
    // [wfu-tab-default]

    /**
     * Tabs
     */

    // Tabs
    // Auto-register class on named items? 
    // [wfu-tabs=NAME]
    let tabElements: NodeListOf<Element> = document.querySelectorAll(`[${Sa5Attribute.ATTR_ELEMENT_TABS}]`);
    tabElements.forEach(element => {

        var tabObj = new WebflowTabs(element as HTMLElement);

    });

    /**
     * Slider
     */

    // Slider
    // Auto-register class on named items? 
    // [wfu-slider=NAME]
    let sliderElements: NodeListOf<Element> = document.querySelectorAll(`[${Sa5Attribute.ATTR_ELEMENT_SLIDER}]`);
    sliderElements.forEach(element => {

        var sliderObj = new WebflowSlider(element as HTMLElement);

    });


    /**
     * Buttons
     */

    const buttons = document.querySelectorAll(`[${Sa5Attribute.ATTR_ELEMENT_BUTTON}]`) as NodeListOf<HTMLElement>; 
    buttons.forEach((element) => { 

        // Do something with each element
        new Sa5Button(element).init();

    });

    /**
     * Init lightbox captions 
     */

    let useLightboxCaptionHandler = false;

    const elements = document.querySelectorAll(
        Sa5Attribute.getBracketed(Sa5Attribute.ATTR_LIGHTBOX_CAPTIONS) // '[wfu-lightbox-captions]'
        ) as NodeListOf<HTMLElement>; 
    useLightboxCaptionHandler = elements.length > 0;
    elements.forEach((element) => { 

        // Do something with each element
        const wfuLightbox = new Sa5Lightbox(element).init();

    });

    if(useLightboxCaptionHandler) {
        new Sa5LightboxCaptionHandler().init(); 
    }

    /**
     * Init lightbox CMS groups
     */

    let lightBoxCmsGroups = false;

    const groups = document.querySelectorAll(
        Sa5Attribute.getBracketed(Sa5Attribute.ATTR_LIGHTBOX_GROUP) // '[wfu-lightbox-group]'
        ) as NodeListOf<HTMLElement>; 
    lightBoxCmsGroups = groups.length > 0;
    groups.forEach((element) => { 

        // Get the value of the wfu-lightbox-group attribute
        let groupValue = element.getAttribute(
            Sa5Attribute.ATTR_LIGHTBOX_GROUP // "wfu-lightbox-group"
            );

        // Find all descendant script elements with the class .w-json
        let scripts = element.querySelectorAll("script.w-json");

        // For each script
        scripts.forEach((script) => {
        // Parse the JSON
        let json = JSON.parse(script.textContent);

        // Update the group value
        json.group = groupValue;

        // Convert the JSON back to a string and update the script's content
        script.textContent = JSON.stringify(json, null, 2);
        });

    });

    // Re-initialize lightbox
    // to pick up new group names
    if(lightBoxCmsGroups) {
        var Webflow = Webflow || [];
        Webflow.push(function () {
            Webflow.require("lightbox").ready();
        });
    }
    
}
  
document.addEventListener("DOMContentLoaded", init)
  




