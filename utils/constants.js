/** 
 * @file constants.js
 */
// Import dependencies
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

// Backgrounds
export const gradientBG = 'bg-gradient-to-r from-nude-1 to-nude-4';

// Containers
export const pageLayoutStyles = `px-10 py-2 md:p-10 md:py-8 md:px-32 h-screen ${gradientBG}`;

// Text
// Regular
export const heroStyles = 'font-john-mayer text-huge md:text-huge-desktop text-text-color leading-13 md:leading-none m-auto';
export const h1Styles = 'font-john-mayer text-h1 text-text-color leading-snug';
export const h2Styles = 'font-john-mayer text-h2 text-text-color leading-13';
export const h3Styles = 'font-john-mayer text-h3 text-text-color leading-13';
export const h4Styles = 'font-john-mayer text-h4 text-text-color leading-13';
export const h5Styles = 'font-john-mayer text-h5 text-text-color leading-8';
export const paragraphStyles = 'font-jost text-paragraph text-text-color leading-normal';
export const labelStyles = 'font-jost text-paragraph text-text-color leading-normal pb-2';
// Links
export const linkStyles = 'font-jost text-purple text-paragraph font-semibold cursor-pointer hover:text-link-color';
export const buttonStyles = 'font-jost bg-link-color text-white text-paragraph font-semibold cursor-pointer px-8 py-4 hover:bg-purple rounded-lg transition ease-in-out';
export const inputStyles = 'w-full font-jost placeholder-gray-600 bg-dark-brown border-0 rounded text-paragraph px-4 py-2 mb-8';
export const navigationLinkStyles = 'font-jost text-text-color text-paragraph inline px-4 hover:text-link-color';
export const mobileNavLinkStyles = 'font-jost text-text-color text-4xl inline pr-8 py-6';

// Borders
export const borderStyles = 'border-solid border-4 border-purple-700';

export const htmlRenderingOptions = {
  renderMark: {
    [MARKS.BOLD]: text => `<strong class='font-bold'>${text}</strong>`
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) => `<br/><p class='font-jost text-paragraph text-text-color leading-normal'>${next(node.content)}</p>`,
    [BLOCKS.HEADING_1]: (node, next) => `<br/> <h1 class='font-john-mayer text-h1 text-text-color leading-snug'>${next(node.content)}</h1>`,
    [BLOCKS.HEADING_2]: (node, next) => `<br/> <h2 class='font-john-mayer text-h2 text-text-color leading-13'>${next(node.content)}</h2>`,
    [BLOCKS.HEADING_3]: (node, next) => `<br/> <h3 class='font-john-mayer text-h3 text-text-color leading-13'>${next(node.content)}</h3>`,
    [BLOCKS.HEADING_4]: (node, next) => `<br/> <h4 class='font-john-mayer text-h4 text-text-color leading-13'>${next(node.content)}</h4>`,
    [BLOCKS.HEADING_5]: (node, next) => `<br/> <h5 class='font-john-mayer text-h5 text-text-color leading-13'>${next(node.content)}</h5>`,
    [BLOCKS.UL_LIST]: (node, next) => `<br/> <ul>${next(node.content)}</ul>`,
    [BLOCKS.LIST_ITEM]: (node, next) => `<li>${next(node.content)}</li>`,
    [BLOCKS.EMBEDDED_ASSET]: (node, next) => `<img src={${next(node.content)}} />`,
    [INLINES.HYPERLINK]: (node, next) => `<br/> <a class="font-john-mayer text-h2 text-purple leading-13 cursor-pointer hover:text-link-color">${next(node.content)}</a></div>`
  }
}