/** 
 * @file constants.js
 */
// Import dependencies
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

// Backgrounds
export const gradientBG = 'bg-gradient-to-r from-nude-1 to-nude-4';

// Containers
export const pageLayoutStyles = `p-10 md:py-8 md:px-32 ${gradientBG}`;

// Text
// Regular
export const heroStyles = 'font-john-mayer text-huge md:text-huge-desktop text-text-color leading-13 md:leading-none m-auto';
export const h1Styles = 'font-john-mayer text-h1 text-text-color leading-snug';
export const h2Styles = 'font-john-mayer text-h2 text-text-color leading-13';
export const h3Styles = 'font-john-mayer text-h3 text-text-color leading-13';
export const h4Styles = 'font-john-mayer text-h4 text-text-color leading-13';
export const h5Styles = 'font-john-mayer text-h5 text-text-color leading-13';
export const paragraphStyles = 'font-jost text-paragraph text-text-color leading-normal';
// Links
export const linkStyles = 'font-jost text-purple text-paragraph font-semibold cursor-pointer hover:text-link-color';
export const navigationLinkStyles = 'font-jost text-text-color text-paragraph';

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
    [INLINES.HYPERLINK]: (node, next) => `<br/> <div class="text-center py-3 px-3 cursor-pointer transition duration-200 bg-yellow hover:bg-yellow-darkened mb-4"><h5 class="text-h5 font-barlow uppercase text-white">${next(node.content)}</h5></div>`
  }
}